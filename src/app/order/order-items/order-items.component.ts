import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent implements OnInit {

  @Input() items: CartItem[]
  @Output() incrementoQtd = new EventEmitter<CartItem>()
  @Output() decrementoQtd = new EventEmitter<CartItem>()
  @Output() remove = new EventEmitter<CartItem>()

  constructor() { }

  ngOnInit() {
  }

  emitIncrementoQtd(item: CartItem){
    this.incrementoQtd.emit(item)
  }

  emitDecrementoQtd(item: CartItem){
    this.decrementoQtd.emit(item)
  }

  emitRemove(item: CartItem){
    this.remove.emit(item)
  }


}
