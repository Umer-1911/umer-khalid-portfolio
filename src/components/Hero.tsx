import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { PERSONAL_INFO, STATS } from '../constants';
import { useEffect, useState } from 'react';

const Counter = ({ value, suffix, label }: any) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    let totalDuration = 2000;
    let incrementTime = (totalDuration / end) > 10 ? (totalDuration / end) : 10;

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="flex flex-col items-center justify-center p-6 glass rounded-2xl">
      <div className="text-3xl font-display font-bold text-accent mb-1">
        {count}{suffix}
      </div>
      <div className="text-xs text-white/50 uppercase tracking-widest text-center">
        {STATS.find(s => s.value === value)?.label}
      </div>
    </div>
  );
};

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse delay-700" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ y: y1, opacity }}
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass border-white/10 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-xs font-medium text-white/80 uppercase tracking-wider">
              Hello, I'm
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-none mb-6">
            {PERSONAL_INFO.name}
            <span className="block text-accent">.</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/60 font-light max-w-lg mb-10 leading-relaxed">
            {PERSONAL_INFO.tagline}
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-accent text-white font-bold rounded-2xl flex items-center space-x-2 group hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all"
            >
              <span>View Projects</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {STATS.slice(0, 3).map((stat) => (
              <Counter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="relative w-[500px] h-[500px] mx-auto">
            {/* Profile Image Container */}
            <div className="absolute inset-0 rounded-[40px] overflow-hidden border border-white/10 glass rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://picsum.photos/seed/umer/800/800"
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 glass rounded-3xl -rotate-6 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">1+</div>
                <div className="text-[10px] uppercase tracking-widest opacity-50">Years Exp.</div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 glass rounded-3xl rotate-12 flex items-center justify-center p-4">
              <div className="text-center">
                <div className="text-sm font-medium opacity-70 mb-2">Top Skills</div>
                <div className="flex flex-wrap justify-center gap-1">
                  {['React', 'Azure', 'Tailwind'].map(s => (
                    <span key={s} className="text-[10px] px-2 py-0.5 bg-accent/20 text-accent rounded-full border border-accent/30">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-30"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
      </motion.div>
    </section>
  );
}
