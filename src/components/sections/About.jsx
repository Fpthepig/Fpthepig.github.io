export const About = () => {
  const frontendSkills = ["React", "HTML&CSS", "TailwindCSS"];
  const backendSkills = ["MongoDB", "Node.js", "JavaScript"];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About me
        </h2>

        <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all mb-6">
          <p className="text-gray-300">
            The Fragrance of Memory {/* or your intended phrase */}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Frontend */}
          <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {frontendSkills.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,210,0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {backendSkills.map((tech, index) => (
                <span
                  key={index}
                  className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(34,197,94,0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
               <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all "> 
                     <h3> <strong> Education </strong></h3>
                     <ul>
                      <li>
                        
                        <strong>
                        
                       - High School Diploma - Verrado High School (2024-2025)
                       
                        </strong>

                     
                        
                        </li> 
            <br></br>
                        <li>
<strong>
                  -  Information Technology Specialist in HTML5 Application Development and JavaScript
                       </strong>
                        </li> 
<br></br>
                         <li>
<strong>
                 2 Year West-Mec Coding graduate
                       </strong>
                        </li>

                     </ul>
               </div>
               <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
               <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                 <div className="space-y-4 text-gray-300">
                  <h4>
                   None 
                  </h4> 

                  <p>
                  I don't got any work experience but in the 
                  upcoming years after getting my bachalors 
                  degree i will get a job in Digital Forensic
                  analysis. 
                  </p>
                 </div>
               </div>
        </div>
      </div>
    </section>
  );
};