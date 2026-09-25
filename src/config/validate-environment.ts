export function validateEnvironment(config: Record<string, unknown>): Record<string, unknown> {
  const databaseUrl = config.DATABASE_URL;

  if (typeof databaseUrl !== 'string' || databaseUrl.trim() === '') {
    throw new Error('DATABASE_URL is required. Add it to .env before starting the application.');
  }

  return config;
}
