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
    icon: 'edit',
    link: '/pages/liste',
  },
  {
    title: 'liste offre',
    icon: 'list',
    link: '/pages/listeOffre',
  },
  {
    title: 'cvtheque',
    icon: 'grid',
    link: '/pages/cvtheque',
  },{
    title: 'entretien',
    icon: 'grid',
    link: '/pages/entretien',
  }
];
