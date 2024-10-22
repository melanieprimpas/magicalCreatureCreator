DROP DATABASE IF EXISTS magical_creatures_db;

CREATE DATABASE magical_creatures_db;

\c magical_creatures_db;

CREATE TABLE users (
                       id SERIAL PRIMARY KEY,
                       username VARCHAR(20) NOT NULL UNIQUE,
                       password VARCHAR(20) NOT NULL
);

CREATE TABLE habitats (
                          id SERIAL PRIMARY KEY,
                          name VARCHAR(20) NOT NULL,
                          description TEXT
);

CREATE TABLE abilities (
                           id SERIAL PRIMARY KEY,
                           name VARCHAR(40) NOT NULL,
                           description TEXT
);

CREATE TABLE creatures (
                           id SERIAL PRIMARY KEY,
                           name VARCHAR(40) NOT NULL,
                           description TEXT,
                           image_url TEXT,
                           habitats_id INTEGER REFERENCES habitats(id),
                           abilities_id INTEGER REFERENCES abilities(id)
);

CREATE TABLE user_creatures (
                                user_id INTEGER REFERENCES users(id),
                                creature_id INTEGER REFERENCES creatures(id),
                                PRIMARY KEY (user_id, creature_id)
);