interface NextParty {
  id: number;
  icon: string;
  label: string;
  image: string;
}

export const categories: NextParty[] = [
  {
    id: 1,
    icon: '💍',
    label: 'Boda',
    image: '/images/wedding.webp',
  },
  {
    id: 2,
    icon: '🕊️',
    label: 'Comunión',
    image: '/images/communion.webp',
  },
  {
    id: 3,
    icon: '🎂',
    label: 'Cumpleaños',
    image: '/images/birthday.webp',
  },
  {
    id: 4,
    icon: '🎉',
    label: 'Fiesta',
    image: '/images/party.webp',
  },
  {
    id: 5,
    icon: '🎉',
    label: 'Quince Años',
    image: '/images/fifteenth.webp',
  },
  {
    id: 6,
    icon: '🥩',
    label: 'Asadito',
    image: '/images/food.webp',
  },
];
