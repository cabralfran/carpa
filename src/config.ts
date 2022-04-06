import 'dotenv/config';

export function getEnv(key: string, fallback?: string): string {
  const value = process.env[key];

  if (value) {
    return value;
  } else if (fallback !== undefined) {
    return fallback;
  } else {
    throw new Error(`Required ENV key ${key} not set`);
  }
}
