import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, ArrowRight, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const locations = [
  {
    id: 1,
    city: "Amritsar",
    airport: "Sri Guru Ram Dass Jee International Airport",
    status: "operational",
    terminal: "Terminal 1",
    hours: "24/7",
    features: ["Fast Service", "Traditional Menu", "Quick Takeaway"],
  },
  {
    id: 2,
    city: "Ghaziabad",
    airport: "Hindon Airport",
    status: "operational",
    terminal: "Main Terminal",
    hours: "06:00 - 22:00",
    features: ["Express Counter", "Fresh Ingredients", "Comfort Seating"],
  },
  {
    id: 3,
    city: "Jalandhar",
    airport: "Adampur Airport",
    status: "operational",
    terminal: "Terminal 1",
    hours: "05:30 - 23:00",
    features: ["Pre-order Available", "Local Specialties", "Travel Packs"],
  },
  {
    id: 3,
    city: "Jaisalmer",
    airport: "Jaisalmer Airport",
    status: "operational",
    terminal: "New International Terminal",
    hours: "05:30 - 23:00",
    features: ["Pre-order Available", "Local Specialties", "Travel Packs"],
  },
  {
    id: 4,
    city: "Ludhiana",
    airport: "Sahnewal Airport",
    status: "upcoming",
    terminal: "New Terminal",
    hours: "Coming Soon",
    features: ["Modern Kitchen", "Extended Menu", "Digital Ordering"],
  },
];

const LocationsPreview = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <Badge
            variant="outline"
            className="text-md text-primary border-primary/20"
          >
            Airport Locations
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Our Airport Outlets
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find us at major airports across India, serving quality meals to
            travelers
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {locations.map((location) => (
            <Card
              key={location.id}
              className="group hover:shadow-medium transition-smooth bg-card/80 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {location.city}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {location.airport}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant={
                      location.status === "operational"
                        ? "default"
                        : "secondary"
                    }
                    className={
                      location.status === "operational"
                        ? "bg-success text-success-foreground"
                        : "bg-muted text-muted-foreground"
                    }
                  >
                    {location.status === "operational" ? (
                      <>
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Operational
                      </>
                    ) : (
                      "Coming Soon"
                    )}
                  </Badge>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Terminal:</span>
                    <span className="text-foreground font-medium">
                      {location.terminal}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      Hours:
                    </span>
                    <span className="text-foreground font-medium">
                      {location.hours}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-foreground">
                    Features:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {location.features.map((feature, index) => (
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
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        {/* <div className="text-center">
          <Link to="/outlets">
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-smooth group"
            >
              View All Locations
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default LocationsPreview;
