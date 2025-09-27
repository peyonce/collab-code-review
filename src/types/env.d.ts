export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      SUPABASE_URL: string;
      SUPABASE_ANON_KEY: string;
    }
  }
}
