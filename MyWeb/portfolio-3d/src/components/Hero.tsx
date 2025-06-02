const Hero = () => {
  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Привет, меня зовут <span className="text-primary">Александр Селиверстов</span>
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 text-primary-dark">Frontend-разработчик & UI-энтузиаст</h2>
            <p className="text-lg md:text-xl mb-8 max-w-lg opacity-90">
              Я создаю красивые, интерактивные веб-приложения с использованием современных технологий.
            </p>
            <div className="flex space-x-4">
              <a href="#projects" className="btn-primary">
                Мои работы
              </a>
              <a href="#contact" className="btn-secondary">
                Связаться
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="glass-card p-8 rounded-2xl max-w-md">
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="tech-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-12 h-12" />
                </div>
                <div className="tech-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-12 h-12" />
                </div>
                <div className="tech-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind CSS" className="w-12 h-12" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 