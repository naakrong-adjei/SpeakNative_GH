import { useAuth } from '@clerk/clerk-expo'
import { useEffect, useState } from 'react'
import { getSupabaseWithToken } from '../utils/supabase'

export const useSupabase = () => {
  const { getToken, isSignedIn } = useAuth()
  const [supabaseClient, setSupabaseClient] = useState(null)

  useEffect(() => {
    const initSupabase = async () => {
      if (isSignedIn) {
        const client = await getSupabaseWithToken(getToken)
        setSupabaseClient(client)
      } else {
        setSupabaseClient(null)
      }
    }

    initSupabase()
  }, [isSignedIn, getToken])

  return supabaseClient
}
