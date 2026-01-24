import { Heart, Phone, Mail, MapPin } from 'lucide-react';
import praanaLogo from '@/assets/praana-logo.jpeg';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container-custom px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-teal-light flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-xl font-display">
                  <img src={praanaLogo} alt="logo" className="rounded-sm" />
                </span>
              </div>
              <span className="font-display font-bold text-2xl">Praana</span>
            </div>
            <p className="text-background/70 mb-6 max-w-md">
              Compassionate, doctor-led home healthcare services in Sri Lanka. We provide personalized care that focuses
              on physical, mental, and social well-being.
            </p>
            <div className="flex items-center gap-2 text-secondary">
              <Heart className="w-4 h-4 fill-secondary" />
              <span className="text-sm">Caring for Your Loved Ones</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['About', 'Why Praana', 'Services', 'Our Team', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-background/70 hover:text-secondary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-secondary" />
                <a href="tel:+94707110235" className="text-background/70 hover:text-secondary transition-colors">
                  +94 707 110 235
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-secondary" />
                <a
                  href="mailto:praanacareservices@gmail.com"
                  className="text-background/70 hover:text-secondary transition-colors"
                >
                  praanacareservices@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                <span className="text-background/70">Ragama, Colombo</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">© {currentYear} Praana Healthcare. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-background/50 hover:text-secondary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/50 hover:text-secondary text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
