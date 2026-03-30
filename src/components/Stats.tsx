const stats = [
  { value: "500+", label: "Tatuajes Realizados" },
  { value: "5+", label: "Años de Experiencia" },
  { value: "100%", label: "Higiene y Seguridad" },
  { value: "5★", label: "Calificación Clientes" },
];

const Stats = () => {
  return (
    <section className="py-16 px-6 border-y border-border/50">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <p className="stat-number text-3xl md:text-4xl font-bold mb-2">{s.value}</p>
            <p className="text-muted-foreground text-xs uppercase tracking-widest">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
