
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import ContactForm from "@/components/ContactForm";
import { Instagram, Mail, Phone, MapPin, ArrowRight, Linkedin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-heading">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-custom">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-black tracking-tight">ZG</div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-sm font-medium hover:text-interactive transition-colors">About</a>
              <a href="#work" className="text-sm font-medium hover:text-interactive transition-colors">Work</a>
              <a href="#contact" className="text-sm font-medium hover:text-interactive transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight mb-6">
              ZABDIEL<br />GUDINO
            </h1>
            <div className="text-xl sm:text-2xl font-light mb-8 max-w-2xl">
              Digital Creator & Content Specialist based in [Location]. 
              Crafting authentic stories through compelling visual content.
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button 
              size="lg" 
              className="bg-interactive hover:bg-interactive/90 text-white px-8 py-6 text-base font-medium"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-custom text-heading hover:bg-section-light px-8 py-6 text-base font-medium"
            >
              Get In Touch
            </Button>
          </div>

          {/* Featured Image */}
          <div className="aspect-[16/10] rounded-lg overflow-hidden bg-section-light">
            <img 
              src="/lovable-uploads/a5069ef8-9682-4f1c-bb7c-8172748bdbab.png" 
              alt="Zabdiel Gudino"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-section-light">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl sm:text-5xl font-black mb-8">
                About
              </h2>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  I'm a passionate digital creator dedicated to bringing innovative ideas to life through compelling content and creative solutions.
                </p>
                <p>
                  With a focus on authenticity and quality, I help brands and individuals tell their stories in meaningful ways that resonate with their audience.
                </p>
                <p>
                  Currently expanding my skills and exploring new creative frontiers in the digital landscape.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Services</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Content Creation</li>
                  <li>• Digital Strategy</li>
                  <li>• Brand Development</li>
                  <li>• Visual Storytelling</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Currently</h3>
                <p className="text-muted-foreground">
                  Expanding my creative skillset and exploring new opportunities in digital content creation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work/Portfolio Section */}
      <section id="work" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black mb-16">
            Selected Work
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Content Creation */}
            <Card className="bg-section-light border-none shadow-none hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">Content Creation</h3>
                    <ArrowRight className="w-5 h-5 text-interactive group-hover:translate-x-1 transition-transform" />
                  </div>
                  <Progress value={85} className="h-2" />
                  <p className="text-muted-foreground text-sm">
                    Creating engaging visual and written content across multiple platforms
                  </p>
                  <Badge className="bg-interactive text-white">Advanced</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Digital Strategy */}
            <Card className="bg-section-light border-none shadow-none hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">Digital Strategy</h3>
                    <ArrowRight className="w-5 h-5 text-interactive group-hover:translate-x-1 transition-transform" />
                  </div>
                  <Progress value={70} className="h-2" />
                  <p className="text-muted-foreground text-sm">
                    Developing comprehensive digital marketing and content strategies
                  </p>
                  <Badge variant="secondary" className="bg-section-medium text-heading">Intermediate</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Brand Development */}
            <Card className="bg-section-light border-none shadow-none hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">Brand Development</h3>
                    <ArrowRight className="w-5 h-5 text-interactive group-hover:translate-x-1 transition-transform" />
                  </div>
                  <Progress value={60} className="h-2" />
                  <p className="text-muted-foreground text-sm">
                    Building authentic brand identities and visual storytelling
                  </p>
                  <Badge variant="secondary" className="bg-section-medium text-heading">Growing</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-section-light">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl sm:text-5xl font-black mb-8">
                Let's Work Together
              </h2>
              <div className="space-y-6 text-lg leading-relaxed mb-8">
                <p>
                  Ready to collaborate? Let's create something amazing together.
                </p>
                <p>
                  I'm always interested in discussing new projects and creative opportunities.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-interactive" />
                  <span>hello@zabdielgudino.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Instagram className="w-5 h-5 text-interactive" />
                  <a 
                    href="https://www.instagram.com/zabdiel.gudino/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-interactive transition-colors"
                  >
                    @zabdiel.gudino
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Linkedin className="w-5 h-5 text-interactive" />
                  <a 
                    href="https://www.linkedin.com/in/zabdiel-gudino-sanchez-5928b630a/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-interactive transition-colors"
                  >
                    zabdiel-gudino-sanchez
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-custom">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-black tracking-tight mb-4 md:mb-0">ZG</div>
            <div className="text-sm text-muted-foreground">
              © 2024 Zabdiel Gudino. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
