CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

INSERT into investing_user (first_name, last_name, username)
    values('Amber', 'Conrad', 'amberlconrad') ON CONFLICT DO NOTHING;