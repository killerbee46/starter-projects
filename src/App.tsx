import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import MainRoutes from './routes/MainRoutes'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
    <MainRoutes />
  </QueryClientProvider>
  )
}

export default App
