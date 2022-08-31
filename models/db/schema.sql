-- drop the transactions_db; --
DROP DATABASE IF EXISTS transactions_db;
-- creates the transactions database
CREATE DATABASE transactions_db;

USE transactions_db;

CREATE TABLE budget_item (
    dates DATE,
    category VARCHAR(32),
    descriptions VARCHAR(128),
    amount INT NOT NULL
);