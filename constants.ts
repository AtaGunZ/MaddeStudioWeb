import { Language, Project, Service, Fragment, Client, GalleryItem, ContentText, TeamMember } from './types';

export const CLIENTS: Client[] = [
  { id: 'wizepod', name: 'Wizepod', logo: '/works/wizepod/Primewize Logo Kare.png' },
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
  "Motion Design": { [Language.EN]: "Motion Design", [Language.TR]: "Motion Tasarımı" },
  "UI/UX": { [Language.EN]: "UI/UX", [Language.TR]: "UI/UX" },
  "Creative Coding": { [Language.EN]: "Creative Coding", [Language.TR]: "Yaratıcı Kodlama" },
  "Installation": { [Language.EN]: "Installation", [Language.TR]: "Enstalasyon" },
  "Interaction": { [Language.EN]: "Interaction", [Language.TR]: "Etkileşim" },
  "Product Design": { [Language.EN]: "Product Design", [Language.TR]: "Ürün Tasarımı" },
  "Typography": { [Language.EN]: "Typography", [Language.TR]: "Tipografi" },
  "Editorial Design": { [Language.EN]: "Editorial Design", [Language.TR]: "Editoryal Tasarım" },
  "3D Rendering": { [Language.EN]: "3D Rendering", [Language.TR]: "3D Görselleştirme" },
  "Spatial Design": { [Language.EN]: "Spatial Design", [Language.TR]: "Mekansal Tasarım" },
  "Interior": { [Language.EN]: "Interior", [Language.TR]: "İç Mimari" },
  "3D Motion Design": { [Language.EN]: "3D Motion Design", [Language.TR]: "3D Motion Tasarımı" },
  "3D Product Animation": { [Language.EN]: "3D Product Animation", [Language.TR]: "3D Ürün Animasyonu" },
  "Brand Strategy": { [Language.EN]: "Brand Strategy", [Language.TR]: "Marka Stratejisi" },
  "Brand Guidelines": { [Language.EN]: "Brand Guidelines", [Language.TR]: "Marka Kimliği" },
  "Product Visualizations": { [Language.EN]: "Product Visualizations", [Language.TR]: "Ürün Görselleştirme" }
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
    title: 'Hiltar',
    description: {
      [Language.EN]: "Industrial visualization and process animation for one of Turkey's leading dairy producers.",
      [Language.TR]: "Türkiye'nin önde gelen süt ürünleri üreticilerinden biri için endüstriyel görselleştirme ve süreç animasyonu."
    },
    image: '/works/hiltar/hero.png',
    heroFit: 'cover',
    client: "Hiltar",
    clientLogo: '/works/hiltar/Hiltar_Logo.png',
    year: "2026",
    services: ["3D Rendering", "3D Motion Design"],
    challenge: {
      [Language.EN]: "The goal was to represent Hiltar's fertilizer production facilities in a powerful and clear manner for investment and corporate presentations. The closed and complex nature of industrial production lines makes it challenging to clearly convey the facility's engineering strength and operational capacity.",
      [Language.TR]: "Hiltara gübre üretim tesislerinin yatırım ve kurumsal sunumlarda güçlü ve anlaşılır biçimde temsil edilmesi amaçlanmıştır. Endüstriyel üretim hatlarının kapalı ve karmaşık yapısı, tesisin mühendislik gücünün ve operasyonel kapasitesinin net şekilde aktarılmasını zorlaştırmaktadır."
    },
    solution: {
      [Language.EN]: "Through the 3D visualization and animation work developed within this scope, machinery systems were presented with controlled transparency, and the production process was structured in a fluid and clear manner from start to finish. Thus, the factory's technological infrastructure and production power were made visible with a professional and trustworthy narrative.",
      [Language.TR]: "Bu kapsamda geliştirilen 3D görselleştirme ve animasyon çalışmasıyla makine sistemleri kontrollü şeffaflıkla sunulmuş, üretim süreci baştan sona akıcı ve anlaşılır bir yapıda kurgulanmıştır. Böylece fabrikanın teknolojik altyapısı ve üretim gücü profesyonel ve güven veren bir anlatımla görünür hale getirilmiştir."
    },
    gallery: [
      { type: 'image', src: '/works/hiltar/hero.png', colSpan: 2 },
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
    title: 'Agesoft',
    description: {
      [Language.EN]: "Comprehensive digital rebranding and asset creation for Age Soft.",
      [Language.TR]: "Age Soft için kapsamlı dijital marka yenileme ve varlık üretimi."
    },
    image: '/works/Age_Soft/hero.png',
    heroFit: 'cover',
    client: "Age Soft",
    clientLogo: '/works/Age_Soft/agesoft_logo.png',
    year: "2026",
    services: ["UI/UX Design", "Motion Design"],
    challenge: {
      [Language.EN]: "To strengthen Agesoft's position in the digital world, the website was reimagined with a holistic approach that reflects the brand's vision more clearly. The goal was not just an interface update, but to create a trustworthy, contemporary, and technology-oriented brand perception. The design language was simplified, and the interaction with the user was transformed into a more fluid and intuitive structure, ensuring the corporate identity is felt more strongly in the digital sphere.",
      [Language.TR]: "Agesoft’un dijital dünyadaki konumunu güçlendirmek amacıyla web sitesi, markanın vizyonunu daha net yansıtan bütüncül bir yaklaşımla yeniden ele alınmıştır. Amaç yalnızca bir arayüz güncellemesi değil; güven veren, çağdaş ve teknoloji odaklı bir marka algısı oluşturmaktı. Tasarım dili sadeleştirilmiş, kullanıcıyla kurulan temas daha akıcı ve sezgisel bir yapıya dönüştürülerek kurumsal kimliğin dijitalde daha güçlü hissedilmesi sağlanmıştır."
    },
    solution: {
      [Language.EN]: "The resulting structure offers an experience that simultaneously conveys a sense of dynamism, innovation, and technical competence. Through visual depth and motion composition, the brand narrative was transformed from a static presentation into a living digital identity, creating a modern and prestigious web experience that supports Agesoft's industrial positioning.",
      [Language.TR]: "Ortaya çıkan yapı; dinamizm, yenilik ve teknik yetkinlik duygusunu aynı anda taşıyan bir deneyim sunmaktadır. Görsel derinlik ve hareket kurgusu sayesinde marka anlatımı statik bir sunumdan çıkarılarak yaşayan bir dijital kimliğe dönüştürülmüş, Agesoft’un sektörel konumunu destekleyen modern ve prestijli bir web deneyimi oluşturulmuştur."
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
      {
        type: 'video',
        src: '/works/Age_Soft/3.mp4',
        autoPlay: true,
        loop: true,
        muted: true,
        colSpan: 2
      },
      { type: 'image', src: '/works/Age_Soft/gif2.gif', colSpan: 2 }
    ]
  },
  {
    id: 'reeder-fancy',
    title: 'REEDER Fancy',
    description: {
      [Language.EN]: "Product design visualization for Reeder's next-gen device.",
      [Language.TR]: "Reeder'ın yeni nesil cihazı için ürün tasarımı görselleştirmesi."
    },
    image: '/works/reeder/hero.png',
    heroFit: 'cover',
    client: "Reeder",
    clientLogo: '/works/reeder/reeder-logo.png',
    year: "2025",
    services: ["3D Rendering", "Motion Design", "CGI"],
    challenge: {
      [Language.EN]: "The 3D visualization work developed for the Fancy model, representing Reeder's vision of domestic production, was conceived not just as a car promotion, but as a visual expression of production and engineering determination in Turkey. Its ergonomic structure, economic accessibility, and a design approach suitable for local market dynamics formed the basis of the narrative. The aim was to go beyond technical specifications and create an atmosphere that evokes a sense of trust, pride, and belonging in the audience.",
      [Language.TR]: "Reeder’ın yerli üretim vizyonunu temsil eden Fancy modeli için geliştirilen 3D görselleştirme çalışması, yalnızca bir otomobil tanıtımı değil; Türkiye’de üretimin ve mühendislik kararlılığının görsel bir ifadesi olarak kurgulandı. Ergonomik yapısı, ekonomik erişilebilirliği ve yerel pazar dinamiklerine uygun tasarım yaklaşımı anlatının temelini oluşturdu. Amaç, teknik özelliklerin ötesine geçerek izleyicide güven, gurur ve aidiyet duygusu uyandıran bir atmosfer yaratmaktı."
    },
    solution: {
      [Language.EN]: "In the promotional film, the vehicle's design language and user-centric structure were handled with a cinematic flow, aiming to establish both a rational and emotional connection. Shaped by local needs, this model was represented with a simple yet powerful visual narrative. The resulting work provided a holistic presentation that supports the idea of accessible mobility and expresses Fancy's market position with a trustworthy aesthetic.",
      [Language.TR]: "Tanıtım filminde aracın tasarım dili ve kullanıcı odaklı yapısı sinematik bir akışla ele alınarak hem rasyonel hem duygusal bir bağ kurulması hedeflendi. Yerel ihtiyaçlar doğrultusunda şekillenen bu model, sade fakat güçlü bir görsel anlatımla temsil edildi. Ortaya çıkan çalışma, ulaşılabilir mobilite fikrini destekleyen ve Fancy’nin pazardaki konumunu güven veren bir estetikle ifade eden bütüncül bir sunum sundu."
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
    year: "2025",
    services: ["3D Product Animation", "Motion Design", "CGI"],
    challenge: {
      [Language.EN]: "The 3D visualization work developed for this mouse, which features a battery indicator—a world first in this category—aimed to position the product not just as hardware, but as a symbol of competitive performance. Its structure, designed for use in esports arenas, highlights the perceptions of speed, precision, and durability, while its innovative technology was supported by a powerful and characterful visual narrative.",
      [Language.TR]: "Şarj göstergesine sahip ve bu özelliğiyle dünyada bir ilki temsil eden bu mouse için geliştirilen 3D görselleştirme çalışması, ürünü yalnızca bir donanım değil, rekabetçi performansın simgesi olarak konumlandırmayı hedefledi. E-spor arenalarında kullanılan yapısı; hız, hassasiyet ve dayanıklılık algısını ön plana çıkarırken, yenilikçi teknolojisi güçlü ve karakter sahibi bir görsel anlatımla desteklendi."
    },
    solution: {
      [Language.EN]: "In the promotional structure, the battery indicator was treated as the primary element that differentiates the product and was presented within a dynamic atmosphere. Through light, motion, and surface details, the sense of performance was reinforced, creating a feeling of control, trust, and competitive advantage in the viewer.",
      [Language.TR]: "Tanıtım kurgusunda şarj göstergesi ürünü ayrıştıran temel unsur olarak ele alındı ve dinamik bir atmosfer içinde sunuldu. Işık, hareket ve yüzey detaylarıyla performans duygusu pekiştirilerek izleyicide kontrol, güven ve rekabet avantajı hissi oluşturuldu."
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
      { type: 'image', src: '/works/North_gamingmouse/5.png', colSpan: 1 },
      { type: 'image', src: '/works/North_gamingmouse/6.png', colSpan: 1 },
      { type: 'image', src: '/works/North_gamingmouse/7.png', colSpan: 1 },
      {
        type: 'video',
        src: '/works/North_gamingmouse/video3.mp4',
        autoPlay: true,
        loop: true,
        muted: true,
        colSpan: 1
      },
      {
        type: 'video',
        src: '/works/North_gamingmouse/video4.mp4',
        autoPlay: true,
        loop: true,
        muted: true,
        colSpan: 1
      }
    ]
  },
  {
    id: 'wizepod',
    title: 'Primewize: Wizepod CGM',
    description: {
      [Language.EN]: "Product visualization for a smart autonomous workspace pod.",
      [Language.TR]: "Akıllı otonom çalışma kapsülü için ürün görselleştirmesi."
    },
    image: '/works/wizepod/hero.png',
    heroFit: 'cover',
    client: "Wizepod",
    clientLogo: '/works/wizepod/Primewize Logo Kare.png',
    year: "2025",
    services: ["3D Product Animation", "Motion Design", "CGI"],
    challenge: {
      [Language.EN]: "The 3D modeling and animation work developed for WizePod aimed to position the world's first and only reusable diabetes medication not just as a medical product, but as an innovative solution that transforms quality of life. The functional structure and ease of use of this product, specially developed for diabetes patients, were handled with a visual narrative that prioritizes feelings of trust and precision.",
      [Language.TR]: "WizePod için geliştirilen 3D modelleme ve animasyon çalışması, dünyada ilk ve tek çok kullanımlı diyabet ilacını yalnızca medikal bir ürün olarak değil, yaşam kalitesini dönüştüren yenilikçi bir çözüm olarak konumlandırmayı hedefledi. Diyabet hastalarına özel olarak geliştirilen bu ürünün fonksiyonel yapısı ve kullanım kolaylığı, güven ve hassasiyet duygusunu ön planda tutan bir görsel anlatımla ele alındı."
    },
    solution: {
      [Language.EN]: "In the prepared animation sequence, the product's design details and usage scenarios were presented with a fluid, simple, and impressive language. Through lighting, material, and motion compositions, both technological superiority and a patient-centric approach were strongly emphasized. The resulting work provided a prestigious presentation that positions WizePod as a trustworthy and transformative solution in the field of medical innovation.",
      [Language.TR]: "Hazırlanan animasyon kurgusunda ürünün tasarım detayları ve kullanım senaryosu akıcı, sade ve etkileyici bir dil ile sunuldu. Işık, materyal ve hareket kompozisyonları sayesinde hem teknolojik üstünlük hem de hasta odaklı yaklaşım güçlü bir biçimde vurgulandı. Ortaya çıkan çalışma, WizePod’u medikal inovasyon alanında güven veren ve fark yaratan bir çözüm olarak konumlandıran prestijli bir sunum sundu."
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
    title: 'REEDER S19 MAX PRO S EDGE',
    description: {
      [Language.EN]: "Product visualization for Reeder's S19 smartphone.",
      [Language.TR]: "Reeder S19 akıllı telefon için ürün görselleştirmesi."
    },
    image: '/works/reeder_s19/1.png',
    heroFit: 'cover',
    client: "Reeder",
    clientLogo: '/works/reeder/reeder-logo.png', // Reusing existing logo
    year: "2025",
    services: ["3D Product Animation", "Motion Design", "CGI"],
    challenge: {
      [Language.EN]: "The 3D product animation work developed for Reeder's phone, which features an angular and powerful design language, aimed to position the product not just as a technical device, but as a design object with character. Its sharp lines, balanced proportions, and stylish form were handled with a modern, ambitious, and premium stance. The aim was to highlight the geometric clarity of the design while creating perceptions of quality and trust in the audience.",
      [Language.TR]: "Reeder’in köşeli ve güçlü tasarım diline sahip telefonu için geliştirilen 3D product animasyon çalışması, ürünü yalnızca teknik bir cihaz olarak değil, karakter sahibi bir tasarım objesi olarak konumlandırmayı hedefledi. Keskin hatları, dengeli oranları ve şık formu; modern, iddialı ve premium bir duruşla ele alındı. Amaç, tasarımın geometrik netliğini ön plana çıkarırken izleyicide kalite ve güven algısı oluşturmaktı."
    },
    solution: {
      [Language.EN]: "In the prepared animation film, surface transitions, edge details, and material feel were presented with a cinematic flow, emphasizing the product's aesthetic power. Through lighting and motion compositions, the phone's minimal yet impressive design language was highlighted. The resulting work offered a powerful and refined product narrative that reflects Reeder's design vision.",
      [Language.TR]: "Hazırlanan animasyon filminde yüzey geçişleri, kenar detayları ve malzeme hissi sinematik bir akışla sunularak ürünün estetik gücü vurgulandı. Işık ve hareket kompozisyonları sayesinde telefonun minimal fakat etkileyici tasarım dili ön plana çıkarıldı. Ortaya çıkan çalışma, Reeder’in tasarım vizyonunu yansıtan, güçlü ve rafine bir ürün anlatımı sundu."
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
    title: 'Odin Pro WL Gaming Keyboard',
    description: {
      [Language.EN]: "Product visualization for the North Odin Pro WL68 Keyboard.",
      [Language.TR]: "North Odin Pro WL68 Klavye için ürün görselleştirmesi."
    },
    image: '/works/North_keyboard/hero.png',
    heroFit: 'cover',
    client: "North",
    clientLogo: '/works/North_keyboard/north_logo.png',
    year: "2025",
    services: ["3D Product Animation", "Motion Design", "CGI"],
    challenge: {
      [Language.EN]: "The 3D visualization and animation work developed for the Odin Pro WL Gaming Keyboard aimed to position the product not just as gaming equipment, but as a strategic tool at the center of competitive performance. Standing out with its illuminated structure and rechargeable wireless technology, this model represented its status as a world-first within a powerful and ambitious atmosphere. The design language was handled with a sharp and dynamic narrative that supports perceptions of speed, response time, and durability.",
      [Language.TR]: "Odin Pro WL Gaming Keyboard için geliştirilen 3D görselleştirme ve animasyon çalışması, ürünü yalnızca bir oyun ekipmanı değil, rekabetçi performansın merkezindeki stratejik bir araç olarak konumlandırmayı hedefledi. Işıklı yapısı ve şarjlı kablosuz teknolojisiyle öne çıkan bu model, dünyada ilk olma özelliğini güçlü ve iddialı bir atmosfer içinde temsil etti. Tasarım dili; hız, tepki süresi ve dayanıklılık algısını destekleyen keskin ve dinamik bir anlatımla ele alındı."
    },
    solution: {
      [Language.EN]: "In the promotional sequence, light effects and surface details were structured to reinforce the sense of performance. Through motion and composition language, the product's technological strength and unique position were emphasized, creating feelings of control, superiority, and competitive advantage in the viewer. The resulting work provided a prestigious presentation that positions the Odin Pro WL not just as a keyboard, but as a powerful piece of equipment that makes a difference in the gaming arena.",
      [Language.TR]: "Tanıtım kurgusunda ışık efektleri ve yüzey detayları performans duygusunu pekiştirecek şekilde yapılandırıldı. Hareket ve kompozisyon diliyle ürünün teknolojik gücü ve özgün konumu vurgulanarak izleyicide kontrol, üstünlük ve rekabet avantajı hissi oluşturuldu. Ortaya çıkan çalışma, Odin Pro WL’yi yalnızca bir klavye değil, oyun arenasında fark yaratan güçlü bir ekipman olarak konumlandıran prestijli bir sunum sundu."
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
      { type: 'image', src: '/works/North_keyboard/3.png', colSpan: 1 },
      { type: 'image', src: '/works/North_keyboard/4.png', colSpan: 1 },
      { type: 'image', src: '/works/North_keyboard/5.png', colSpan: 1 },
      { type: 'image', src: '/works/North_keyboard/6.png', colSpan: 1 },
      {
        type: 'video',
        src: '/works/North_keyboard/video3.mp4',
        autoPlay: true,
        loop: true,
        muted: true,
        colSpan: 2
      },
      { type: 'image', src: '/works/North_keyboard/7.png', colSpan: 1 },
      { type: 'image', src: '/works/North_keyboard/8.png', colSpan: 1 },
      { type: 'image', src: '/works/North_keyboard/gif1.gif', colSpan: 1 },
      {
        type: 'video',
        src: '/works/North_keyboard/video4.mp4',
        autoPlay: true,
        loop: true,
        muted: true,
        colSpan: 1
      }
    ]
  },
  {
    id: 'mehaz-brand',
    title: 'MEHAZ Brand Guide',
    description: {
      [Language.EN]: "Brand identity and guidelines for Mehaz.",
      [Language.TR]: "Mehaz için marka kimliği ve kılavuzları."
    },
    image: '/works/Mehaz_brandGuide/a9d27a52-01.png',
    heroFit: 'cover',
    client: "Mehaz",
    clientLogo: '/works/Mehaz_brandGuide/mehaz_logo.png',
    year: "2026",
    services: ["Brand Strategy", "Brand Guidelines"],
    challenge: {
      [Language.EN]: "The Brand Guide work developed for Mehaz was handled as a holistic design process aiming to reposition the brand not just visually, but strategically as well. From logo design to corporate identity elements, the entire structure was built on a clear and powerful language that reflects the company's vision, reliability, and industry seriousness. The aim was to provide the brand with a sustainable and consistent corporate foundation.",
      [Language.TR]: "Mehaz firması için geliştirilen Brand Guide çalışması, markayı yalnızca görsel olarak değil, stratejik olarak da yeniden konumlandırmayı hedefleyen bütüncül bir tasarım süreci olarak ele alındı. Logo tasarımından kurumsal kimlik öğelerine kadar tüm yapı, firmanın vizyonunu, güvenilirliğini ve sektörel ciddiyetini yansıtacak net ve güçlü bir dil üzerine inşa edildi. Amaç, markaya sürdürülebilir ve tutarlı bir kurumsal temel kazandırmaktı."
    },
    solution: {
      [Language.EN]: "Within the scope of the developed 360° design approach, the logo, business cards, and all corporate documents were unified under a common visual system. Color, typography, and composition language were standardized, ensuring the brand delivers the same professional impact at every touchpoint. The resulting work offered a prestigious and consistent brand integrity that strengthens Mehaz's corporate identity.",
      [Language.TR]: "Hazırlanan 360° tasarım yaklaşımı kapsamında logo, kartvizit ve tüm kurumsal dokümanlar ortak bir görsel sistem altında toplandı. Renk, tipografi ve kompozisyon dili standardize edilerek markanın her temas noktasında aynı profesyonel etkiyi vermesi sağlandı. Ortaya çıkan çalışma, Mehaz’ın kurumsal kimliğini güçlendiren, prestijli ve tutarlı bir marka bütünlüğü sundu."
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
    year: "2025",
    services: ["Brand Strategy", "Product Visualizations"],
    challenge: {
      [Language.EN]: "The process carried out for O3 Layer was not just a design project but handled as a strategic transformation clarifying the brand's digital positioning and growth vision. While the UI/UX structure developed for the web platform was conceived with a simple and powerful architecture centering on the user experience; 3D animations and visual language created a dynamic identity supporting the brand's technology-oriented character. Along with the logo design, all brand elements were restructured under a single holistic system.",
      [Language.TR]: "O3 Layer için yürütülen süreç, yalnızca bir tasarım çalışması değil; markanın dijital konumlanmasını ve büyüme vizyonunu netleştiren stratejik bir dönüşüm olarak ele alındı. Web platformu için geliştirilen UI/UX yapısı, kullanıcı deneyimini merkeze alan sade ve güçlü bir mimariyle kurgulanırken; 3D animasyonlar ve görsel dil markanın teknoloji odaklı karakterini destekleyen dinamik bir kimlik oluşturdu. Logo tasarımıyla birlikte tüm marka unsurları tek bir bütüncül sistem altında yeniden yapılandırıldı."
    },
    solution: {
      [Language.EN]: "During this process, a 360° brand strategy and roadmap were also created, placing O3 Layer's market position and growth potential within a clear framework. Investor presentations were structured to express the vision, scalability, and technological power with a trustworthy narrative. The resulting work offered a comprehensive transformation that brought O3 Layer to a powerful, consistent, and investment-oriented brand structure on both digital and strategic levels.",
      [Language.TR]: "Bu süreçte aynı zamanda 360° marka stratejisi ve yol haritası oluşturularak, O3 Layer’ın pazardaki konumu ve büyüme potansiyeli net bir çerçeveye oturtuldu. Hazırlanan yatırımcı sunumları; vizyonu, ölçeklenebilirliği ve teknolojik gücü güven veren bir anlatımla ifade edecek şekilde kurgulandı. Ortaya çıkan çalışma, O3 Layer’ı hem dijital hem stratejik düzlemde güçlü, tutarlı ve yatırım odaklı bir marka yapısına taşıyan kapsamlı bir dönüşüm sundu."
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
    services: ["Brand Strategy", "Motion Design"],
    challenge: {
      [Language.EN]: "The work carried out for Octopus Bridge was handled as a holistic design process that strengthens the brand's digital identity and clarifies its vision. While the UI/UX structure developed for the web platform reimagined the user experience with a simple and fluid architecture; logo design, hand-drawn illustrations, and the established color system transformed the brand's character into a unique and memorable structure. The entire visual language was structured to create a consistent brand integrity supporting the company's vision.",
      [Language.TR]: "Octapus Bridge için yürütülen çalışma, markanın dijital kimliğini güçlendiren ve vizyonunu netleştiren bütüncül bir tasarım süreci olarak ele alındı. Web platformu için geliştirilen UI/UX yapısı, kullanıcı deneyimini sade ve akıcı bir mimariyle yeniden kurgularken; logo tasarımı, el çizimi illüstrasyonlar ve belirlenen renk sistemi markanın karakterini özgün ve hatırlanabilir bir yapıya dönüştürdü. Tüm görsel dil, firmanın vizyonunu destekleyen tutarlı bir marka bütünlüğü oluşturacak şekilde yapılandırıldı."
    },
    solution: {
      [Language.EN]: "While dynamism was added to the digital experience through Lottie animations and motion design elements, brand interaction was carried to different platforms with secondary communication tools like Telegram sticker sets. The resulting work offered a comprehensive transformation that moved Octopus Bridge to a powerful, integrated, and modern brand structure, not only visually but also strategically and communicatively.",
      [Language.TR]: "Lottie animasyonlar ve hareketli tasarım öğeleriyle dijital deneyime dinamizm kazandırılırken, Telegram sticker setleri gibi yan iletişim araçlarıyla marka etkileşimi farklı platformlara taşındı. Ortaya çıkan çalışma, Octapus Bridge’i yalnızca görsel olarak değil, stratejik ve iletişimsel açıdan da güçlü, bütünlüklü ve modern bir marka yapısına taşıyan kapsamlı bir dönüşüm sundu."
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
      [Language.EN]: "Creative Director, Co-Founder",
      [Language.TR]: "Creative Director, Co-Founder"
    },
    image: 'https://placehold.co/400x500/000000/FFFFFF/png?text=Doruk',
    isLead: true
  },
  {
    id: 'nebil',
    name: 'Nebil Erşan Elcenabi',
    role: { [Language.EN]: 'Co-Founder', [Language.TR]: 'Kurucu Ortak' },
    bio: {
      [Language.EN]: "Creative Operations, Co-Founder",
      [Language.TR]: "Creative Operations, Co-Founder"
    },
    image: 'https://placehold.co/400x500/000000/FFFFFF/png?text=Nebil',
    isLead: true
  },
  {
    id: 'yusuf',
    name: 'Yusuf Ihlamur',
    role: { [Language.EN]: 'Partner', [Language.TR]: 'Ortak' },
    bio: {
      [Language.EN]: "Executive Director, Co-Founder",
      [Language.TR]: "Executive Director, Co-Founder"
    },
    image: 'https://placehold.co/400x500/000000/FFFFFF/png?text=Yusuf',
    isLead: true
  },
  {
    id: 'sait',
    name: 'Sait Özer',
    role: { [Language.EN]: 'Art Director', [Language.TR]: 'Sanat Yönetmeni' },
    isLead: false
  },
  {
    id: 'sabri',
    name: 'Sabri Tekeş',
    role: { [Language.EN]: 'Motion Graphic Designer', [Language.TR]: 'Motion Grafik Tasarımcısı' },
    isLead: false
  },

];

export const BRANDS = [
  "TechFlow", "Nordic Home", "Silva", "Future Lab", "Urbanite", "Aura", "Vertex"
];
