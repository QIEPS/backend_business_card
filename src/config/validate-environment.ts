export function validateEnvironment(config: Record<string, unknown>): Record<string, unknown> {
  const databaseUrl = config.DATABASE_URL;

  if (typeof databaseUrl !== 'string' || databaseUrl.trim() === '') {
    throw new Error('DATABASE_URL is required. Add it to .env before starting the application.');
  }

  const port = Number(config.PORT ?? 3000);

  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error('PORT must be an integer between 1 and 65535.');
  }

  return { ...config, PORT: port };
}
