import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import RestaurantShowcase from "@/components/sections/RestaurantShowcase";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import TravelExperience from "@/components/sections/TravelExperience";
import LocationsPreview from "@/components/sections/LocationsPreview";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <RestaurantShowcase />
      <WhyChooseUs />
      <TravelExperience />
      <LocationsPreview />
    </Layout>
  );
};

export default Index;
