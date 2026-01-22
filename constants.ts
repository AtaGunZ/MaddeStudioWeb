import { Language, Project, Service, Fragment } from './types';

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
      [Language.TR]: "Hizmetler"
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
    mail: "hello@maddestudio.com"
  }
};

export const SERVICES: Service[] = [
  {
    title: "Identity",
    process: {
      [Language.EN]: "Structure → Symbol → System",
      [Language.TR]: "Yapı → Sembol → Sistem"
    }
  },
  {
    title: "Digital",
    process: {
      [Language.EN]: "Interface → Interaction → Flow",
      [Language.TR]: "Arayüz → Etkileşim → Akış"
    }
  },
  {
    title: "Interactive / Game",
    process: {
      [Language.EN]: "Mechanics → Experience → Meaning",
      [Language.TR]: "Mekanik → Deneyim → Anlam"
    }
  },
  {
    title: "Motion",
    process: {
      [Language.EN]: "Time → Rhythm → Form",
      [Language.TR]: "Zaman → Ritim → Form"
    }
  },
  {
    title: "Spatial",
    process: {
      [Language.EN]: "Space → Volume → Atmosphere",
      [Language.TR]: "Mekan → Hacim → Atmosfer"
    }
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Orbital Identity',
    description: {
      [Language.EN]: "A modular branding system for aerospace logistics.",
      [Language.TR]: "Havacılık lojistiği için modüler marka sistemi."
    },
    image: 'https://picsum.photos/seed/orbital/1200/800'
  },
  {
    id: '2',
    title: 'Canvas Living',
    description: {
      [Language.EN]: "Architectural visualization for sustainable urban housing.",
      [Language.TR]: "Sürdürülebilir kentsel konutlar için mimari görselleştirme."
    },
    image: 'https://picsum.photos/seed/canvas/1200/800'
  },
  {
    id: '3',
    title: 'Sonar Audio',
    description: {
      [Language.EN]: "Visual identity and motion graphics for a sound lab.",
      [Language.TR]: "Bir ses laboratuvarı için görsel kimlik ve hareketli grafikler."
    },
    image: 'https://picsum.photos/seed/sonar/1200/800'
  }
];

export const FRAGMENTS: Fragment[] = [
  {
    id: 'f1',
    title: 'Study: Typography on Glass',
    type: 'Sketch',
    date: '2023.10',
    image: 'https://picsum.photos/seed/glassy/600/600'
  },
  {
    id: 'f2',
    title: 'Design Week Panel',
    type: 'News',
    date: '2023.11',
    image: 'https://picsum.photos/seed/panel/600/600'
  },
  {
    id: 'f3',
    title: 'Texture Experiments: Concrete',
    type: 'Sketch',
    date: '2023.12',
    image: 'https://picsum.photos/seed/concrete/600/600'
  },
  {
    id: 'f4',
    title: 'Generative Grid Systems',
    type: 'Sketch',
    date: '2024.01',
    image: 'https://picsum.photos/seed/grids/600/600'
  }
];

export const BRANDS = [
  "TechFlow", "Nordic Home", "Silva", "Future Lab", "Urbanite", "Aura", "Vertex" 
];