import { useState } from 'react'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 bg-black bg-opacity-80 backdrop-filter backdrop-blur-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold neon-text">
            <span className="text-white">Портфолио</span>
          </a>
          
          {/* Меню для десктопа */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="nav-link text-white hover:text-primary transition-colors">Главная</a>
            <a href="#projects" className="nav-link text-white hover:text-primary transition-colors">Проекты</a>
            <a href="#skills" className="nav-link text-white hover:text-primary transition-colors">Навыки</a>
            <a href="#about" className="nav-link text-white hover:text-primary transition-colors">Обо мне</a>
            <a href="#contact" className="nav-link text-white hover:text-primary transition-colors">Контакты</a>
          </div>
          
          {/* Кнопка мобильного меню */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Мобильное меню */}
      <div className={`${isMobileMenuOpen ? 'fixed' : 'hidden'} md:hidden inset-0 bg-black bg-opacity-95 z-50 flex flex-col items-center justify-center space-y-8`}>
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl text-white hover:text-primary transition-colors">Главная</a>
        <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl text-white hover:text-primary transition-colors">Проекты</a>
        <a href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl text-white hover:text-primary transition-colors">Навыки</a>
        <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl text-white hover:text-primary transition-colors">Обо мне</a>
        <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl text-white hover:text-primary transition-colors">Контакты</a>
      </div>
    </nav>
  )
}

export default Navbar 