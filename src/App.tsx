import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Terminal from './components/Terminal';
import Insight from './components/Insight';
import ParallaxCollage from './components/ParallaxCollage';
import { Education, Experience, Awards } from './components/Resume';
import CustomCursor from './components/CustomCursor';
import { motion, useScroll } from 'framer-motion';
import Lenis from 'lenis';

function App() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    // Initialize buttery smooth scrolling
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Fetch API Data
    fetch('/.netlify/functions/google')
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch data', err);
        setLoading(false);
      });

    return () => lenis.destroy();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-12 h-12 border-4 border-blue-200 border-t-blue-500 rounded-full"
        />
      </div>
    );
  }

  // Use default fallback data from CV if data is missing or loading
  const heroData = data?.Hero?.[0] || { 
    title: "Hi, I'm Farih Syamsudin", 
    subtitle: "Software Engineering Specialist | Laravel • Vue.js • PostgreSQL" 
  };
  
  const skillsData = data?.Skills?.length > 0 ? data.Skills : [
    { name: "PHP / Laravel" }, { name: "JavaScript / TypeScript" }, 
    { name: "Vue.js" }, { name: "React" }, { name: "PostgreSQL / SQL" }, 
    { name: "Python" }, { name: "Docker" }, { name: "Cybersecurity / Pentesting" }
  ];
  
  const insightsData = data?.Insights || [];
  
  const eduData = data?.Education?.length > 0 ? data.Education : [
    { 
      id: 1, 
      period: "2021 - 2026", 
      title: "Bachelor of Science in Marine Information System", 
      organization: "Universitas Pendidikan Indonesia (UPI)", 
      description: "CGPA: 3.82/4.00. Developed Mangrovia (GIS) and I-CONEMCIL. Thesis on Automatic Identification Systems for Illegal Transhipment Detection." 
    }
  ];
  
  const expData = data?.Experience?.length > 0 ? data.Experience : [
    { 
      id: 1, 
      period: "Aug 2024 - Present", 
      title: "Software Engineering Specialist", 
      organization: "PT IlmuKomputerCom Braindevs Sistema", 
      description: "Developed and maintained enterprise web applications using Laravel, Vue.js, PostgreSQL, and REST API. Built platforms for Ministry of Environment and Forestry (KLHK), BNSP, Polri, and BPK." 
    },
    { 
      id: 2, 
      period: "Nov 2022 - May 2024", 
      title: "Teaching and Research Project Assistant", 
      organization: "Laboratorium of Marine Information System UPI", 
      description: "Assisted in Web Programming and OOP practicum. Conducted research on Information Extraction from AIS Data. Contributed to Fish Stock Graph Learning app." 
    },
    { 
      id: 3, 
      period: "Feb 2023 - Feb 2024", 
      title: "Multimedia Specialist", 
      organization: "Public Relations & Communications Division", 
      description: "Developed and maintained the organization's official website using WordPress." 
    }
  ];
  
  const awardsData = data?.Awards?.length > 0 ? data.Awards : [
    { 
      id: 1, 
      title: "Cybersecurity Recognition", 
      year: "Jan 2025", 
      issuer: "Sidoarjo Regency Government" 
    },
    { 
      id: 2, 
      title: "1st Winner at Pekan Kompetisi SIK", 
      year: "Nov 2024", 
      issuer: "Pekan Kompetisi SIK" 
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden relative cursor-none">
      <CustomCursor />
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 origin-left z-[9999]"
        style={{ scaleX: scrollYProgress }}
      />

      <Hero data={heroData} />
      <Skills data={skillsData} />
      <Terminal />
      <Insight data={insightsData} />
      <ParallaxCollage />
      <Experience data={expData} />
      <Education data={eduData} />
      <Awards data={awardsData} />
      
      <footer className="py-8 text-center text-slate-500 border-t border-slate-100 bg-slate-50">
        <p>&copy; {new Date().getFullYear()} Farih Syamsudin. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
