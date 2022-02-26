import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProductInfo(): Observable<any> {
    return this.http.get(
      'https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js'
    );
  }
}
