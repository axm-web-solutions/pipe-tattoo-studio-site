import { useState } from "react";
import Reveal from "./Reveal";
import { useI18n } from "@/i18n/I18nProvider";

import tattooRealism1 from "@/assets/tattoo-realism-1.jpg";
import tattooRealism2 from "@/assets/tattoo-realism-2.jpg";
import tattooRealism3 from "@/assets/tattoo-realism-3.jpg";

const instagramImage1 =
  "https://scontent-bog2-1.cdninstagram.com/v/t51.82787-15/653606327_17970365145008689_1425318246489329489_n.jpg?stp=dst-jpg_e35_p480x480_tt6&_nc_cat=104&ig_cache_key=MzUxNjUyMjkxNjAyNDM2MzI0MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=FzfKdXb_WuQQ7kNvwHmMe0q&_nc_oc=AdoRYSFhVXTYKCAmlFMr5EM7gcsLjtDMvKDiBamQqiOdrYEE548zfQ6kJ-8-2gheqGI&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-bog2-1.cdninstagram.com&_nc_gid=nf8HCy7PJKxGDsrKIAwL_w&_nc_ss=7a32e&oh=00_AfxhToBCAbVoGFc7JOZ0dZ__Qjm8X4glwCdM2UdYjTSypA&oe=69D0C930";
const instagramImage2 =
  "https://scontent-bog2-1.cdninstagram.com/v/t51.82787-15/655510917_18113690443679833_7611683317281669310_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ig_cache_key=MzUxNjQ0Nzc0OTA4MDExMjM5Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=P5bKRF4MdvQQ7kNvwHlx4E0&_nc_oc=AdoHX4B3SV2ddaliTdmVDp-DCqc-oYu-IUZnXifGxc783aD0Q9ErzZaoTkolQgnsa4g&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-bog2-1.cdninstagram.com&_nc_gid=nf8HCy7PJKxGDsrKIAwL_w&_nc_ss=7a32e&oh=00_AfwV3vFur_8jSkAxb-T7UelvynIfJ1B8FOqPYilxs_dVbw&oe=69D0DCDE";
const instagramImage3 =
  "https://scontent-bog2-2.cdninstagram.com/v/t51.82787-15/619336977_18434761864109841_4799908832633549007_n.jpg?stp=dst-jpegr_e35_p640x640_sh0.08_tt6&_nc_cat=108&ig_cache_key=MzgxMzc1MDI1OTM4MjIzNDc1MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=dcXPLtwCz6kQ7kNvwHxPFrA&_nc_oc=AdrfYlU1IpwE6J10O_gKq5peN9OvdgHNlGGJ3RhHlhk5iyrW0GZRmjPWje95N5a1pkE&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-bog2-2.cdninstagram.com&_nc_gid=kBxQ-Wf_kqOx6kw_AtXjCQ&_nc_ss=7a32e&oh=00_AfxMb3vx1val__9GTNIGGV_sZO98IDCvk1ckhit4ncRNMg&oe=69D0BE67";
const instagramImage4 =
  "https://scontent-bog2-1.cdninstagram.com/v/t51.82787-15/554467732_18417011719109841_6749893080984087403_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=101&ig_cache_key=MzczMDk1ODIwNTkwMDU4MjU4OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=rKGET6Pw5OMQ7kNvwGA7iPA&_nc_oc=Adpo9rmv18_vNFmfzKzlmQwNrBENz-_W85dLo7K9LG22pxR5o9efz9QURhVkrDXEbi0&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-bog2-1.cdninstagram.com&_nc_gid=kBxQ-Wf_kqOx6kw_AtXjCQ&_nc_ss=7a32e&oh=00_AfwFPmZtJ1yuV6h4yN8rN7FYdQaveyjINrglOsU0xVIYYA&oe=69D0C584";
const instagramImage5 =
  "https://scontent-bog2-1.cdninstagram.com/v/t51.82787-15/541076186_18412721689109841_7228638183149972286_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=106&ig_cache_key=MzcwOTIxMzI2OTI1MzcxOTI5OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=BESheROrVPUQ7kNvwE3ekPo&_nc_oc=AdqzF1jJh9R_TzRaN7Z5vkIE7rsXfFi1M8CR6VnACCFbBpiwYs4mpSntYB-iVT6f7Ak&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-bog2-1.cdninstagram.com&_nc_gid=kBxQ-Wf_kqOx6kw_AtXjCQ&_nc_ss=7a32e&oh=00_AfyumAgmu7iylDE0z6OhKo73yuEtradVVmVN_DwRoMG9uA&oe=69D0D976";

const Gallery = () => {
  const { t } = useI18n();
  const [active, setActive] = useState<"all" | "realism" | "fineline">("all");

  const works = t.gallery.works.map((work, idx) => ({
    ...work,
    src: [tattooRealism1, instagramImage1, tattooRealism2, instagramImage2, tattooRealism3][idx],
  }));
  const extraWorks = [
    { ...works[0], src: instagramImage3 },
    { ...works[1], src: instagramImage4 },
    { ...works[2], src: instagramImage5 },
  ];
  const allWorks = [...works, ...extraWorks];
  const filters = [
    { key: "all", label: t.gallery.filters.all },
    { key: "realism", label: t.gallery.filters.realism },
    { key: "fineline", label: t.gallery.filters.fineline },
  ] as const;

  const filtered = active === "all" ? allWorks : allWorks.filter((w) => w.categoryKey === active);

  return (
    <section id="galeria" className="py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <p className="section-subtitle text-center mb-4">{t.gallery.subtitle}</p>
        </Reveal>
        <Reveal delay={70}>
          <h2 className="font-display text-3xl md:text-5xl text-center mb-10">{t.gallery.title}</h2>
        </Reveal>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`text-sm uppercase tracking-widest transition-colors duration-300 pb-1 border-b-2 ${
                active === f.key
                  ? "text-primary border-primary"
                  : "text-muted-foreground border-transparent hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((work, i) => (
            <Reveal key={`${work.title}-${i}`} delay={i * 60}>
              <div className="gallery-card group aspect-[3/4]">
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
