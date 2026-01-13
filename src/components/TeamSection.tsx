import { motion } from "framer-motion";
import { GraduationCap, Stethoscope, Heart, Activity, UtensilsCrossed } from "lucide-react";
import teamImage from "@/assets/team-image.jpg";

const teamMembers = [
  {
    icon: Stethoscope,
    title: "Geriatric Specialists",
    description: "Doctors specialized in Geriatric and Family Medicine",
  },
  {
    icon: Heart,
    title: "Nursing Officers",
    description: "Special Grade Nursing Officers with extensive experience",
  },
  {
    icon: GraduationCap,
    title: "Qualified Caregivers",
    description: "NVQ Level 3 & 4 qualified caregivers, police cleared",
  },
  {
    icon: UtensilsCrossed,
    title: "Nutritionist",
    description: "Medical Nutritionist for personalized meal planning",
  },
  {
    icon: Activity,
    title: "Rehabilitation Team",
    description: "Physiotherapist and Occupational Therapist",
  },
];

export const TeamSection = () => {
  return (
    <section id="team" className="section-padding bg-cream">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Our Team
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Meet Our <span className="text-secondary">Expert Team</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Our multidisciplinary team of healthcare professionals brings together expertise 
              from various medical fields to provide comprehensive, holistic care for every patient.
            </p>

            {/* Team List */}
            <div className="space-y-4">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-healthcare transition-all hover:shadow-healthcare-lg"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <member.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-primary">{member.title}</h4>
                    <p className="text-sm text-muted-foreground">{member.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-healthcare-xl">
              <img
                src={teamImage}
                alt="Healthcare team"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-secondary/10 rounded-3xl -z-10" />
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-coral/10 rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
