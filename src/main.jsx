import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Saludo from './Saludo'
import AboutUs from './about'
import Contact from './Contact'
import Products from './Products'
import Clients from './Clients'
import Servicestwo from './Servicestwo'
import Footer from './Footer'
import Testimonials from './Testimonials'
import Plans from './Plans'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Saludo />
    <AboutUs />  
    <Servicestwo />

    <Plans />
    <Products />
    <Clients />
    <Contact />
    <Testimonials />
    <Footer />
  </React.StrictMode>,
)
