import { Pool } from 'pg';

const connectionString = 'postgres://tiwjlplb:qXxIBgs11PpP8MrO_MfYp-VIu3U4qWKp@kesavan.db.elephantsql.com/tiwjlplb';

const db = new Pool({ connectionString });

export default db;