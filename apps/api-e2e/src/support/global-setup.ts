import { spawn } from 'node:child_process';

export default async function setup() {
  // Start services that that the app needs to run (e.g. database, docker-compose, etc.).
  console.log('\nSetting up...\n');

  // Start the API server.
  const server = spawn('nx', ['run', 'api:serve'], {
    shell: true,
    stdio: 'pipe',
  });

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
