import "react-native-url-polyfill/auto";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_KEY;

let supabaseClientInstance = null;

export const createSupabaseClient = (getToken) => {
  if (supabaseClientInstance) return supabaseClientInstance;
  
  supabaseClientInstance = createClient(supabaseUrl, supabaseKey, {
    auth: {
      persistSession: false,
    },
    global: {
      fetch: async (url, options = {}) => {
        const token = await getToken?.();
        
        const headers = new Headers(options?.headers);
        
        if (token) {
          headers.set("Authorization", `Bearer ${token}`);
        }
        
        const { userId } = await getToken?.() || {};
        if (userId) {
          headers.set("X-User-Id", userId);
        }
        
        return fetch(url, { ...options, headers });
      },
    },
  });
  
  return supabaseClientInstance;
};

export const clearSupabaseClient = () => {
  supabaseClientInstance = null;
};