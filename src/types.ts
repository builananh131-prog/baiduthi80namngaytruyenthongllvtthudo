export interface QuestionItem {
  id: string;
  number: number;
  title: string;
  summary: string;
  sections: {
    heading?: string;
    subheading?: string;
    paragraphs: string[];
    highlight?: {
      title?: string;
      content: string;
      bullets?: string[];
    };
    quote?: {
      text: string;
      author?: string;
    };
    bullets?: string[];
  }[];
}

export interface PodcastGuest {
  name: string;
  role: string;
  bio: string;
  highlight?: string;
}

export interface MediaItemConfig {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  qrData: string;
  qrLabel: string;
  audioDuration: string;
  audioFileDefault: string;
  description: string;
}
