import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import restaurant1 from "@/assets/m6.jpeg";
import restaurant2 from "@/assets/m1.jpeg";
import restaurant3 from "@/assets/m7.jpeg";
import restaurantInterior from "@/assets/m8.jpeg";

const RestaurantShowcase = () => {
  const images = [
    {
      src: restaurant1,
      title: "Modern Takeaway Experience",
      description: "Contemporary seating with runway views",
    },
    {
      src: restaurant2,
      title: "Open Kitchen Concept",
      description: "Watch our chefs craft your meals",
    },
    {
      src: restaurant3,
      title: "Comfortable Atmosphere",
      description: "Relax before your flight",
    },
    {
      src: restaurantInterior,
      title: "Premium Interiors",
      description: "Sophisticated airport takeaway",
    },
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="text-primary border-primary/20">
            Our Restaurants
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Experience Premium Airport Takeaway
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Step into our thoughtfully designed restaurants where modern
            aesthetics meet comfort. Each location offers a unique ambiance
            perfect for travelers seeking quality takeaway experiences.
          </p>
        </div>

        {/* Main Feature Image */}
        <div className="mb-16">
          <Card className="overflow-hidden shadow-strong bg-card/50 backdrop-blur-sm">
            <div className="relative h-96 md:h-[650px] object-top object-contain">
              <img
                src={restaurant1}
                alt="Main restaurant interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Where Comfort Meets Convenience
                </h3>
                <p className="text-lg text-white/90 max-w-md">
                  Thoughtfully designed spaces that make your takeaway
                  experience memorable
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.slice(1).map((image, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-strong transition-smooth bg-card/80 backdrop-blur-sm"
            >
              <div className="relative h-[400px] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {image.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {image.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">5+</div>
            <div className="text-sm text-muted-foreground">
              Restaurant Locations
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">200+</div>
            <div className="text-sm text-muted-foreground">
              Seating Capacity
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">24/7</div>
            <div className="text-sm text-muted-foreground">Service Hours</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">98%</div>
            <div className="text-sm text-muted-foreground">
              Customer Satisfaction
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantShowcase;
