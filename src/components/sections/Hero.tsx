import heroImg from "@/assets/hero-delta36.jpg";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
    };
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mql.matches) el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <div className="container grid lg:grid-cols-2 gap-10 items-center py-16">
        <div className="relative z-10 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Mitra Tepercaya Untuk Sertifikasi & Pelatihan Profesional
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            PT. Delta Tiga Enam berdedikasi memberikan layanan terbaik di bidang
            sertifikasi, pelatihan, penyeleksian, dan penempatan tenaga kerja di Indonesia.
          </p>
          <div className="flex gap-3">
            <Button variant="hero" asChild>
              <a href="/agenda">Lihat Agenda</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#layanan">Layanan Kami</a>
            </Button>
          </div>
        </div>
        <div className="relative">
          <img
            src={heroImg}
            alt="Pelatihan profesional dan sertifikasi oleh PT. Delta Tiga Enam"
            loading="eager"
            className="rounded-lg shadow-lg hover-scale"
          />
          <div className="pointer-events-none absolute -inset-10 rounded-full opacity-40"
               style={{background: "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), hsl(var(--primary)/0.25), transparent 40%)"}}/>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-hero opacity-[0.25]" aria-hidden />
    </section>
  );
};

export default Hero;
