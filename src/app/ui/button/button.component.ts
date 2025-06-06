import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'itl-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  public readonly buttonText: InputSignal<string> = input.required();
  public readonly width: InputSignal<number> = input(224);
  public readonly disabled: InputSignal<boolean> = input(false);
}
