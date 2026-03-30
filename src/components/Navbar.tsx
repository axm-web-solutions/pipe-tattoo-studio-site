import { useState } from "react";
import { Instagram, Menu, X } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import logo from "@/assets/logo.jpg";

const sectionIds = ["inicio", "galeria", "servicios", "sobre-mi", "contacto"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useI18n();

  const navItems = [t.nav.home, t.nav.gallery, t.nav.services, t.nav.about, t.nav.contact];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 gap-4">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Pipe Andrade logo" className="w-8 h-8 rounded-full object-cover border border-primary/50" />
          <span className="font-display text-lg sm:text-xl tracking-wider text-primary">PIPE ANDRADE</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, idx) => (
            <button key={item} onClick={() => scrollTo(sectionIds[idx])} className="nav-link">
              {item}
            </button>
          ))}
          <div className="flex items-center gap-2">
            {(["es", "en", "fr"] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`text-xs uppercase tracking-widest transition-colors ${
                  language === lang ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
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
        <div className="md:hidden bg-background border-b border-border px-4 py-4 space-y-4">
          <div className="flex items-center gap-3">
            {(["es", "en", "fr"] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`text-xs uppercase tracking-widest ${
                  language === lang ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
          {navItems.map((item, idx) => (
            <button key={item} onClick={() => scrollTo(sectionIds[idx])} className="block nav-link">
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
