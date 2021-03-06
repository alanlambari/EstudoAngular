import { Injectable } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { Observable } from "rxjs/Observable";
import { Order } from "./order.model";
import { HttpClient} from "@angular/common/http";
import { MEAT_API } from "app.api";


@Injectable()
export class OrderService{

    constructor(
        private cartService: ShoppingCartService, 
        private http: HttpClient){
    }

    cartItems(): CartItem[]{
        return this.cartService.items
    }

    incrementoQtd(item: CartItem){
        this.cartService.incrementoQtd(item)
    }

    decrementoQtd(item: CartItem){
        this.cartService.decrementoQtd(item)
    }

    remove(item: CartItem){
        this.cartService.removeItem(item)
    }

    itemsValue(): number {
        return this.cartService.total()
    }

    clear(){
        this.cartService.clear()
    }

    finalizarPedido(order: Order): Observable<string>{
       return this.http.post<Order>(`${MEAT_API}/orders`, order )
                    .map(order => order.id)
    }



}