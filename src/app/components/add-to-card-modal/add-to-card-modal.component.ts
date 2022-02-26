import { animate, style, transition, trigger } from '@angular/animations';
import { formatNumber } from '@angular/common';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-to-card-modal',
  templateUrl: './add-to-card-modal.component.html',
  styleUrls: ['./add-to-card-modal.component.scss'],
  animations: [
    trigger('showDialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100),
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' })),
      ]),
    ]),
  ],
})
export class AddToCardModalComponent implements OnInit {
  @Input() variant: any;
  @Input() show = false;
  @Input() totalPrice = '';

  @Output() closeModal = new EventEmitter();

  close() {
    this.closeModal.emit();
  }

  ngOnInit(): void {}
}
