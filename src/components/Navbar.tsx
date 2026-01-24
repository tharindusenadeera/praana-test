import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import praanaLogo from '@/assets/praana-logo.jpeg';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Why Praana', href: '#why-praana' },
  { name: 'Services', href: '#services' },
  { name: 'Our Team', href: '#team' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-card/95 backdrop-blur-md shadow-healthcare' : 'bg-transparent'
      }`}
    >
      <div className="container-custom mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a href="#" className="flex items-center gap-2" whileHover={{ scale: 1.02 }}>
            {/* <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-teal-light flex items-center justify-center">
              <span className="text-secondary-foreground font-bold text-xl font-display">P</span>
            </div>
            <span
              className={`font-display font-bold text-2xl transition-colors ${
                scrolled ? 'text-primary' : 'text-primary-foreground'
              }`}
            >
              Praana
            </span> */}
            <img src={praanaLogo} alt="logo" width={80} className="rounded-xl mt-5" />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-secondary ${
                  scrolled ? 'text-foreground' : 'text-primary-foreground/90'
                }`}
                whileHover={{ y: -2 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+94707110235"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                scrolled ? 'text-secondary' : 'text-primary-foreground'
              }`}
            >
              <Phone className="w-4 h-4" />
              +94 707 110 235
            </a>
            <Button variant="healthcare" size="lg" asChild>
              <a href="#contact">Get Started</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-primary' : 'text-primary-foreground'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card shadow-healthcare-lg"
          >
            <div className="container-custom px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-foreground font-medium py-2 hover:text-secondary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <Button variant="healthcare" className="w-full mt-4" asChild>
                <a href="#contact">Get Started</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
