import { Component, Input } from '@angular/core';
import { Dish } from '../interfaces/dish';
@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent {
  // @Input() dishname: string ="";
  // @Input() price: number = 9;
  @Input() dish !: Dish;
}
