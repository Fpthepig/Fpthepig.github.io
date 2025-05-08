import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LoadingScreen } from "./components/sections/LoadingScreen";
import "./index.css";
import {Navbar} from "./components/Navbar";
function App() {
const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>{!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>} 
    {""} 
    <div classname={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-1 `}>
       <Navbar />
    </div>
    </>
  );
}

export default App
