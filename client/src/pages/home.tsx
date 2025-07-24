import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Star, 
  ArrowUp, 
  CheckCircle, 
  Clock, 
  DollarSign, 
  MessageCircle,
  Zap,
  BarChart3,
  BookOpen,
  Users,
  Mail,
  ChevronDown
} from 'lucide-react';
import { 
  FaTelegram, 
  FaWhatsapp, 
  FaYoutube, 
  FaLinkedin, 
  FaBlogger, 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaDiscord 
} from 'react-icons/fa';
import { FloatingElements } from '@/components/ui/floating-elements';
import { AnimatedCounter } from '@/components/ui/animated-counter';

const LoadingOverlay = ({ isVisible }: { isVisible: boolean }) => {
  if (!isVisible) return null;
  
  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-center text-white">
        <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-xl font-semibold">Loading ProKai...</p>
      </div>
    </motion.div>
  );
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <motion.button
      className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full shadow-2xl z-40 flex items-center justify-center"
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <ArrowUp className="w-6 h-6" />
    </motion.button>
  );
};

const AnimatedSection = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, delay }
        },
        hidden: {
          opacity: 0,
          y: 50
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const TypewriterText = ({ text, delay = 0 }: { text: string, delay?: number }) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }, delay);

    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearTimeout(timer);
      clearInterval(cursorTimer);
    };
  }, [text, delay]);

  return (
    <span>
      {displayText}
      {showCursor && <span className="border-r-4 border-white animate-pulse">|</span>}
    </span>
  );
};

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  const problems = [
    {
      icon: "😴",
      title: "Boring Study Methods",
      description: "Traditional books and courses are outdated, making learning feel like a chore rather than an exciting journey."
    },
    {
      icon: "💸",
      title: "Expensive Coaching",
      description: "Spending thousands on coaching classes that don't guarantee success, draining both money and motivation."
    },
    {
      icon: "⏰",
      title: "Time Wastage",
      description: "Hours spent on irrelevant content and complex setups that could be used for actual learning and practice."
    },
    {
      icon: "🤔",
      title: "No Real-Time Help",
      description: "Stuck on problems with no immediate explanations, leading to confusion and knowledge gaps."
    },
    {
      icon: "📚",
      title: "Generic Content",
      description: "One-size-fits-all approaches that don't adapt to your specific exam needs and learning style."
    },
    {
      icon: "😵",
      title: "Information Overload",
      description: "Too much scattered information without clear focus on what actually matters for your exam."
    }
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Smart Prompt Scripts",
      description: "Think of them as magic commands - copy-paste these into ChatGPT, Gemini, or Grok, and instantly get personalized study material, MCQs, and explanations tailored to your exam."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Real-Time Learning",
      description: "Every wrong answer becomes a learning opportunity - AI explains step-by-step where you went wrong and how to get it right, like having a world-class teacher 24/7."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Data-Driven Success",
      description: "Built on 10 years of exam analysis - every script is designed to focus on high-weightage topics that actually appear in your exam."
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Save Money",
      description: "Skip expensive courses and coaching classes. Just ₹250 one-time vs thousands spent on traditional methods. No hidden fees, no monthly subscriptions."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Save Time",
      description: "No lengthy registrations or course browsing. 3 clicks, 2 seconds to start studying. Focus on learning, not on setup complexity."
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Personal AI Tutor",
      description: "Get instant, personalized explanations for every question. AI understands your specific learning style and adapts accordingly."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Works Anywhere",
      description: "Use ProKai with any AI platform - ChatGPT, Gemini, Claude, or even offline. No app downloads, no platform restrictions, just pure flexibility."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Proven Success",
      description: "Join 10,000+ successful students who cleared SSC, UPSC, CBSE, and Banking exams using ProKai's AI-powered study methodology."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Smart Study System",
      description: "No more random studying. Get AI-curated content that focuses only on high-weightage topics that actually appear in your specific exam."
    }
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "SSC CGL Qualified",
      rating: 5,
      comment: "ProKai helped me clear SSC CGL in just 3 months! The AI scripts are like magic - I got exactly what I needed for my exam.",
      avatar: ""
    },
    {
      name: "Priya Mehta",
      role: "UPSC Aspirant",
      rating: 5,
      comment: "Saved ₹50,000 on coaching fees! ProKai's real-time explanations are better than any teacher I've had.",
      avatar: ""
    },
    {
      name: "Amit Kumar",
      role: "CBSE Class 12",
      rating: 5,
      comment: "The 3-click setup is no joke! I was studying within seconds. My CBSE scores improved by 40%!",
      avatar: ""
    }
  ];

  const faqs = [
    {
      question: "How does ProKai work exactly?",
      answer: "ProKai provides you with carefully crafted AI prompt scripts. You simply copy these prompts, paste them into any AI tool (ChatGPT, Gemini, Grok), and get instant, personalized study material tailored to your specific exam needs."
    },
    {
      question: "Which exams does ProKai support?",
      answer: "ProKai supports all major competitive exams including SSC (CGL, CHSL, MTS), UPSC (Prelims, Mains), CBSE (Class 10-12), Banking exams (SBI, IBPS), Railway exams, and many more. The scripts are designed to be adaptable to any exam format."
    },
    {
      question: "Is there any monthly subscription fee?",
      answer: "No! ProKai costs only ₹250 one-time payment. No hidden fees, no monthly subscriptions, no additional charges. Once you pay, you get lifetime access to all current and future AI prompt scripts."
    },
    {
      question: "Do I need any technical knowledge to use ProKai?",
      answer: "Absolutely not! If you can copy and paste text, you can use ProKai. The process is as simple as: 1) Copy the prompt script 2) Paste it in ChatGPT/Gemini 3) Get your personalized study material. That's it!"
    }
  ];

  return (
    <div className="min-h-screen relative">
      <LoadingOverlay isVisible={loading} />
      <FloatingElements />
      <ScrollToTop />

      {/* Header */}
      <header className="relative gradient-primary text-white text-center py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyIiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC4xIi8+PGNpcmNsZSBjeD0iODAiIGN5PSI0MCIgcj0iMyIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuMSIvPjxjaXJjbGUgY3g9IjQwIiBjeT0iODAiIHI9IjIiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjEiLz48Y2lyY2xlIGN4PSI2MCIgY3k9IjEwIiByPSIxLjUiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjEiLz48Y2lyY2xlIGN4PSIxMCIgY3k9IjYwIiByPSIyLjUiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] animate-float"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="flex flex-col items-center justify-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-black mb-6 text-white drop-shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, type: "spring" }}
            >
              ProKai
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              AI-Powered Study Revolution
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4, duration: 0.8 }}
          >
            <p className="text-xl md:text-2xl font-bold bg-glass rounded-3xl px-8 py-6 backdrop-blur-xl border-2 border-white/20 shadow-2xl hover:transform hover:-translate-y-2 transition-all duration-300">
              Clear Any Exam in 3 Clicks • ₹250 Only • No Books, No Courses! • No Online Teachers, No MCQ Papers • ProKai Covers All Things Like Your Personal Alibaba Genie!
            </p>
          </motion.div>
        </div>
      </header>

      {/* Hero Section */}
      <AnimatedSection className="py-24 text-center bg-slate-900 relative">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-pink-500 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, type: "spring" }}
          >
            Transform Your Exam Preparation Forever
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Join thousands of students who've revolutionized their study methods with AI-powered prompt scripts and real-time explanations.
          </motion.p>

          {/* Animated Stats */}
          <div className="flex flex-wrap justify-center gap-20 mt-16">
            <AnimatedSection delay={0.8}>
              <Card className="bg-glass border-pink-500/20 hover:scale-105 transition-transform duration-300">
                <CardContent className="text-center p-6">
                  <div className="text-5xl font-black text-pink-500 mb-2">
                    <AnimatedCounter target={10000} />
                  </div>
                  <div className="text-lg font-semibold text-gray-300">Happy Students</div>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection delay={1.1}>
              <Card className="bg-glass border-pink-500/20 hover:scale-105 transition-transform duration-300">
                <CardContent className="text-center p-6">
                  <div className="text-5xl font-black text-pink-500 mb-2">
                    <AnimatedCounter target={95} />%
                  </div>
                  <div className="text-lg font-semibold text-gray-300">Success Rate</div>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection delay={1.4}>
              <Card className="bg-glass border-pink-500/20 hover:scale-105 transition-transform duration-300">
                <CardContent className="text-center p-6">
                  <div className="text-5xl font-black text-pink-500 mb-2">
                    ₹<AnimatedCounter target={250} />
                  </div>
                  <div className="text-lg font-semibold text-gray-300">Only</div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      <div className="container mx-auto px-4">
        {/* Problems Section */}
        <AnimatedSection className="py-20 bg-glass-dark rounded-3xl my-16">
          <h2 className="text-4xl md:text-5xl font-bold text-pink-500 text-center mb-16">
            Why Students Struggle? ProKai Has The Only Solutions!
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                className="magnetic-card gradient-secondary p-8 rounded-2xl border-2 border-pink-500/20 hover:border-pink-500/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-4">{problem.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-white">{problem.title}</h3>
                <p className="text-gray-200">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Comparison Table */}
        <AnimatedSection className="py-20 bg-glass-dark rounded-3xl my-16">
          <h2 className="text-4xl md:text-5xl font-bold text-pink-500 text-center mb-16">
            ProKai vs All Traditional Platforms
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-glass rounded-2xl overflow-hidden backdrop-blur-lg">
              <thead>
                <tr className="gradient-primary">
                  <th className="px-6 py-4 text-left font-bold">Feature</th>
                  <th className="px-6 py-4 text-center font-bold">ProKai</th>
                  <th className="px-6 py-4 text-center font-bold">Others (Testbook, BYJU'S, Unacademy)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10 hover:bg-pink-500/10 transition-colors duration-300">
                  <td className="px-6 py-4 font-semibold">Setup Time</td>
                  <td className="px-6 py-4 text-center bg-pink-500/20 font-semibold">3 clicks, 2 seconds ⚡</td>
                  <td className="px-6 py-4 text-center text-gray-300">Hours of registration & course selection</td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-pink-500/10 transition-colors duration-300">
                  <td className="px-6 py-4 font-semibold">Content Quality</td>
                  <td className="px-6 py-4 text-center bg-pink-500/20 font-semibold">10-year exam analysis, 100% relevant</td>
                  <td className="px-6 py-4 text-center text-gray-300">Generic content, often irrelevant</td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-pink-500/10 transition-colors duration-300">
                  <td className="px-6 py-4 font-semibold">Explanations</td>
                  <td className="px-6 py-4 text-center bg-pink-500/20 font-semibold">Real-time AI, step-by-step</td>
                  <td className="px-6 py-4 text-center text-gray-300">Pre-recorded, limited coverage</td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-pink-500/10 transition-colors duration-300">
                  <td className="px-6 py-4 font-semibold">Cost</td>
                  <td className="px-6 py-4 text-center bg-pink-500/20 font-semibold">₹250 one-time payment</td>
                  <td className="px-6 py-4 text-center text-gray-300">₹1000+ monthly subscriptions</td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-pink-500/10 transition-colors duration-300">
                  <td className="px-6 py-4 font-semibold">Accessibility</td>
                  <td className="px-6 py-4 text-center bg-pink-500/20 font-semibold">Works with any AI + offline PDFs</td>
                  <td className="px-6 py-4 text-center text-gray-300">Platform-locked, internet dependent</td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-pink-500/10 transition-colors duration-300">
                  <td className="px-6 py-4 font-semibold">Personalization</td>
                  <td className="px-6 py-4 text-center bg-pink-500/20 font-semibold">AI adapts to your learning style</td>
                  <td className="px-6 py-4 text-center text-gray-300">One-size-fits-all approach</td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-pink-500/10 transition-colors duration-300">
                  <td className="px-6 py-4 font-semibold">Support</td>
                  <td className="px-6 py-4 text-center bg-pink-500/20 font-semibold">24/7 AI + prokai.team@gmail.com</td>
                  <td className="px-6 py-4 text-center text-gray-300">Limited email support</td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-pink-500/10 transition-colors duration-300">
                  <td className="px-6 py-4 font-semibold">Practice Questions</td>
                  <td className="px-6 py-4 text-center bg-pink-500/20 font-semibold">Unlimited MCQs with instant explanations</td>
                  <td className="px-6 py-4 text-center text-gray-300">Limited question banks, slow feedback</td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-pink-500/10 transition-colors duration-300">
                  <td className="px-6 py-4 font-semibold">Subject Coverage</td>
                  <td className="px-6 py-4 text-center bg-pink-500/20 font-semibold">All subjects according to your exam</td>
                  <td className="px-6 py-4 text-center text-gray-300">Generic subjects, not exam-specific</td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-pink-500/10 transition-colors duration-300">
                  <td className="px-6 py-4 font-semibold">Study Commands</td>
                  <td className="px-6 py-4 text-center bg-pink-500/20 font-semibold">Magical ProKai commands for exam prep</td>
                  <td className="px-6 py-4 text-center text-gray-300">No specialized study tools or commands</td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-pink-500/10 transition-colors duration-300">
                  <td className="px-6 py-4 font-semibold">Learning Speed</td>
                  <td className="px-6 py-4 text-center bg-pink-500/20 font-semibold">3x faster learning with AI shortcuts</td>
                  <td className="px-6 py-4 text-center text-gray-300">Slow, linear progression</td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-pink-500/10 transition-colors duration-300">
                  <td className="px-6 py-4 font-semibold">Doubt Resolution</td>
                  <td className="px-6 py-4 text-center bg-pink-500/20 font-semibold">Instant AI clarification on any topic</td>
                  <td className="px-6 py-4 text-center text-gray-300">Wait for next class or forum replies</td>
                </tr>

                <tr className="border-b border-white/10 hover:bg-pink-500/10 transition-colors duration-300">
                  <td className="px-6 py-4 font-semibold">Mobile Compatibility</td>
                  <td className="px-6 py-4 text-center bg-pink-500/20 font-semibold">Works on any device with AI access</td>
                  <td className="px-6 py-4 text-center text-gray-300">Heavy apps, device specific</td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-pink-500/10 transition-colors duration-300">
                  <td className="px-6 py-4 font-semibold">Study Material Updates</td>
                  <td className="px-6 py-4 text-center bg-pink-500/20 font-semibold">Real-time updates via AI knowledge</td>
                  <td className="px-6 py-4 text-center text-gray-300">Outdated content, slow updates</td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-pink-500/10 transition-colors duration-300">
                  <td className="px-6 py-4 font-semibold">Exam Strategy</td>
                  <td className="px-6 py-4 text-center bg-pink-500/20 font-semibold">AI creates personalized exam strategies</td>
                  <td className="px-6 py-4 text-center text-gray-300">Generic tips and tricks</td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-pink-500/10 transition-colors duration-300">
                  <td className="px-6 py-4 font-semibold">Revision Efficiency</td>
                  <td className="px-6 py-4 text-center bg-pink-500/20 font-semibold">Smart revision with AI-generated summaries</td>
                  <td className="px-6 py-4 text-center text-gray-300">Manual note-making and revision</td>
                </tr>
              </tbody>
            </table>
          </div>
        </AnimatedSection>

        {/* Features Section */}
        <AnimatedSection className="py-20 bg-glass-dark rounded-3xl my-16">
          <div className="mx-auto mb-12 rounded-2xl shadow-2xl w-full max-w-2xl h-64 bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center animate-pulse-glow">
            <div className="text-white text-4xl font-bold">AI Study Magic</div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-pink-500 text-center mb-16">
            How ProKai Works: The Magic Behind AI Study Scripts
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="magnetic-card bg-glass rounded-2xl p-8 text-center border border-pink-500/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-pink-500 mb-6 flex justify-center animate-pulse-glow">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: feature.description }} />
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Benefits Section */}
        <AnimatedSection className="py-20 bg-glass-dark rounded-3xl my-16">
          <h2 className="text-4xl md:text-5xl font-bold text-pink-500 text-center mb-16">
            Why ProKai is Your Smart Choice
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="magnetic-card gradient-secondary p-8 rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-white mb-6 flex justify-start">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{benefit.title}</h3>
                <p className="text-gray-200 leading-relaxed" dangerouslySetInnerHTML={{ __html: benefit.description }} />
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Testimonials Section */}
        <AnimatedSection className="py-20 bg-glass-dark rounded-3xl my-16">
          <h2 className="text-4xl md:text-5xl font-bold text-pink-500 text-center mb-16">
            What Students Say About ProKai
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="magnetic-card bg-glass rounded-2xl p-8 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 rounded-full mx-auto mb-4 bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center border-2 border-pink-500">
                  <span className="text-white font-bold text-xl">{testimonial.name.charAt(0)}</span>
                </div>
                <div className="text-center">
                  <p className="text-gray-300 mb-4 italic">"{testimonial.comment}"</p>
                  <div className="flex justify-center mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="font-semibold text-pink-500">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* FAQ Section */}
        <AnimatedSection className="py-20 bg-glass-dark rounded-3xl my-16">
          <h2 className="text-4xl md:text-5xl font-bold text-pink-500 text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-glass rounded-xl border border-pink-500/20 overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold text-lg hover:bg-pink-500/10 transition-colors duration-300 [&[data-state=open]]:bg-pink-500/10">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-300 border-t border-white/10">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="py-20 text-center">
          <div className="mx-auto mb-12 rounded-2xl shadow-2xl w-full max-w-3xl h-64 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 flex items-center justify-center">
            <div className="text-white text-5xl font-bold">Join ProKai Community</div>
          </div>
          
          <div className="gradient-primary rounded-3xl p-12 mx-auto max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Ready to Transform Your Study Life?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join 10,000+ students who've already revolutionized their exam preparation with ProKai's AI-powered study scripts.
            </p>
            
            <div className="bg-white/20 rounded-2xl p-6 mb-8 max-w-md mx-auto backdrop-blur-lg">
              <div className="text-3xl font-black text-white mb-2">₹250</div>
              <div className="text-white/80">One-time payment • Lifetime access</div>
            </div>
            
            <Button className="bg-white text-pink-500 font-bold text-xl px-12 py-4 rounded-2xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              Get ProKai Now - Start in 3 Clicks!
            </Button>
            
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-white/80">
              {[
                { icon: <CheckCircle className="w-5 h-5" />, text: "Instant Access" },
                { icon: <CheckCircle className="w-5 h-5" />, text: "No Monthly Fees" },
                { icon: <CheckCircle className="w-5 h-5" />, text: "24/7 Support" },
                { icon: <CheckCircle className="w-5 h-5" />, text: "All Exams Covered" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-green-400">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection className="py-16 bg-glass-dark rounded-3xl mt-8 mb-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-pink-500 mb-8">Get In Touch</h2>
          <p className="text-xl text-gray-300 mb-8">Have questions? We're here to help you succeed!</p>
          <div className="flex flex-wrap justify-center gap-8">
            <a 
              href="mailto:prokai.team@gmail.com" 
              className="flex items-center gap-3 bg-glass rounded-xl px-6 py-4 hover:bg-pink-500/20 transition-all duration-300 border border-pink-500/20 hover:scale-105"
            >
              <Mail className="text-pink-500 text-xl" />
              <span className="font-semibold">prokai.team@gmail.com</span>
            </a>
            <div className="flex items-center gap-3 bg-glass rounded-xl px-6 py-4 border border-pink-500/20">
              <Clock className="text-pink-500 text-xl" />
              <span className="font-semibold">24/7 AI Support</span>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-black border-t border-pink-500/30 mt-8 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          {/* Social Media Links */}
          <div className="text-center mb-8 mt-8">
            <motion.h3 
              className="text-white text-xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Follow Us
            </motion.h3>
            <div className="flex justify-center gap-4 flex-wrap">
              {[
                { icon: <FaTelegram className="w-5 h-5" />, link: "https://t.me/ProkaiOfficial", name: "Telegram", color: "hover:bg-blue-500" },
                { icon: <FaWhatsapp className="w-5 h-5" />, link: "https://whatsapp.com/channel/0029Vb5oZSqKmCPRBBis0316", name: "WhatsApp", color: "hover:bg-green-500" },
                { icon: <FaYoutube className="w-5 h-5" />, link: "https://www.youtube.com/@ProkaiOfficial", name: "YouTube", color: "hover:bg-red-500" },
                { icon: <FaLinkedin className="w-5 h-5" />, link: "https://www.linkedin.com/in/prokaiofficial", name: "LinkedIn", color: "hover:bg-blue-600" },
                { icon: <FaBlogger className="w-5 h-5" />, link: "https://prokaiofficial.blogspot.com/", name: "Blogger", color: "hover:bg-orange-500" },
                { icon: <FaFacebook className="w-5 h-5" />, link: "https://www.facebook.com/share/16ph3vMPVX/", name: "Facebook", color: "hover:bg-blue-700" },
                { icon: <FaTwitter className="w-5 h-5" />, link: "https://x.com/ProkaiOfficial?t=kfyCnNGSq4ZiRGBBCxHjGw&s=09", name: "X", color: "hover:bg-gray-600" },
                { icon: <FaInstagram className="w-5 h-5" />, link: "https://www.instagram.com/prokaiofficial?igsh=MTI5cWc5NTlqaGc0Zg==", name: "Instagram", color: "hover:bg-pink-500" },
                { icon: <FaDiscord className="w-5 h-5" />, link: "https://discord.gg/QWs6Yw9v", name: "Discord", color: "hover:bg-purple-500" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-gray-800/70 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-300 hover:text-white ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg border border-gray-700/50 hover:border-pink-500/30`}
                  title={social.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Info Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {[
              { icon: <Zap className="w-5 h-5" />, text: "AI Prompt Scripts" },
              { icon: <BookOpen className="w-5 h-5" />, text: "All Major Exams" },
              { icon: <Clock className="w-5 h-5" />, text: "24/7 Support" },
              { icon: <DollarSign className="w-5 h-5" />, text: "₹250 Only" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="text-center p-4 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/30 hover:border-pink-500/30 transition-all duration-300 hover:bg-gray-800/50"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-pink-500 mb-2 flex justify-center">{item.icon}</div>
                <div className="text-sm text-gray-300 font-medium">{item.text}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer Bottom */}
          <motion.div 
            className="border-t border-gray-700/50 pt-6 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm">
              <span className="text-gray-400">© 2024 ProKai. All rights reserved.</span>
              <motion.div 
                className="flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-full px-4 py-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-yellow-400 font-medium">4.9/5 Rating</span>
              </motion.div>
              <span className="text-gray-400">Made in India 🇮🇳</span>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
