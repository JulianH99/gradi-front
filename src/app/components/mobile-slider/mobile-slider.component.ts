import {
  Component,
  ContentChildren,
  ElementRef,
  OnInit,
  QueryList,
} from '@angular/core';

@Component({
  selector: 'app-mobile-slider',
  templateUrl: './mobile-slider.component.html',
  styleUrls: ['./mobile-slider.component.scss'],
})
export class MobileSliderComponent implements OnInit {
  @ContentChildren('img') images!: QueryList<ElementRef>;

  selectedPictureIndex = 0;

  get pagerItems() {
    return Array(this.images.length).fill({});
  }

  get leftStyle() {
    return `${-100 * this.selectedPictureIndex}%`;
  }

  ngOnInit(): void {}

  selectPicture(index: number) {
    this.selectedPictureIndex = index;
  }
}
