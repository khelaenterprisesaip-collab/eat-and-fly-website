import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Clock,
  Phone,
  CheckCircle,
  Calendar,
  Users,
  Utensils,
} from "lucide-react";

const outlets = [
  {
    id: 1,
    city: "Amritsar",
    airport: "Sri Guru Ram Dass Jee International Airport",
    status: "operational",
    terminal: "Terminal 1, Gate Area",
    address: "Departure Lounge, Level 2",
    hours: "24/7",
    phone: "+91 98765 43210",
    capacity: "60 seats",
    specialties: [
      "Traditional Punjabi Cuisine",
      "Tandoor Items",
      "Fresh Lassi",
    ],
    features: [
      "Fast Service",
      "Traditional Menu",
      "Quick Takeaway",
      "WiFi Available",
    ],
  },
  {
    id: 2,
    city: "Ghaziabad",
    airport: "Hindon Airport",
    status: "operational",
    terminal: "Main Terminal Building",
    address: "Departure Hall, Ground Floor",
    hours: "06:00 - 22:00",
    phone: "+91 98765 43211",
    capacity: "45 seats",
    specialties: ["North Indian Curries", "Fresh Breads", "Vegetarian Options"],
    features: [
      "Express Counter",
      "Fresh Ingredients",
      "Comfort Seating",
      "Pre-order Available",
    ],
  },
  {
    id: 3,
    city: "Jalandhar",
    airport: "Adampur Airport",
    status: "operational",
    terminal: "Terminal 1, Food Court",
    address: "Level 1, Near Security Check",
    hours: "05:30 - 23:00",
    phone: "+91 98765 43212",
    capacity: "40 seats",
    specialties: ["Regional Specialties", "Quick Bites", "Fresh Juices"],
    features: [
      "Pre-order Available",
      "Local Specialties",
      "Travel Packs",
      "Digital Menu",
    ],
  },
  {
    id: 5,
    city: "Jaisalmer",
    airport: "Jaisalmer Airport",
    status: "operational",
    terminal: "New International Terminal",
    address: "International Departure (Planning Phase)",
    hours: "05:30 - 23:00",
    phone: "+91 98765 43212",
    capacity: "50 seats",
    specialties: [
      "Rajasthani Cuisine",
      "Desert Specialties",
      "Traditional Sweets",
    ],
    features: [
      "Cultural Ambiance",
      "Regional Menu",
      "Tourist Focused",
      "Authentic Décor",
    ],
  },
  {
    id: 4,
    city: "Ludhiana",
    airport: "Sahnewal Airport",
    status: "upcoming",
    terminal: "New Terminal Building",
    address: "Departure Lounge (Under Construction)",
    hours: "Coming Q2 2024",
    phone: "Coming Soon",
    capacity: "80 seats",
    specialties: ["Extended Menu", "Premium Takeaway", "Coffee Bar"],
    features: [
      "Modern Kitchen",
      "Extended Menu",
      "Digital Ordering",
      "Premium Interiors",
    ],
  },
];

const Outlets = () => {
  const operationalOutlets = outlets.filter(
    (outlet) => outlet.status === "operational"
  );
  const upcomingOutlets = outlets.filter(
    (outlet) => outlet.status === "upcoming"
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="text-md bg-white/10 text-white border-white/20 mb-6">
            Our Locations
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Airport Outlets
          </h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Find Eat&Fly at major airports across India. Each location offers
            the same commitment to quality and authentic flavors that define our
            brand.
          </p>
        </div>
      </section>

      {/* Operational Outlets */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <Badge
              variant="outline"
              className="text-md text-success border-success/20 bg-success/5"
            >
              <CheckCircle className="h-5 w-5 mr-1" />
              Currently Operational
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Visit Us Today
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These outlets are currently serving delicious meals to travelers
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {operationalOutlets.map((outlet) => (
              <Card
                key={outlet.id}
                className="bg-card/80 backdrop-blur-sm hover:shadow-strong transition-smooth"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-success/10 rounded-lg">
                        <MapPin className="h-5 w-5 text-success" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {outlet.city}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {outlet.airport}
                        </p>
                      </div>
                    </div>
                    <Badge className="bg-success text-success-foreground">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Open
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    {/* Location Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">
                          {outlet.terminal}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">
                          {outlet.hours}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">
                          {outlet.phone}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">
                          {outlet.capacity}
                        </span>
                      </div>
                    </div>

                    {/* Specialties */}
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2 flex items-center">
                        <Utensils className="h-4 w-4 mr-1" />
                        Specialties:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {outlet.specialties.map((specialty, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs bg-accent/10 text-accent border-accent/20"
                          >
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">
                        Features:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {outlet.features.map((feature, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs border-primary/20 text-primary bg-primary/5"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-primary hover:shadow-glow transition-smooth">
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Outlets */}
      <section className="py-16 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <Badge
              variant="outline"
              className="text-md text-primary border-primary/20"
            >
              <Calendar className="h-5 w-5 mr-1" />
              Coming Soon
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Upcoming Locations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're expanding to serve you better at these new locations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingOutlets.map((outlet) => (
              <Card
                key={outlet.id}
                className="bg-card/50 backdrop-blur-sm border-dashed border-2 border-muted"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-muted/10 rounded-lg">
                        <MapPin className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {outlet.city}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {outlet.airport}
                        </p>
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-muted text-muted-foreground"
                    >
                      <Calendar className="h-3 w-3 mr-1" />
                      {outlet.hours}
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    {/* Planned Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">
                          {outlet.terminal}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">
                          {outlet.capacity}
                        </span>
                      </div>
                    </div>

                    {/* Planned Specialties */}
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2 flex items-center">
                        <Utensils className="h-4 w-4 mr-1" />
                        Planned Specialties:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {outlet.specialties.map((specialty, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs bg-muted/30 text-muted-foreground"
                          >
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Planned Features */}
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">
                        Planned Features:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {outlet.features.map((feature, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs border-muted text-muted-foreground"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button variant="outline" className="w-full" disabled>
                      Opening Soon
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Outlets;
