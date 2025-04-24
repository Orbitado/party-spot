import { House, Cake, GraduationCap, Heart } from 'lucide-react';

export interface HeroSectionByIconSelected {
  id: number;
  highlight: string;
  text: string;
  icon: React.ElementType;
  backgroundUrl: string;
}

export const heroSectionByIconSelected: HeroSectionByIconSelected[] = [
  {
    id: 1,
    highlight: 'Tu cumpleaños',
    text: 'en espacios excepcionales.',
    icon: Cake,
    backgroundUrl: '/hero/under-water.webp',
  },
  {
    id: 2,
    highlight: 'Tu fiesta',
    text: 'en ambientes exclusivos.',
    icon: House,
    backgroundUrl: '/hero/pink-space.webp',
  },
  {
    id: 3,
    highlight: 'Tu logro',
    text: 'en escenarios inspiradores.',
    icon: GraduationCap,
    backgroundUrl: '/hero/happy-people.webp',
  },
  {
    id: 4,
    highlight: 'Sí, quiero',
    text: 'en entornos inolvidables.',
    icon: Heart,
    backgroundUrl: '/hero/wedding-party.webp',
  },
];
