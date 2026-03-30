import { Instagram, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useI18n } from "@/i18n/I18nProvider";
import Reveal from "./Reveal";

const Hero = () => {
  const { t } = useI18n();

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Tattoo studio"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <Reveal>
          <p className="section-subtitle mb-6">{t.hero.subtitle}</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-2">
            <span className="text-foreground">PIPE</span>
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8">
            <span className="text-gold-gradient">ANDRADE</span>
          </h1>
        </Reveal>
        <Reveal delay={180}>
          <p className="font-elegant text-lg md:text-2xl italic text-muted-foreground mb-6">{t.hero.quote}</p>
        </Reveal>
        <Reveal delay={220}>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed text-sm sm:text-base">
            {t.hero.description}
          </p>
        </Reveal>
        <Reveal delay={260}>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
          <a
            href="#contacto"
            className="btn-primary gap-2"
          >
            {t.hero.ctaPrimary}
          </a>
          <a
            href="https://www.instagram.com/pipeandradetattoo/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline gap-2"
          >
            <Instagram size={16} />
            {t.hero.ctaSecondary}
          </a>
          </div>
        </Reveal>
      </div>
      <button
        onClick={() => document.getElementById("galeria")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
