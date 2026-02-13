import { Language, Project, Service, Fragment, Client, GalleryItem, ContentText, TeamMember } from './types';

export const CLIENTS: Client[] = [
  { id: 'wizepod', name: 'Wizepod', logo: '/works/wizepod/wizepod_logo.png' },
  { id: 'north', name: 'North', logo: '/works/North_keyboard/north_logo.png' },
  { id: 'mehaz', name: 'Mehaz', logo: '/works/Mehaz_brandGuide/mehaz_logo.png' },
  { id: 'octopus', name: 'Octopus', logo: '/works/Octopus/octopus_Logo.png' },
  { id: 'reeder', name: 'Reeder', logo: '/works/reeder/reeder-logo.png' },
  { id: 'o3', name: 'O3 Layer', logo: '/works/o3_layer/o3_logo.png' },
  { id: 'hiltar', name: 'Hiltar', logo: '/works/hiltar/Hiltar_Logo.png' },
  { id: 'age-soft', name: 'Age Soft', logo: '/works/Age_Soft/agesoft_logo.png' },

];





export const TEXTS = {
  hero: {
    slogan: {
      [Language.EN]: "ideas, made material.",
      [Language.TR]: "fikirler, maddede somutlaşır."
    }
  },
  manifesto: {
    p1: {
      [Language.EN]: "We believe every idea has a structure.",
      [Language.TR]: "Her fikir bir yapı taşır."
    },
    p2: {
      [Language.EN]: "Design is the act of revealing that structure and giving it form.",
      [Language.TR]: "Tasarım, bu yapının görünür hâle gelmesidir."
    },
    p3: {
      [Language.EN]: "Madde Studio works multi-disciplinary, shaping different expressions from the same underlying matter.",
      [Language.TR]: "Madde Studio multidisipliner çalışır, aynı maddeden farklı formlar ortaya çıkarır."
    }
  },
  services: {
    title: {
      [Language.EN]: "What we shape",
      [Language.TR]: "Biçim Verdiklerimiz"
    },
    subtitle: {
      [Language.EN]: "Different outputs, same substance.",
      [Language.TR]: "Aynı maddeden, farklı çıktılar."
    }
  },
  works: {
    title: {
      [Language.EN]: "Selected Works",
      [Language.TR]: "Seçilmiş İşler"
    }
  },
  clients: {
    title: {
      [Language.EN]: "Clients",
      [Language.TR]: "Müşteriler"
    }
  },
  navigation: {
    studio: {
      [Language.EN]: "Studio",
      [Language.TR]: "Stüdyo"
    },
    works: {
      [Language.EN]: "Works",
      [Language.TR]: "İşler"
    },
    fragments: {
      [Language.EN]: "Fragments",
      [Language.TR]: "Parçalar"
    },
    contact: {
      [Language.EN]: "Contact",
      [Language.TR]: "İletişim"
    }
  },
  fragments: {
    title: {
      [Language.EN]: "Fragments",
      [Language.TR]: "Parçalar"
    },
    description: {
      [Language.EN]: "Moving from studio to cultural actor.",
      [Language.TR]: "Stüdyo olmaktan kültürel aktöre."
    }
  },
  contact: {
    title: {
      [Language.EN]: "Let's give form to an idea.",
      [Language.TR]: "Bir fikre form verelim."
    },
    mail: "info@maddestudio.com"
  },
  footer: {
    inquiries: {
      [Language.EN]: "Inquiries",
      [Language.TR]: "İletişim"
    },
    connect: {
      [Language.EN]: "Connect",
      [Language.TR]: "Bağlantıda Kalın"
    },
    backToTop: {
      [Language.EN]: "Back to top",
      [Language.TR]: "Başa dön"
    }
  },
  projectDetail: {
    back: {
      [Language.EN]: "Back to Works",
      [Language.TR]: "İşlere Dön"
    },
    client: {
      [Language.EN]: "Client",
      [Language.TR]: "Müşteri"
    },
    year: {
      [Language.EN]: "Year",
      [Language.TR]: "Yıl"
    },
    services: {
      [Language.EN]: "Services",
      [Language.TR]: "Hizmetler"
    },
    challenge: {
      [Language.EN]: "The Challenge",
      [Language.TR]: "Problem"
    },
    solution: {
      [Language.EN]: "The Solution",
      [Language.TR]: "Çözüm"
    },
    nextProject: {
      [Language.EN]: "Next Project",
      [Language.TR]: "Sıradaki Proje"
    }
  },
  fragmentDetail: {
    back: {
      [Language.EN]: "Back to Fragments",
      [Language.TR]: "Parçalara Dön"
    },
    previous: {
      [Language.EN]: "Previous Fragments",
      [Language.TR]: "Önceki Parçalar"
    }
  },
  studio: {
    hero: {
      [Language.EN]: "We formulate ideas into reality.",
      [Language.TR]: "Fikirleri gerçeğe formüle ediyoruz."
    },
    description: {
      [Language.EN]: "Madde is a multidisciplinary studio operating at the intersection of architecture, digital design, and branding. We strip away the noise to reveal the essence of every project.",
      [Language.TR]: "Madde; mimari, dijital tasarım ve markalama kesişiminde faaliyet gösteren multidisipliner bir stüdyodur. Her projenin özünü ortaya çıkarmak için gürültüden arındırıyoruz."
    },
    philosophyTitle: {
      [Language.EN]: "Our Philosophy",
      [Language.TR]: "Felsefemiz"
    },
    philosophy: {
      [Language.EN]: "Matter (Madde) is our namesake and our medium. Whether pixels or concrete, we treat every element with the same respect for physics, light, and purpose.",
      [Language.TR]: "Madde, ismimiz ve aracımızdır. İster piksel ister beton olsun, her elemente fizik, ışık ve amaca aynı saygıyla yaklaşırız."
    },
    disciplines: {
      [Language.EN]: "Disciplines",
      [Language.TR]: "Disiplinler"
    },
    partners: {
      [Language.EN]: "Partners",
      [Language.TR]: "Ortaklar"
    },
    team: {
      [Language.EN]: "Team",
      [Language.TR]: "Ekip"
    },
    image: "/studio-geo.png"
  }
};

