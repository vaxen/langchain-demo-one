const { Pool } = require('pg');
const faker = require('faker');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'userdb',
  password: 'postgres',
  port: 5432,
});

const corporations = ['corporation-a', 'corporation-b', 'corporation-c'];

async function generateRandomUsers(count) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    for (let i = 0; i < count; i++) {
      const name = faker.name.findName();
      const org = corporations[Math.floor(Math.random() * corporations.length)];
      const creationDate = faker.date.past(5);
      const address = faker.address.streetAddress();

      await client.query(
        'INSERT INTO users (name, org, creation_date, address) VALUES ($1, $2, $3, $4)',
        [name, org, creationDate, address]
      );
    }

    await client.query('COMMIT');
    console.log(`Successfully inserted ${count} random users`);
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('Error generating data:', err);
  } finally {
    client.release();
  }
}

// Generate 100 random users
generateRandomUsers(100)
  .then(() => pool.end())
  .catch(err => {
    console.error('Error:', err);
    process.exit(1);
  }); 