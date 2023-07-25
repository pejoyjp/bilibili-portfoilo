
import './App.css'
import Hero from './components/Hero'
import Who from './components/Who'
import Works from './components/Works'
import Contact from './components/Contact'

function App() {

  return (
    <div className="h-screen
                    snap-mandatory 
                    snap-y 
                    scroll-smooth
                    overflow-y-auto
                    text-white
                     bg-[url('/img/bg.jpeg')]
                     no-scrollbar
                    
                    "
    >
      <Hero />
      <Who />
      <Works/>
      <Contact/>
      
    </div>
  )
}

export default App
