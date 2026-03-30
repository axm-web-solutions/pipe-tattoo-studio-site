import { Paintbrush, Pen, Sparkles, RefreshCw } from "lucide-react";
import Reveal from "./Reveal";
import { useI18n } from "@/i18n/I18nProvider";

const icons = [Paintbrush, Pen, Sparkles, RefreshCw];

const Services = () => {
  const { t } = useI18n();
  const services = t.services.items.map((item, index) => ({ ...item, icon: icons[index] }));

  return (
    <section id="servicios" className="py-20 md:py-24 px-4 sm:px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <p className="section-subtitle text-center mb-4">{t.services.subtitle}</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display text-3xl md:text-5xl text-center mb-4">{t.services.title}</h2>
        </Reveal>
        <Reveal delay={130}>
          <p className="text-center text-muted-foreground mb-12 md:mb-16 max-w-lg mx-auto">
            {t.services.description}
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="service-card text-center h-full">
                <s.icon className="w-8 h-8 text-primary mx-auto mb-6" strokeWidth={1.5} />
                <h3 className="font-display text-xl mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
