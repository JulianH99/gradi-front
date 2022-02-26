import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCardModalComponent } from './add-to-card-modal.component';

describe('AddToCardModalComponent', () => {
  let component: AddToCardModalComponent;
  let fixture: ComponentFixture<AddToCardModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToCardModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToCardModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
