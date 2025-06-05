import { Component } from '@angular/core';
import {HEADER_NAV_DATA} from '../../constants/navigation.const';
import {HeaderNavItem} from '../../interfaces/header-nav.interface';
import {NavItemComponent} from '../../ui/nav-item/nav-item.component';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'itl-header',
  imports: [
    NavItemComponent,
    NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  protected readonly routes: HeaderNavItem[] = HEADER_NAV_DATA;
}
