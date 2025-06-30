
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ContactForm from "@/components/ContactForm";
import PixelatedTrees from "@/components/PixelatedTrees";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - White background */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-12">
            <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black text-heading tracking-tighter mb-4">
              ZG
            </h1>
            <div className="w-24 h-1 bg-interactive mx-auto mb-6"></div>
          </div>
          
          {/* Main Content */}
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-heading leading-tight">
              ZABDIEL GUDINO
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Digital Creator & Content Specialist
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-8">
              <Button 
                size="lg" 
                className="bg-interactive hover:bg-interactive/90 text-white px-8 py-6 text-lg font-semibold"
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-custom text-heading hover:bg-section-light px-8 py-6 text-lg font-semibold"
              >
                View Work
              </Button>
            </div>
          </div>
        </div>
        
        <PixelatedTrees />
      </section>

      {/* About Section - Light lavender background */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-section-light">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Profile Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-section-medium shadow-2xl">
                <img 
                  src="/lovable-uploads/a5069ef8-9682-4f1c-bb7c-8172748bdbab.png" 
                  alt="Zabdiel Gudino"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* About Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl sm:text-6xl font-black text-heading mb-6">
                  About Me
                </h2>
                <div className="w-16 h-1 bg-interactive mb-8"></div>
              </div>
              
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
          </div>
        </div>
      </section>

      {/* Skills Section - Light purple background */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-section-medium">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-black text-heading mb-6">
              Skills & Expertise
            </h2>
            <div className="w-16 h-1 bg-interactive mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Continuously developing my craft across various digital disciplines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Content Creation */}
            <Card className="bg-white border-custom shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-heading">Content Creation</h3>
                    <Badge className="bg-interactive text-white">Advanced</Badge>
                  </div>
                  <Progress value={85} className="h-3" />
                  <p className="text-muted-foreground">
                    Creating engaging visual and written content across multiple platforms
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Digital Strategy */}
            <Card className="bg-white border-custom shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-heading">Digital Strategy</h3>
                    <Badge variant="secondary" className="bg-section-light text-heading">Intermediate</Badge>
                  </div>
                  <Progress value={70} className="h-3" />
                  <p className="text-muted-foreground">
                    Developing comprehensive digital marketing and content strategies
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Brand Development */}
            <Card className="bg-white border-custom shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-heading">Brand Development</h3>
                    <Badge variant="secondary" className="bg-section-light text-heading">Growing</Badge>
                  </div>
                  <Progress value={60} className="h-3" />
                  <p className="text-muted-foreground">
                    Building authentic brand identities and visual storytelling
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media Section - Light lavender background */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-section-light">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl font-black text-heading mb-6">
            Connect With Me
          </h2>
          <div className="w-16 h-1 bg-interactive mx-auto mb-12"></div>
          
          <div className="flex justify-center">
            <a 
              href="https://www.instagram.com/zabdiel.gudino/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-white hover:bg-interactive border-2 border-custom hover:border-interactive text-heading hover:text-white px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Instagram className="w-8 h-8" />
              <span className="text-xl font-semibold">Follow on Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section - White background */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-black text-heading mb-6">
              Get In Touch
            </h2>
            <div className="w-16 h-1 bg-interactive mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground">
              Ready to collaborate? Let's create something amazing together.
            </p>
          </div>

          <Card className="bg-section-light border-custom shadow-xl">
            <CardContent className="p-12">
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer - Light purple background */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-section-medium border-t border-custom">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            {/* Logo */}
            <div>
              <h3 className="text-4xl font-black text-heading tracking-tighter">ZG</h3>
              <div className="w-12 h-0.5 bg-interactive mx-auto mt-2"></div>
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-interactive" />
                <span>hello@zabdielgudino.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-interactive" />
                <span>Available for inquiries</span>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="pt-8 border-t border-custom/50">
              <p className="text-muted-foreground">
                © 2024 Zabdiel Gudino. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
