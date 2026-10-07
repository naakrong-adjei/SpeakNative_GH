import "react-native-url-polyfill/auto";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Missing EXPO_PUBLIC_SUPABASE_URL or EXPO_PUBLIC_SUPABASE_KEY"
  );
}

export const createSupabaseClient = (tokenOrResolver) => {
  const getAccessToken = async () => { 
    if (typeof tokenOrResolver === "function") { 
      return await tokenOrResolver(); 
    }
  return tokenOrResolver || null;
};

return createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false,
  },
  accessToken: getAccessToken,
  });
};

export const getSupabaseWithToken = async (tokenOrResolver) => {
  return createSupabaseClient(tokenOrResolver);
};

export const clearSupabaseClient = () => {
  // No cached Supabase client to clear.
};