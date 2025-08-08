import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import Hero from "@/components/sections/Hero";
import { agenda } from "@/data/agenda";
import { posts } from "@/data/blogs";
import { Button } from "@/components/ui/button";

const Index = () => {
  const location = useLocation();
  const upcoming = [...agenda].sort((a,b)=>a.date.localeCompare(b.date)).slice(0,3);
  const latest = [...posts].slice(0,3);

  const canonical = `${window.location.origin}${location.pathname}`;

  return (
    <main>
      <Helmet>
        <title>PT. Delta Tiga Enam | Training & Certification Provider</title>
        <meta name="description" content="Perusahaan penyedia sertifikasi, pelatihan, penyeleksian, dan penempatan tenaga kerja di Indonesia." />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify({
          '@context':'https://schema.org',
          '@type':'Organization',
          name:'PT. Delta Tiga Enam',
          url: window.location.origin,
          description: 'Sertifikasi, pelatihan, penyeleksian, dan penempatan tenaga kerja di Indonesia',
          sameAs: []
        })}</script>
      </Helmet>

      <Hero />

      <section id="layanan" className="py-12">
        <div className="container grid md:grid-cols-4 gap-6">
          {[
            {t:'Sertifikasi', d:'Skema sertifikasi profesional yang diakui industri.'},
            {t:'Pelatihan', d:'Program pelatihan praktis untuk peningkatan kompetensi.'},
            {t:'Penyeleksian', d:'Assessment komprehensif berbasis kompetensi.'},
            {t:'Penempatan', d:'Penempatan tenaga kerja sesuai kebutuhan perusahaan.'},
          ].map((it)=> (
            <article key={it.t} className="rounded-lg border p-6 bg-card shadow-sm hover-scale">
              <h3 className="font-semibold mb-2">{it.t}</h3>
              <p className="text-sm text-muted-foreground">{it.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-12 border-t">
        <div className="container">
          <header className="flex items-end justify-between mb-6">
            <h2 className="text-2xl font-semibold">Agenda Mendatang</h2>
            <a className="story-link" href="/agenda">Lihat semua</a>
          </header>
          <div className="grid md:grid-cols-3 gap-6">
            {upcoming.map((a)=> (
              <article key={a.id} className="rounded-lg border p-6 bg-card shadow-sm animate-fade-in">
                <time className="text-sm text-muted-foreground block mb-2">{new Date(a.date).toLocaleDateString('id-ID', { weekday:'long', day:'2-digit', month:'long', year:'numeric'})}</time>
                <h3 className="font-semibold mb-1">{a.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{a.location} • {a.description}</p>
                <Button variant="link" asChild><a href="/agenda">Daftar</a></Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 border-t">
        <div className="container">
          <header className="flex items-end justify-between mb-6">
            <h2 className="text-2xl font-semibold">Artikel Terbaru</h2>
            <a className="story-link" href="/blog">Lihat semua</a>
          </header>
          <div className="grid md:grid-cols-3 gap-6">
            {latest.map((p)=> (
              <article key={p.slug} className="rounded-lg border p-6 bg-card shadow-sm">
                <span className="text-xs text-primary font-medium">{p.category}</span>
                <h3 className="mt-2 font-semibold mb-1">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{p.excerpt}</p>
                <a className="story-link text-sm" href={`/blog/${p.slug}`}>Baca selengkapnya</a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
