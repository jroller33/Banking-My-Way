--drop the transactions_db;--
DROP DATABASE IF EXISTS transactions_db;
-- creates the transactions database
CREATE DATABASE transactions_db;

USE transactions_db;

CREATE TABLE budget_item (
    CREATE TABLE IF NOT EXISTS "budget_item" 
    "dates" DATE,
    "category" VARCHAR(32),
    "description" VARCHAR(128),
    "amount" INT
);