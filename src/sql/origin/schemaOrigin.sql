CREATE TABLE origin (
    id SERIAL UNIQUE,
    name VARCHAR(128) NOT NULL PRIMARY KEY,
    distance REAL NOT NULL
);