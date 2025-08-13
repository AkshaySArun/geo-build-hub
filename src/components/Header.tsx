import { Button } from "@/components/ui/button";
import { MapPin, User, Bell, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold">B</span>
          </div>
          <span className="text-xl font-bold text-primary">BuildNet</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            Find Services
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            Join as Pro
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            How it Works
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-3">
          <Button variant="location" size="sm" className="hidden sm:flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Location
          </Button>
          
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-secondary rounded-full"></span>
          </Button>
          
          <Button variant="outline" size="sm" className="hidden sm:flex">
            Sign In
          </Button>
          
          <Button variant="hero" size="sm">
            Get Started
          </Button>
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;