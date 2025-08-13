import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Search, UserCheck, CreditCard, CheckCircle, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: MapPin,
      title: "Set Your Location",
      description: "Enter your location to find local construction professionals within your area",
      color: "primary"
    },
    {
      icon: Search,
      title: "Browse & Compare",
      description: "View profiles, ratings, and local pricing from verified professionals near you",
      color: "secondary"
    },
    {
      icon: UserCheck,
      title: "Connect & Hire",
      description: "Chat with professionals, get quotes, and hire the best fit for your project",
      color: "success"
    },
    {
      icon: CreditCard,
      title: "Secure Payment",
      description: "Pay securely through the platform with milestone-based payments",
      color: "primary"
    },
    {
      icon: CheckCircle,
      title: "Track Progress",
      description: "Monitor your project with real-time updates and GPS-verified progress photos",
      color: "success"
    }
  ];

  return (
    <section className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How BuildNet Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, secure, and location-based. Get your construction projects done right.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full group hover:shadow-elevated transition-all duration-300 border-border/50 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-6">
                      <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${
                        step.color === 'primary' ? 'bg-primary/10' :
                        step.color === 'secondary' ? 'bg-secondary/10' :
                        'bg-success/10'
                      } group-hover:scale-110 transition-transform duration-300`}>
                        <step.icon className={`w-8 h-8 ${
                          step.color === 'primary' ? 'text-primary' :
                          step.color === 'secondary' ? 'text-secondary' :
                          'text-success'
                        }`} />
                      </div>
                      {/* Step number */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      {/* Connecting line (hidden on last item) */}
                      {index < steps.length - 1 && (
                        <div className="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-border/50 transform translate-x-4">
                          <ArrowRight className="absolute right-0 top-1/2 transform translate-y-[-50%] translate-x-2 w-4 h-4 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied clients who have completed their construction projects through BuildNet's trusted platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Find Professionals
              </Button>
              <Button variant="outline" size="lg">
                Join as Professional
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;