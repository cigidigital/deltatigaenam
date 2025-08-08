import { Helmet } from "react-helmet-async";
import { useLocation, Link } from "react-router-dom";
import { posts } from "@/data/blogs";

const Blog = () => {
  const location = useLocation();
  const canonical = `${window.location.origin}${location.pathname}`;

  return (
    <main className="container py-12">
      <Helmet>
        <title>Blog | PT. Delta Tiga Enam</title>
        <meta name="description" content="Artikel dan insight seputar sertifikasi, pelatihan, penyeleksian, dan penempatan kerja." />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <section className="grid gap-6 md:grid-cols-3">
        {posts.map(p => (
          <article key={p.slug} className="rounded-lg border p-6 bg-card shadow-sm">
            <span className="text-xs text-primary font-medium">{p.category}</span>
            <h2 className="mt-2 font-semibold mb-1"><Link to={`/blog/${p.slug}`}>{p.title}</Link></h2>
            <p className="text-sm text-muted-foreground mb-4">{p.excerpt}</p>
            <Link className="story-link text-sm" to={`/blog/${p.slug}`}>Baca selengkapnya</Link>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Blog;
