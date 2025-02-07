import Hero from "@/components/Home/Hero/Hero";
import OurMission from "@/components/Home/OurMission/OurMission";
import Portfolio from "@/components/Home/Portfolio/Portfolio";

export default function Home() {

  return (
    <main className="main__container">
      <Hero />

      <OurMission />

      <Portfolio />
      <div style={{ width: '100%', height: '300vh' }}></div>
    </main>
  );
}
