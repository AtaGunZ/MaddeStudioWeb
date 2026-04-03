export enum Language {
  EN = 'EN',
  TR = 'TR'
}


export interface ContentText {
  [Language.EN]: string;
  [Language.TR]: string;
}

export interface Project {
  id: string;
  title: string;
  description: ContentText;
  image: string;
  heroFit?: 'cover' | 'contain';
  hero_bg?: string;
  client: string;
  clientLogo?: string;
  year: string;
  services: string[];
  challenge: ContentText;
  solution: ContentText;
  gallery: GalleryItem[];
}

export type GalleryItem =
  | { type: 'image'; src: string; colSpan?: 1 | 2 }
  | { type: 'video'; src: string; colSpan?: 1 | 2; poster?: string; autoPlay?: boolean; muted?: boolean; loop?: boolean; customAspect?: string }
  | { type: 'group'; items: { src: string; }[]; colSpan?: 1 | 2; cols?: 2 | 4 }
  | { type: 'text'; content: ContentText; title?: ContentText; colSpan?: 1 | 2 };

export interface Service {
  title: ContentText;
  process: ContentText;
  image: string;
}

export type FragmentBlock =
  | { kind: 'text'; content: ContentText }
  | { kind: 'image'; src: string }
  | { kind: 'image-pair'; srcs: [string, string] }
  | { kind: 'credits'; content: ContentText };

export interface Fragment {
  id: string;
  title: ContentText;
  type: ContentText;
  date: string;
  image: string;
  content?: ContentText;
  blocks?: FragmentBlock[];
}

export interface Client {
  id: string;
  name: string;
  logo: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: ContentText;
  bio?: ContentText;
  image?: string;
  isLead?: boolean;
}