import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-hero shadow" aria-hidden />
          <span className="font-semibold">PT. Delta Tiga Enam</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={({isActive}) => `text-sm ${isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'} story-link`}>Beranda</NavLink>
          <NavLink to="/agenda" className={({isActive}) => `text-sm ${isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'} story-link`}>Agenda</NavLink>
          <NavLink to="/blog" className={({isActive}) => `text-sm ${isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'} story-link`}>Blog</NavLink>
        </nav>

        <button className="md:hidden" aria-label="Toggle menu" onClick={() => setOpen(v => !v)}>
          <Menu />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t">
          <div className="container py-3 flex flex-col gap-2">
            <Link to="/" onClick={() => setOpen(false)} className="text-sm text-foreground">Beranda</Link>
            <Link to="/agenda" onClick={() => setOpen(false)} className="text-sm text-foreground">Agenda</Link>
            <Link to="/blog" onClick={() => setOpen(false)} className="text-sm text-foreground">Blog</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
