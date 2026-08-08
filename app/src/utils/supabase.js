import "react-native-url-polyfill/auto";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Missing EXPO_PUBLIC_SUPABASE_URL or EXPO_PUBLIC_SUPABASE_KEY"
  );
}

let supabaseClientInstance = null;

export const createSupabaseClient = (tokenOrResolver) => {
  if (supabaseClientInstance) return supabaseClientInstance;

  const resolveToken = async () => {
    if (typeof tokenOrResolver === "function") {
      return await tokenOrResolver();
    }
    return tokenOrResolver;
  };

  supabaseClientInstance = createClient(supabaseUrl, supabaseKey, {
    auth: {
      persistSession: false,
    },
    global: {
      fetch: async (url, options = {}) => {
        const headers = new Headers(options?.headers);

        const token = await resolveToken();

        if (token) {
          headers.set("Authorization", `Bearer ${token}`);
        }

        return fetch(url, { ...options, headers });
      },
    },
  });

  return supabaseClientInstance;
};

/**
 * Compatibility helper used by older code paths.
 * Accepts either a raw token string or a token resolver function.
 */
export const getSupabaseWithToken = async (tokenOrResolver) => {
  const token =
    typeof tokenOrResolver === "function"
      ? await tokenOrResolver()
      : tokenOrResolver;

  if (!supabaseClientInstance) {
    createSupabaseClient(() => token);
  }

  return supabaseClientInstance;
};

export const clearSupabaseClient = () => {
  supabaseClientInstance = null;
};
