import { motion } from 'framer-motion';

export default function Skills({ data }: { data: any[] }) {
  const skills = data.length > 0 ? data : [
    { name: "React" }, { name: "TypeScript" }, { name: "Node.js" }, 
    { name: "Tailwind CSS" }, { name: "Framer Motion" }
  ];

  return (
    <section className="py-32 bg-white px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-slate-900 tracking-tight"
        >
          Skills & Technologies
        </motion.h2>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="px-6 py-3 md:px-8 md:py-4 bg-slate-50 rounded-full text-lg font-medium text-slate-700 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-slate-100 hover:border-blue-200 hover:text-blue-600 transition-colors cursor-default"
            >
              {skill.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
