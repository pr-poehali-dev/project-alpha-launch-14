import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Rubrics from "@/components/Rubrics";
import Featured from "@/components/Featured";
import Promo from "@/components/Promo";
import Formats from "@/components/Formats";
import ContentTypes from "@/components/ContentTypes";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Reviews />
      <Rubrics />
      <Featured />
      <Promo />
      <Formats />
      <ContentTypes />
      <Subscribe />
      <Footer />
    </main>
  );
};

export default Index;