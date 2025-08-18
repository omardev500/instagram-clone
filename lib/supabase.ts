import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qxmrmwtkbazvrokrnfte.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4bXJtd3RrYmF6dnJva3JuZnRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU0OTU1MjYsImV4cCI6MjA3MTA3MTUyNn0.uBFSwfN9IsvUnjJt9E2uBDdsnLwl5GniuPvMC4t0iW0'

export const supabase = createClient(supabaseUrl, supabaseKey)
