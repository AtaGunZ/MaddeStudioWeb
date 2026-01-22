export enum Language {
  EN = 'EN',
  TR = 'TR'
}

export enum Page {
  HOME = 'Home',
  FRAGMENTS = 'Fragments',
  CONTACT = 'Contact'
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
}

export interface Service {
  title: string;
  process: ContentText;
}

export interface Fragment {
  id: string;
  title: string;
  type: 'News' | 'Sketch';
  date: string;
  image: string;
}