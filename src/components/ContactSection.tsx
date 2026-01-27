import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import Axios from 'axios';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    value: '+94 707 110 235',
    href: 'tel:+94707110235',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'praanacareservices@gmail.com',
    href: 'mailto:praanacareservices@gmail.com',
  },
];

const locations = [
  {
    city: 'Ragama',
    address: '0000 Sri Lanka',
  },
  {
    city: 'Ragama',
    address: '4000 Sri Lanka',
  },
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbx8t_15OdrasfsQEuWtgd1GrIadrlha6R-9CeRrCHrHkRUzfePfWOpvQ-0flXCCtP8fog/exec',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
          body: new URLSearchParams({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            message: formData.message,
          }).toString(),
        },
      );

      if (!response.ok) {
        setMessage('Submission failed.');
      } else {
        setMessage('Form submitted successfully!');
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
      }
    } catch (error) {
      setMessage('Error submitting form.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log('name: ', name, 'value: ', value);

    setFormData({ ...formData, [name]: value });
  };

  return (
    <section id="contact" className="section-padding bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Contact Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Get In <span className="text-secondary">Touch</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Ready to provide compassionate care for your loved ones? Reach out to us today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-8">Contact Information</h3>

            {/* Contact Methods */}
            <div className="space-y-6 mb-10">
              {contactInfo.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="flex items-center gap-4 p-4 bg-primary-foreground/10 rounded-xl backdrop-blur-sm hover:bg-primary-foreground/20 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="text-primary-foreground/70 text-sm">{item.title}</p>
                    <p className="text-primary-foreground font-medium group-hover:text-secondary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Locations */}
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-6">Our Locations</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {locations.map((location) => (
                <div key={location.city} className="p-4 bg-primary-foreground/10 rounded-xl backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-primary-foreground font-medium">{location.city}</p>
                      <p className="text-primary-foreground/70 text-sm">{location.address}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card rounded-3xl p-8 shadow-healthcare-xl">
              <h3 className="font-display text-2xl font-bold text-primary mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                    <Input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="bg-muted border-border focus:border-secondary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                    <Input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="bg-muted border-border focus:border-secondary"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-muted border-border focus:border-secondary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <Textarea
                    placeholder="Tell us about your care needs..."
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-muted border-border focus:border-secondary resize-none"
                  />
                </div>
                <Button type="submit" variant="healthcare" size="lg" className="w-full">
                  Send Message
                  <Send className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
