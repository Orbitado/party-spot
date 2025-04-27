import { MapPin, Users } from 'lucide-react';

export interface FeaturedSpot {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  location: string;
  rating: number;
  reviewCount: number;
  amenities: {
    icon: React.ElementType;
    label: string;
  }[];
}

export const featuredSpots: FeaturedSpot[] = [
  {
    id: 'spot1',
    title: 'Casona de Campo',
    description: 'Espacio campestre perfecto para eventos al aire libre',
    price: 10000,
    image: '/spots/casona-de-campo.webp',
    location: 'San Telmo, Tigres, AR',
    rating: 5.0,
    reviewCount: 109,
    amenities: [
      { icon: Users, label: 'Hasta 100 personas' },
      { icon: MapPin, label: 'San Telmo, Tigres, AR' },
    ],
  },
  {
    id: 'spot2',
    title: 'Salón Eventos',
    description: 'Amplio y moderno espacio para eventos corporativos',
    price: 8000,
    image: '/spots/alta-la-luna.webp',
    location: 'La Plata, Buenos Aires, AR',
    rating: 4.5,
    reviewCount: 198,
    amenities: [
      { icon: Users, label: 'Hasta 200 personas' },
      { icon: MapPin, label: 'La Plata, Buenos Aires, AR' },
    ],
  },
  {
    id: 'spot3',
    title: 'Alta la Luna Bodega',
    description: 'Bodega exclusiva con vistas panorámicas',
    price: 13000,
    image: '/spots/casa-croix.webp',
    location: 'Mendoza, Luján, AR',
    rating: 5.0,
    reviewCount: 78,
    amenities: [
      { icon: Users, label: 'Hasta 150 personas' },
      { icon: MapPin, label: 'Mendoza, Luján, AR' },
    ],
  },
  {
    id: 'spot4',
    title: 'Casa Croix',
    description: 'Elegante casa de estilo francés para eventos exclusivos',
    price: 6000,
    image: '/spots/zetai-eventos.webp',
    location: 'El Calafate, SC, AR',
    rating: 4.35,
    reviewCount: 110,
    amenities: [
      { icon: Users, label: 'Hasta 80 personas' },
      { icon: MapPin, label: 'El Calafate, SC, AR' },
    ],
  },
];
