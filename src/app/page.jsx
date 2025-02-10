'use client';
import Hero from "@/components/Home/Hero/Hero";
import OurMission from "@/components/Home/OurMission/OurMission";
import Partners from "@/components/Home/Partners/Partners";
import Portfolio from "@/components/Home/Portfolio/Portfolio";
import Footer from "@/layouts/Footer/Footer";
import Header from "@/layouts/Header/Header";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, [])

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
