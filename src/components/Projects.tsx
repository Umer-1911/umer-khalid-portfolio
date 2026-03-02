import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants';

const ProjectCard = ({ project, index }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2 }}
    className="group relative glass rounded-[32px] overflow-hidden border border-white/10 hover:border-accent/30 transition-all duration-500"
  >
    <div className="relative h-64 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] to-transparent opacity-60" />
      <div className="absolute top-4 right-4 flex space-x-2">
        {project.tech.slice(0, 2).map((t: string) => (
          <span key={t} className="px-3 py-1 glass text-[10px] font-bold uppercase tracking-wider rounded-full">
            {t}
          </span>
        ))}
      </div>
    </div>

    <div className="p-8">
      <h4 className="text-2xl font-display font-bold mb-4 group-hover:text-accent transition-colors">
        {project.title}
      </h4>
      <p className="text-white/50 text-sm leading-relaxed mb-8 line-clamp-3">
        {project.description}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(2, 4).map((t: string) => (
            <span key={t} className="text-[10px] text-white/40 uppercase tracking-widest">
              #{t.replace(/\s+/g, '')}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-accent hover:bg-white/10 transition-all"
          >
            <Github size={18} />
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white hover:shadow-[0_0_15px_rgba(249,115,22,0.4)] transition-all"
          >
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold text-accent uppercase tracking-[0.3em] mb-4"
            >
              Portfolio
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold"
            >
              Featured <span className="text-accent">Projects</span>
            </motion.h3>
          </div>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="https://github.com/Umer-1911"
            target="_blank"
            className="text-sm font-bold text-white/60 hover:text-accent transition-colors flex items-center space-x-2 group"
          >
            <span>View All Projects</span>
            <Github size={18} className="group-hover:rotate-12 transition-transform" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
          {/* Placeholder for more projects */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="glass rounded-[32px] border border-dashed border-white/20 flex flex-col items-center justify-center p-12 text-center group hover:border-accent/50 transition-all"
          >
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-white/20 group-hover:text-accent group-hover:bg-accent/10 transition-all mb-6">
              <Github size={32} />
            </div>
            <h4 className="text-xl font-bold mb-2">More on GitHub</h4>
            <p className="text-white/40 text-sm mb-6">Check out my other repositories and contributions.</p>
            <a
              href="https://github.com/Umer-1911"
              target="_blank"
              className="px-6 py-2 glass rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all"
            >
              Explore
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
