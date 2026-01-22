import { motion } from 'framer-motion';
import { Home, Pill, Brain, Dumbbell, UtensilsCrossed, ArrowRight, HeartHandshake } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: HeartHandshake,
    title: 'Home Caregiver Support',
    description:
      'Our professional trianed caregivers will support will support you with compassionate care under clinical expertise.',
    color: 'bg-primary',
  },
  {
    icon: Home,
    title: 'Home Nursing',
    description:
      'Comprehensive nursing care in the comfort of your home like catheter care, colostomy care, NG feeding.',
    color: 'bg-secondary',
  },
  // {
  //   icon: Pill,
  //   title: 'Medication Management',
  //   description: 'Precise medication administration and monitoring to ensure proper treatment adherence.',
  //   color: 'bg-primary',
  // },
  {
    icon: Brain,
    title: 'Mental Wellness',
    description: 'Therapeutic activities and support for cognitive health and emotional well-being.',
    color: 'bg-coral',
  },
  {
    icon: Dumbbell,
    title: 'Physiotherapy',
    description: 'Personalized exercise routines by certified physiotherapists to improve mobility and strength.',
    color: 'bg-secondary',
  },
  {
    icon: UtensilsCrossed,
    title: 'Nutrition Planning',
    description: 'Custom meal plans designed by nutrition team based on individual health needs.',
    color: 'bg-primary',
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl" />
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
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Comprehensive Care <span className="text-secondary">Services</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            From medical care to holistic wellness, we provide a complete range of services to support every aspect of
            your health journey.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 h-full card-hover transition-all duration-300">
                <div
                  className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}
                >
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center text-secondary font-medium text-sm hover:gap-2 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="hero" size="xl" asChild>
            <a href="#contact">
              Explore All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
