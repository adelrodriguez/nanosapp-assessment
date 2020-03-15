import express from 'express';
import path from 'path';
import fs from 'fs';
import logger from 'morgan';
import low from 'lowdb';
import FileAsync from 'lowdb/adapters/FileAsync';
import { getId } from './utils';
import pick from 'lodash/pick';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

async function init(): Promise<void> {
  // Create the file that will be used as a database
  await fs.promises.writeFile('db.json', '');

  // Setup the database
  const adapter = new FileAsync<Schema>('db.json');
  const db = await low(adapter);

  // Load data into the database
  const data = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'data/data.json'), 'utf8')
  );
  // Load campaigns as default data on the db
  db.defaults({ campaigns: data }).write();

  // ROUTING
  app.get('/campaigns', (req, res) => {
    const campaigns = db.get('campaigns').value();

    res.send(campaigns);
  });

  app.get('/campaigns-summary', (req, res) => {
    const campaigns = db.get('campaigns').value();
    const fields = ['id', 'name', 'goal', 'total_budget', 'status'];

    const summary = campaigns.map(campaign => pick(campaign, fields));

    res.send(summary);
  });

  app.get('/campaigns/:id', (req, res) => {
    const id = getId(req);

    const campaign = db
      .get('campaigns')
      .find({ id })
      .value();

    res.send(campaign);
  });

  app.delete('/campaigns/:id', (req, res) => {
    const id = getId(req);
    
    db.get('campaigns').remove({ id }).write();

    res.status(200).send();
  });

  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
}

init();
