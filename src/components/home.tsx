import React, { useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Card, CardContent } from "./ui/card";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Slider } from "./ui/slider";
import {
  ArrowDown,
  Check,
  Feather,
  FileText,
  Settings,
  Share2,
  Sparkles,
  Send,
  Bot,
  User,
  Download,
  RefreshCw,
} from "lucide-react";

interface Message {
  id: string;
  type: "user" | "bot";
  content: string;
  timestamp: Date;
  format?: "poem" | "essay";
  settings?: {
    tone: string;
    style: string;
    wordCount: number;
  };
}

const HomePage = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      content:
        "Hello! I'm InspiroAI, your creative writing assistant. I can help you generate beautiful poems and essays. Just tell me what you'd like to create and I'll craft something special for you!",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [format, setFormat] = useState<"poem" | "essay">("poem");
  const [tone, setTone] = useState("casual");
  const [style, setStyle] = useState("modern");
  const [wordCount, setWordCount] = useState(250);
  const [showSettings, setShowSettings] = useState(false);

  const scrollToGenerator = () => {
    const chatSection = document.getElementById("chat-section");
    if (chatSection) {
      chatSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const generateContent = async (prompt: string) => {
    setIsGenerating(true);

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: prompt,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Simulate AI generation
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content: generateMockContent(prompt, format, tone, style),
        timestamp: new Date(),
        format,
        settings: { tone, style, wordCount },
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsGenerating(false);
    }, 2000);
  };

  const generateMockContent = (
    prompt: string,
    format: "poem" | "essay",
    tone: string,
    style: string,
  ) => {
    if (format === "poem") {
      return `Here's a ${tone} ${style} poem about "${prompt}":\n\nWhispers of ${prompt.toLowerCase()},\nDancing through the gentle breeze,\nNature's symphony unfolds.\n\nTime flows like water,\nMemories drift through my mind,\nPeaceful reflection.\n\nIn the ${tone} light of dawn,\n${prompt} awakens the soul,\nBeauty surrounds us.`;
    } else {
      return `Here's a ${tone} ${style} essay about "${prompt}":\n\nThe concept of ${prompt.toLowerCase()} has evolved significantly in our modern world. As we delve deeper into understanding this topic, we discover layers of complexity that challenge our preconceived notions.\n\nFrom a ${tone} perspective, ${prompt.toLowerCase()} represents more than just a simple concept—it embodies the very essence of human experience and creativity. The ${style} approach to examining this subject reveals fascinating insights that continue to shape our understanding.\n\nIn conclusion, ${prompt.toLowerCase()} remains a compelling subject that deserves our continued attention and study. Its impact on society and individual lives cannot be understated.`;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() && !isGenerating) {
      generateContent(inputValue.trim());
      setInputValue("");
    }
  };

  const poemStyles = ["modern", "romantic", "haiku", "sonnet", "free verse"];
  const essayStyles = [
    "academic",
    "narrative",
    "descriptive",
    "persuasive",
    "expository",
  ];
  const styles = format === "poem" ? poemStyles : essayStyles;

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
                Start Chatting
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

      {/* Chat Section */}
      <section id="chat-section" className="py-16 min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            className="text-3xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Chat with InspiroAI
          </motion.h2>

          {/* Chat Container */}
          <div className="bg-white rounded-xl shadow-lg border h-[600px] flex flex-col">
            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.type === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {message.type === "bot" && (
                        <Bot className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      )}
                      {message.type === "user" && (
                        <User className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <div className="whitespace-pre-wrap text-sm">
                          {message.content}
                        </div>
                        {message.type === "bot" && message.format && (
                          <div className="flex gap-2 mt-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => {
                                const element = document.createElement("a");
                                const file = new Blob([message.content], {
                                  type: "text/plain",
                                });
                                element.href = URL.createObjectURL(file);
                                element.download = `inspirai-${message.format}.txt`;
                                document.body.appendChild(element);
                                element.click();
                                document.body.removeChild(element);
                              }}
                            >
                              <Download className="h-3 w-3 mr-1" />
                              Download
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => {
                                if (navigator.share) {
                                  navigator
                                    .share({
                                      title: `InspiroAI ${message.format}`,
                                      text: message.content,
                                    })
                                    .catch(console.error);
                                }
                              }}
                            >
                              <Share2 className="h-3 w-3 mr-1" />
                              Share
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {isGenerating && (
                <div className="flex justify-start">
                  <div className="bg-muted rounded-lg p-3 max-w-[80%]">
                    <div className="flex items-center gap-2">
                      <Bot className="h-5 w-5" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Settings Panel */}
            {showSettings && (
              <div className="border-t p-4 bg-muted/30">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Format</Label>
                    <RadioGroup
                      value={format}
                      onValueChange={(value) =>
                        setFormat(value as "poem" | "essay")
                      }
                      className="flex space-x-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="poem" id="poem-chat" />
                        <Label
                          htmlFor="poem-chat"
                          className="cursor-pointer text-sm"
                        >
                          Poem
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="essay" id="essay-chat" />
                        <Label
                          htmlFor="essay-chat"
                          className="cursor-pointer text-sm"
                        >
                          Essay
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Tone</Label>
                    <Select value={tone} onValueChange={setTone}>
                      <SelectTrigger className="h-8">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="casual">Casual</SelectItem>
                        <SelectItem value="formal">Formal</SelectItem>
                        <SelectItem value="creative">Creative</SelectItem>
                        <SelectItem value="humorous">Humorous</SelectItem>
                        <SelectItem value="serious">Serious</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Style</Label>
                    <Select value={style} onValueChange={setStyle}>
                      <SelectTrigger className="h-8">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {styles.map((styleOption) => (
                          <SelectItem key={styleOption} value={styleOption}>
                            {styleOption.charAt(0).toUpperCase() +
                              styleOption.slice(1)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <Label className="text-sm font-medium">Word Count</Label>
                    <span className="text-xs">{wordCount} words</span>
                  </div>
                  <Slider
                    min={50}
                    max={1000}
                    step={50}
                    value={[wordCount]}
                    onValueChange={(value) => setWordCount(value[0])}
                    className="py-2"
                  />
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="border-t p-4">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => setShowSettings(!showSettings)}
                >
                  <Settings className="h-4 w-4" />
                </Button>
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your theme or topic here..."
                  className="flex-1"
                  disabled={isGenerating}
                />
                <Button
                  type="submit"
                  disabled={!inputValue.trim() || isGenerating}
                  className="bg-primary hover:bg-primary/90"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
              <div className="text-xs text-muted-foreground mt-2 text-center">
                Current settings: {format} • {tone} tone • {style} style •{" "}
                {wordCount} words
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section (Footer) */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <Button onClick={scrollToGenerator} size="lg" className="mb-12">
            Start Chatting <ArrowDown className="ml-2 h-4 w-4" />
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
