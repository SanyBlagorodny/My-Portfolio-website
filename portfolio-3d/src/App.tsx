import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default App
