import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import '@mantine/charts/styles.css';
import  './i18n.js'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const NODE = import.meta.env.VITE_NODE 


async function enableMocking() {
  if (NODE === 'development') {
    return
  }
  const { worker } = await import('./mocks/browser')
  return worker.start({
    onUnhandledRequest: 'bypass', 
      serviceWorker: {
    url: '/BugBountySyria/mockServiceWorker.js'
  }
  })
}

enableMocking()

const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
  <MantineProvider>
    <App />
  </MantineProvider>
  </QueryClientProvider>, 
)
