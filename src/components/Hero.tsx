import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MapPin, Search, Building, Wrench, Users, Shield } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [location, setLocation] = useState("");
  const [serviceType, setServiceType] = useState("");

  return (
    <section className="relative min-h-[80vh] bg-gradient-surface flex items-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-16 h-16 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-secondary/10 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-40 left-1/4 w-8 h-8 bg-success/10 rounded-full animate-float" style={{ animationDelay: "4s" }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Connect with
              <span className="text-primary block md:inline"> Local Construction</span>
              <span className="text-secondary block"> Professionals</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              From full home construction to quick repairs - find verified professionals in your area with location-based pricing and project tracking.
            </p>
          </div>

          {/* Search interface */}
          <Card className="p-6 md:p-8 shadow-elevated bg-card/80 backdrop-blur-sm border-border/50 mb-12">
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Enter your location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="pl-10 h-12 bg-background/50"
                />
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="What service do you need?"
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="pl-10 h-12 bg-background/50"
                />
              </div>
              <Button variant="hero" size="lg" className="h-12 font-semibold">
                Find Professionals
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              {["Full Construction", "Plumbing", "Electrical", "Painting", "Roofing"].map((service) => (
                <Button key={service} variant="outline" size="sm" className="text-xs">
                  {service}
                </Button>
              ))}
            </div>
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground">Verified Professionals</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Building className="w-6 h-6 text-secondary" />
              </div>
              <div className="text-2xl font-bold text-secondary">5K+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6 text-success" />
              </div>
              <div className="text-2xl font-bold text-success">500+</div>
              <div className="text-sm text-muted-foreground">Cities Covered</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Secure Payments</div>
            </div>
          </div>

          {/* Service types */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-foreground mb-4">Choose Your Service Type</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <Button variant="secondary" size="lg" className="flex-1">
                <Building className="w-5 h-5 mr-2" />
                Full Construction Project
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                <Wrench className="w-5 h-5 mr-2" />
                Task-Based Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;