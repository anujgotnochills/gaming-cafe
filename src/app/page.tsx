"use client";

import { useEffect } from "react";
import TopNavBar from "@/components/TopNavBar";
import HeroSection from "@/components/HeroSection";
import FeaturedGames from "@/components/FeaturedGames";
import GamingZones from "@/components/GamingZones";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty("--mouse-x", `${x}%`);
      document.documentElement.style.setProperty("--mouse-y", `${y}%`);

      const parallaxContainers = document.querySelectorAll('.parallax-container');
      const px = (e.clientX / window.innerWidth - 0.5) * 20;
      const py = (e.clientY / window.innerHeight - 0.5) * 20;
      parallaxContainers.forEach(container => {
        const img = container.querySelector('.parallax-image') as HTMLElement;
        if(img) img.style.transform = `scale(1.1) translate(${px}px, ${py}px)`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    const revealCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    };
    const observer = new IntersectionObserver(revealCallback, { threshold: 0.1 });
    // setTimeout to ensure elements are rendered before observing
    setTimeout(() => {
      document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    }, 100);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <main className="min-h-screen bg-background text-on-surface flex flex-col">
      <HeroSection />
      <FeaturedGames />
      <GamingZones />
      <Footer />
    </main>
  );
}
