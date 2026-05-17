import { useAuth } from '@clerk/clerk-expo'
import { getSupabaseWithToken } from '../utils/supabase'
import { useEffect, useState } from 'react'

export const useSupabase = () => {
  const { getToken, isSignedIn } = useAuth()
  const [supabaseClient, setSupabaseClient] = useState(null)

  useEffect(() => {
    const initSupabase = async () => {
      if (isSignedIn) {
        const token = await getToken()
        const client = await getSupabaseWithToken(token)
        setSupabaseClient(client)
      } else {
        setSupabaseClient(null)
      }
    }
    
    initSupabase()
  }, [isSignedIn, getToken])

  return supabaseClient
}