export const SERVICE_TRANSLATIONS: Record<string, ContentText> = {
  "Brand Identity": { [Language.EN]: "Brand Identity", [Language.TR]: "Marka Kimliği" },
  "UI/UX Design": { [Language.EN]: "UI/UX Design", [Language.TR]: "UI/UX Tasarımı" },
  "Motion Graphics": { [Language.EN]: "Motion Graphics", [Language.TR]: "Hareketli Grafikler" },
  "CGI": { [Language.EN]: "CGI", [Language.TR]: "CGI" },
  "Art Direction": { [Language.EN]: "Art Direction", [Language.TR]: "Sanat Yönetimi" },
  "Motion": { [Language.EN]: "Motion", [Language.TR]: "Hareket" },
  "Dynamic Branding": { [Language.EN]: "Dynamic Branding", [Language.TR]: "Dinamik Markalama" },
  "Motion Design": { [Language.EN]: "Motion Design", [Language.TR]: "Hareket Tasarımı" },
  "UI/UX": { [Language.EN]: "UI/UX", [Language.TR]: "UI/UX" },
  "Creative Coding": { [Language.EN]: "Creative Coding", [Language.TR]: "Yaratıcı Kodlama" },
  "Installation": { [Language.EN]: "Installation", [Language.TR]: "Enstalasyon" },
  "Interaction": { [Language.EN]: "Interaction", [Language.TR]: "Etkileşim" },
  "Product Design": { [Language.EN]: "Product Design", [Language.TR]: "Ürün Tasarımı" },
  "Typography": { [Language.EN]: "Typography", [Language.TR]: "Tipografi" },
  "Editorial Design": { [Language.EN]: "Editorial Design", [Language.TR]: "Editoryal Tasarım" },
  "3D Rendering": { [Language.EN]: "3D Rendering", [Language.TR]: "3D Görselleştirme" },
  "Spatial Design": { [Language.EN]: "Spatial Design", [Language.TR]: "Mekansal Tasarım" },
  "Interior": { [Language.EN]: "Interior", [Language.TR]: "İç Mimari" }
};

