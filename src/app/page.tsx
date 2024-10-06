import AboutUs from "@/components/about-us";
import CTA from "@/components/cta";
import FAQ from "@/components/faq";
import Hero from "@/components/hero";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import RoadsideAssistance from "@/components/roadside-assistance";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import WhyChooseUs from "@/components/why-choose-us";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <RoadsideAssistance />
      <AboutUs />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
