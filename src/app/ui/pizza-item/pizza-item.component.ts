import { Component, input, InputSignal } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { Pizza } from '../../interfaces/pizza.interface';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'itl-pizza-item',
  imports: [
    IconComponent,
    ButtonComponent
  ],
  templateUrl: './pizza-item.component.html',
  styleUrl: './pizza-item.component.scss'
})
export class PizzaItemComponent {
  public readonly pizza: InputSignal<Pizza> = input.required();
}
