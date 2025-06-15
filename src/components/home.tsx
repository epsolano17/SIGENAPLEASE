import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import GeneratorForm from "./GeneratorForm";
import OutputDisplay from "./OutputDisplay";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {
  ArrowDown,
  Check,
  Feather,
  FileText,
  Settings,
  Share2,
  Sparkles,
} from "lucide-react";

const HomePage = () => {
  const scrollToGenerator = () => {
    const generatorSection = document.getElementById("generator-section");
    if (generatorSection) {
      generatorSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="container mx-auto py-4 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Feather className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold">InspiroAI</h1>
        </div>
        <nav>
          <ul className="flex gap-6">
            <li>
              <a href="#about" className="hover:text-primary transition-colors">
                About
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="hover:text-primary transition-colors"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#how-it-works"
                className="hover:text-primary transition-colors"
              >
                How It Works
              </a>
            </li>
            <li>
              <Button onClick={scrollToGenerator} variant="outline" size="sm">
                Get Started
              </Button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <HeroSection onGetStartedClick={scrollToGenerator} />

      {/* About Us Section */}
      <section id="about" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Us
          </motion.h2>
          <motion.p
            className="text-lg max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            At InspiroAI, we believe that creativity and technology go hand in
            hand. Our AI-powered poem and essay generators allow you to input
            any theme or topic, and in an instant, receive beautifully crafted
            content that meets your needs. Whether you're looking for
            inspiration, help with writing, or just want to explore your
            creative side, InspiroAI is here to make the process easy, quick,
            and enjoyable. Our goal is to make high-quality, personalized
            writing accessible to everyone. We harness the power of artificial
            intelligence to help people create meaningful, engaging poems and
            essays with ease.
          </motion.p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Features
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Sparkles className="h-8 w-8 text-primary" />}
              title="Personalized Generation"
              description="Simply provide a theme or topic, and our AI will craft a poem or essay just for you. Whether you're seeking a creative poem or an informative essay, we ensure it's tailored to your exact specifications."
              delay={0.1}
            />

            <FeatureCard
              icon={<Settings className="h-8 w-8 text-primary" />}
              title="Easy-to-Use Interface"
              description="No technical expertise required. Input your theme, click generate, and watch your poem or essay come to life instantly. It's that easy!"
              delay={0.2}
            />

            <FeatureCard
              icon={<FileText className="h-8 w-8 text-primary" />}
              title="Style and Tone Customization"
              description="Customize the tone, style, and format of your content to match your needs. Whether it's academic, casual, poetic, or professional, we've got you covered."
              delay={0.3}
            />

            <FeatureCard
              icon={<Check className="h-8 w-8 text-primary" />}
              title="Instant Preview and Adjustments"
              description="Before finalizing, preview your content. Make adjustments, regenerate sections, or refine the text as necessary. We give you full creative control."
              delay={0.4}
            />

            <FeatureCard
              icon={<Share2 className="h-8 w-8 text-primary" />}
              title="Download and Share"
              description="Once you're satisfied with your creation, easily download your poem or essay as a .txt or PDF. Share it instantly with others, or save it for later use."
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How It Works
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            <StepItem
              number={1}
              title="Enter a theme or topic of your choice"
              description="Describe the theme or idea that you want to explore in your poem or essay."
              delay={0.1}
            />

            <StepItem
              number={2}
              title="Choose whether you want a poem or essay"
              description="Select the format that fits your needs—poem or essay."
              delay={0.2}
            />

            <StepItem
              number={3}
              title="Select your style and tone preferences"
              description="Whether you need a formal essay or a creative poem, you can set the tone and style to your preference."
              delay={0.3}
            />

            <StepItem
              number={4}
              title="Click 'Generate' and let AI work its magic"
              description="In just a few seconds, your personalized poem or essay will be ready."
              delay={0.4}
            />

            <StepItem
              number={5}
              title="Review, adjust, and finalize your creation"
              description="Read through, tweak, or regenerate parts of your poem or essay as needed."
              delay={0.5}
            />

            <StepItem
              number={6}
              title="Download or share your creation"
              description="Once satisfied, download your poem as a .txt or PDF, and your essay as a text or PDF file. Share them easily or save them for future use."
              delay={0.6}
              isLast={true}
            />
          </div>
        </div>
      </section>

      {/* Generator Section */}
      <section id="generator-section" className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Create Your Poem or Essay Now!
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            <GeneratorForm />
            <OutputDisplay />
          </div>
        </div>
      </section>

      {/* Call-to-Action Section (Footer) */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <Button onClick={scrollToGenerator} size="lg" className="mb-12">
            Create My Poem or Essay <ArrowDown className="ml-2 h-4 w-4" />
          </Button>

          <Separator className="max-w-md mx-auto mb-8" />

          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="hover:text-primary transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitter"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2025 InspiroAI. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({
  icon,
  title,
  description,
  delay = 0,
}: FeatureCardProps) => {
  return (
    <motion.div
      className="bg-card p-6 rounded-lg shadow-sm border"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
};

interface StepItemProps {
  number: number;
  title: string;
  description: string;
  delay?: number;
  isLast?: boolean;
}

const StepItem = ({
  number,
  title,
  description,
  delay = 0,
  isLast = false,
}: StepItemProps) => {
  return (
    <div className="relative">
      <motion.div
        className="flex gap-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
      >
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
            {number}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-1">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </motion.div>

      {!isLast && (
        <div className="absolute left-5 top-10 w-[1px] h-12 bg-border"></div>
      )}
    </div>
  );
};

export default HomePage;
