import { Component } from '@angular/core';
import { Advantage } from '../../interfaces/advantage.interface';
import { ADVANTAGES } from '../../constants/advantages.const';
import { AdvantageComponent } from '../../ui/advantage/advantage.component';
import { NgOptimizedImage } from '@angular/common';
import { ButtonComponent } from '../../ui/button/button.component';

@Component({
  selector: 'itl-pizza-page',
  imports: [
    AdvantageComponent,
    NgOptimizedImage,
    ButtonComponent
  ],
  templateUrl: './pizza-page.component.html',
  styleUrl: './pizza-page.component.scss'
})
export class PizzaPageComponent {
  protected readonly ADVANTAGES: Advantage[] = ADVANTAGES;
}
