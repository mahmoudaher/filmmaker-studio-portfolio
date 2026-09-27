export const photographyProjects = [
  {
    _id: "local-project-1",
    title: "Syrian White Helmets Work Miracles After Earthquake",
    subtitle:
      "In the aftermath of the devastating earthquake that struck Turkey and northern Syria, the Syrian White Helmets emerged once again as a symbol of resilience and humanity. Working through rubble, freezing nights, and unimaginable loss, these volunteer rescuers risked everything to save lives — offering hope in a place overwhelmed by tragedy. For many survivors, the White Helmets were the difference between death and life, proving that even in the darkest disasters, compassion can still shine.",
    slug: "syrian-white-helmets-earthquake",
    coverImage: "/assets/1/1.jpg",
    images: [
      "/assets/1/2.png",
      "/assets/1/3.png",
      "/assets/1/4.png",
      "/assets/1/5.png",
      "/assets/1/6.png",
      "/assets/1/7.png",
      "/assets/1/8.png",
      "/assets/1/9.png",
      "/assets/1/10.png",
      "/assets/1/11.png",
    ],
  },
  {
    _id: "local-project-2",
    title: "Desertification in an Iraqi Bread Basket",
    subtitle:
      "As water resources dry up and sandstorms take over the skies, southern Iraq’s farmlands are slowly turning into salt-covered wastelands. Farmers who once depended on rivers and fertile soil are now fighting to keep their land alive.",
    slug: "desertification-iraqi-bread-basket",
    coverImage: "/assets/2/Screenshot 2026-02-10 220226.png",
    images: [
      "/assets/2/Screenshot 2026-02-10 220131.png",
      "/assets/2/Screenshot 2026-02-10 220157.png",
      "/assets/2/Screenshot 2026-02-10 220205.png",
      "/assets/2/Screenshot 2026-02-10 220212.png",
      "/assets/2/Screenshot 2026-02-10 220218.png",
      "/assets/2/Screenshot 2026-02-10 220226.png",
      "/assets/2/Screenshot 2026-02-10 220231.png",
      "/assets/2/Screenshot 2026-02-10 220238.png",
      "/assets/2/Screenshot 2026-02-10 220244.png",
      "/assets/2/Screenshot 2026-02-10 220252.png",
      "/assets/2/Screenshot 2026-02-10 220258.png",
      "/assets/2/Screenshot 2026-02-10 220305.png",
      "/assets/2/Screenshot 2026-02-10 220312.png",
    ],
  },
  {
    _id: "local-project-3",
    title: "Blind Spots: Stories from a Leper Colony",
    subtitle:
      "In Srinagar, Kashmir, one of the region’s only leper colonies remains home to people living with disease, poverty, and lifelong prejudice. Through intimate interviews and photographs, journalist Faisal Magray sheds light on a community that has endured stigma — yet built unbreakable bonds.",
    slug: "blind-spots-leper-colony",
    coverImage: "/assets/3/Screenshot 2026-02-10 222032.png",
    images: [
      "/assets/3/Screenshot 2026-02-10 221921.png",
      "/assets/3/Screenshot 2026-02-10 221928.png",
      "/assets/3/Screenshot 2026-02-10 221937.png",
      "/assets/3/Screenshot 2026-02-10 221945.png",
      "/assets/3/Screenshot 2026-02-10 221951.png",
      "/assets/3/Screenshot 2026-02-10 221958.png",
      "/assets/3/Screenshot 2026-02-10 222006.png",
      "/assets/3/Screenshot 2026-02-10 222012.png",
      "/assets/3/Screenshot 2026-02-10 222018.png",
      "/assets/3/Screenshot 2026-02-10 222026.png",
      "/assets/3/Screenshot 2026-02-10 222039.png",
      "/assets/3/Screenshot 2026-02-10 222046.png",
    ],
  },
  {
    _id: "local-project-4",
    title:
      "Pure Apocalypse: A Photographer's Journey Through the Pantanal Wildfires",
    subtitle:
      "As unprecedented fires devastate South America’s Pantanal wetlands, photographer Lalo de Almeida documents the destruction and the fragile lives caught inside it. His award-winning images reveal a landscape on the edge of collapse.",
    slug: "pure-apocalypse-pantanal-wildfires",
    coverImage: "/assets/4/Screenshot 2026-02-10 222150.png",
    images: [
      "/assets/4/Screenshot 2026-02-10 222214.png",
      "/assets/4/Screenshot 2026-02-10 222219.png",
      "/assets/4/Screenshot 2026-02-10 222223.png",
      "/assets/4/Screenshot 2026-02-10 222229.png",
      "/assets/4/Screenshot 2026-02-10 222235.png",
      "/assets/4/Screenshot 2026-02-10 222238.png",
      "/assets/4/Screenshot 2026-02-10 222245.png",
      "/assets/4/Screenshot 2026-02-10 222249.png",
    ],
  },
  {
    _id: "local-project-5",
    title: "Demolitions Destroying Lives in Lagos",
    subtitle:
      "In Makoko, Lagos’s waterfront community, homes were demolished with little warning, leaving families displaced overnight. This photo essay captures the human cost of forced evictions and the struggle to survive without a place to call home.",
    slug: "demolitions-destroying-lives-lagos",
    coverImage: "/assets/5/Screenshot 2026-02-10 222405.png",
    images: [
      "/assets/5/Screenshot 2026-02-10 222354.png",
      "/assets/5/Screenshot 2026-02-10 222416.png",
      "/assets/5/Screenshot 2026-02-10 222421.png",
      "/assets/5/Screenshot 2026-02-10 222427.png",
      "/assets/5/Screenshot 2026-02-10 222431.png",
      "/assets/5/Screenshot 2026-02-10 222435.png",
      "/assets/5/Screenshot 2026-02-10 222441.png",
      "/assets/5/Screenshot 2026-02-10 222445.png",
      "/assets/5/Screenshot 2026-02-10 222449.png",
      "/assets/5/Screenshot 2026-02-10 222453.png",
      "/assets/5/Screenshot 2026-02-10 222457.png",
    ],
  },
];

export function getProjectBySlug(slug) {
  return photographyProjects.find((p) => p.slug === slug) ?? null;
}
