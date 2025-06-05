import {Component, input, InputSignal} from '@angular/core';

@Component({
  selector: 'itl-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  public readonly text: InputSignal<string> = input.required();
}
