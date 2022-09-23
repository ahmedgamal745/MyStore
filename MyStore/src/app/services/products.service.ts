import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  fetchProducts() {
    return this.http.get<any>("https://api.escuelajs.co/api/v1/products/").pipe(map((res:any)=>{
      return res;
    }))
  }

  get(id:any) {
    return this.http.get("https://api.escuelajs.co/api/v1/products/"+id);
  }
}
