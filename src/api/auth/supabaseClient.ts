import jwt from 'jsonwebtoken';
import axios from 'axios';

import { createClient, SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '../../database.types.js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  throw new Error('Missing SUPABASE_URL');
}
if (!supabaseAnonKey) {
  throw new Error('Missing SUPABASE_ANON_KEY');
}

export const supabaseClient: SupabaseClient<Database> = createClient<Database>(
  supabaseUrl,
  supabaseAnonKey
);

export default supabaseClient;
interface PublicKey {
  kid: string;
  public_key: string;
}

export const verifyJwt = async (token: string) => {
  try {
    // Fetch Supabase's public keys
    const { data: publicKeys } = await axios.get<PublicKey[]>(
      'https://oykxtaviehqfmfwcnifj.supabase.co/auth/v1/keys'
    );

    // Decode JWT header to get 'kid'
    const decodedHeader = jwt.decode(token, { complete: true })?.header;
    if (!decodedHeader) {
      throw new Error('Invalid JWT');
    }

    // Find corresponding public key
    const publicKey = publicKeys.find(
      (key: PublicKey) => key.kid === decodedHeader.kid
    )?.public_key;

    if (!publicKey) {
      throw new Error('Public key not found');
    }

    // Verify JWT
    const decoded = jwt.verify(token, publicKey);
    console.log('JWT is valid:', decoded);
    return decoded;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('JWT verification failed:', error.message);
    } else {
      console.error('An unknown error occurred during JWT verification');
    }
  }
};
