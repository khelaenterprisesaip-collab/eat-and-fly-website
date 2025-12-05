import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";
import restaurantInterior from "@/assets/m1.jpeg";
import restaurant1 from "@/assets/m2.jpeg";
import restaurant2 from "@/assets/m3.jpeg";
import restaurant3 from "@/assets/m4.jpeg";
import galleryChef from "@/assets/m5.jpeg";
import galleryDiners from "@/assets/m6.jpeg";
import galleryIngredients from "@/assets/m7.jpeg";
import galleryService from "@/assets/m8.jpeg";

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: restaurantInterior,
      title: "Premium Restaurant Interior",
      category: "Interior",
      className: "md:row-span-2", // Tall image
    },
    {
      src: galleryChef,
      title: "Master Chefs at Work",
      category: "Kitchen",
      className: "md:row-span-3", // Very tall image
    },
    {
      src: restaurant1,
      title: "Modern Takeaway Space",
      category: "Interior",
      className: "md:row-span-1", // Normal height
    },
    {
      src: galleryDiners,
      title: "Happy Travelers",
      category: "Experience",
      className: "md:row-span-2", // Tall image
    },
    {
      src: galleryIngredients,
      title: "Fresh Ingredients",
      category: "Kitchen",
      className: "md:row-span-1", // Normal height
    },
    {
      src: restaurant2,
      title: "Open Kitchen Concept",
      category: "Kitchen",
      className: "md:row-span-2", // Tall image
    },
    {
      src: galleryService,
      title: "Efficient Service",
      category: "Service",
      className: "md:row-span-3", // Very tall image
    },
    {
      src: restaurant3,
      title: "Quality Assurance",
      category: "Interior",
      className: "md:row-span-1", // Normal height
    },
  ];

  const categories = [
    "All",
    "Interior",
    "Kitchen",
    "Service",
    "Experience",
    "Exterior",
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <Badge
            variant="outline"
            className="text-md text-primary border-primary/20"
          >
            Photo Gallery
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Behind the Scenes
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Take a visual journey through our restaurants, kitchens, and the
            experiences we create for travelers every day.
          </p>
        </div>

        {/* Category Filter */}
        {/* <div className="flex flex-wrap justify-center gap-2 mb-12 animate-scale-in">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-smooth ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div> */}

        {/* Masonry Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {filteredImages.map((image, index) => (
            <Card
              key={`${image.src}-${activeCategory}`}
              className={`group relative overflow-hidden cursor-pointer hover:shadow-strong transition-smooth border-border/50 hover:scale-[1.02] ${image.className}`}
              onClick={() => setSelectedImage(image.src)}
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: `slide-up 0.8s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-accent text-accent-foreground mb-2 text-xs">
                      {image.category}
                    </Badge>
                    <h3 className="text-white font-semibold text-sm">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="relative max-w-5xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-smooth"
              >
                <X className="h-8 w-8" />
              </button>
              <img
                src={selectedImage}
                alt="Gallery image"
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-strong animate-scale-in"
              />
            </div>
          </div>
        )}

        {/* Gallery Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate-fade-in">
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">5+</div>
            <div className="text-sm text-muted-foreground">
              Restaurant Locations
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">15+</div>
            <div className="text-sm text-muted-foreground">Skilled Chefs</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">Team Members</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">1000+</div>
            <div className="text-sm text-muted-foreground">
              Daily Meals Served
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
