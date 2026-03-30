import { FormEvent, useMemo, useState } from "react";
import { CalendarDays, Clock3, Phone } from "lucide-react";
import Reveal from "./Reveal";
import { useI18n } from "@/i18n/I18nProvider";

const Contact = () => {
  const { t, language } = useI18n();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [idea, setIdea] = useState("");
  const [error, setError] = useState("");

  const timeSlots = useMemo(
    () => ["10:00", "11:30", "13:00", "15:00", "16:30", "18:00", "19:30"],
    [],
  );

  const whatsappPhone = "573136486022";
  const displayPhone = "+57 313 6486022";

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!name || !date || !time) {
      setError(t.contact.validation);
      return;
    }

    setError("");

    const localizedDate = new Intl.DateTimeFormat(language, {
      dateStyle: "full",
    }).format(new Date(`${date}T00:00:00`));

    const messageHeader =
      language === "fr"
        ? "Bonjour, je souhaite prendre rendez-vous."
        : language === "en"
          ? "Hi, I would like to book an appointment."
          : "Hola, quiero agendar una cita.";

    const fieldName = language === "fr" ? "Nom" : language === "en" ? "Name" : "Nombre";
    const fieldDate = language === "fr" ? "Date" : language === "en" ? "Date" : "Fecha";
    const fieldTime = language === "fr" ? "Heure" : language === "en" ? "Time" : "Hora";
    const fieldStyle =
      language === "fr" ? "Idee ou style" : language === "en" ? "Idea or style" : "Idea o estilo";

    const message = [
      messageHeader,
      `${fieldName}: ${name}`,
      `${fieldDate}: ${localizedDate}`,
      `${fieldTime}: ${time}`,
      `${fieldStyle}: ${idea || "-"}`,
    ].join("\n");

    window.open(`https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="contacto" className="py-20 md:py-24 px-4 sm:px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <p className="section-subtitle text-center mb-4">{t.contact.subtitle}</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display text-3xl md:text-5xl text-center mb-4">{t.contact.title}</h2>
        </Reveal>
        <Reveal delay={130}>
          <p className="text-center text-muted-foreground mb-10 md:mb-14 max-w-2xl mx-auto">{t.contact.intro}</p>
        </Reveal>

        <Reveal delay={180}>
          <div className="border border-border bg-card/60 p-4 sm:p-6 lg:p-10">
            <div className="max-w-5xl mx-auto">
              <h3 className="font-display text-2xl md:text-5xl text-foreground mb-2 uppercase tracking-wide">
                {t.contact.bookingTitle}
              </h3>
              <p className="text-muted-foreground mb-8">{t.contact.bookingSubtitle}</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">{t.contact.nameLabel}</label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t.contact.namePlaceholder}
                      className="h-11 w-full bg-background border border-border px-3 text-sm outline-none focus:border-primary/60 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">{t.contact.dateLabel}</label>
                    <div className="relative">
                      <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="h-11 w-full bg-background border border-border pl-10 pr-3 text-sm outline-none focus:border-primary/60 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">{t.contact.timeLabel}</label>
                    <div className="relative">
                      <Clock3 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <select
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="h-11 w-full bg-background border border-border pl-10 pr-3 text-sm outline-none focus:border-primary/60 transition-colors"
                      >
                        <option value="">{t.contact.timeLabel}</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">{t.contact.styleLabel}</label>
                    <textarea
                      value={idea}
                      onChange={(e) => setIdea(e.target.value)}
                      placeholder={t.contact.stylePlaceholder}
                      rows={4}
                      className="w-full bg-background border border-border px-3 py-2 text-sm outline-none focus:border-primary/60 transition-colors resize-none"
                    />
                  </div>
                </div>

                {error ? <p className="text-sm text-red-400">{error}</p> : null}

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-2">
                  <p className="text-muted-foreground text-sm">
                    {t.contact.note} {displayPhone}
                  </p>
                  <button type="submit" className="btn-primary gap-2 w-full md:w-auto">
                    <Phone size={16} />
                    {t.contact.submit}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Reveal>
        <div className="mt-8 text-center">
          <a href="https://www.instagram.com/pipeandradetattoo/" target="_blank" rel="noopener noreferrer" className="btn-outline">
            @pipeandradetattoo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
