import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createClient } from '@supabase/supabase-js'
import { SessionContextProvider } from '@supabase/auth-helpers-react'

const supabase = createClient(
  // URL e API Key do Projeto
  "https://gazxutqbgrvigglhrevo.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdhenh1dHFiZ3J2aWdnbGhyZXZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgzMDkxNDcsImV4cCI6MjA0Mzg4NTE0N30.cdyciNEoRRIejlnfG_lAfamOerUsTtmnZoY-xSRPBgM"
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SessionContextProvider supabaseClient={supabase}>
      <App />
    </SessionContextProvider>
  </StrictMode>,
)
