import { Component, inject, OnInit } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private readonly router = inject(Router);

  protected readonly title = 'itlogia_test_app';

  public ngOnInit(): void {
    this.router.navigate(['/pizza']);
  }
}
