import Layout from "@/components/layout/Layout";
import PhotoGallery from "@/components/sections/PhotoGallery";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Clock, Heart } from "lucide-react";
import restaurantInterior from "@/assets/m4.jpeg";
import restaurantInterior2 from "@/assets/m5.jpeg";

const About = () => {
  const stats = [
    { icon: Users, label: "Happy Customers", value: "10,000+" },
    { icon: Award, label: "Years of Excellence", value: "5+" },
    { icon: Clock, label: "Hours of Service", value: "24/7" },
    { icon: Heart, label: "Customer Satisfaction", value: "98%" },
  ];

  const values = [
    {
      title: "Quality First",
      description:
        "We source the finest ingredients and maintain the highest standards in food preparation and service.",
    },
    {
      title: "Authentic Flavors",
      description:
        "Our chefs bring traditional Indian recipes to life, ensuring every dish is true to its roots.",
    },
    {
      title: "Traveler Focused",
      description:
        "Understanding the needs of travelers, we provide quick, convenient, and satisfying takeaway experiences.",
    },
    {
      title: "Modern Convenience",
      description:
        "Combining traditional cuisine with modern service efficiency to serve the contemporary traveler.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${restaurantInterior})` }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-white/10 text-white border-white/20 mb-6">
            Our Story
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Eat&Fly</h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Born from a passion for bringing authentic Indian cuisine to
            travelers, Eat&Fly has become a trusted takeaway destination at
            India's major airports.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-4 shadow-soft">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge
                variant="outline"
                className="text-primary border-primary/20"
              >
                Our Journey
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                From Vision to Reality
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Eat&Fly was founded with a simple yet ambitious vision: to
                  revolutionize airport takeaway in India by bringing authentic,
                  high-quality cuisine to travelers on the go.
                </p>
                <p>
                  Starting with our first outlet at Amritsar Airport, we
                  recognized the need for genuine Indian flavors that could
                  satisfy both domestic and international travelers. Our
                  commitment to quality ingredients, traditional recipes, and
                  efficient service quickly made us a favorite among passengers.
                </p>
                <p>
                  Today, we proudly serve millions of travelers across multiple
                  airport locations, maintaining the same standards of
                  excellence that defined our beginning. Each dish tells a story
                  of India's rich culinary heritage, prepared with care and
                  served with pride.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={restaurantInterior2}
                alt="Modern restaurant interior"
                className="rounded-lg shadow-strong w-full max-h-[700px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="outline" className="text-primary border-primary/20">
              Our Values
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What Drives Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our core values shape every aspect of our service and guide us in
              delivering exceptional experiences to every traveler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-medium transition-smooth"
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <PhotoGallery />

      {/* Mission Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-primary-foreground/90 leading-relaxed">
            To be India's premier airport takeaway destination, connecting
            travelers with the authentic flavors of our nation while providing
            exceptional service and convenience. We strive to make every meal a
            memorable part of the journey.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
