import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Hammer, 
  Zap, 
  Droplets, 
  PaintBucket, 
  Home,
  MapPin,
  Star,
  Clock,
  IndianRupee
} from "lucide-react";

const ServiceCategories = () => {
  const categories = [
    {
      icon: Home,
      title: "Full Construction",
      description: "Complete home building from foundation to finishing",
      averagePrice: "₹15-25L",
      duration: "6-12 months",
      professionals: 245,
      rating: 4.8,
      locations: ["Bengaluru", "Mysuru", "Coimbatore"]
    },
    {
      icon: Zap,
      title: "Electrical Work",
      description: "Wiring, repairs, and electrical installations",
      averagePrice: "₹500-2000/point",
      duration: "1-5 days",
      professionals: 156,
      rating: 4.7,
      locations: ["Bengaluru", "Chennai", "Hyderabad"]
    },
    {
      icon: Droplets,
      title: "Plumbing Services",
      description: "Pipe installation, repairs, and maintenance",
      averagePrice: "₹800-3000",
      duration: "4-8 hours",
      professionals: 189,
      rating: 4.6,
      locations: ["Mysuru", "Mangaluru", "Bengaluru"]
    },
    {
      icon: PaintBucket,
      title: "Painting & Finishing",
      description: "Interior and exterior painting services",
      averagePrice: "₹12-18/sq.ft",
      duration: "3-7 days",
      professionals: 267,
      rating: 4.9,
      locations: ["Coimbatore", "Kochi", "Bengaluru"]
    },
    {
      icon: Hammer,
      title: "Carpentry Work",
      description: "Furniture, doors, windows, and custom woodwork",
      averagePrice: "₹1500-5000",
      duration: "2-10 days",
      professionals: 143,
      rating: 4.5,
      locations: ["Bengaluru", "Mysuru", "Salem"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Popular Service Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse services by category and find local professionals with transparent pricing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => (
            <Card key={index} className="group hover:shadow-elevated transition-all duration-300 border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {category.professionals} pros
                  </Badge>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {category.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <IndianRupee className="w-4 h-4" />
                      <span>Price Range</span>
                    </div>
                    <span className="font-medium text-success">{category.averagePrice}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>Duration</span>
                    </div>
                    <span className="font-medium">{category.duration}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Star className="w-4 h-4 fill-current text-secondary" />
                      <span>Rating</span>
                    </div>
                    <span className="font-medium">{category.rating}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>Popular in:</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {category.locations.map((location) => (
                      <Badge key={location} variant="outline" className="text-xs">
                        {location}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  Find Professionals
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg">
            View All Categories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;