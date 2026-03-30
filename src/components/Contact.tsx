import { Instagram, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contacto" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <p className="section-subtitle text-center mb-4">Hablemos</p>
        <h2 className="font-display text-4xl md:text-5xl text-center mb-4">Contacto</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-lg mx-auto">
          ¿Tienes una idea en mente? Me encantaría escucharla. Escríbeme por Instagram para agendar tu consulta.
        </p>
        <div className="max-w-md mx-auto space-y-6">
          <a
            href="https://www.instagram.com/pipeandradetattoo/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-card border border-border hover:border-primary/40 transition-colors group"
          >
            <Instagram className="w-6 h-6 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest">Instagram</p>
              <p className="text-foreground group-hover:text-primary transition-colors">@pipeandradetattoo</p>
            </div>
          </a>
          <a
            href="mailto:contacto@pipeandrade.com"
            className="flex items-center gap-4 p-6 bg-card border border-border hover:border-primary/40 transition-colors group"
          >
            <Mail className="w-6 h-6 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest">Email</p>
              <p className="text-foreground group-hover:text-primary transition-colors">contacto@pipeandrade.com</p>
            </div>
          </a>
        </div>
        <div className="mt-16 text-center">
          <a
            href="https://www.instagram.com/pipeandradetattoo/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Agendar Cita
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
