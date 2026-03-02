import { motion } from 'motion/react';
import { ArrowUp, Github, Linkedin, Instagram, Facebook, Heart } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-12">
          <div className="text-center md:text-left">
            <motion.a
              href="#home"
              className="text-3xl font-display font-bold tracking-tighter mb-4 block"
            >
              {PERSONAL_INFO.name}
              <span className="text-accent">.</span>
            </motion.a>
            <p className="text-white/40 text-sm max-w-xs leading-relaxed">
              Junior Frontend Developer building modern, responsive, and high-performance web applications.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex items-center space-x-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/40 hover:text-accent hover:bg-white/10 transition-all"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-white/60 hover:text-accent hover:bg-white/10 transition-all"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-bold text-white/20 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
          <div className="flex items-center space-x-2">
            <span>Made with</span>
            <Heart size={12} className="text-accent fill-accent" />
            <span>using React & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
