import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { ToastContainer } from 'react-toastify';
import { QueryClient,QueryClientProvider } from 'react-query'
import App from './App.jsx'
import 'react-toastify/dist/ReactToastify.css';

import './index.css'
import UserContextProvider from './component/web/content/User.jsx';
import { CartContextProvider } from './component/web/content/cart.jsx';
import { OrderContextProvider } from './component/web/content/Order.jsx';
import Order from './component/web/cart/Order';


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
 <>
 <UserContextProvider>
   <CartContextProvider>
   <OrderContextProvider>
   <QueryClientProvider client={queryClient}>
 <ToastContainer/>
    <App />
 </QueryClientProvider>
   </OrderContextProvider>
   </CartContextProvider>
 </UserContextProvider>
 
 
 
 
 </>
    
  
)
