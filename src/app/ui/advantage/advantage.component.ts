import { Component, input, InputSignal } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'itl-advantage',
  imports: [
    IconComponent
  ],
  templateUrl: './advantage.component.html',
  styleUrl: './advantage.component.scss'
})
export class AdvantageComponent {
  public readonly icon: InputSignal<string> = input.required();
  public readonly title: InputSignal<string> = input.required();
  public readonly bodyText: InputSignal<string> = input.required();
}
