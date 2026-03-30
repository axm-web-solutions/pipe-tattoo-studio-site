import tattooRealism1 from "@/assets/tattoo-realism-1.jpg";

const About = () => {
  return (
    <section id="sobre-mi" className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
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
            <p className="text-muted-foreground text-xs uppercase tracking-widest">Años</p>
          </div>
        </div>
        <div>
          <p className="section-subtitle mb-4">Conóceme</p>
          <h2 className="font-display text-4xl md:text-5xl mb-8">Mi Historia</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Desde pequeño, el arte fue mi forma de expresión. Comencé dibujando en cualquier
              superficie disponible, y con el tiempo, descubrí que la piel era el lienzo perfecto
              para crear obras que cuentan historias.
            </p>
            <p>
              Me especializo en realismo y línea fina, dos estilos que me permiten explorar
              la precisión y la delicadeza del arte en la piel. Cada tatuaje que realizo es una
              colaboración entre tu visión y mi arte.
            </p>
            <p>
              Mi estudio está diseñado para ofrecerte una experiencia cómoda y segura. Utilizo
              solo materiales de la más alta calidad y sigo estrictos protocolos de higiene.
            </p>
          </div>
          <div className="mt-8 pt-8 border-t border-border">
            <p className="font-display text-lg text-foreground">Pipe Andrade</p>
            <p className="text-muted-foreground text-sm">Artista Tatuador</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
