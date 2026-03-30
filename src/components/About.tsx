import tattooRealism1 from "@/assets/tattoo-realism-1.jpg";
import Reveal from "./Reveal";
import { useI18n } from "@/i18n/I18nProvider";

const About = () => {
  const { t } = useI18n();

  return (
    <section id="sobre-mi" className="py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <Reveal className="relative">
          <div className="aspect-[3/4] overflow-hidden rounded-sm">
            <img
              src={tattooRealism1}
              alt="Pipe Andrade - Tattoo Artist"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-card border border-border px-6 py-4">
            <p className="stat-number text-3xl font-bold">5+</p>
            <p className="text-muted-foreground text-xs uppercase tracking-widest">{t.about.yearsLabel}</p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="section-subtitle mb-4">{t.about.subtitle}</p>
          <h2 className="font-display text-3xl md:text-5xl mb-8">{t.about.title}</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 pt-8 border-t border-border">
            <p className="font-display text-lg text-foreground">Pipe Andrade</p>
            <p className="text-muted-foreground text-sm">{t.about.role}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
