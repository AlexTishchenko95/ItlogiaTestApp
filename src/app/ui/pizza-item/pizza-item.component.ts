import { Component, inject, input, InputSignal } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { Pizza } from '../../interfaces/pizza.interface';
import { ButtonComponent } from '../button/button.component';
import { MatDialog } from '@angular/material/dialog';
import { ImagePopupComponent } from '../image-popup/image-popup.component';

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
  private readonly dialog: MatDialog = inject(MatDialog);

  public readonly pizza: InputSignal<Pizza> = input.required();

  protected onClickPizza(): void {
    this.pizza().id;

    this.dialog.open(ImagePopupComponent, {
      data: { imageUrl: this.pizza().image },
      // width: '80%',
      // maxWidth: '800px',
    });
  }
}
