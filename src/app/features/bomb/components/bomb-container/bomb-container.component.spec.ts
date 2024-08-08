import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BombContainerComponent } from './bomb-container.component';

describe('BombContainerComponent', () => {
  let component: BombContainerComponent;
  let fixture: ComponentFixture<BombContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BombContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BombContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
