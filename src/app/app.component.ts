import { formatNumber } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  productInfo!: any;

  subscription!: Subscription;

  quantity = 1;

  selectedColor = '';
  selectedSize = '';

  selectedVariant = {};
  showAddToCartModal = false;

  constructor(private readonly productService: ProductService) {}

  ngOnInit(): void {
    this.subscription = this.productService.getProductInfo().subscribe({
      next: (info) => {
        this.productInfo = info;
        this.productInfo.price_format = formatNumber(
          this.productInfo.price / 100,
          'en-US',
          '1.2'
        );
        this.productInfo.compare_at_price_format = formatNumber(
          this.productInfo.compare_at_price / 100,
          'en-US',
          '1.2'
        );
      },
    });
  }

  get totalPrice() {
    return this.quantity * Number(this.productInfo?.price_format);
  }

  get totalPriceFormat() {
    return formatNumber(this.totalPrice, 'en-US', '1.2');
  }

  get canAddToCart() {
    return this.selectedColor && this.selectedSize;
  }

  increaseQuantity() {
    this.quantity += 1;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity -= 1;
    }
  }

  addToCart() {
    const variants = this.productInfo.variants;

    const selectedVariant = variants.find(
      (variant: any) =>
        variant.options[0] === this.selectedColor &&
        variant.options[1] === this.selectedSize
    );

    if (selectedVariant) {
      this.selectedVariant = selectedVariant;
      this.showAddToCartModal = true;
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
