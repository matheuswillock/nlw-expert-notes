import './index.css'
import React from 'react'
import App from './App.tsx'
import {Toaster} from 'sonner'
import ReactDOM from 'react-dom/client'
import { SpeedInsights } from "@vercel/speed-insights/next";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <SpeedInsights />
    <Toaster richColors />
  </React.StrictMode>
);
