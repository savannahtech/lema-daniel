import config from 'config';
import sqlite3 from 'sqlite3';

const dbPath = config.get('dbPath') as string;
export const connection = new sqlite3.Database(dbPath);
