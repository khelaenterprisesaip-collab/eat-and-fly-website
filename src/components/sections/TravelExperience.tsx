import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plane, MapPin, Clock, Users, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const TravelExperience = () => {
  const experiences = [
    {
      icon: Plane,
      title: "Pre-Flight Takeaway",
      description:
        "Start your journey right with a satisfying meal before takeoff",
      time: "Available 2-3 hours before departure",
    },
    {
      icon: Clock,
      title: "Layover Comfort",
      description: "Transform your layover into a pleasant takeaway experience",
      time: "Perfect for 1+ hour layovers",
    },
    {
      icon: Users,
      title: "Group Travelers",
      description:
        "Spacious seating arrangements ideal for families and groups",
      time: "Accommodates groups of any size",
    },
    {
      icon: Star,
      title: "Business Travelers",
      description: "Quick, professional service for busy business schedules",
      time: "Express service available",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Delhi to Mumbai",
      rating: 5,
      text: "The butter chicken was amazing! Perfect meal before my flight. The service was quick and the staff was very courteous.",
    },
    {
      name: "Priya Sharma",
      location: "International Traveler",
      rating: 5,
      text: "Finally, authentic Indian food at the airport! The quality is excellent and the atmosphere is so welcoming.",
    },
    {
      name: "Michael Johnson",
      location: "Business Traveler",
      rating: 5,
      text: "Eat&Fly has become my go-to spot during layovers. Great food, comfortable seating, and excellent WiFi for work.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge
            variant="outline"
            className="text-md text-primary border-primary/20"
          >
            Travel & Dine
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Enhancing Your Travel Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you're embarking on a new adventure or returning home, we
            make every moment of your airport experience memorable with
            exceptional food and service.
          </p>
        </div>

        {/* Travel Experiences */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {experiences.map((experience, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-medium transition-smooth"
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <experience.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {experience.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                  {experience.description}
                </p>
                <Badge
                  variant="secondary"
                  className="text-xs bg-muted/50 text-muted-foreground"
                >
                  {experience.time}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              What Travelers Say About Us
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real feedback from real travelers who have experienced our
              hospitality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-card/80 backdrop-blur-sm shadow-soft"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Journey Planning CTA */}
        <div className="mt-20">
          <Card className="bg-primary text-primary-foreground shadow-strong">
            <CardContent className="p-12 text-center">
              <div className="max-w-3xl mx-auto space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold">
                  Planning Your Next Journey?
                </h3>
                <p className="text-xl text-primary-foreground/90 leading-relaxed">
                  Check if we're available at your departure or arrival airport.
                  We're continuously expanding to serve more travelers across
                  India.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                  <Link to="/outlets">
                    <Button
                      size="lg"
                      variant="secondary"
                      className="bg-white text-primary hover:bg-white/90 shadow-medium group"
                    >
                      <MapPin className="mr-2 h-5 w-5" />
                      Find Our Locations
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-white/10 backdrop-blur-sm"
                    >
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TravelExperience;
