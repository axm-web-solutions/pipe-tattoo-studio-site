import { Instagram } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="py-12 px-4 sm:px-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Pipe Andrade logo" className="w-8 h-8 rounded-full object-cover border border-primary/50" />
          <p className="font-display text-lg tracking-wider text-primary">PIPE ANDRADE</p>
        </div>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Pipe Andrade Tattoo. {t.footer.rights}
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
