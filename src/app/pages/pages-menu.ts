import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Offres',
    icon: 'home-outline',
    link: '/pages/listeOffre',
  },
  {
    title: 'Deposer offre',
    icon: 'shopping-cart-outline',
    link: '/pages/DeposerOffre',
    home: true,
  },
  {
    title: 'Quiz',
    icon: 'home-outline',
    link: '/pages/quiz',
  },
  {
    title: 'Recruteurs',
    icon: 'home-outline',
    link: '/pages/recruteurs',
  },
  {
    title: 'cvtheque',
    icon: 'grid',
    link: '/pages/cvtheque',
  },
  {
    title: 'entretien',
    icon: 'grid',
    link: '/pages/entretien',
  }
];
