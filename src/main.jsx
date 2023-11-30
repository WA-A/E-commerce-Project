import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { ToastContainer } from 'react-toastify';
import { QueryClient,QueryClientProvider } from 'react-query'
import App from './App.jsx'
import 'react-toastify/dist/ReactToastify.css';

import './index.css'



const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
 <>
 <QueryClientProvider client={queryClient}>
 <ToastContainer/>
    <App />
 </QueryClientProvider>
 
 
 
 </>
    
  
)
