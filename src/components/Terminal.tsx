import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Terminal() {
  const [history, setHistory] = useState<{cmd: string, output: React.ReactNode}[]>([
    {
      cmd: 'neofetch',
      output: (
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-4 mb-4 text-slate-300">
          <div className="font-mono whitespace-pre text-blue-500 hidden sm:block">
{`       .         
      / \\        
     /   \\       
    /     \\      
   /       \\     
  /_________\\    
   \\       /     
    \\     /      
     \\   /       
      \\ /        
       '`}
          </div>
          <div className="font-mono whitespace-pre text-blue-500 sm:hidden">
{`    /\\    
   /  \\   
  /____\\  
  \\    /  
   \\  /   
    \\/    `}
          </div>
          <div>
            <p><span className="text-blue-400 font-bold">OS:</span> FarihOS</p>
            <p><span className="text-blue-400 font-bold">Role:</span> Information Systems Student</p>
            <p><span className="text-blue-400 font-bold">Stack:</span> Python / JS / PHP</p>
            <p><span className="text-blue-400 font-bold">Projects:</span> 17</p>
            <p><span className="text-blue-400 font-bold">Coffee:</span> █████████░ 90%</p>
          </div>
        </div>
      )
    }
  ]);
  
  const [input, setInput] = useState('');
  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    let output: React.ReactNode = '';

    switch (cmd) {
      case 'help':
        output = (
          <div className="mt-2 space-y-1 text-slate-300 mb-4">
            <p>Available commands:</p>
            <p><span className="text-green-400 w-24 inline-block">neofetch</span> - System information</p>
            <p><span className="text-green-400 w-24 inline-block">projects</span> - View my selected projects</p>
            <p><span className="text-green-400 w-24 inline-block">whoami</span>   - About me</p>
            <p><span className="text-green-400 w-24 inline-block">clear</span>    - Clear terminal</p>
          </div>
        );
        break;
      case 'whoami':
        output = <p className="mt-2 text-slate-300 mb-4">I am Farih Syamsudin, a passionate developer bridging logic and creativity.</p>;
        break;
      case 'projects':
        output = (
          <div className="mt-2 space-y-3 text-slate-300 mb-4">
            <p><span className="text-blue-400 font-bold">🚀 Mangrovia</span><br/>Web-based GIS analyzing environmental parameters for mangrove planting recommendation.</p>
            <p><span className="text-blue-400 font-bold">🌐 I-CONEMCIL</span><br/>International conference submission & management system.</p>
            <p><span className="text-blue-400 font-bold">📊 Amdalnet</span><br/>Environmental management and reporting workflows platform for KLHK.</p>
            <p><span className="text-blue-400 font-bold">📦 SILOG</span><br/>Logistic Information System modules for Polri.</p>
          </div>
        );
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'neofetch':
        output = (
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-4 mb-4 text-slate-300">
            <div className="font-mono whitespace-pre text-blue-500 hidden sm:block">
{`       .         
      / \\        
     /   \\       
    /     \\      
   /       \\     
  /_________\\    
   \\       /     
    \\     /      
     \\   /       
      \\ /        
       '`}
            </div>
            <div className="font-mono whitespace-pre text-blue-500 sm:hidden">
{`    /\\    
   /  \\   
  /____\\  
  \\    /  
   \\  /   
    \\/    `}
            </div>
            <div>
              <p><span className="text-blue-400 font-bold">OS:</span> FarihOS</p>
              <p><span className="text-blue-400 font-bold">Role:</span> Information Systems Student</p>
              <p><span className="text-blue-400 font-bold">Stack:</span> Python / JS / PHP</p>
              <p><span className="text-blue-400 font-bold">Projects:</span> 17</p>
              <p><span className="text-blue-400 font-bold">Coffee:</span> █████████░ 90%</p>
            </div>
          </div>
        );
        break;
      default:
        output = <p className="mt-2 text-red-400 mb-4">Command not found: {cmd}. Type 'help' for a list of commands.</p>;
    }

    setHistory([...history, { cmd: input, output }]);
    setInput('');
  };

  return (
    <section className="py-24 bg-white px-6 md:px-12 flex justify-center">
      <div className="max-w-4xl w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full bg-[#1e1e1e] rounded-xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] border border-slate-800"
          onClick={() => inputRef.current?.focus()}
        >
          {/* Terminal Header */}
          <div className="bg-[#2d2d2d] px-4 py-3 flex items-center gap-2 border-b border-black">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="flex-grow text-center text-xs font-mono text-slate-400 mr-12 select-none">farih@portfolio:~</div>
          </div>

          {/* Terminal Body */}
          <div ref={terminalBodyRef} className="p-6 font-mono text-sm md:text-base h-[450px] overflow-y-auto" style={{ scrollbarWidth: 'thin', scrollbarColor: '#4b5563 transparent' }}>
            <div className="mb-6 text-slate-400">
              Welcome to FarihOS v1.0.0. Type 'help' to get started.
            </div>

            {history.map((h, i) => (
              <div key={i} className="mb-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-green-400 font-bold">farih@portfolio:~$</span>
                  <span className="text-white">{h.cmd}</span>
                </div>
                <div>{h.output}</div>
              </div>
            ))}

            <form onSubmit={handleCommand} className="flex items-center gap-2 mt-2 flex-wrap">
              <span className="text-green-400 font-bold">farih@portfolio:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-grow bg-transparent outline-none text-white font-mono caret-white min-w-[200px]"
                autoFocus
                spellCheck="false"
                autoComplete="off"
              />
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
