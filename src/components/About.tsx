import { motion } from 'motion/react';
import { PERSONAL_INFO, SERVICES } from '../constants';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-accent uppercase tracking-[0.3em] mb-4">
              About Me
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Crafting digital experiences with <span className="text-accent">passion</span> and <span className="text-accent">precision</span>.
            </h3>
            <p className="text-lg text-white/60 leading-relaxed mb-8">
              {PERSONAL_INFO.summary}
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-[#030303] overflow-hidden">
                    <img
                      src={`https://picsum.photos/seed/${i + 10}/100/100`}
                      alt="Team"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="font-bold">Trusted by clients</div>
                <div className="text-white/50">Across various industries</div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass p-8 rounded-3xl group hover:bg-white/10 transition-all duration-500"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                    <service.icon size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
