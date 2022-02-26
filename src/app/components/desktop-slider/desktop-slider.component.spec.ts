import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopSliderComponent } from './desktop-slider.component';

describe('DesktopSliderComponent', () => {
  let component: DesktopSliderComponent;
  let fixture: ComponentFixture<DesktopSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesktopSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
