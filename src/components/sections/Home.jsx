

export const Home = () => {
    return <section id="home" className="min-h-screen flex items-center justify-center relative "> 
    
    <div className="text-center z-10 px-4"> 
        <h1 className="text-5xl md:text-6xl font-bold mb-5 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">
            Hi, I'm Favian P. 
        </h1> 

        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
           Hello everyone i would want to start saying thank you
           for coming and checking this portfolio project. my
           name is Favian "Fav" Perez and i'm a west-mec coding
           graduate 24-25 and my wanted/dream job is being a 
           digital forensic analyst.
        </p> 
            <div className="flex justify-center space-x-3 ">
                    <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded
                    font-medium transition relative overflow-hidden hover:-translate-y-0.5
                     hover:shadow-[0_0_15px_rgba(54,125,220,0.4)] "> 
                     View Projects
                    </a> 

                     <a href="#contact" className=" border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-large transition-all duration-200 
                     hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(45,100,200,0.2)] hover:bg-blue-500/10 "> 
                     Contact Me
                    </a>
            </div>
    </div>
    </section>;
}

