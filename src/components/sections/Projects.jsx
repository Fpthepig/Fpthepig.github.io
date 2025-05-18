import { RevealOnScroll } from "../RevealOnScroll"
export const Project = () => {
    return <section id="projects"
    className="min-h-screen flex items-center justify-center py-20"
    > 
    <RevealOnScroll>
 <div className="max-w-5xl mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r
    from-blue-500 to-green-400 bg-cilp-text text-transparent text-center">
        Featured Projects
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap2">
 <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-[0_2px_8px_rgba(59,130,246,0.5)] transition">
  <h3 className="text-xl font-bold mb-2 "> FBLA Project Game </h3>
  <p className="text-grey-400 mb-4">
    this is a project that two other of my coding partners from west-mec and i 
    made this game for fbla project and after that overtime we had put some 
    upgrades into it by impleting tailwindcss and movement on the game. this 
    game also has keys that you close the menu and bring menu back.
  
  </p>
  <div className="flex flex-wrap gap-2 mb-4">
   {["Html", "TailWindCSS" , "Javascript"].map ((tech, key) => (
       <span index={index} 
       className="bg-blue-500/20 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/40 hover:shadow-[0_2px_8px_rgba(89,160,246,0.1)] transition-all"
       >
          {tech}  
       </span> 
   ))}
  </div>
  <div className="flex justify-between items-center">
    <a href="https://fpthepig.github.io/FBLA-Tailwind-Project/" ></a>
  </div>
 </div>
    </div>
 </div>

    </RevealOnScroll>
        
    </section>
}