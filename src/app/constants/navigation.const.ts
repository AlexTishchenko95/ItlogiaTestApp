import { HeaderRoutes } from '../enums/header-nav.enum';
import { HeaderNavItem } from '../interfaces/header-nav.interface';

export const HEADER_NAV_DATA: HeaderNavItem[] = [
  { label: 'Пиццы', link: HeaderRoutes.PIZZA },
  { label: 'Напитки', link: HeaderRoutes.DRINKS },
  { label: 'Доставка и оплата', link: HeaderRoutes.PAYMENT_DELIVERY },
  { label: 'Контакты', link: HeaderRoutes.CONTACTS },
];
