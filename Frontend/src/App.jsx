import React from 'react'
import SPA from './Components/SPA'
import Navbar from './Components/navbar'
import Footer from './Components/footer'

const App = () => {
  return (
    <div className="app-root">
      <Navbar />
      <main>
        <SPA />
      </main>
      <Footer />
    </div>
  )
}

export default App