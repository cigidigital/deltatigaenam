import { Helmet } from "react-helmet-async";
import { useLocation, useParams, Link, Navigate } from "react-router-dom";
import { posts } from "@/data/blogs";

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);
  const location = useLocation();
  const canonical = `${window.location.origin}${location.pathname}`;

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <main className="container py-12 max-w-3xl">
      <Helmet>
        <title>{post.title} | PT. Delta Tiga Enam</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify({
          '@context':'https://schema.org',
          '@type':'Article',
          headline: post.title,
          datePublished: post.date,
          author: { '@type':'Organization', name: 'PT. Delta Tiga Enam' }
        })}</script>
      </Helmet>
      <p className="text-xs text-muted-foreground mb-2"><Link className="story-link" to="/blog">Kembali ke Blog</Link></p>
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-muted-foreground mb-6">{new Date(post.date).toLocaleDateString('id-ID', { dateStyle:'long' })} • {post.category}</p>
      <article className="text-base leading-relaxed">
        <p>{post.content}</p>
      </article>
    </main>
  );
};

export default BlogPost;
