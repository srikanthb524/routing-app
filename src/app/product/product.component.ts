import { Component, OnInit } from '@angular/core';
import { Product } from 'src/Models/product';
import { ProductService } from 'src/Services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:Product[]=[];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.products=this.productService.getProducts();
  }

}
