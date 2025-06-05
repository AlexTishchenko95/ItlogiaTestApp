import {Component, inject} from '@angular/core';
import {PizzaItemComponent} from '../../ui/pizza-item/pizza-item.component';
import {PizzaService} from '../../services/pizza.service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'itl-pizza-choose',
  imports: [
    PizzaItemComponent,
    AsyncPipe
  ],
  templateUrl: './pizza-choose.component.html',
  styleUrl: './pizza-choose.component.scss'
})
export class PizzaChooseComponent {
  private readonly pizzaService: PizzaService = inject(PizzaService);

  protected readonly pizzas$ = this.pizzaService.getPizza();
}
