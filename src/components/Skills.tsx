import { motion } from 'motion/react';
import { SKILLS } from '../constants';

const SkillCard = ({ name, level, index, icon }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    className="glass p-5 rounded-2xl group hover:bg-white/10 transition-all duration-300"
  >
    <div className="flex items-center space-x-4 mb-4">
      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center p-2 group-hover:bg-white/10 transition-all">
        <img 
          src={`https://skillicons.dev/icons?i=${icon}`} 
          alt={name} 
          className="w-full h-full object-contain"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-bold text-white/80 group-hover:text-accent transition-colors">
            {name}
          </span>
          <span className="text-xs font-mono text-white/40">{level}%</span>
        </div>
        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
            className="h-full bg-accent shadow-[0_0_10px_rgba(249,115,22,0.5)]"
          />
        </div>
      </div>
    </div>
  </motion.div>
);

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-accent uppercase tracking-[0.3em] mb-4"
          >
            My Expertise
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold"
          >
            Technical <span className="text-accent">Stack</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Frontend */}
          <div>
            <h4 className="text-xl font-bold mb-8 flex items-center space-x-3">
              <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
              <span>Frontend Development</span>
            </h4>
            <div className="grid grid-cols-1 gap-4">
              {SKILLS.frontend.map((skill, i) => (
                <SkillCard key={skill.name} name={skill.name} level={skill.level} index={i} icon={skill.icon} />
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h4 className="text-xl font-bold mb-8 flex items-center space-x-3">
              <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
              <span>Backend & APIs</span>
            </h4>
            <div className="grid grid-cols-1 gap-4">
              {SKILLS.backend.map((skill, i) => (
                <SkillCard key={skill.name} name={skill.name} level={skill.level} index={i + 6} icon={skill.icon} />
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-xl font-bold mb-8 flex items-center space-x-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
              <span>Cloud & Tools</span>
            </h4>
            <div className="grid grid-cols-1 gap-4">
              {SKILLS.tools.map((skill, i) => (
                <SkillCard key={skill.name} name={skill.name} level={skill.level} index={i + 10} icon={skill.icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
