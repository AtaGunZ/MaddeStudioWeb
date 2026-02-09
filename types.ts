export enum Language {
  EN = 'EN',
  TR = 'TR'
}

export enum Page {
  HOME = 'Home',
  WORKS = 'Works',
  FRAGMENTS = 'Fragments',
  STUDIO = 'Studio',
  CONTACT = 'Contact',
  PROJECT_DETAIL = 'ProjectDetail',
  FRAGMENT_DETAIL = 'FragmentDetail'
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
  | { type: 'video'; src: string; colSpan?: 1 | 2; poster?: string; autoPlay?: boolean; muted?: boolean; loop?: boolean }
  | { type: 'group'; items: { src: string; }[]; colSpan?: 1 | 2 }
  | { type: 'text'; content: ContentText; title?: ContentText; colSpan?: 1 | 2 };

export interface Service {
  title: ContentText;
  process: ContentText;
  image: string;
}

export interface Fragment {
  id: string;
  title: string;
  type: 'News' | 'Sketch';
  date: string;
  image: string;
  content?: ContentText;
}

export interface Client {
  id: string;
  name: string;
  logo: string;
}