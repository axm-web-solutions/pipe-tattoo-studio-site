import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-display text-lg tracking-wider text-primary">PIPE ANDRADE</p>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Pipe Andrade Tattoo. Todos los derechos reservados.
        </p>
        <a
          href="https://www.instagram.com/pipeandradetattoo/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Instagram size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