export const SERVICES: Service[] = [
  {
    title: {
      [Language.EN]: "Realistic Visualization",
      [Language.TR]: "Gerçekçi Görselleştirme"
    },
    process: {
      [Language.EN]: "Detail → Aesthetics → Realism",
      [Language.TR]: "Detay → Estetik → Gerçekçilik"
    },
    image: "/services/realistic.png"
  },
  {
    title: {
      [Language.EN]: "Dynamic Motion",
      [Language.TR]: "Dinamik Hareket"
    },
    process: {
      [Language.EN]: "Movement → Animation → Life",
      [Language.TR]: "Hareket → Animasyon → Yaşam"
    },
    image: "/services/motion.png"
  },
  {
    title: {
      [Language.EN]: "Story & Process",
      [Language.TR]: "Hikaye & Süreç"
    },
    process: {
      [Language.EN]: "Concept → Narrative → Experience",
      [Language.TR]: "Konsept → Hikaye → Deneyim"
    },
    image: "/services/process.png"
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'hiltar-sutas',
    title: 'Sütaş Factory Animation',
    description: {
      [Language.EN]: "Industrial visualization and process animation for one of Turkey's leading dairy producers.",
      [Language.TR]: "Türkiye'nin önde gelen süt ürünleri üreticilerinden biri için endüstriyel görselleştirme ve süreç animasyonu."
    },
    image: '/works/hiltar/1.png',
    heroFit: 'cover',
    client: "Hiltar",
    clientLogo: '/works/hiltar/Hiltar_Logo.png',
    year: "2024",
    services: ["3D Rendering", "Motion Design", "CGI"],
    challenge: {
      [Language.EN]: "Communicating the scale, hygiene standards, and automated efficiency of a massive production facility without losing visual appeal.",
      [Language.TR]: "Devasa bir üretim tesisinin ölçeğini, hijyen standartlarını ve otomatik verimliliğini görsel çekiciliği kaybetmeden aktarmak."
    },
    solution: {
      [Language.EN]: "We built a high-fidelity digital twin of the factory, using cinematic camera movements and clean, stylized lighting to transform technical processes into a compelling visual narrative.",
      [Language.TR]: "Sinematik kamera hareketleri ve temiz, stilize aydınlatma kullanarak fabrikanın yüksek sadakatli bir dijital ikizini oluşturduk ve teknik süreçleri etkileyici bir görsel anlatıya dönüştürdük."
    },
    gallery: [
      {
        type: 'video',
        src: '/works/hiltar/video1.mp4',
        autoPlay: true,
        loop: true,
        muted: true,
        colSpan: 2
      },
      { type: 'image', src: '/works/hiltar/2.png', colSpan: 1 },
      { type: 'image', src: '/works/hiltar/3.png', colSpan: 1 },
      {
        type: 'video',
        src: '/works/hiltar/video2.mp4',
        autoPlay: true,
        loop: true,
        muted: true,
        colSpan: 1
      },
      {
        type: 'video',
        src: '/works/hiltar/video3.mp4',
        autoPlay: true,
        loop: true,
        muted: true,
        colSpan: 1
      },
      { type: 'image', src: '/works/hiltar/4.png', colSpan: 2 },
      {
        type: 'video',
        src: '/works/hiltar/video4.mp4',
        autoPlay: true,
        loop: true,
        muted: true,
        colSpan: 2
      },
      { type: 'image', src: '/works/hiltar/5.png', colSpan: 1 },
      { type: 'image', src: '/works/hiltar/6.png', colSpan: 1 },
      {
        type: 'video',
        src: '/works/hiltar/video5.mp4',
        autoPlay: true,
        loop: true,
        muted: true,
        colSpan: 1
      },
      { type: 'image', src: '/works/hiltar/7.png', colSpan: 1 },
      {
        type: 'video',
        src: '/works/hiltar/video6.mp4',
        autoPlay: true,
        loop: true,
        muted: true,
        colSpan: 2
      }
    ]
  },
  {
    id: 'age-soft',
    title: 'Age Soft',
    description: {
      [Language.EN]: "Comprehensive digital rebranding and asset creation for Age Soft.",
      [Language.TR]: "Age Soft için kapsamlı dijital marka yenileme ve varlık üretimi."
    },
    image: '/works/Age_Soft/hero.png',
    heroFit: 'cover',
    client: "Age Soft",
    clientLogo: '/works/Age_Soft/agesoft_logo.png',
    year: "2024",
    services: ["UI/UX Design", "Motion Design", "3D Rendering"],
    challenge: {
      [Language.EN]: "Creating a modern, tech-forward web presence that balances professional software solutions with engaging visual storytelling.",
      [Language.TR]: "Profesyonel yazılım çözümlerini ilgi çekici görsel hikaye anlatımıyla dengeleyen modern, teknoloji odaklı bir web varlığı oluşturmak."
    },
    solution: {
      [Language.EN]: "We delivered a complete UI/UX overhaul accompanied by a library of custom 3D assets and motion graphics that breathe life into the company's digital identity.",
      [Language.TR]: "Şirketin dijital kimliğine hayat veren özel 3D varlıklar ve hareketli grafiklerden oluşan bir kütüphane ile desteklenen eksiksiz bir UI/UX yenilemesi sunduk."
    },
    gallery: [
      { type: 'image', src: '/works/Age_Soft/2.png', colSpan: 2 },
      {
        type: 'video',
        src: '/works/Age_Soft/video1.mp4',
        autoPlay: true,
        loop: true,
        muted: true,
        colSpan: 2
      },
      { type: 'image', src: '/works/Age_Soft/1.png', colSpan: 2 },
      { type: 'image', src: '/works/Age_Soft/gif1.gif', colSpan: 2 },
      { type: 'image', src: '/works/Age_Soft/3.png', colSpan: 2 },
      { type: 'image', src: '/works/Age_Soft/gif2.gif', colSpan: 2 }
    ]
  },
  {
    id: 'reeder-fancy',
    title: 'Fancy',
    description: {
      [Language.EN]: "Product design visualization for Reeder's next-gen device.",
      [Language.TR]: "Reeder'ın yeni nesil cihazı için ürün tasarımı görselleştirmesi."
    },
    image: '/works/reeder/hero.png',
    heroFit: 'cover',
    client: "Reeder",
    clientLogo: '/works/reeder/reeder-logo.png',
    year: "2024",
    services: ["Product Design"],
    challenge: {
      [Language.EN]: "Visualizing the tactile qualities and ergonomic details of a new device before physical prototyping.",
      [Language.TR]: "Fiziksel prototip üretiminden önce yeni bir cihazın dokunsal niteliklerini ve ergonomik detaylarını görselleştirmek."
    },
    solution: {
      [Language.EN]: "We focused on material fidelity and geometric purity in our 3D renders, creating a digital presentation that communicates exactly how the device feels in hand.",
      [Language.TR]: "3D renderlarımızda malzeme sadakatine ve geometrik saflığa odaklanarak, cihazın elde tam olarak nasıl hissettirdiğini aktaran bir dijital sunum oluşturduk."
    },
    gallery: [
      {
        type: 'video',
        src: '/works/reeder/Fancyvideo1.mp4',
        autoPlay: true,
        loop: true,
        muted: true
      },
      { type: 'image', src: '/works/reeder/1.png' },
      {
        type: 'video',
        src: '/works/reeder/Fancyvideo2.mp4',
        autoPlay: true,
        loop: true,
        muted: true
      },
      {
        type: 'group',
        items: [
          { src: '/works/reeder/2.png' },
          { src: '/works/reeder/3.png' }
        ]
      },
      {
        type: 'video',
        src: '/works/reeder/Fancyvideo3.mp4',
        autoPlay: true,
        loop: true,
        muted: true
      },
      {
        type: 'video',
        src: '/works/reeder/Fancyvideo4.mp4',
        autoPlay: true,
        loop: true,
        muted: true
      },
      {
        type: 'video',
        src: '/works/reeder/Fancyvideo5.mp4',
        autoPlay: true,
        loop: true,
        muted: true
      },
      { type: 'image', src: '/works/reeder/Fancy.png' }
    ]
  },
  {
    id: 'north-gaming-mouse',
    title: 'Odin Pro WL Gaming Mouse',
    description: {
      [Language.EN]: "Product visualization for the North Odin Pro WL Gaming Mouse.",
      [Language.TR]: "North Odin Pro WL Gaming Mouse için ürün görselleştirmesi."
    },
    image: '/works/North_gamingmouse/hero.png',
    heroFit: 'cover',
    client: "North",
    clientLogo: '/works/North_keyboard/north_logo.png', // Reusing existing logo
    year: "2024",
    services: ["Product Design", "3D Rendering"],
    challenge: {
      [Language.EN]: "Capturing the aerodynamic shape and precise tracking capabilities of a competitive gaming mouse.",
      [Language.TR]: "Rekabetçi bir oyun faresinin aerodinamik şeklini ve hassas izleme yeteneklerini yakalamak."
    },
    solution: {
      [Language.EN]: "We produced high-impact renders and motion graphics that emphasize the lightweight chassis, customizable buttons, and RGB lighting system.",
      [Language.TR]: "Hafif kasayı, özelleştirilebilir düğmeleri ve RGB aydınlatma sistemini vurgulayan yüksek etkili renderlar ve hareketli grafikler ürettik."
    },
    gallery: [
      {
        type: 'video',
        src: '/works/North_gamingmouse/video1_1.mp4',
        autoPlay: true,
        loop: true,
        muted: true,
        colSpan: 1
      },
      { type: 'image', src: '/works/North_gamingmouse/1.png', colSpan: 1 },
      { type: 'image', src: '/works/North_gamingmouse/2.png', colSpan: 1 },
      { type: 'image', src: '/works/North_gamingmouse/3.png', colSpan: 1 },
      {
        type: 'video',
        src: '/works/North_gamingmouse/video2.mp4',
        autoPlay: true,
        loop: true,
        muted: true,
        colSpan: 2
      },
      { type: 'image', src: '/works/North_gamingmouse/4.png', colSpan: 1 },
      { type: 'image', src: '/works/North_gamingmouse/5.png', colSpan: 1 }
    ]
  },
  {
    id: 'wizepod',
    title: 'Wizepod',
    description: {
      [Language.EN]: "Product visualization for a smart autonomous workspace pod.",
      [Language.TR]: "Akıllı otonom çalışma kapsülü için ürün görselleştirmesi."
    },
    image: '/works/wizepod/hero.png',
    heroFit: 'cover',
    client: "Wizepod",
    clientLogo: '/works/wizepod/wizepod_logo.png',
    year: "2024",
    services: ["Product Design", "3D Rendering"],
    challenge: {
      [Language.EN]: "Visualizing a compact, tech-enabled space that feels expansive.",
      [Language.TR]: "Kompakt, teknoloji destekli bir alanı ferah hissettirecek şekilde görselleştirmek."
    },
    solution: {
      [Language.EN]: "We used wide-angle interior compositions and superior lighting setups to showcase the ergonomic comfort and premium finish of the pod.",
      [Language.TR]: "Kapsülün ergonomik konforunu ve birinci sınıf bitişini sergilemek için geniş açılı iç mekan kompozisyonları ve üstün aydınlatma kurulumları kullandık."
    },
    gallery: [
      {
        type: 'video',
        src: '/works/wizepod/videohero.mp4',
        autoPlay: true,
        loop: true,
        muted: true
      },
      { type: 'image', src: '/works/wizepod/1.png' },
      {
        type: 'video',
        src: '/works/wizepod/video1.mp4',
        autoPlay: true,
        loop: true,
        muted: true
      },
      { type: 'image', src: '/works/wizepod/2.png' },
      { type: 'image', src: '/works/wizepod/3.png' },
      { type: 'image', src: '/works/wizepod/4.png' },
      {
        type: 'video',
        src: '/works/wizepod/video2.mp4',
        autoPlay: true,
        loop: true,
        muted: true
      },
      {
        type: 'video',
        src: '/works/wizepod/5.mp4',
        autoPlay: true,
        loop: true,
        muted: true
      },
      { type: 'image', src: '/works/wizepod/6.png' },
      {
        type: 'video',
        src: '/works/wizepod/video3.mp4',
        autoPlay: true,
        loop: true,
        muted: true
      }
    ]
  },
  {
    id: 'reeder-s19',
    title: 'S19',
    description: {
      [Language.EN]: "Product visualization for Reeder's S19 smartphone.",
      [Language.TR]: "Reeder S19 akıllı telefon için ürün görselleştirmesi."
    },
    image: '/works/reeder_s19/1.png',
    heroFit: 'cover',
    client: "Reeder",
    clientLogo: '/works/reeder/reeder-logo.png', // Reusing existing logo
    year: "2024",
    services: ["Product Design"],
    challenge: {
      [Language.EN]: "Creating a compelling visual narrative for a new flagship device.",
      [Language.TR]: "Yeni bir amiral gemisi cihaz için etkileyici bir görsel anlatı oluşturmak."
    },
    solution: {
      [Language.EN]: "We produced high-fidelity 3D renders and motion assets that highlight the device's sleek geometry and material finish.",
      [Language.TR]: "Cihazın şık geometrisini ve malzeme bitişini vurgulayan yüksek sadakatli 3D renderlar ve hareketli varlıklar ürettik."
    },
    gallery: [
      {
        type: 'video',
        src: '/works/reeder_s19/video1_1.mp4',
        autoPlay: true,
        loop: true,
        muted: true
      },
      { type: 'image', src: '/works/reeder_s19/2.png' },
      { type: 'image', src: '/works/reeder_s19/3.png' },
      { type: 'image', src: '/works/reeder_s19/4.png' },
      {
        type: 'video',
        src: '/works/reeder_s19/video2.mp4',
        autoPlay: true,
        loop: true,
        muted: true
      }
    ]
  },
  {
    id: 'north-keyboard',
    title: 'Odin Pro WL68 Keyboard',
    description: {
      [Language.EN]: "Product visualization for the North Odin Pro WL68 Keyboard.",
      [Language.TR]: "North Odin Pro WL68 Klavye için ürün görselleştirmesi."
    },
    image: '/works/North_keyboard/hero.png',
    heroFit: 'cover',
    client: "North",
    clientLogo: '/works/North_keyboard/north_logo.png',
    year: "2024",
    services: ["Product Design", "3D Rendering"],
    challenge: {
      [Language.EN]: "Showcasing the premium build quality and customizability of a high-end mechanical keyboard.",
      [Language.TR]: "Üst düzey bir mekanik klavyenin birinci sınıf yapı kalitesini ve özelleştirilebilirliğini sergilemek."
    },
    solution: {
      [Language.EN]: "We created a series of photorealistic renders and dynamic motion assets that highlight the keyboard's materials, lighting effects, and ergonomic design.",
      [Language.TR]: "Klavyenin malzemelerini, aydınlatma efektlerini ve ergonomik tasarımını vurgulayan bir dizi fotogerçekçi render ve dinamik hareketli varlık oluşturduk."
    },
    gallery: [
      {
        type: 'video',
        src: '/works/North_keyboard/video1_2.mp4',
        autoPlay: true,
        loop: true,
        muted: true
      },
      { type: 'image', src: '/works/North_keyboard/1.png' },
      { type: 'image', src: '/works/North_keyboard/2.png' },
      {
        type: 'video',
        src: '/works/North_keyboard/video2.mp4',
        autoPlay: true,
        loop: true,
        muted: true
      },
      { type: 'image', src: '/works/North_keyboard/3.png' },
      { type: 'image', src: '/works/North_keyboard/4.png' },
      { type: 'image', src: '/works/North_keyboard/5.png' },
      { type: 'image', src: '/works/North_keyboard/6.png' },
      {
        type: 'video',
        src: '/works/North_keyboard/video3.mp4',
        autoPlay: true,
        loop: true,
        muted: true
      }
    ]
  },
  {
    id: 'mehaz-brand',
    title: 'Mehaz Brand Guide',
    description: {
      [Language.EN]: "Brand identity and guidelines for Mehaz.",
      [Language.TR]: "Mehaz için marka kimliği ve kılavuzları."
    },
    image: '/works/Mehaz_brandGuide/a9d27a52-01.png',
    heroFit: 'cover',
    client: "Mehaz",
    clientLogo: '/works/Mehaz_brandGuide/mehaz_logo.png',
    year: "2024",
    services: ["Brand Identity", "Art Direction"],
    challenge: {
      [Language.EN]: "Creating a cohesive and adaptable brand language.",
      [Language.TR]: "Bütünlüklü ve uyarlanabilir bir marka dili oluşturmak."
    },
    solution: {
      [Language.EN]: "We developed a comprehensive brand guide that defines the visual and verbal tone of Mehaz across all touchpoints.",
      [Language.TR]: "Mehaz'ın tüm temas noktalarında görsel ve sözel tonunu tanımlayan kapsamlı bir marka kılavuzu geliştirdik."
    },
    gallery: [
      { type: 'image', src: '/works/Mehaz_brandGuide/a9d27a52-01.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_brandGuide/a9d27a52-02.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_brandGuide/a9d27a52-03.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_brandGuide/a9d27a52-04.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_brandGuide/a9d27a52-05.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_brandGuide/a9d27a52-06.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_brandGuide/a9d27a52-07.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_brandGuide/a9d27a52-08.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_brandGuide/a9d27a52-09.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_brandGuide/a9d27a52-10.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_brandGuide/a9d27a52-11.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_brandGuide/a9d27a52-12.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_brandGuide/a9d27a52-13.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_brandGuide/a9d27a52-14.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_brandGuide/a9d27a52-15.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_brandGuide/a9d27a52-16.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_brandGuide/a9d27a52-17.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_brandGuide/a9d27a52-18.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_brandGuide/a9d27a52-19.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_brandGuide/a9d27a52-20.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_brandGuide/a9d27a52-21.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_brandGuide/a9d27a52-22.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_brandGuide/a9d27a52-23.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_brandGuide/a9d27a52-24.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_brandGuide/a9d27a52-25.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_brandGuide/a9d27a52-26.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_brandGuide/a9d27a52-27.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_brandGuide/a9d27a52-28.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_brandGuide/a9d27a52-29.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_brandGuide/a9d27a52-30.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_brandGuide/a9d27a52-31.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_brandGuide/a9d27a52-32.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_brandGuide/a9d27a52-33.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_brandGuide/a9d27a52-34.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_brandGuide/a9d27a52-35.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_brandGuide/a9d27a52-36.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_brandGuide/a9d27a52-37.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_brandGuide/a9d27a52-38.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_brandGuide/a9d27a52-39.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_brandGuide/a9d27a52-40.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_brandGuide/a9d27a52-41.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_brandGuide/a9d27a52-42.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_brandGuide/a9d27a52-43.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_brandGuide/a9d27a52-44.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_brandGuide/a9d27a52-45.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_brandGuide/a9d27a52-46.png', colSpan: 1 }
    ]
  },
  {
    id: 'o3-layer',
    title: 'O3 Layer',
    description: {
      [Language.EN]: "Brand identity and UI system designed to visualize atmospheric data.",
      [Language.TR]: "Atmosferik verileri görselleştirmek için tasarlanmış marka kimliği ve arayüz sistemi."
    },
    image: '/works/o3_layer/hero.png',
    heroFit: 'contain',
    client: "O3 Layer",
    clientLogo: '/works/o3_layer/o3_logo.png',
    year: "2024",
    services: ["Brand Identity", "UI/UX Design", "Motion Graphics"],
    challenge: {
      [Language.EN]: "O3 Layer needed a visual language to represent their complex environmental data. Our challenge was to design a system that translates invisible, abstract ozone metrics into a tangible and urgent user experience without causing alarm fatigue.",
      [Language.TR]: "O3 Layer'ın karmaşık çevresel verilerini temsil edecek bir görsel dile ihtiyacı vardı. Bizim için zorluk, görünmez ve soyut ozon ölçümlerini, alarm yorgunluğuna neden olmadan somut ve aciliyet hissettiren bir kullanıcı deneyimine dönüştüren bir sistem tasarlamaktı."
    },
    solution: {
      [Language.EN]: "We developed a 'Living Brand' concept where the identity elements react programmatically to data inputs. We created a suite of motion assets and a dual-mode (light/dark) interface system that shifts color spectrums based on air quality index, giving users an immediate visual understanding of their environment.",
      [Language.TR]: "Kimlik öğelerinin veri girişlerine programatik olarak tepki verdiği bir 'Yaşayan Marka' konsepti geliştirdik. Hava kalitesi indeksine göre renk spektrumlarını değiştiren bir dizi hareketli asset ve çift modlu (açık/koyu) bir arayüz sistemi yaratarak, kullanıcılara çevrelerini anında görsel olarak kavrama imkanı sunduk."
    },
    gallery: [
      {
        type: 'group',
        colSpan: 1,
        items: [
          { src: '/works/o3_layer/gif1.gif' },
          { src: '/works/o3_layer/gif2.gif' }
        ]
      },
      {
        type: 'text',
        colSpan: 1,
        content: {
          [Language.EN]: "The core of our design strategy was 'Data as Motion'. Instead of static charts, we used fluid dynamics to represent air currents.",
          [Language.TR]: "Tasarım stratejimizin çekirdeği 'Hareket Olarak Veri'ydi. Statik grafikler yerine, hava akımlarını temsil etmek için akışkan dinamikler kullandık."
        }
      },
      {
        type: 'text',
        colSpan: 1,
        content: {
          [Language.EN]: "We designed the interface to be legible in all lighting conditions, creating a distinct Light and Dark mode that maintains brand coherence.",
          [Language.TR]: "Arayüzü her türlü ışık koşulunda okunabilir olacak şekilde tasarladık ve marka bütünlüğünü koruyan belirgin bir Açık ve Koyu mod oluşturduk."
        }
      },
      {
        type: 'group',
        colSpan: 1,
        items: [
          { src: '/works/o3_layer/2.png' },
          { src: '/works/o3_layer/1.jpg' }
        ]
      }
    ]
  },
  {
    id: 'octopus-bridge',
    title: 'Octopus Bridge',
    description: {
      [Language.EN]: "Brand identity and motion design for Octopus Bridge.",
      [Language.TR]: "Octopus Bridge için marka kimliği ve hareket tasarımı."
    },
    image: '/works/Octopus/hero.png',
    heroFit: 'cover',
    client: "Octopus",
    clientLogo: '/works/Octopus/octopus_Logo.png',
    year: "2024",
    services: ["Brand Identity", "Motion Design"],
    challenge: {
      [Language.EN]: "Creating a dynamic visual system for a connected ecosystem.",
      [Language.TR]: "Bağlantılı bir ekosistem için dinamik bir görsel sistem oluşturmak."
    },
    solution: {
      [Language.EN]: "We designed a vibrant and fluid identity that represents seamless connectivity and adaptability.",
      [Language.TR]: "Kesintisiz bağlantıyı ve uyarlanabilirliği temsil eden canlı ve akışkan bir kimlik tasarladık."
    },
    gallery: [
      { type: 'image', src: '/works/Octopus/1.png', colSpan: 2 },
      { type: 'image', src: '/works/Octopus/big_anim.gif', colSpan: 2 },
      {
        type: 'group',
        colSpan: 2,
        cols: 4,
        items: [
          { src: '/works/Octopus/Head.png' },
          { src: '/works/Octopus/beher.gif' },
          { src: '/works/Octopus/buyutec.gif' },
          { src: '/works/Octopus/merkeziyetsiz.gif' }
        ]
      },
      {
        type: 'group',
        colSpan: 2,
        cols: 4,
        items: [
          { src: '/works/Octopus/portal.gif' },
          { src: '/works/Octopus/ucan.gif' },
          { src: '/works/Octopus/09345c204061893.66a24feeb86e1.gif' },
          { src: '/works/Octopus/20518f204061893.66a24feebe41a.gif' }
        ]
      },
      {
        type: 'group',
        colSpan: 2,
        cols: 4,
        items: [
          { src: '/works/Octopus/2a51b2204061893.66a24feeb9fa9.gif' },
          { src: '/works/Octopus/2f6196204061893.66a24feebc86d.gif' },
          { src: '/works/Octopus/487c2c204061893.66a24feebeba5.gif' },
          { src: '/works/Octopus/547947204061893.66a24feebfd57.gif' }
        ]
      },
      {
        type: 'group',
        colSpan: 2,
        cols: 4,
        items: [
          { src: '/works/Octopus/6c3c10204061893.66a24feec07a6.gif' },
          { src: '/works/Octopus/76c0f4204061893.66a24feebd092.gif' },
          { src: '/works/Octopus/98c260204061893.66a24feeb9a62.gif' },
          { src: '/works/Octopus/990381204061893.66a24feebf40b.gif' }
        ]
      },
      {
        type: 'group',
        colSpan: 2,
        cols: 4,
        items: [
          { src: '/works/Octopus/e42db6204061893.66a24feec0f75.gif' },
          { src: '/works/Octopus/ebefc1204061893.66a24feec185f.gif' },
          { src: '/works/Octopus/eccbd3204061893.66a24feebda5d.gif' },
          { src: '/works/Octopus/ed5814204061893.66a24feeb8cab.gif' }
        ]
      }
    ]
  },
];

