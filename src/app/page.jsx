import Hero from "@/components/Home/Hero/Hero";
import OurMission from "@/components/Home/OurMission/OurMission";
import Partners from "@/components/Home/Partners/Partners";
import Portfolio from "@/components/Home/Portfolio/Portfolio";
import Footer from "@/layouts/Footer/Footer";

export default function Home() {

  return (
    <main className="main__container">
      <Hero />

      <OurMission />

      <Portfolio />

      <Partners />

      <Footer />
    </main>
  );
}
