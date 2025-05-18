import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LoadingScreen } from "./components/sections/LoadingScreen";
import "./index.css";
import {Navbar} from "./components/Navbar";
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home'; 
import { About } from './components/sections/About';
import { Project } from './components/sections/Projects';
function App() {
const [isLoaded, setIsLoaded] = useState(false);
const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>{!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>} 
    {""} 
    <div classname={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100 `}>
       <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Home />
      <About />
      <Project/>
    </div>
    </> 
  );
}

export default App
