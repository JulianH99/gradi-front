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

  // these variables are for modal showing only
  selectedVariant = {};
  showAddToCartModal = false;

  constructor(private readonly productService: ProductService) {}

  ngOnInit(): void {
    this.subscription = this.productService.getProductInfo().subscribe({
      next: (info) => {
        this.productInfo = info;

        // perform a property assigment to simplify the ouput of formatted prices
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

  /** return total price to pass on to the modal */
  get totalPrice() {
    return this.quantity * Number(this.productInfo?.price_format);
  }

  /** format total price with proper decimal placement */
  get totalPriceFormat() {
    return formatNumber(this.totalPrice, 'en-US', '1.2');
  }

  /**
   * determines wether the product can be added or not to the cart
   * based on the selected color and size
   */
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

    // finds the variant based on the selected color and size
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
