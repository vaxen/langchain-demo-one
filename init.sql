CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    org VARCHAR(50) CHECK (org IN ('corporation-a', 'corporation-b', 'corporation-c')),
    creation_date DATE NOT NULL,
    address TEXT NOT NULL
); 