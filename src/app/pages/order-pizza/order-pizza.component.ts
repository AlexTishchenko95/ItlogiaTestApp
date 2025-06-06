import {Component, DestroyRef, inject} from '@angular/core';
import { ButtonComponent } from '../../ui/button/button.component';
import { ItlInputDirective } from '../../directives/itl-input.directive';
import { IconComponent } from '../../ui/icon/icon.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PizzaService } from '../../services/pizza.service';
import { Order } from '../../interfaces/order.interface';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgToastComponent, NgToastService, TOAST_POSITIONS } from 'ng-angular-popup';

@Component({
  selector: 'itl-order-pizza',
  imports: [
    ButtonComponent,
    ItlInputDirective,
    IconComponent,
    ReactiveFormsModule,
    NgToastComponent
  ],
  templateUrl: './order-pizza.component.html',
  styleUrl: './order-pizza.component.scss'
})
export class OrderPizzaComponent {
  private readonly fb = inject(FormBuilder);
  private readonly pizzaService = inject(PizzaService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly toast = inject(NgToastService);

  protected readonly TOAST_POSITIONS = TOAST_POSITIONS;
  protected readonly noDotsPattern = '^[^.]*$';
  protected readonly orderForm = this.fb.group({
    name: this.fb.control('', Validators.required),
    address: this.fb.control('', Validators.required),
    phoneNumber: this.fb.control('', Validators.required),
  });

  protected preventDotInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    if (/\./.test(value)) {
      input.value = value.replace(/\./g, '');
      this.orderForm.controls.name.setValue(input.value);
    }
  }

  protected onClickAcceptOrder(): void {
    const formData = this.orderForm.getRawValue();

    this.pizzaService.sendOrder(<Order>{
      name: formData.name,
      address: formData.address,
      phoneNumber: formData.phoneNumber,
    })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        // FIXME: toast incorrectly works with ngAfterViewInit
        this.toast.success('Спасибо за Ваш заказ!');
      });
  }
}
