import React from 'react';
import { GraduationCap, Briefcase, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

export function Education({ data }: { data: any[] }) {
  if (!data || data.length === 0) return null;
  
  return (
    <section className="py-24 bg-white px-6 md:px-12 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl">
            <GraduationCap size={32} />
          </div>
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Education</h2>
        </motion.div>
        
        <div className="space-y-12 border-l-2 border-slate-100 ml-6 pl-10 relative">
          {data.map((item, i) => (
            <motion.div 
              key={item.id || i}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group"
            >
              <div className="absolute -left-[49px] top-1 w-6 h-6 rounded-full bg-white border-4 border-slate-200 group-hover:border-blue-500 transition-colors shadow-sm"></div>
              <div className="text-sm text-blue-500 font-bold tracking-wider mb-2 uppercase">{item.period}</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-1">{item.title}</h3>
              <p className="text-lg text-slate-700 font-medium mb-3">{item.organization}</p>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience({ data }: { data: any[] }) {
  if (!data || data.length === 0) return null;

  return (
    <section className="py-24 bg-slate-50 px-6 md:px-12 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl">
            <Briefcase size={32} />
          </div>
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Experience</h2>
        </motion.div>
        
        <div className="space-y-12 border-l-2 border-slate-200 ml-6 pl-10 relative">
          {data.map((item, i) => (
            <motion.div 
              key={item.id || i}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group"
            >
              <div className="absolute -left-[49px] top-1 w-6 h-6 rounded-full bg-white border-4 border-slate-200 group-hover:border-blue-500 transition-colors shadow-sm"></div>
              <div className="text-sm text-blue-500 font-bold tracking-wider mb-2 uppercase">{item.period}</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-1">{item.title}</h3>
              <p className="text-lg text-slate-700 font-medium mb-3">{item.organization}</p>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Awards({ data }: { data: any[] }) {
  if (!data || data.length === 0) return null;

  return (
    <section className="py-24 bg-white px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16 justify-center"
        >
          <div className="p-4 bg-yellow-50 text-yellow-500 rounded-2xl">
            <Award size={32} />
          </div>
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Awards & Recognition</h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {data.map((item, i) => (
            <motion.div 
              key={item.id || i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 border border-slate-100 rounded-3xl hover:border-blue-200 transition-all bg-slate-50 hover:bg-white hover:shadow-xl"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-slate-800 pr-4">{item.title}</h3>
                <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm font-bold">{item.year}</span>
              </div>
              <p className="text-slate-600 text-lg">{item.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
