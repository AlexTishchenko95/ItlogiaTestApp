import { Component } from '@angular/core';
import { Advantage } from '../../interfaces/advantage.interface';
import { ADVANTAGES } from '../../constants/advantages.const';
import { AdvantageComponent } from '../../ui/advantage/advantage.component';
import { NgOptimizedImage } from '@angular/common';
import { ButtonComponent } from '../../ui/button/button.component';
import { PizzaChooseComponent } from '../pizza-choose/pizza-choose.component';
import { OrderPizzaComponent } from '../order-pizza/order-pizza.component';

@Component({
  selector: 'itl-pizza-page',
  imports: [
    AdvantageComponent,
    NgOptimizedImage,
    ButtonComponent,
    PizzaChooseComponent,
    OrderPizzaComponent
  ],
  templateUrl: './pizza-page.component.html',
  styleUrl: './pizza-page.component.scss'
})
export class PizzaPageComponent {
  protected readonly ADVANTAGES: Advantage[] = ADVANTAGES;
}
