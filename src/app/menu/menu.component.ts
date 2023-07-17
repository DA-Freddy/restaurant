import { Component } from '@angular/core';
import { Dish } from '../interfaces/dish';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  // meals :string[]=['Pizza','Nudeln','Salat'];
  // mealPrices :number[]=[9,8,10];
  // beverages:string[]=['Cola','Fanta','Bier','Wein'];
  // beveragesPrices :number[]=[3.50,3.50,4,5];

  beveragesJson: Dish[] 
  = [{
    beverage : 'cola',
    price: 3.5,
  },
  {
    beverage : 'Fanta',
    price: 3.5,
  },
  {
    beverage : 'Bier',
    price: 4,
  },
  {
    beverage : 'Wein',
    price: 5,
  },
  ]
}
