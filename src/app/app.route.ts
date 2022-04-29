import { Routes } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { ErrorComponent } from "./error/error.component";
import { HomeComponent } from "./home/home.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductComponent } from "./product/product.component";

export const appRoutes:Routes=[
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductComponent},
  // , children:[
  //   {path:'detail/:id', component:ProductDetailComponent}
  // ]} ,

   { path: 'product/:id', component: ProductDetailComponent },
  {path:'contact',component:ContactComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];
