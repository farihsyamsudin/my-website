import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function Insight({ data }: { data: any[] }) {
  const containerRef = useRef(null);

  const insights = data.length > 0 ? data : [
    { id: 1, title: "No insights yet", content: "Check back later for updates.", date: new Date().toISOString() }
  ];

  return (
    <section ref={containerRef} className="py-32 bg-slate-50 px-6 md:px-12 relative" id="insights">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Insights & Thoughts</h2>
          <div className="w-20 h-1.5 bg-blue-500 mt-6 rounded-full"></div>
        </motion.div>

        <div className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory hide-scrollbar">
          {insights.map((insight, index) => (
            <motion.div 
              key={insight.id}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="min-w-[320px] md:min-w-[450px] bg-white p-8 md:p-10 rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 snap-center flex-shrink-0 flex flex-col transition-shadow hover:shadow-[0_20px_50px_-15px_rgba(6,81,237,0.1)]"
            >
              <div className="text-sm text-blue-500 font-bold tracking-wider uppercase mb-4">
                {new Date(insight.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 leading-tight">{insight.title}</h3>
              <p className="text-slate-600 leading-relaxed flex-grow whitespace-pre-wrap text-lg">{insight.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
