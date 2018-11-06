import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { ControlValueAccessor } from '@angular/forms';
import { OrderService } from './order.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { Order, OrderItem } from './order.model';
import { Router } from '@angular/router';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {
  

  delivery: number = 8

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão Refeição', value: 'REF'}
  ]
 

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit() {
  }

  itemsValue(): number{
    return this.orderService.itemsValue()
  }


  cartItems(): CartItem[]{
    return this.orderService.cartItems()
  }

  incrementoQtd(item: CartItem){
    this.orderService.incrementoQtd(item)
  }

  decrementoQtd(item: CartItem){
    this.orderService.decrementoQtd(item)
  }

  remove(item: CartItem){
    this.orderService.remove(item)
  }

  finalizarPedido(order: Order){
    order.orderItems = this.cartItems()
        .map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id))
    
        this.orderService.finalizarPedido(order)
            .subscribe( (orderId: string) => {
              this.router.navigate(['/order-summary'])
              this.orderService.clear()          
            })
    


  }


}
