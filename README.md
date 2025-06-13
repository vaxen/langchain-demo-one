# LangChain Demo One

A demonstration project using LangChain.js to showcase various AI/LLM capabilities.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run the project:
```bash
npm start
```

## Project Structure

- `src/` - Source code directory
- `index.js` - Main entry point 

# User Database with Random Data

This project sets up a PostgreSQL database with a users table and provides functionality to generate random user data using database migrations.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the PostgreSQL database:
```bash
docker-compose up -d
```

3. Generate random data using a migration:
```bash
npm run migration:run
```
This will insert 100 random users into the database.

### Revert and Re-run the Migration
If you want to remove the generated users and re-run the migration:
```bash
npm run migration:revert
npm run migration:run
```

## How to Start the Database and Add Records

### Start the PostgreSQL Database
Make sure Docker is running on your system. Then, in your project directory, run:

```bash
docker-compose up -d
```
This will start a PostgreSQL database in a Docker container, accessible at:
- Host: localhost
- Port: 5432
- Database: userdb
- Username: postgres
- Password: postgres

### Verify the Data
To check that the data was added, you can run the following command:

```bash
docker exec -it postgres_db psql -U postgres -d userdb -c "SELECT COUNT(*) FROM users;"
```
Or to see a few sample records:
```bash
docker exec -it postgres_db psql -U postgres -d userdb -c "SELECT * FROM users LIMIT 5;"
```

## Database Structure

The `users` table has the following columns:
- id (SERIAL PRIMARY KEY)
- name (VARCHAR)
- org (VARCHAR) - Possible values: corporation-a, corporation-b, corporation-c
- creation_date (DATE)
- address (TEXT)

## Connection Details

- Host: localhost
- Port: 5432
- Database: userdb
- Username: postgres
- Password: postgres 