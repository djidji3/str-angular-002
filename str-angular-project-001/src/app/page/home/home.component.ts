import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/products';
/* import { ProductServiceService } from 'src/app/service/product-service.service'; */

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  /* products = ProductServiceService; */
  products = products;



  constructor() { }

  ngOnInit(): void {
  }

}
