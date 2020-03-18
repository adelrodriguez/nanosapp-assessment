import fs from 'fs';
import low, { LowdbSync } from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import data from '../data/data.json';

// Sets up the lowdb database
export function setupDatabase(): LowdbSync<Schema> {
  // Create the file that will be used as a database
  fs.writeFileSync('db.json', '');

  // Setup the database
  const adapter = new FileSync<Schema>('db.json');
  const db = low(adapter);

  // Load campaigns as default data on the db
  db.defaults({ campaigns: data }).write();

  console.log('Database is ready!');

  return db;
}