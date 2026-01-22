import { motion } from 'framer-motion';
import { Stethoscope, Calendar, UserCheck, ClipboardList, HeartPulse, Users } from 'lucide-react';

const benefits = [
  {
    icon: Stethoscope,
    title: 'Doctor-Led Care',
    description:
      'Booking and initial assessment led by experienced doctors specialized in geriatric and family medicine.',
  },
  {
    icon: Calendar,
    title: 'Monthly Doctor Visits',
    description: 'Regular doctor visits when required to ensure continuous monitoring of health progress.',
  },
  {
    icon: UserCheck,
    title: 'Specialist Referrals',
    description: 'Seamless arrangement of specialist consultations when additional expertise is needed.',
  },
  {
    icon: HeartPulse,
    title: 'Hospital Support',
    description: 'Comprehensive support during hospitalization and throughout hospital stay.',
  },
  {
    icon: ClipboardList,
    title: 'Personalized Plans',
    description: 'Custom exercise routines, meal plans, and mental wellness activities tailored to each patient.',
  },
  {
    icon: Users,
    title: 'Family Updates',
    description: 'Regular feedback reports provided to guardians to keep families informed and connected.',
  },
];

export const WhyPraanaSection = () => {
  return (
    <section id="why-praana" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            What Makes <span className="text-secondary">Praana Different</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We go beyond traditional home care with our doctor-supervised approach, ensuring the highest quality of
            medical attention for your loved ones.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 h-full card-hover border border-border/50 transition-all duration-300 group-hover:border-secondary/30">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary to-teal-light flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                  <benefit.icon className="w-7 h-7 text-secondary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
