import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {
   
  
  products = [
    { qty: 0, name: 'Clé USB 2Go' },
    { qty: 0, name: 'Clé USB 4Go' },
    { qty: 0, name: 'Souris bluetooth' }
    ];
    
    taille = this.products.length;
    total_qty = 0;
    itemCount = 0; 

  addItem(product) {
    
    product.qty++;
    let total_qty = 0;

    for (let i = 0; i < this.taille; i++) { 
      total_qty += 1;
    }
      this.total_qty += total_qty ;
      
    }

}
