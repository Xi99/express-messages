-- If you are using postgres, add your schema to this file
-- From the command line run psql -U dbuser -d dbname -a -f filename.sql
--  to create your database/ columns/ and some seed data
-- alternatively, open psql and copy and paste the code below
-- once you've made your schema

DROP DATABASE IF EXISTS messages;

CREATE DATABASE messages;

\c messages;

CREATE TABLE messages (
    message_id SERIAL,
    message_name TEXT,
    message_text TEXT
);

-- Seed your data with a collection of insert statements
INSERT INTO messages (message_name, message_text) VALUES ('John', 'Where am I?');

