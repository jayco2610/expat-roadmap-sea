export function isDbConfigured(): boolean {
  return Boolean(process.env.DATABASE_URL);
}
