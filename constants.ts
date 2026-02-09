import { Language, Project, Service, Fragment, Client, GalleryItem, ContentText } from './types';

export const CLIENTS: Client[] = [
  { id: '1', name: 'TechFlow', logo: 'https://placehold.co/200x80/000000/FFFFFF/png?text=TechFlow' },
  { id: '2', name: 'Nordic Home', logo: 'https://placehold.co/200x80/000000/FFFFFF/png?text=Nordic+Home' },
  { id: '3', name: 'Silva', logo: 'https://placehold.co/200x80/000000/FFFFFF/png?text=Silva' },
  { id: '4', name: 'Future Lab', logo: 'https://placehold.co/200x80/000000/FFFFFF/png?text=Future+Lab' },
  { id: '5', name: 'Urbanite', logo: 'https://placehold.co/200x80/000000/FFFFFF/png?text=Urbanite' },
  { id: '6', name: 'Aura', logo: 'https://placehold.co/200x80/000000/FFFFFF/png?text=Aura' },
  { id: '7', name: 'Vertex', logo: 'https://placehold.co/200x80/000000/FFFFFF/png?text=Vertex' },
  { id: '8', name: 'Omni', logo: 'https://placehold.co/200x80/000000/FFFFFF/png?text=Omni' },
  { id: '9', name: 'Zenith', logo: 'https://placehold.co/200x80/000000/FFFFFF/png?text=Zenith' }
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
    id: 'o3-layer',
    title: 'O3 Layer',
    description: {
      [Language.EN]: "Brand identity and UI system designed to visualize atmospheric data.",
      [Language.TR]: "Atmosferik verileri görselleştirmek için tasarlanmış marka kimliği ve arayüz sistemi."
    },
    image: '/works/o3_layer/hero.png',
    heroFit: 'contain',
    hero_bg: '/works/o3_layer/hero.png',
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
    id: '2',
    title: 'Canvas Living',
    description: {
      [Language.EN]: "Architectural visualization for sustainable urban housing.",
      [Language.TR]: "Sürdürülebilir kentsel konutlar için mimari görselleştirme."
    },
    image: 'https://picsum.photos/seed/canvas/800/800',
    client: "Canvas Living",
    year: "2023",
    services: ["CGI", "Art Direction", "Motion"],
    challenge: {
      [Language.EN]: "Visualizing sustainability without the green-washing clichés.",
      [Language.TR]: "Sürdürülebilirliği 'yeşil aklama' klişeleri olmadan görselleştirmek."
    },
    solution: {
      [Language.EN]: "A focus on light, texture, and honest materials. We rendered not just the buildings, but the life that fills them.",
      [Language.TR]: "Işık, doku ve dürüst malzemelere odaklandık. Sadece binaları değil, onları dolduran yaşamı da modelledik."
    },
    gallery: [
      { type: 'image', src: 'https://picsum.photos/seed/canvas1/1200/800' },
      { type: 'image', src: 'https://picsum.photos/seed/canvas2/800/1200' },
      { type: 'image', src: 'https://picsum.photos/seed/canvas3/1200/800' },
    ]
  },
  {
    id: '3',
    title: 'Sonar Audio',
    description: {
      [Language.EN]: "Visual identity and motion graphics for a sound lab.",
      [Language.TR]: "Bir ses laboratuvarı için görsel kimlik ve hareketli grafikler."
    },
    image: 'https://picsum.photos/seed/sonar/800/800',
    client: "Sonar Audio",
    year: "2023",
    services: ["Dynamic Branding", "Motion Design", "UI/UX"],
    challenge: {
      [Language.EN]: "Making sound visible.",
      [Language.TR]: "Sesi görünür kılmak."
    },
    solution: {
      [Language.EN]: "We utilized generative audio-reactive visuals as the core brand element. The identity literally pulses to the beat of their work.",
      [Language.TR]: "Markanın temel öğesi olarak sesle tepkimeye giren üretken görseller kullandık. Kimlik, yaptıkları işin ritmiyle kelimenin tam anlamıyla nabız gibi atıyor."
    },
    gallery: [
      { type: 'image', src: 'https://picsum.photos/seed/sonar1/1200/800' },
      { type: 'image', src: 'https://picsum.photos/seed/sonar2/800/1200' },
      { type: 'image', src: 'https://picsum.photos/seed/sonar3/1200/800' },
    ]
  },
  {
    id: '4',
    title: 'Aeon Flux',
    description: {
      [Language.EN]: "Interactive digital installation for a modern art museum.",
      [Language.TR]: "Modern sanat müzesi için interaktif dijital enstalasyon."
    },
    image: 'https://picsum.photos/seed/aeon/800/800',
    client: "MOMA NY",
    year: "2022",
    services: ["Creative Coding", "Installation", "Interaction"],
    challenge: {
      [Language.EN]: "Engaging a passive audience in a high-traffic space.",
      [Language.TR]: "Yoğun bir alanda pasif bir izleyici kitlesini etkileşime sokmak."
    },
    solution: {
      [Language.EN]: "An immense LED wall that mirrors movement with fluid dynamics. It transforms the chaotic crowd flow into art.",
      [Language.TR]: "Hareketi akışkan dinamiklerle yansıtan devasa bir LED duvar. Kaotik kalabalık akışını sanata dönüştürüyor."
    },
    gallery: [
      { type: 'image', src: 'https://picsum.photos/seed/aeon1/1200/800' },
      { type: 'image', src: 'https://picsum.photos/seed/aeon2/800/1200' },
      { type: 'image', src: 'https://picsum.photos/seed/aeon3/1200/800' },
    ]
  },
  {
    id: '5',
    title: 'Velvet UI',
    description: {
      [Language.EN]: "User interface kit for luxury e-commerce platforms.",
      [Language.TR]: "Lüks e-ticaret platformları için kullanıcı arayüz kiti."
    },
    image: 'https://picsum.photos/seed/velvet/800/800',
    client: "Velvet Group",
    year: "2024",
    services: ["UI/UX", "Product Design"],
    challenge: {
      [Language.EN]: "Digital luxury often feels cold. We needed warmth.",
      [Language.TR]: "Dijital lüks genellikle soğuk hissettirir. Bizim sıcaklığa ihtiyacımız vardı."
    },
    solution: {
      [Language.EN]: "Deep tones, serif typography, and micro-interactions that mimic the tactile feel of unboxing high-end products.",
      [Language.TR]: "Derin tonlar, serif tipografi ve üst düzey ürünlerin kutu açılımındaki dokunsal hissi taklit eden mikro etkileşimler."
    },
    gallery: [
      { type: 'image', src: 'https://picsum.photos/seed/velvet1/1200/800' },
      { type: 'image', src: 'https://picsum.photos/seed/velvet2/800/1200' },
      { type: 'image', src: 'https://picsum.photos/seed/velvet3/1200/800' },
    ]
  },
  {
    id: '6',
    title: 'Mono Type',
    description: {
      [Language.EN]: "Custom typeface design for a tech publication.",
      [Language.TR]: "Bir teknoloji yayını için özel yazı tipi tasarımı."
    },
    image: 'https://picsum.photos/seed/mono/800/800',
    client: "TechWeekly",
    year: "2023",
    services: ["Typography", "Editorial Design"],
    challenge: {
      [Language.EN]: "Readability meets code aesthetics.",
      [Language.TR]: "Okunabilirliğin kod estetiğiyle buluşması."
    },
    solution: {
      [Language.EN]: "A monospaced font with variable weight capabilities, allowing it to function as both display and body text seamlessly.",
      [Language.TR]: "Hem başlık hem de gövde metni olarak sorunsuz işlev görmesine olanak tanıyan, değişken kalınlık özelliklerine sahip monospaced bir font."
    },
    gallery: [
      { type: 'image', src: 'https://picsum.photos/seed/mono1/1200/800' },
      { type: 'image', src: 'https://picsum.photos/seed/mono2/800/1200' },
      { type: 'image', src: 'https://picsum.photos/seed/mono3/1200/800' },
    ]
  },
  {
    id: '7',
    title: 'Prism Glass',
    description: {
      [Language.EN]: "Product photography and 3D rendering for glassware.",
      [Language.TR]: "Cam eşyalar için ürün fotoğrafçılığı ve 3D görselleştirme."
    },
    image: 'https://picsum.photos/seed/prism/800/800',
    client: "Prism",
    year: "2023",
    services: ["3D Rendering", "Art Direction"],
    challenge: {
      [Language.EN]: "Capturing the physics of refraction accurately.",
      [Language.TR]: "Kırılma fiziğini doğru bir şekilde yakalamak."
    },
    solution: {
      [Language.EN]: "We built a custom ray-tracing studio to simulate caustics perfectly, blurring the line between photo and render.",
      [Language.TR]: "Fotoğraf ile render arasındaki çizgiyi bulanıklaştırarak kostikleri mükemmel bir şekilde simüle etmek için özel bir ışın izleme stüdyosu kurduk."
    },
    gallery: [
      { type: 'image', src: 'https://picsum.photos/seed/prism1/1200/800' },
      { type: 'image', src: 'https://picsum.photos/seed/prism2/800/1200' },
      { type: 'image', src: 'https://picsum.photos/seed/prism3/1200/800' },
    ]
  },
  {
    id: '8',
    title: 'Echo Space',
    description: {
      [Language.EN]: "Spatial design concept for minimal workspaces.",
      [Language.TR]: "Minimal çalışma alanları için mekansal tasarım konsepti."
    },
    image: 'https://picsum.photos/seed/echo/800/800',
    client: "Echo",
    year: "2024",
    services: ["Spatial Design", "Interior"],
    challenge: {
      [Language.EN]: "Minimalism that isn't sterile.",
      [Language.TR]: "Steril olmayan bir minimalizm."
    },
    solution: {
      [Language.EN]: "Using biotic shapes and warm acoustics to soften the hard lines of modern minimalism. A space that breathes.",
      [Language.TR]: "Modern minimalizmin sert hatlarını yumuşatmak için biyotik şekiller ve sıcak akustikler kullanmak. Nefes alan bir mekan."
    },
    gallery: [
      { type: 'image', src: 'https://picsum.photos/seed/echo1/1200/800' },
      { type: 'image', src: 'https://picsum.photos/seed/echo2/800/1200' },
      { type: 'image', src: 'https://picsum.photos/seed/echo3/1200/800' },
    ]
  }
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

export const BRANDS = [
  "TechFlow", "Nordic Home", "Silva", "Future Lab", "Urbanite", "Aura", "Vertex"
];