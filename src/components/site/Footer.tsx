const Footer = () => {
  return (
    <footer className="border-t mt-16">
      <div className="container py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="h-8 w-8 rounded-md bg-hero shadow" aria-hidden />
            <span className="font-semibold">PT. Delta Tiga Enam</span>
          </div>
          <p className="text-sm text-muted-foreground">Sertifikasi, pelatihan, penyeleksian, dan penempatan tenaga kerja di Indonesia.</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-3">Navigasi</h3>
          <ul className="space-y-2 text-sm">
            <li><a className="story-link" href="/">Beranda</a></li>
            <li><a className="story-link" href="/agenda">Agenda</a></li>
            <li><a className="story-link" href="/blog">Blog</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-3">Kontak</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Email: info@deltatigaenam.co.id</li>
            <li>Telepon: +62 21 1234 5678</li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-6 text-xs text-muted-foreground">© {new Date().getFullYear()} PT. Delta Tiga Enam. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
