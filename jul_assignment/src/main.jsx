import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { PrimeReactProvider } from "primereact/api";
import { BrowserRouter } from "react-router-dom";
import "primeicons/primeicons.css";



ReactDOM.createRoot(document.getElementById("root")).render(
     <BrowserRouter>
          <React.StrictMode>
               <PrimeReactProvider>
                    <App />
               </PrimeReactProvider>
          </React.StrictMode>
     </BrowserRouter>
);