export const FRAGMENTS: Fragment[] = [
  {
    id: 'f1',
    title: 'Study: Typography on Glass',
    type: 'Sketch',
    date: '2023.10',
    image: 'https://picsum.photos/seed/glassy/600/600',
    content: {
      [Language.EN]: "Exploring how typography interacts with transparent materials. We tested various etching depths and backlighting techniques to see how legibility changes under different angles. The goal was to create signs that feel floating yet permanent.",
      [Language.TR]: "Tipografinin şeffaf malzemelerle nasıl etkileşime girdiğini araştırıyoruz. Farklı açılar altında okunabilirliğin nasıl değiştiğini görmek için çeşitli aşındırma derinliklerini ve arkadan aydınlatma tekniklerini test ettik. Amaç, havada asılı duran ama kalıcı hissettiren tabelalar yaratmaktı."
    }
  },
  {
    id: 'f2',
    title: 'Design Week Panel',
    type: 'News',
    date: '2023.11',
    image: 'https://picsum.photos/seed/panel/600/600',
    content: {
      [Language.EN]: "We were honored to speak at Istanbul Design Week about 'Digital Materiality'. It was a great opportunity to discuss how we bring physical tactile sensations into the digital realm.",
      [Language.TR]: "İstanbul Tasarım Haftası'nda 'Dijital Maddesellik' üzerine konuşmaktan onur duyduk. Fiziksel dokunsal hisleri dijital dünyaya nasıl taşıdığımızı tartışmak için harika bir fırsattı."
    }
  },
  {
    id: 'f3',
    title: 'Texture Experiments: Concrete',
    type: 'Sketch',
    date: '2023.12',
    image: 'https://picsum.photos/seed/concrete/600/600',
    content: {
      [Language.EN]: "Concrete is often seen as cold and brutal. We wanted to find the warmth in it. By mixing organic compounds into the aggregate, we achieved a surface that feels almost like skin.",
      [Language.TR]: "Beton genellikle soğuk ve brütal olarak görülür. Biz içindeki sıcaklığı bulmak istedik. Karışıma organik bileşenler ekleyerek neredeyse deri gibi hissettiren bir yüzey elde ettik."
    }
  },
  {
    id: 'f4',
    title: 'Generative Grid Systems',
    type: 'Sketch',
    date: '2024.01',
    image: 'https://picsum.photos/seed/grids/600/600',
    content: {
      [Language.EN]: "Can a grid be strict yet fluid? We built a generative tool that creates layout grids based on the rhythm of the content provided. The result is a structure that adapts to the story, not the other way around.",
      [Language.TR]: "Bir ızgara sistemi hem katı hem akışkan olabilir mi? İçeriğin ritmine göre mizanpaj ızgaraları oluşturan üretken bir araç geliştirdik. Sonuç, hikayeye uyum sağlayan bir yapı, tersi değil."
    }
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 'doruk',
    name: 'Doruk Teker',
    role: { [Language.EN]: 'Co-Founder', [Language.TR]: 'Kurucu Ortak' },
    bio: {
      [Language.EN]: "Born in Zurich in 1967. Doruk Teker got his Bachelor’s degree in METU Department of Architecture (1989) and his Master’s degree from SCI-ARC (1992) in Los Angeles. Has been carrying out projects and research on architecture and urban design at Madde since 2000 as co-founder. Lectured in various universities.",
      [Language.TR]: "1967 yılında Zürih'te doğdu. Doruk Teker, ODTÜ Mimarlık Bölümü'nden lisans (1989) ve Los Angeles'taki SCI-ARC'tan yüksek lisans (1992) derecesini aldı. 2000 yılından bu yana Madde'de kurucu ortak olarak mimarlık ve kentsel tasarım üzerine proje ve araştırmalar yürütmektedir."
    },
    image: 'https://placehold.co/400x500/000000/FFFFFF/png?text=Doruk',
    isLead: true
  },
  {
    id: 'nebil',
    name: 'Nebil Erşan Elcenabi',
    role: { [Language.EN]: 'Co-Founder', [Language.TR]: 'Kurucu Ortak' },
    bio: {
      [Language.EN]: "Born in Zurich in 1967. Nebil Erşan Elcenabi got his Bachelor’s degree in METU Department of Architecture (1989) and his Master’s degree from SCI-ARC (1992) in Los Angeles. Has been carrying out projects and research on architecture and urban design at Madde since 2000 as co-founder. Lectured in various universities.",
      [Language.TR]: "1967 yılında Zürih'te doğdu. Nebil Erşan Elcenabi, ODTÜ Mimarlık Bölümü'nden lisans (1989) ve Los Angeles'taki SCI-ARC'tan yüksek lisans (1992) derecesini aldı. 2000 yılından bu yana Madde'de kurucu ortak olarak mimarlık ve kentsel tasarım üzerine proje ve araştırmalar yürütmektedir."
    },
    image: 'https://placehold.co/400x500/000000/FFFFFF/png?text=Nebil',
    isLead: true
  },
  {
    id: 'yusuf',
    name: 'Yusuf Ihlamur',
    role: { [Language.EN]: 'Partner', [Language.TR]: 'Ortak' },
    bio: {
      [Language.EN]: "Born in Zurich in 1967. Yusuf Ihlamur got his Bachelor’s degree in METU Department of Architecture (1989) and his Master’s degree from SCI-ARC (1992) in Los Angeles. Has been carrying out projects and research on architecture and urban design at Madde since 2000 as co-founder. Lectured in various universities.",
      [Language.TR]: "1967 yılında Zürih'te doğdu. Yusuf Ihlamur, ODTÜ Mimarlık Bölümü'nden lisans (1989) ve Los Angeles'taki SCI-ARC'tan yüksek lisans (1992) derecesini aldı. 2000 yılından bu yana Madde'de kurucu ortak olarak mimarlık ve kentsel tasarım üzerine proje ve araştırmalar yürütmektedir."
    },
    image: 'https://placehold.co/400x500/000000/FFFFFF/png?text=Yusuf',
    isLead: true
  },
  {
    id: 'member4',
    name: 'Zeynep Yılmaz',
    role: { [Language.EN]: 'Senior Architect', [Language.TR]: 'Kıdemli Mimar' },
    isLead: false
  },
  {
    id: 'member5',
    name: 'Can Demir',
    role: { [Language.EN]: 'Designer', [Language.TR]: 'Tasarımcı' },
    isLead: false
  },
  {
    id: 'member6',
    name: 'Elif Kaya',
    role: { [Language.EN]: 'Architect', [Language.TR]: 'Mimar' },
    isLead: false
  },
  {
    id: 'member7',
    name: 'Ayşe Yıldız',
    role: { [Language.EN]: 'Architect', [Language.TR]: 'Mimar' },
    isLead: false
  },
  {
    id: 'member8',
    name: 'Mehmet Öz',
    role: { [Language.EN]: 'Architect', [Language.TR]: 'Mimar' },
    isLead: false
  }
];

export const BRANDS = [
  "TechFlow", "Nordic Home", "Silva", "Future Lab", "Urbanite", "Aura", "Vertex"
];
