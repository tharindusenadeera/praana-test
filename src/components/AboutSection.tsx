import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const features = [
  "All services supervised by a team of doctors",
  "Qualified, trustworthy NVQ 3 & 4 caregivers",
  "Personalized care plans for individual needs",
  "Holistic focus on physical, mental & social well-being",
  "Flexible and transparent payment packages",
  "Regular feedback reports to guardians",
];

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-cream">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-healthcare-xl">
              <img
                src={aboutImage}
                alt="Doctor consultation"
                className="w-full h-auto object-cover"
              />
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-healthcare-lg max-w-xs"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-display font-bold text-primary text-lg">Trusted Care</p>
                  <p className="text-sm text-muted-foreground">Police Cleared Staff</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative Element */}
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-secondary/10 rounded-3xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              About Praana
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Compassionate Care, <span className="text-secondary">Right at Home</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At Praana, we believe that true healing happens best in the comfort of your own home. 
              Our doctor-led team provides personalized healthcare services that focus on the complete 
              well-being of our patients - physical, mental, and social.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
