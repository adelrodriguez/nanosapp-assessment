import express, { Router } from 'express';
import { LowdbSync } from 'lowdb';
import pick from 'lodash/pick';

export function indexRouter(db: LowdbSync<Schema>): Router {
  const router = express();

  router.get('/campaigns-summary', (req, res) => {
    const campaigns = db.get('campaigns').value();
    const fields = ['id', 'name', 'goal', 'total_budget', 'status'];

    const summary = campaigns.map(campaign => pick(campaign, fields));

    res.send(summary);
  });

  return router;
}

export { campaignsRouter } from './campaigns';
