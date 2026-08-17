import { Code, Globe, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero({ data }: { data: any }) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0B0F19] text-white p-6 md:p-12 relative overflow-hidden">
      
      {/* Animated Aurora / Gradient Mesh Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.3, 0.6, 0.3],
            x: [0, 150, 0],
            y: [0, -100, 0],
            rotate: [0, 90, 0]
          }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600 rounded-full mix-blend-screen filter blur-[130px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1], 
            opacity: [0.2, 0.5, 0.2],
            x: [0, -150, 0],
            y: [0, 150, 0],
            rotate: [0, -90, 0]
          }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
          className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] bg-purple-600 rounded-full mix-blend-screen filter blur-[140px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1], 
            opacity: [0.3, 0.7, 0.3],
            x: [0, 100, -50, 0],
            y: [0, 50, 0],
            rotate: [0, 180, 0]
          }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
          className="absolute bottom-[-20%] left-[20%] w-[70%] h-[70%] bg-cyan-600 rounded-full mix-blend-screen filter blur-[160px]"
        />
        
        {/* Subtle noise texture overlay to make it look premium */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-tight"
        >
          {data.title || "Hi, I'm Farih Syamsudin"}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light"
        >
          {data.subtitle || "Software Engineering Specialist | Laravel • Vue.js • PostgreSQL"}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          className="flex justify-center gap-6 pt-10"
        >
          <motion.a 
            whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.2)", borderColor: "rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/farihsyamsudin" 
            target="_blank"
            rel="noreferrer"
            className="p-4 bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-full text-white transition-all shadow-lg hover:shadow-blue-500/20"
          >
            <Code size={24} />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.1, backgroundColor: "rgba(168, 85, 247, 0.2)", borderColor: "rgba(168, 85, 247, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/farih-syamsudin" 
            target="_blank"
            rel="noreferrer"
            className="p-4 bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-full text-white transition-all shadow-lg hover:shadow-purple-500/20"
          >
            <Globe size={24} />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.1, backgroundColor: "rgba(6, 182, 212, 0.2)", borderColor: "rgba(6, 182, 212, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            href="mailto:arih2017arih@gmail.com" 
            className="p-4 bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-full text-white transition-all shadow-lg hover:shadow-cyan-500/20"
          >
            <Mail size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
