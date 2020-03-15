import express, { Router } from 'express';
import { LowdbSync } from 'lowdb';
import { getId } from '../utils';

export function campaignsRouter(db: LowdbSync<Schema>): Router {
  const router = express.Router();

  router.get('/', (req, res) => {
    const campaigns = db.get('campaigns').value();

    res.send(campaigns);
  });

  router.get('/:id', (req, res, next) => {
    try {
      const id = getId(req.params as { id: string })
      const campaign = db
        .get('campaigns')
        .find({ id })
        .value();
  
      if (!campaign) {
        throw new Error('Campaign not found');
      }
  
      res.send(campaign);
    } catch (error) {
      error.status = 404;
      next(error);
    }
  });

  router.delete('/:id', (req, res, next) => {
    try {
      const id = getId(req.params as { id: string });
    
      const result = db.get('campaigns').remove({ id }).write();
  
      if (!result.length) {
        throw new Error('Unable to delete campaign');
      }

      res.status(204).send();
    } catch (error) {
      error.status = 400;

      next(error);
    }
  });

  return router;
}