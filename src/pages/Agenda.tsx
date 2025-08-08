import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { agenda } from "@/data/agenda";

const Agenda = () => {
  const location = useLocation();
  const canonical = `${window.location.origin}${location.pathname}`;
  const data = [...agenda].sort((a,b)=>a.date.localeCompare(b.date));

  return (
    <main className="container py-12">
      <Helmet>
        <title>Agenda Pelatihan & Sertifikasi | PT. Delta Tiga Enam</title>
        <meta name="description" content="Jadwal agenda pelatihan dan sertifikasi mendatang dari PT. Delta Tiga Enam." />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <h1 className="text-3xl font-bold mb-6">Agenda Mendatang</h1>
      <section className="grid gap-6 md:grid-cols-2">
        {data.map(a => (
          <article key={a.id} className="rounded-lg border p-6 bg-card shadow-sm">
            <header className="mb-2">
              <time className="text-sm text-muted-foreground">{new Date(a.date).toLocaleString('id-ID', { dateStyle:'full', timeStyle:'short'})}</time>
              <h2 className="text-xl font-semibold">{a.title}</h2>
            </header>
            <p className="text-sm text-muted-foreground mb-3">{a.location}</p>
            <p className="text-sm">{a.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Agenda;
