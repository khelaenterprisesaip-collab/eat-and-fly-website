import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Plane } from "lucide-react";
import heroImage from "@/assets/dish.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-10">
        <Plane className="h-32 w-32 text-white transform rotate-12" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10">
        <Plane className="h-24 w-24 text-white transform -rotate-12" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mt-2 mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <Plane className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">
              Premium Airport Takeaway
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Welcome to
            <span className="block bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              Eat&Fly
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Experience authentic Indian flavors at India's premier airports.
            Quality cuisine crafted for the modern traveler.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Link to="/outlets">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent-light text-accent-foreground shadow-glow hover:shadow-strong transition-smooth group"
              >
                Explore Our Outlets
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </Link>
            <Link to="/about">
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-smooth"
              >
                Our Story
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent">
                5+
              </div>
              <div className="text-sm text-white/70">Airport Locations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent">
                50+
              </div>
              <div className="text-sm text-white/70">Delicious Dishes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent">
                10K+
              </div>
              <div className="text-sm text-white/70">Happy Travelers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
