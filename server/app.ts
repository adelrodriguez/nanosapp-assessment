import express, { Request, Response, NextFunction } from 'express';
import logger from 'morgan';
import path from 'path';
import createError from 'http-errors';
import { setupDatabase } from './scripts';
import { indexRouter, campaignsRouter } from './routes'

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Sets up the Lowdb database
const db = setupDatabase();

app.use('/', indexRouter(db));
app.use('/campaigns', campaignsRouter(db));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Error handler
app.use((error: HttpException, req: Request, res: Response, next: NextFunction) => {
  // Send the error message
  res.status(error.status || 500).send(error.message);
});

export default app;
