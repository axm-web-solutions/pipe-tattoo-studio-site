import { useState } from "react";

import tattooRealism1 from "@/assets/tattoo-realism-1.jpg";
import tattooRealism2 from "@/assets/tattoo-realism-2.jpg";
import tattooRealism3 from "@/assets/tattoo-realism-3.jpg";
import tattooFineline1 from "@/assets/tattoo-fineline-1.jpg";
import tattooFineline2 from "@/assets/tattoo-fineline-2.jpg";

const works = [
  { src: tattooRealism1, title: "Retrato realista", category: "Realismo" },
  { src: tattooFineline1, title: "Flor línea fina", category: "Línea Fina" },
  { src: tattooRealism2, title: "León realista", category: "Realismo" },
  { src: tattooFineline2, title: "Brújula geométrica", category: "Línea Fina" },
  { src: tattooRealism3, title: "Ojo con lágrimas", category: "Realismo" },
];

const filters = ["Todos", "Realismo", "Línea Fina"];

const Gallery = () => {
  const [active, setActive] = useState("Todos");

  const filtered = active === "Todos" ? works : works.filter((w) => w.category === active);

  return (
    <section id="galeria" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="section-subtitle text-center mb-4">Mi Trabajo</p>
        <h2 className="font-display text-4xl md:text-5xl text-center mb-12">Galería</h2>
        <div className="flex justify-center gap-6 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`text-sm uppercase tracking-widest transition-colors duration-300 pb-1 border-b-2 ${
                active === f
                  ? "text-primary border-primary"
                  : "text-muted-foreground border-transparent hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((work, i) => (
            <div key={i} className="gallery-card aspect-[3/4]">
              <img
                src={work.src}
                alt={work.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-xs uppercase tracking-widest text-primary">{work.category}</span>
                <h3 className="font-display text-lg text-foreground mt-1">{work.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
