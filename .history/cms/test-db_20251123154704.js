#!/usr/bin/env node
const { Client } = require('pg');

console.log('=== Database Connection Test ===');
console.log('DATABASE_URL:', process.env.DATABASE_URL ? process.env.DATABASE_URL.replace(/:[^:@]+@/, ':***@') : 'NOT SET');
console.log('DATABASE_CLIENT:', process.env.DATABASE_CLIENT);

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: false,
  connectionTimeoutMillis: 10000,
});

console.log('\nAttempting to connect...');

client.connect()
  .then(() => {
    console.log('✅ Connection successful!');
    return client.query('SELECT NOW() as time, version()');
  })
  .then((res) => {
    console.log('✅ Query successful!');
    console.log('Time:', res.rows[0].time);
    console.log('Version:', res.rows[0].version);
    client.end();
    process.exit(0);
  })
  .catch((err) => {
    console.error('❌ Connection failed!');
    console.error('Error:', err.message);
    console.error('Code:', err.code);
    console.error('Stack:', err.stack);
    process.exit(1);
  });
