import { Component, input, InputSignal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'itl-icon',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './icon.component.html',
})
export class IconComponent {
  public readonly iconPath: InputSignal<string> = input.required();

  public readonly height: InputSignal<number> = input(24);
  public readonly width: InputSignal<number> = input(24);
  public readonly alt: InputSignal<string> = input('icon-alt');
}
