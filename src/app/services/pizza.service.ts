import { Injectable } from '@angular/core';
import { Pizza } from '../interfaces/pizza.interface';
import {delay, Observable, of} from 'rxjs';
import { Order } from '../interfaces/order.interface';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  public getPizza(): Observable<Pizza[]> {
    return of([
      {
        id: '1',
        name: 'Мясная Делюкс',
        ingredients: 'Пепперони, лук, бекон, томатная паска, колбаски, перец, грибы, соус чили, ананасы',
        image: '/assets/img/pizzas/pizza_1.png',
      },
      {
        id: '2',
        name: 'Морская Премиум',
        ingredients: 'Перец, сыр, креветки, кальмары, мидии, лосось',
        image: '/assets/img/pizzas/pizza_2.png',
      },
      {
        id: '3',
        name: 'Бекон и Сосиски',
        ingredients: 'Бекон, сыр, сосиски, ананас, томатная паста',
        image: '/assets/img/pizzas/pizza_3.png',
      },
      {
        id: '4',
        name: 'Куриная Делюкс',
        ingredients: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
        image: '/assets/img/pizzas/pizza_4.png',
      },
      {
        id: '5',
        name: 'Барбекю Премиум',
        ingredients: 'Свинина BBQ, соус Барбекю, сыр, курица, соус для пиццы, соус чили',
        image: '/assets/img/pizzas/pizza_5.png',
      },
      {
        id: '6',
        name: 'Пепперони Дабл',
        ingredients: 'Пепперони, сыр, колбаса 2 видов: обжареная и вареная',
        image: '/assets/img/pizzas/pizza_6.png',
      },
      {
        id: '7',
        name: 'Куриная Трио',
        ingredients: 'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы',
        image: '/assets/img/pizzas/pizza_7.png',
      },
      {
        id: '8',
        name: 'Сырная',
        ingredients: 'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный',
        image: '/assets/img/pizzas/pizza_8.png',
      }
    ]);
  }

  public sendOrder(order: Order): Observable<Order> {
    return of(order).pipe(delay(2000));
  }
}
