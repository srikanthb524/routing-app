import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/Services/product.service';
import { Product } from 'src/Models/product';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: any;
  id: any;
  sub:any;
  constructor(
    private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService
  ) {}

  ngOnInit() {
    this.sub=this._Activatedroute.paramMap.subscribe(params=>{
      console.log(params);
      this.id=params.get('id');
      this.product=this._productService.getProduct(this.id);
      console.log(this.product);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  onBack(): void {
    this._router.navigate(['product']);
 }
}
