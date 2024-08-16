import { spawn } from 'node:child_process';

import { PostgreSqlContainer } from '@testcontainers/postgresql';

export default async function setup() {
  // Start services that that the app needs to run (e.g. database, docker-compose, etc.).
  console.log('\nSetting up...\n');

  // Start a PostgreSQL container.
  const psqlContainer = await new PostgreSqlContainer()
    .withExposedPorts({
      container: 5432,
      host: 5432,
    })
    .start();

  // Set the API_DATABASE_URL environment variable.
  process.env.API_DATABASE_URL = psqlContainer.getConnectionUri();

  // Run the database migrations.
  const migrate = spawn('nx', ['run', 'api:prisma-migrate'], {
    shell: true,
    stdio: 'pipe',
  });

  // Start the API server.
  const server = spawn('nx', ['run', 'api:serve'], {
    shell: true,
    stdio: 'pipe',
  });

  // Store the PostgreSQL container in `globalThis` to access it in global teardown.
  globalThis.__PSQL_CONTAINER__ = psqlContainer;

  // Store the server process in `globalThis` to access it in global teardown.
  globalThis.__SERVER_PROCESS__ = server;

  // Hint: Use `globalThis` to pass variables to global teardown.
  globalThis.__TEARDOWN_MESSAGE__ = '\nTearing down...\n';

  // Wait for the server to start.
  await new Promise<void>((resolve) => {
    server.stdout.on('data', (data) => {
      if (data.toString().includes('Application is running')) {
        resolve();
      }
    });
  });
}
