import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Send, MapPin, Phone, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const validate = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    setIsError(false);
    setIsSuccess(false);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS configuration is missing');
      setIsSubmitting(false); 
      setIsError(true);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formState.name,
          from_email: formState.email,
          message: formState.message,
          to_name: PERSONAL_INFO.name,
        },
        publicKey
      );

      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setIsSubmitting(false);
      setIsError(true);
      setTimeout(() => setIsError(false), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-accent uppercase tracking-[0.3em] mb-4">
              Get In Touch
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Let's build something <span className="text-accent">amazing</span> together.
            </h3>
            <p className="text-lg text-white/60 leading-relaxed mb-12 max-w-md">
              Have a project or opportunity? I'm always open to discussing new ideas and collaborations.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm font-bold text-white/40 uppercase tracking-widest mb-1">Email</div>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xl font-bold hover:text-accent transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-sm font-bold text-white/40 uppercase tracking-widest mb-1">Location</div>
                  <div className="text-xl font-bold">{PERSONAL_INFO.location}</div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-white/10">
              <div className="text-sm font-bold text-white/40 uppercase tracking-widest mb-6">Follow Me</div>
              <div className="flex items-center space-x-4">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full glass flex items-center justify-center text-white/60 hover:text-accent hover:bg-white/10 transition-all"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-8 md:p-12 rounded-[40px] border border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Name</label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => {
                      setFormState({ ...formState, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    placeholder="Full Name"
                    className={`w-full px-6 py-4 bg-white/5 border rounded-2xl focus:outline-none transition-all text-white placeholder:text-white/20 ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-accent'
                      }`}
                  />
                  {errors.name && <p className="text-red-500 text-xs ml-1">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Email</label>
                  <input
                    type="text"
                    value={formState.email}
                    onChange={(e) => {
                      setFormState({ ...formState, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder="Email"
                    className={`w-full px-6 py-4 bg-white/5 border rounded-2xl focus:outline-none transition-all text-white placeholder:text-white/20 ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-accent'
                      }`}
                  />
                  {errors.email && <p className="text-red-500 text-xs ml-1">{errors.email}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Message</label>
                <textarea
                  rows={5}
                  value={formState.message}
                  onChange={(e) => {
                    setFormState({ ...formState, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: '' });
                  }}
                  placeholder="Tell me about your project..."
                  className={`w-full px-6 py-4 bg-white/5 border rounded-2xl focus:outline-none transition-all text-white placeholder:text-white/20 resize-none ${errors.message ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-accent'
                    }`}
                />
                {errors.message && <p className="text-red-500 text-xs ml-1">{errors.message}</p>}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center space-x-3 transition-all ${isSuccess
                    ? 'bg-emerald-500 text-white'
                    : isError
                      ? 'bg-red-500 text-white'
                      : 'bg-accent text-white hover:shadow-[0_0_25px_rgba(249,115,22,0.4)]'
                  }`}
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : isSuccess ? (
                  <>
                    <span>Message Sent!</span>
                  </>
                ) : isError ? (
                  <>
                    <span>Failed to Send</span>
                    <AlertCircle size={18} />
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
