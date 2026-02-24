import { Language, Project, Service, Fragment, Client, GalleryItem, ContentText, TeamMember } from './types';

export const CLIENTS: Client[] = [
  { id: 'wizepod', name: 'Wizepod', logo: '/works/Wizepod/Primewize Logo Kare.png' },
  { id: 'north', name: 'North', logo: '/works/North_Keyboard/north_logo.png' },
  { id: 'mehaz', name: 'Mehaz', logo: '/works/Mehaz_BrandGuide/mehaz_logo.png' },
  { id: 'octopus', name: 'Octopus', logo: '/works/Octopus/octopus_Logo.png' },
  { id: 'reeder', name: 'Reeder', logo: '/works/Reeder_Fancy/reeder-logo.png' },
  { id: 'o3', name: 'O3 Layer', logo: '/works/o3_Layer/o3_logo.png' },
  { id: 'hiltar', name: 'Hiltar', logo: '/works/Hiltar/Hiltar_Logo.png' },
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
      [Language.TR]: "Her fikir bir yapı barındırır."
    },
    p2: {
      [Language.EN]: "Design is the act of revealing that structure and giving it form.",
      [Language.TR]: "Tasarım, bu yapının görünür hale gelmesidir."
    },
    p3: {
      [Language.EN]: "Madde Studio works multi-disciplinary, shaping different expressions from the same underlying matter.",
      [Language.TR]: "Madde Studio multidisipliner çalışır, aynı yapıdan farklı formlar ortaya çıkarır."
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
    philosophyBlocks: [
      {
        [Language.EN]: "We look at matter without dictating 'what life is', without adding artificial values and decorations. We accept the truth that design is not just us shaping matter, but matter also shaping us, our habits, and our perception.",
        [Language.TR]: "Biz, maddeye \"hayatın ne olduğunu\" dikte etmeden, üzerine yapay değerler ve süslemeler eklemeden bakarız. Tasarımın sadece bizim maddeyi şekillendirmemiz değil; maddenin de bizi, alışkanlıklarımızı ve algımızı şekillendirdiği gerçeğini kabul ederiz."
      },
      {
        [Language.EN]: "In the footsteps of Bauhaus, we solve the unknown with the known, and the complex in its simplest form. We do not look for a hidden, mystical 'representation' behind a structure, a visual, or a movement. For us, truth is not separate from the design itself, its material and its function. 'Material Design' is a stance that takes its freedom from its internal consistency, untouched by the domination of trends or imposed aesthetic perceptions.",
        [Language.TR]: "Bauhaus'un izinde, bilinmeyeni bilinenle, karmaşık olanı en yalın haliyle çözümleriz. Bir yapının, bir görselin veya bir hareketin ardında saklı, mistik bir \"temsiliyet\" aramayız. Bizim için gerçek, tasarımın kendisinden, malzemesinden ve işlevinden ayrı değildir. \"Materyal Tasarım\", üzerinde trendlerin veya dayatılmış estetik algıların tahakkümü olmayan, kendi özgürlüğünü içsel tutarlılığından alan bir duruştur."
      },
      {
        [Language.EN]: "Our design process is not stuck in a studio. For us, 'place' is not an office with drawn boundaries — it is the whole world. Madde Studio is a flaneur in this world.",
        [Language.TR]: "Tasarım sürecimiz, bir stüdyoya sıkışmış değildir. Bizim için \"yer\", sınırları çizilmiş bir ofis değil, tüm dünyadır. Madde Studio, bu dünyada bir flanördür."
      },
      {
        [Language.EN]: "We wear flanerie like an apron; we wander through digital and physical universes, we look and we see. We observe not only with our eyes but by 'knowing how to be there'. Every visualization, every animation, and every story we design is a product of this observation, of that 'place' and that 'moment'. We refuse to fit into a mold, a movement, or a label. Just like that material human trying to make their voice heard, our designs are foreign to everything but deeply connected to everything.",
        [Language.TR]: "Flanörlüğü bir önlük gibi giyer; dijital ve fiziksel evrenlerde dolaşır, bakar ve görürüz. Sadece gözle değil, \"orada olmayı bilerek\" gözlem yaparız. Tasarladığımız her görselleştirme, her animasyon ve her hikaye; bu gözlemin, o \"yer\"in ve o \"an\"ın bir ürünüdür. Bir kalıba, bir akıma veya bir etikete sığmayı reddederiz. Tıpkı sesini duyurmaya çalışan o materyal insan gibi, tasarımlarımız da her şeye yabancı ama her şeyle derinden bağlıdır."
      },
      {
        [Language.EN]: "In this medium, we create every work and every form to 'remain human' and 'touch reality'. We do not yet know the final shape of the path we have set out on; we trust the process.",
        [Language.TR]: "Biz bu mecrada; üretilen her işi, çizilen her formu \"insan kalabilmek\" ve \"gerçeğe dokunabilmek\" için yaparız. Çıktığımız yolun son şeklini şimdiden bilmeyiz; sürece güveniriz."
      },
      {
        [Language.EN]: "Preserving the freedom of our work is essential. Let our works be read, watched, criticized, and looked at again from where they couldn't be seen. Even let them be reviled. Because we believe that when all these interactions come together, a living rhythm emerges beyond a static image. This rhythm is the voice of matter itself.",
        [Language.TR]: "Çalışmalarımızın özgürlüğünü korumak esastır. İşlerimiz okunsun, izlensin, eleştirilsin, bakılamayan yerden tekrar bakılsın. Hatta yerilsin. Çünkü inanıyoruz ki; bütün bu etkileşimler bir araya geldiğinde, statik bir görüntüden öte, yaşayan bir ritim oluşur. Bu ritim, maddenin kendi sesidir."
      },
      {
        [Language.EN]: "In this age where the digital, the virtual, and the 'metamaterial' have surrounded everything, is it possible for design to remain 'material'? We think it's possible. Even necessary. To preserve our own uniqueness, our designs must also preserve their 'materiality' — their essence, their honesty. Reminding people first to breathe, then to perceive, and finally that they are not an 'object' but exist with objects...",
        [Language.TR]: "Dijitalin, sanalın ve \"metamateryal\"in her yeri sardığı bu çağda, tasarımın \"materyal\" kalabilmesi mümkün mü? Bizce mümkün. Hatta zorunlu. Kendi biricikliğimizi korumak için, tasarımlarımızın da \"materyalliğini\" — özünü, dürüstlüğünü — koruması gerekir. İnsanın önce nefes almasını, sonra algılamasını, en sonunda da kendisinin bir \"nesne\" olmadığını ama nesnelerle var olduğunu hatırlatmak..."
      },
      {
        [Language.EN]: "Madde Studio exists to make this reminder.",
        [Language.TR]: "Madde Studio, işte bu hatırlatmayı yapmak için vardır."
      }
    ],
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
      [Language.EN]: "Visualization",
      [Language.TR]: "Görselleştirme"
    },
    process: {
      [Language.EN]: "Idea → Form → Aesthetics",
      [Language.TR]: "Fikir → Form → Estetik"
    },
    image: "/services/visualization_image.png"
  },
  {
    title: {
      [Language.EN]: "Dynamic Motion",
      [Language.TR]: "Dinamik Hareket"
    },
    process: {
      [Language.EN]: "Material → Movement → Animation",
      [Language.TR]: "Materyal → Hareket → Animasyon"
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
    image: '/works/Hiltar/hero.png',
    heroFit: 'cover',
    client: "Hiltar",
    clientLogo: '/works/Hiltar/Hiltar_Logo.png',
    year: "2026",
    services: ["3D Rendering", "3D Motion Design"],
    challenge: {
      [Language.EN]: "The goal was to represent Hiltar's fertilizer production facilities in a powerful and clear manner for investment and corporate presentations. The closed and complex nature of industrial production lines makes it challenging to clearly convey the facility's engineering strength and operational capacity.",
      [Language.TR]: "Hiltar'ın gübre üretim tesislerinin yatırım ve kurumsal sunumlarda güçlü ve anlaşılır biçimde temsil edilmesi amaçlanmıştır. Endüstriyel üretim hatlarının kapalı ve karmaşık yapısı, tesisin mühendislik gücünün ve operasyonel kapasitesinin net şekilde aktarılmasını zorlaştırmaktadır."
    },
    solution: {
      [Language.EN]: "Through the 3D visualization and animation work developed within this scope, machinery systems were presented with controlled transparency, and the production process was structured in a fluid and clear manner from start to finish. Thus, the factory's technological infrastructure and production power were made visible with a professional and trustworthy narrative.",
      [Language.TR]: "Bu kapsamda geliştirilen 3D görselleştirme ve animasyon çalışmasıyla makine sistemleri kontrollü şeffaflıkla sunulmuş, üretim süreci baştan sona akıcı ve anlaşılır bir yapıda kurgulanmıştır. Böylece fabrikanın teknolojik altyapısı ve üretim gücü profesyonel ve güven veren bir anlatımla görünür hale getirilmiştir."
    },
    gallery: [
      { type: 'image', src: '/works/Hiltar/hero.png', colSpan: 2 },
      {
        type: 'video',
        src: '/works/Hiltar/video1.mp4',
        autoPlay: true,
        loop: true,
        muted: true,
        colSpan: 2
      },
      { type: 'image', src: '/works/Hiltar/2.png', colSpan: 1 },
      { type: 'image', src: '/works/Hiltar/3.png', colSpan: 1 },
      {
        type: 'video',
        src: '/works/Hiltar/video2.mp4',
        autoPlay: true,
        loop: true,
        muted: true,
        colSpan: 1
      },
      {
        type: 'video',
        src: '/works/Hiltar/video3.mp4',
        autoPlay: true,
        loop: true,
        muted: true,
        colSpan: 1
      },
      { type: 'image', src: '/works/Hiltar/4.png', colSpan: 2 },
      {
        type: 'video',
        src: '/works/Hiltar/video4.mp4',
        autoPlay: true,
        loop: true,
        muted: true,
        colSpan: 2
      },
      { type: 'image', src: '/works/Hiltar/5.png', colSpan: 1 },
      { type: 'image', src: '/works/Hiltar/6.png', colSpan: 1 },
      {
        type: 'video',
        src: '/works/Hiltar/video5.mp4',
        autoPlay: true,
        loop: true,
        muted: true,
        colSpan: 1
      },
      { type: 'image', src: '/works/Hiltar/7.png', colSpan: 1 },
      {
        type: 'video',
        src: '/works/Hiltar/video6.mp4',
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
    image: '/works/Reeder_Fancy/hero.png',
    heroFit: 'cover',
    client: "Reeder",
    clientLogo: '/works/Reeder_Fancy/reeder-logo.png',
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
        src: '/works/Reeder_Fancy/Fancyvideo1.mp4',
        autoPlay: true,
        loop: true,
        muted: true
      },
      { type: 'image', src: '/works/Reeder_Fancy/1.png' },
      {
        type: 'video',
        src: '/works/Reeder_Fancy/Fancyvideo2.mp4',
        autoPlay: true,
        loop: true,
        muted: true
      },
      {
        type: 'group',
        items: [
          { src: '/works/Reeder_Fancy/2.png' },
          { src: '/works/Reeder_Fancy/3.png' }
        ]
      },
      {
        type: 'video',
        src: '/works/Reeder_Fancy/Fancyvideo3.mp4',
        autoPlay: true,
        loop: true,
        muted: true
      },
      {
        type: 'video',
        src: '/works/Reeder_Fancy/Fancyvideo4.mp4',
        autoPlay: true,
        loop: true,
        muted: true
      },
      {
        type: 'video',
        src: '/works/Reeder_Fancy/Fancyvideo5.mp4',
        autoPlay: true,
        loop: true,
        muted: true
      },
      { type: 'image', src: '/works/Reeder_Fancy/Fancy.png' }
    ]
  },
  {
    id: 'north-gaming-mouse',
    title: 'Odin Pro WL Gaming Mouse',
    description: {
      [Language.EN]: "Product visualization for the North Odin Pro WL Gaming Mouse.",
      [Language.TR]: "North Odin Pro WL Gaming Mouse için ürün görselleştirmesi."
    },
    image: '/works/North_GamingMouse/hero.png',
    heroFit: 'cover',
    client: "North",
    clientLogo: '/works/North_Keyboard/north_logo.png', // Reusing existing logo
    year: "2025",
    services: ["3D Product Animation", "Motion Design", "CGI"],
    challenge: {
      [Language.EN]: "The 3D visualization work developed for this mouse, which features a battery indicator—a world first in this category—aimed to position the product not just as hardware, but as a symbol of competitive performance. Its structure, designed for use in esports arenas, highlights the perceptions of speed, precision, and durability, while its innovative technology was supported by a powerful and characterful visual narrative.",
      [Language.TR]: "Şarj göstergesine sahip ve bu özelliğiyle dünyada bir ilki temsil eden bu mouse için geliştirilen 3D görselleştirme çalışması, ürünü yalnızca bir donanım değil, rekabetçi performansın simgesi olarak konumlandırmayı hedefledi. E-spor arenalarında kullanılan yapısı; hız, hassasiyet ve dayanıklılık algısını ön plana çıkarırken, yenilikçi teknolojisi güçlü ve karakter sahibi bir görsel anlatımla desteklendi."
    },
    solution: {
      [Language.EN]: "In the promotional structure, the battery indicator was treated as the primary element that differentiates the product and was presented within a dynamic atmosphere. Through light, motion, and surface details, the sense of performance was reinforced, creating a feeling of control, trust, and competitive advantage in the viewer.",
      [Language.TR]: "Tanıtım kurgusunda şarj göstergesi ürünü ayrıştıran temel unsur olarak ele alındı ve dinamik bir atmosfer içinde sunuldu. İşık, hareket ve yüzey detaylarıyla performans duygusu pekiştirilerek izleyicide kontrol, güven ve rekabet avantajı hissi oluşturuldu."
    },
    gallery: [
      {
        type: 'video',
        src: '/works/North_GamingMouse/video1_1.mp4',
        autoPlay: true,
        loop: true,
        muted: true,
        colSpan: 1
      },
      { type: 'image', src: '/works/North_GamingMouse/1.png', colSpan: 1 },
      { type: 'image', src: '/works/North_GamingMouse/2.png', colSpan: 1 },
      { type: 'image', src: '/works/North_GamingMouse/3.png', colSpan: 1 },
      {
        type: 'video',
        src: '/works/North_GamingMouse/video2.mp4',
        autoPlay: true,
        loop: true,
        muted: true,
        colSpan: 2
      },
      { type: 'image', src: '/works/North_GamingMouse/4.png', colSpan: 1 },
      { type: 'image', src: '/works/North_GamingMouse/5.png', colSpan: 1 },
      { type: 'image', src: '/works/North_GamingMouse/6.png', colSpan: 1 },
      { type: 'image', src: '/works/North_GamingMouse/7.png', colSpan: 1 },
      {
        type: 'video',
        src: '/works/North_GamingMouse/video3.mp4',
        autoPlay: true,
        loop: true,
        muted: true,
        colSpan: 1
      },
      {
        type: 'video',
        src: '/works/North_GamingMouse/video4.mp4',
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
    image: '/works/Wizepod/hero.png',
    heroFit: 'cover',
    client: "Wizepod",
    clientLogo: '/works/Wizepod/Primewize Logo Kare.png',
    year: "2025",
    services: ["3D Product Animation", "Motion Design", "CGI"],
    challenge: {
      [Language.EN]: "The 3D modeling and animation work developed for WizePod aimed to position the world's first and only reusable diabetes medication not just as a medical product, but as an innovative solution that transforms quality of life. The functional structure and ease of use of this product, specially developed for diabetes patients, were handled with a visual narrative that prioritizes feelings of trust and precision.",
      [Language.TR]: "WizePod için geliştirilen 3D modelleme ve animasyon çalışması, dünyada ilk ve tek çok kullanımlı diyabet ilacını yalnızca medikal bir ürün olarak değil, yaşam kalitesini dönüştüren yenilikçi bir çözüm olarak konumlandırmayı hedefledi. Diyabet hastalarına özel olarak geliştirilen bu ürünün fonksiyonel yapısı ve kullanım kolaylığı, güven ve hassasiyet duygusunu ön planda tutan bir görsel anlatımla ele alındı."
    },
    solution: {
      [Language.EN]: "In the prepared animation sequence, the product's design details and usage scenarios were presented with a fluid, simple, and impressive language. Through lighting, material, and motion compositions, both technological superiority and a patient-centric approach were strongly emphasized. The resulting work provided a prestigious presentation that positions WizePod as a trustworthy and transformative solution in the field of medical innovation.",
      [Language.TR]: "Hazırlanan animasyon kurgusunda ürünün tasarım detayları ve kullanım senaryosu akıcı, sade ve etkileyici bir dil ile sunuldu. İşık, materyal ve hareket kompozisyonları sayesinde hem teknolojik üstünlük hem de hasta odaklı yaklaşım güçlü bir biçimde vurgulandı. Ortaya çıkan çalışma, WizePod’u medikal inovasyon alanında güven veren ve fark yaratan bir çözüm olarak konumlandıran prestijli bir sunum sundu."
    },
    gallery: [
      {
        type: 'video',
        src: '/works/Wizepod/videohero.mp4',
        autoPlay: true,
        loop: true,
        muted: true
      },
      { type: 'image', src: '/works/Wizepod/1.png' },
      {
        type: 'video',
        src: '/works/Wizepod/video1.mp4',
        autoPlay: true,
        loop: true,
        muted: true
      },
      { type: 'image', src: '/works/Wizepod/2.png' },
      { type: 'image', src: '/works/Wizepod/3.png' },
      { type: 'image', src: '/works/Wizepod/4.png' },
      {
        type: 'video',
        src: '/works/Wizepod/video2.mp4',
        autoPlay: true,
        loop: true,
        muted: true
      },
      {
        type: 'video',
        src: '/works/Wizepod/5.mp4',
        autoPlay: true,
        loop: true,
        muted: true
      },
      { type: 'image', src: '/works/Wizepod/6.png' },
      {
        type: 'video',
        src: '/works/Wizepod/video3.mp4',
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
    image: '/works/Reeder_S19/1.png',
    heroFit: 'cover',
    client: "Reeder",
    clientLogo: '/works/Reeder_Fancy/reeder-logo.png', // Reusing existing logo
    year: "2025",
    services: ["3D Product Animation", "Motion Design", "CGI"],
    challenge: {
      [Language.EN]: "The 3D product animation work developed for Reeder's phone, which features an angular and powerful design language, aimed to position the product not just as a technical device, but as a design object with character. Its sharp lines, balanced proportions, and stylish form were handled with a modern, ambitious, and premium stance. The aim was to highlight the geometric clarity of the design while creating perceptions of quality and trust in the audience.",
      [Language.TR]: "Reeder’in köşeli ve güçlü tasarım diline sahip telefonu için geliştirilen 3D product animasyon çalışması, ürünü yalnızca teknik bir cihaz olarak değil, karakter sahibi bir tasarım objesi olarak konumlandırmayı hedefledi. Keskin hatları, dengeli oranları ve şık formu; modern, iddialı ve premium bir duruşla ele alındı. Amaç, tasarımın geometrik netliğini ön plana çıkarırken izleyicide kalite ve güven algısı oluşturmaktı."
    },
    solution: {
      [Language.EN]: "In the prepared animation film, surface transitions, edge details, and material feel were presented with a cinematic flow, emphasizing the product's aesthetic power. Through lighting and motion compositions, the phone's minimal yet impressive design language was highlighted. The resulting work offered a powerful and refined product narrative that reflects Reeder's design vision.",
      [Language.TR]: "Hazırlanan animasyon filminde yüzey geçişleri, kenar detayları ve malzeme hissi sinematik bir akışla sunularak ürünün estetik gücü vurgulandı. İşık ve hareket kompozisyonları sayesinde telefonun minimal fakat etkileyici tasarım dili ön plana çıkarıldı. Ortaya çıkan çalışma, Reeder’in tasarım vizyonunu yansıtan, güçlü ve rafine bir ürün anlatımı sundu."
    },
    gallery: [
      {
        type: 'video',
        src: '/works/Reeder_S19/video1_1.mp4',
        autoPlay: true,
        loop: true,
        muted: true
      },
      { type: 'image', src: '/works/Reeder_S19/2.png' },
      { type: 'image', src: '/works/Reeder_S19/3.png' },
      { type: 'image', src: '/works/Reeder_S19/4.png' },
      {
        type: 'video',
        src: '/works/Reeder_S19/video2.mp4',
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
    image: '/works/North_Keyboard/hero.png',
    heroFit: 'cover',
    client: "North",
    clientLogo: '/works/North_Keyboard/north_logo.png',
    year: "2025",
    services: ["3D Product Animation", "Motion Design", "CGI"],
    challenge: {
      [Language.EN]: "The 3D visualization and animation work developed for the Odin Pro WL Gaming Keyboard aimed to position the product not just as gaming equipment, but as a strategic tool at the center of competitive performance. Standing out with its illuminated structure and rechargeable wireless technology, this model represented its status as a world-first within a powerful and ambitious atmosphere. The design language was handled with a sharp and dynamic narrative that supports perceptions of speed, response time, and durability.",
      [Language.TR]: "Odin Pro WL Gaming Keyboard için geliştirilen 3D görselleştirme ve animasyon çalışması, ürünü yalnızca bir oyun ekipmanı değil, rekabetçi performansın merkezindeki stratejik bir araç olarak konumlandırmayı hedefledi. İşıklı yapısı ve şarjlı kablosuz teknolojisiyle öne çıkan bu model, dünyada ilk olma özelliğini güçlü ve iddialı bir atmosfer içinde temsil etti. Tasarım dili; hız, tepki süresi ve dayanıklılık algısını destekleyen keskin ve dinamik bir anlatımla ele alındı."
    },
    solution: {
      [Language.EN]: "In the promotional sequence, light effects and surface details were structured to reinforce the sense of performance. Through motion and composition language, the product's technological strength and unique position were emphasized, creating feelings of control, superiority, and competitive advantage in the viewer. The resulting work provided a prestigious presentation that positions the Odin Pro WL not just as a keyboard, but as a powerful piece of equipment that makes a difference in the gaming arena.",
      [Language.TR]: "Tanıtım kurgusunda ışık efektleri ve yüzey detayları performans duygusunu pekiştirecek şekilde yapılandırıldı. Hareket ve kompozisyon diliyle ürünün teknolojik gücü ve özgün konumu vurgulanarak izleyicide kontrol, üstünlük ve rekabet avantajı hissi oluşturuldu. Ortaya çıkan çalışma, Odin Pro WL’yi yalnızca bir klavye değil, oyun arenasında fark yaratan güçlü bir ekipman olarak konumlandıran prestijli bir sunum sundu."
    },
    gallery: [
      {
        type: 'video',
        src: '/works/North_Keyboard/video1_2.mp4',
        autoPlay: true,
        loop: true,
        muted: true
      },
      { type: 'image', src: '/works/North_Keyboard/1.png' },
      { type: 'image', src: '/works/North_Keyboard/2.png' },
      {
        type: 'video',
        src: '/works/North_Keyboard/video2.mp4',
        autoPlay: true,
        loop: true,
        muted: true
      },
      { type: 'image', src: '/works/North_Keyboard/3.png', colSpan: 1 },
      { type: 'image', src: '/works/North_Keyboard/4.png', colSpan: 1 },
      { type: 'image', src: '/works/North_Keyboard/5.png', colSpan: 1 },
      { type: 'image', src: '/works/North_Keyboard/6.png', colSpan: 1 },
      {
        type: 'video',
        src: '/works/North_Keyboard/video3.mp4',
        autoPlay: true,
        loop: true,
        muted: true,
        colSpan: 2
      },
      { type: 'image', src: '/works/North_Keyboard/7.png', colSpan: 1 },
      { type: 'image', src: '/works/North_Keyboard/8.png', colSpan: 1 },
      { type: 'image', src: '/works/North_Keyboard/gif1.gif', colSpan: 1 },
      {
        type: 'video',
        src: '/works/North_Keyboard/video4.mp4',
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
    image: '/works/Mehaz_BrandGuide/a9d27a52-01.png',
    heroFit: 'cover',
    client: "Mehaz",
    clientLogo: '/works/Mehaz_BrandGuide/mehaz_logo.png',
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
      { type: 'image', src: '/works/Mehaz_BrandGuide/a9d27a52-01.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_BrandGuide/a9d27a52-02.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_BrandGuide/a9d27a52-03.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_BrandGuide/a9d27a52-04.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_BrandGuide/a9d27a52-05.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_BrandGuide/a9d27a52-06.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_BrandGuide/a9d27a52-07.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_BrandGuide/a9d27a52-08.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_BrandGuide/a9d27a52-09.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_BrandGuide/a9d27a52-10.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_BrandGuide/a9d27a52-11.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_BrandGuide/a9d27a52-12.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_BrandGuide/a9d27a52-13.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_BrandGuide/a9d27a52-14.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_BrandGuide/a9d27a52-15.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_BrandGuide/a9d27a52-16.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_BrandGuide/a9d27a52-17.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_BrandGuide/a9d27a52-18.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_BrandGuide/a9d27a52-19.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_BrandGuide/a9d27a52-20.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_BrandGuide/a9d27a52-21.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_BrandGuide/a9d27a52-22.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_BrandGuide/a9d27a52-23.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_BrandGuide/a9d27a52-24.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_BrandGuide/a9d27a52-25.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_BrandGuide/a9d27a52-26.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_BrandGuide/a9d27a52-27.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_BrandGuide/a9d27a52-28.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_BrandGuide/a9d27a52-29.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_BrandGuide/a9d27a52-30.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_BrandGuide/a9d27a52-31.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_BrandGuide/a9d27a52-32.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_BrandGuide/a9d27a52-33.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_BrandGuide/a9d27a52-34.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_BrandGuide/a9d27a52-35.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_BrandGuide/a9d27a52-36.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_BrandGuide/a9d27a52-37.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_BrandGuide/a9d27a52-38.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_BrandGuide/a9d27a52-39.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_BrandGuide/a9d27a52-40.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_BrandGuide/a9d27a52-41.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_BrandGuide/a9d27a52-42.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_BrandGuide/a9d27a52-43.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_BrandGuide/a9d27a52-44.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_BrandGuide/a9d27a52-45.png', colSpan: 1 },
      { type: 'image', src: '/works/Mehaz_BrandGuide/a9d27a52-46.png', colSpan: 1 }
    ]
  },
  {
    id: 'o3-layer',
    title: 'O3 Layer',
    description: {
      [Language.EN]: "Brand identity and UI system designed to visualize atmospheric data.",
      [Language.TR]: "Atmosferik verileri görselleştirmek için tasarlanmış marka kimliği ve arayüz sistemi."
    },
    image: '/works/o3_Layer/hero.png',
    heroFit: 'contain',
    client: "O3 Layer",
    clientLogo: '/works/o3_Layer/o3_logo.png',
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
          { src: '/works/o3_Layer/gif1.gif' },
          { src: '/works/o3_Layer/gif2.gif' }
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
          { src: '/works/o3_Layer/2.png' },
          { src: '/works/o3_Layer/1.jpg' }
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
      [Language.TR]: "Octopus Bridge için yürütülen çalışma, markanın dijital kimliğini güçlendiren ve vizyonunu netleştiren bütüncül bir tasarım süreci olarak ele alındı. Web platformu için geliştirilen UI/UX yapısı, kullanıcı deneyimini sade ve akıcı bir mimariyle yeniden kurgularken; logo tasarımı, el çizimi illüstrasyonlar ve belirlenen renk sistemi markanın karakterini özgün ve hatırlanabilir bir yapıya dönüştürdü. Tüm görsel dil, firmanın vizyonunu destekleyen tutarlı bir marka bütünlüğü oluşturacak şekilde yapılandırıldı."
    },
    solution: {
      [Language.EN]: "While dynamism was added to the digital experience through Lottie animations and motion design elements, brand interaction was carried to different platforms with secondary communication tools like Telegram sticker sets. The resulting work offered a comprehensive transformation that moved Octopus Bridge to a powerful, integrated, and modern brand structure, not only visually but also strategically and communicatively.",
      [Language.TR]: "Lottie animasyonlar ve hareketli tasarım öğeleriyle dijital deneyime dinamizm kazandırılırken, Telegram sticker setleri gibi yan iletişim araçlarıyla marka etkileşimi farklı platformlara taşındı. Ortaya çıkan çalışma, Octopus Bridge’i yalnızca görsel olarak değil, stratejik ve iletişimsel açıdan da güçlü, bütünlüklü ve modern bir marka yapısına taşıyan kapsamlı bir dönüşüm sundu."
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
    id: 'The_Materialization_of_Madde',
    title: {
      [Language.EN]: 'The Materialization of Madde',
      [Language.TR]: 'Maddenin Somutlaşması'
    },
    type: {
      [Language.EN]: 'Sketch',
      [Language.TR]: 'Eskiz'
    },
    date: '02.2025',
    image: '/fragments/The_Materialization_of_Madde/Cover.png',
    blocks: [
      {
        kind: 'image',
        src: '/fragments/The_Materialization_of_Madde/Cover.png'
      },
      {
        kind: 'text',
        content: {
          [Language.TR]: `Bu yazıda, ismimizin çizgilerde nasıl hayat bulduğunun, kütle ve boşluk arasında kurduğumuz o dengenin hikayesini paylaşıyoruz.

Logo fikrini üretirken işe varlığın kökenine inerek başladık. Alfabenin ilk harfi olan "a"nın taşıdığı başlangıç vurgusu, etimolojide temel kavramlarla örtüşüyordu: Aristoteles′in hylē "1. ahşap hammaddesi, 2. Madde gibi olarak tanımladığı sözcük, tıpkı Yunanca aslı gibi esasen "ağaç, tomruk, ahşap" anlamına gelmekte olup" işlevsel ve temel "maddeleri" anlam olarak barındırmaktadır. Ayrıca Arapça'da madd yayılma, uzama filidir; her ne kadar etimolojik olarak farklı köken olsa da bizim "biçimleri hareketlendirme" prensibini ifade etmektedir. Logo tasarımımız bu nedenle maddenin kendisiyle, onun içindeki boşlukla olan ilişkisini yansıtmalıydı ve biz de kütle-boşluğun iç içe geçtiği bir denge kurmayı hedefledik. Böylece logomuz bir alanın içinde bulunan herhangi bir maddeyi tanımlayacak ve aynı zamanda ayırt edilebilen bir biçim oluşturmak istedik.`,
          [Language.EN]: `In this piece, we share the story of how our name came to life in lines — and the balance we struck between mass and void.

When developing the logo concept, we began by tracing the origins of existence itself. The initial emphasis carried by "a" — the first letter of the alphabet — resonated with foundational concepts in etymology: Aristotle's hylē, defined as "1. raw timber, 2. Matter," a word that in its Greek origin essentially means "wood, log, timber," while also carrying the meaning of functional and elemental "matters." In Arabic, madd is the verb for spreading and extending; though etymologically distinct, it expresses our principle of "animating forms." Our logo design therefore had to reflect matter's relationship with itself — and with the void within it — and we set out to establish a balance where mass and void intertwine. We wanted our logo to define any matter within a space while simultaneously forming a distinguishable shape.`
        }
      },
      {
        kind: 'image',
        src: '/fragments/The_Materialization_of_Madde/1.jpeg'
      },
      {
        kind: 'text',
        content: {
          [Language.TR]: `Logonun biçimsel kurgusunda, ismimizin doğasına uygun olarak soyut ancak kendi içinde kesintisiz bir ritim oluşturmasını bekledik. M-A-D-D-E harfleri yan yana geldiğinde, farklı biçimlerin yığması gibi değil, hepsi aynı "maddeden" oyulmuş, aynı özden kopup gelmiş hissini vermeliydi. Bunu sağlamak için italik bir dikdörtgeni ana referans (base) olarak belirledik ve harfleri bu temel formun üzerine inşa ettik. Eskiz süreçlerimizde harflerin yapısını bozmamaya, eklemeler veya boşluklar yaratsak bile o ana formun karakterini korumasına özen gösterdik. Ortaya çıkan biçimler, maddenin kendine has o saf ve ayrışmaz bütünlüğünü yansıtıyordu.`,
          [Language.EN]: `In the formal composition of the logo, we expected it to create an abstract yet internally unbroken rhythm — true to the nature of our name. When the letters M-A-D-D-E appear side by side, they should not feel like an accumulation of different forms, but rather as if all were carved from the same "matter," broken from the same essence. To achieve this, we established an italic rectangle as the primary reference (base) and built the letters upon this foundational form. Throughout our sketching process, we took care not to disrupt the structure of the letters — even when introducing additions or voids, we preserved the character of that base form. The resulting shapes reflected the pure and indivisible wholeness that is unique to matter itself.`
        }
      },
      {
        kind: 'image-pair',
        srcs: ['/fragments/The_Materialization_of_Madde/2.jpeg', '/fragments/The_Materialization_of_Madde/3.jpeg']
      },
      {
        kind: 'text',
        content: {
          [Language.TR]: `Tasarım süreci hiçbir zaman düz bir çizgi değildir; kendi içimizde en çok tartıştığımız nokta, formun ne kadar deneysel kalacağı ve nerede işlevselliğe teslim olacağıydı. Bauhaus prensiplerinden aldığımız ilham, bize işlevi her zaman ön planda tutmamızı söylüyordu. Ortaya çıkan o "boşluklu" ve soyut yapı, markanın imajını doğrudan yansıtıp görsel olarak bizi çok heyecanlandırsa da markanın akılda kalıcılığı ve okunabilirliği de bir o kadar kritikti.

Bir tasarımın çok deneysel kalıp işlevden uzaklaşması riskine karşı logoyu sadeleştirmeye karar verdik. Örneğin, başlardaki alternatiflerde kelimenin dengesini biraz bozan ilk "m" harfini daha düz ve okunaklı bir forma çekerek, deneyselliği okunabilirlikle dengeledik. Nihayetinde önemli olan, logoyu bir bulmaca gibi çözdürmek değil; ismin ve o ismin yarattığı hissin zihne kazınmasıydı. Tıpkı iyi bir mimari yapının silüetini unutsanız da ismini ve size hissettirdiğini asla unutmamanız gibi.

Bu güçlü ve karakteristik yapıyı destekleyecek tipografi seçimi de en az logonun kendi formu kadar önemliydi. Tercihimiz, tarafsız yapısıyla bilinen Neue Kabel oldu. Neue Kabel'ı seçmemizin nedeni, onun bu tanımsız kalabilme gücüydü; böylece Madde Studio'nun logosu her yerde, her yüzeyde ve her şey için kullanılabilir evrensel bir zemin kazanmış oldu.`,
          [Language.EN]: `The design process is never a straight line. The point we debated most internally was how experimental the form should remain, and where it would surrender to function. The inspiration we drew from Bauhaus principles told us to always keep function at the forefront. While the resulting "voided" and abstract structure directly reflected the brand's image and thrilled us visually, the brand's memorability and legibility were equally critical.

Against the risk of a design becoming too experimental and losing its function, we decided to simplify the logo. For example, by pulling the initial "m" — which slightly disrupted the balance of the word in early alternatives — into a more straightforward and readable form, we balanced experimentation with legibility. Ultimately, what mattered was not solving the logo like a puzzle, but having the name and the feeling it evokes etched into the mind. Just as you may forget the silhouette of a great building, you never forget its name and what it made you feel.

The choice of typography to support this strong and characteristic structure was no less important than the logo's own form. Our choice was Neue Kabel, known for its neutral structure. The reason we chose Neue Kabel was its power to remain undefined — giving Madde Studio's logo a universal foundation usable everywhere, on every surface, for everything.`
        }
      },
      {
        kind: 'image-pair',
        srcs: ['/fragments/The_Materialization_of_Madde/4.png', '/fragments/The_Materialization_of_Madde/5.png']
      },
      {
        kind: 'credits',
        content: {
          [Language.TR]: `Tasarım: Mehmet Sait Özer, Doruk Teker, Nebil Erşan Elcenabi\nFikir: Mehmet Sait Özer, Nebil Erşan Elcenabi`,
          [Language.EN]: `Design: Mehmet Sait Özer, Doruk Teker, Nebil Erşan Elcenabi\nConcept: Mehmet Sait Özer, Nebil Erşan Elcenabi`
        }
      }
    ]
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
    name: 'Yusuf İhlamur',
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
