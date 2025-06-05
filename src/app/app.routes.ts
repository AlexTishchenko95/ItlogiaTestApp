import { Routes } from '@angular/router';
import { PizzaPageComponent } from './pages/pizza-page/pizza-page.component';
import { HeaderRoutes } from './enums/header-nav.enum';

export const routes: Routes = [
  {
    path: HeaderRoutes.PIZZA,
    component: PizzaPageComponent,
  },
  {
    path: HeaderRoutes.DRINKS,
    component: PizzaPageComponent,
  },
  {
    path: HeaderRoutes.PAYMENT_DELIVERY,
    component: PizzaPageComponent,
  },
  {
    path: HeaderRoutes.CONTACTS,
    component: PizzaPageComponent,
  },
];
