import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Liste candidat',
    icon: 'shopping-cart-outline',
    link: '/pages/DeposerOffre',
    home: true,
  },
  {
    title: 'deposer offre',
    icon: 'home-outline',
    link: '/pages/liste',
  },
  {
    title: 'liste offre',
    icon: 'home-outline',
    link: '/pages/listeOffre',
  }
];
