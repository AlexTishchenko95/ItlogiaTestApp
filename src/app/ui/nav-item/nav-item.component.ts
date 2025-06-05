import {Component, input, InputSignal} from '@angular/core';
import {HeaderNavItem} from '../../interfaces/header-nav.interface';

@Component({
  selector: 'itl-nav-item',
  imports: [],
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.scss'
})
export class NavItemComponent {
  public readonly navItem: InputSignal<HeaderNavItem> = input.required<HeaderNavItem>();
}
