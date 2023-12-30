import knex, { Knex } from 'knex';

class Database {
  private static instance: Database;
  private _db: Knex;

  constructor() {
    this._db = knex({
      client: 'pg',
      connection: 
      // 'postgres://postgres:docker@127.0.0.1:5432/postgres', // url postgres
      'postgres://app_server_ch_8:3khgjjq9mUj3Ls6@app-server-ch-8-db.flycast:5432/app_server_ch_8?sslmode=disable',
      searchPath: ['public'], // schema
    });
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  get db(): Knex {
    return this._db;
  }
}

export default Database.getInstance().db;
