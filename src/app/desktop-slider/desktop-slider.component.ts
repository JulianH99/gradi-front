import {
  Component,
  ContentChildren,
  ElementRef,
  Input,
  OnInit,
  QueryList,
} from '@angular/core';
import {
  concat,
  from,
  fromEvent,
  map,
  Observable,
  Subscription,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'app-desktop-slider',
  templateUrl: './desktop-slider.component.html',
  styleUrls: ['./desktop-slider.component.scss'],
})
export class DesktopSliderComponent implements OnInit {
  selectedImage = 0;

  @Input() images!: string[];

  constructor() {}

  ngOnInit(): void {}

  selectImage(index: number) {
    this.selectedImage = index;
  }
}
