// import { useState } from 'react'
// import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import HeroSlider from './components/HeroSlide'
import Footer from "./components/Footer"
import PromoBanners from './components/PromoBanners'
import NewsletterPopup from './components/NewsSattel'

function App() {



  return (
    <>
      <NewsletterPopup />
      <Nav />
      <HeroSlider />
      <PromoBanners />
      <Footer />
    </>
  )
}

export default App
