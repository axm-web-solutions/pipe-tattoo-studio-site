import Reveal from "./Reveal";
import { useI18n } from "@/i18n/I18nProvider";

const Stats = () => {
  const { t } = useI18n();
  const stats = [
    { value: "500+", label: t.stats.tattoos },
    { value: "5+", label: t.stats.years },
    { value: "100%", label: t.stats.hygiene },
    { value: "5★", label: t.stats.rating },
  ];

  return (
    <section className="py-14 md:py-16 px-4 sm:px-6 border-y border-border/50">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 70}>
            <div className="text-center">
              <p className="stat-number text-3xl md:text-4xl font-bold mb-2">{s.value}</p>
              <p className="text-muted-foreground text-[10px] sm:text-xs uppercase tracking-widest">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Stats;
