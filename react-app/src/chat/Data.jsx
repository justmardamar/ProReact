import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://mfdovadrjetanskmjckm.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mZG92YWRyamV0YW5za21qY2ttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ5MTgwMzksImV4cCI6MjA3MDQ5NDAzOX0.CeUa8jhPYM-ToMHH51tTe8gToMm0U1vjQEyxRhsVFLo')

if(!supabase) console.log()