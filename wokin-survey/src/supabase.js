import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://zntdkcmgekdfdjbcyctp.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpudGRrY21nZWtkZmRqYmN5Y3RwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM2MzQxNzIsImV4cCI6MjA4OTIxMDE3Mn0.GniK5lVxNMSta5uTks135vofOsy0u7kfO9jq8MyEino'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)