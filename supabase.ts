import AsyncStorage from '@react-native-async-storage/async-storage'
import 'react-native-url-polyfill/auto';

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dthbdxcuhfeitijisuta.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0aGJkeGN1aGZlaXRpamlzdXRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA3MzgxNTcsImV4cCI6MTk4NjMxNDE1N30.wvzdmSMF-x2G3PMZQGP7XbtzaBdLpLZw_RFDxHPmK8E'
export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});