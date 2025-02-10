import Hero from "@/components/Home/Hero/Hero";
import OurMission from "@/components/Home/OurMission/OurMission";
import Partners from "@/components/Home/Partners/Partners";
import Portfolio from "@/components/Home/Portfolio/Portfolio";
import Footer from "@/layouts/Footer/Footer";
import Header from "@/layouts/Header/Header";

export default function Home() {

  return (
    <div className="main__container">
      <Header />

      <Hero />

      <OurMission />

      <Portfolio />

      <Partners />

      <Footer />
    </div>
  );
}
