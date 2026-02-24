import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Customer, Home, Vendor, AboutUs } from './pages'
import { Hero } from './pages'
import { Showcase } from './pages/showcase'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
    <Hero />
    <Showcase />
    <Vendor />
    <Customer />
    <AboutUs />
  </StrictMode>,
)
