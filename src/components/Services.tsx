import { Paintbrush, Pen, Sparkles, RefreshCw } from "lucide-react";

const services = [
  {
    icon: Paintbrush,
    title: "Realismo",
    desc: "Tatuajes hiperrealistas que capturan cada detalle con precisión fotográfica. Retratos, animales y naturaleza.",
  },
  {
    icon: Pen,
    title: "Línea Fina",
    desc: "Trazos delicados y precisos para diseños elegantes y minimalistas. Perfecto para piezas sutiles y detalladas.",
  },
  {
    icon: Sparkles,
    title: "Diseño Personalizado",
    desc: "Creamos diseños únicos basados en tus ideas y visión personal. Cada pieza es irrepetible.",
  },
  {
    icon: RefreshCw,
    title: "Cover Up",
    desc: "Transformamos tatuajes antiguos en nuevas obras de arte. Dale una nueva vida a tu piel.",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <p className="section-subtitle text-center mb-4">Especialidades</p>
        <h2 className="font-display text-4xl md:text-5xl text-center mb-4">Servicios</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-lg mx-auto">
          Cada estilo tiene su propia magia. Descubre cuál resuena contigo.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="service-card text-center">
              <s.icon className="w-8 h-8 text-primary mx-auto mb-6" strokeWidth={1.5} />
              <h3 className="font-display text-xl mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
