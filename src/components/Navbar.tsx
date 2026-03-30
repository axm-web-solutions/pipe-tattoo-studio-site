import { useState } from "react";
import { Instagram, Menu, X } from "lucide-react";

const navItems = ["Inicio", "Galería", "Servicios", "Sobre Mí", "Contacto"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase().replace(" ", "-").replace("í", "i"));
    el?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="font-display text-xl tracking-wider text-primary">
          PIPE ANDRADE
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button key={item} onClick={() => scrollTo(item)} className="nav-link">
              {item}
            </button>
          ))}
          <a
            href="https://www.instagram.com/pipeandradetattoo/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram size={18} />
          </a>
        </div>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <button key={item} onClick={() => scrollTo(item)} className="block nav-link">
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
