import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Shield, Award, Utensils, Wifi, CreditCard } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Clock,
      title: "Quick Service",
      description:
        "Fast, efficient service designed for travelers on tight schedules. Our streamlined processes ensure you get quality food without missing your flight.",
    },
    {
      icon: Utensils,
      title: "Authentic Flavors",
      description:
        "Traditional Indian recipes prepared by experienced chefs using premium ingredients. Every dish maintains the authentic taste you crave.",
    },
    {
      icon: Shield,
      title: "Food Safety",
      description:
        "Stringent hygiene standards and food safety protocols. We maintain the highest quality standards for your peace of mind.",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description:
        "Award-winning cuisine that has earned recognition from travelers and food critics alike. Quality you can taste in every bite.",
    },
    // {
    //   icon: Wifi,
    //   title: "Modern Amenities",
    //   description:
    //     "Free WiFi, charging ports, and comfortable seating. Everything you need to relax and stay connected while takeaway.",
    // },
    {
      icon: CreditCard,
      title: "Convenient Payment",
      description:
        "Multiple payment options including digital wallets, cards, and contactless payments for your convenience.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge
            variant="outline"
            className="text-md text-primary border-primary/20"
          >
            Why Choose Eat&Fly
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Exceptional Takeaway Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We understand the unique needs of travelers. That's why we've
            designed every aspect of our service to provide convenience,
            quality, and comfort at every airport location.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group bg-card/80 backdrop-blur-sm hover:shadow-medium transition-smooth border-border/50"
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-xl mb-6 shadow-soft group-hover:shadow-glow transition-smooth">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-primary text-white shadow-strong max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Experience Premium Airport Takeaway?
              </h3>
              <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
                Join thousands of satisfied travelers who have made Eat&Fly
                their preferred takeaway destination at airports across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Badge className="bg-white/20 text-white border-white/30 px-6 py-2 text-base">
                  🌟 4.8/5 Average Rating
                </Badge>
                <Badge className="bg-white/20 text-white border-white/30 px-6 py-2 text-base">
                  👥 10,000+ Happy Customers
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
