import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Dhanooj Ranaweera',
    location: 'Mabodala, DP',
    rating: 5,
    text: 'Praana provided exceptional care and peace of mind for our family. The doctors and caregivers treated my mother with such compassion and professionalism.',
  },
  {
    name: 'Jeewantha Dissanayake',
    location: 'Nittambuwa, GM',
    rating: 5,
    text: "The holistic approach to my father's care has been remarkable. From the personalized meal plans to the physiotherapy sessions, every detail is thoughtfully managed.",
  },
  {
    name: 'Ishara Wickramasena',
    location: 'Urapola, GM',
    rating: 5,
    text: "Having regular doctor visits and constant updates about my grandmother's health has been invaluable. We finally have peace of mind knowing she's in good hands.",
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            What Our <span className="text-secondary">Families Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from the families who have trusted Praana with the care of their loved ones.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 h-full card-hover border border-border/50 relative">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="w-12 h-12 text-secondary" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-coral text-coral" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground mb-6 leading-relaxed relative z-10">"{testimonial.text}"</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-teal-light flex items-center justify-center">
                    <span className="text-secondary-foreground font-bold text-lg">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
