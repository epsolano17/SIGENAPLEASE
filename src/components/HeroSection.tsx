import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

interface HeroSectionProps {
  onGetStartedClick?: () => void;
}

const HeroSection = ({
  onGetStartedClick = () => {
    const generatorSection = document.getElementById("generator-section");
    if (generatorSection) {
      generatorSection.scrollIntoView({ behavior: "smooth" });
    }
  },
}: HeroSectionProps) => {
  return (
    <section className="relative w-full bg-gradient-to-b from-background to-background/90 py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Unleash Your Creativity with AI-Powered Poems and Essays
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Provide a theme, and let AI craft a unique, engaging poem or essay
              tailored just for you!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button size="lg" onClick={onGetStartedClick} className="group">
                Get Started
                <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Button>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              {/* Poem Example Card */}
              <div className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-border">
                <h3 className="text-xl font-semibold mb-3">Poem</h3>
                <div className="prose prose-sm">
                  <p className="italic">
                    Whispers of autumn,
                    <br />
                    Golden leaves dance in the breeze,
                    <br />
                    Nature's symphony.
                  </p>
                  <p className="mt-2">
                    Time flows like water,
                    <br />
                    Memories drift through my mind,
                    <br />
                    Peaceful reflection.
                  </p>
                </div>
              </div>

              {/* Essay Example Card */}
              <div className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-border">
                <h3 className="text-xl font-semibold mb-3">Essay</h3>
                <div className="prose prose-sm">
                  <p>
                    The concept of sustainability has evolved significantly over
                    the past decade. As global awareness of environmental
                    challenges grows, societies are increasingly adopting
                    sustainable practices...
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -z-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
              style={{ top: "-20%", right: "10%" }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute -z-10 w-72 h-72 rounded-full bg-secondary/10 blur-3xl"
              style={{ bottom: "-10%", left: "20%" }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
