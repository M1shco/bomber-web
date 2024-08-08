import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BombTableComponent } from './bomb-table.component';

describe('BombTableComponent', () => {
  let component: BombTableComponent;
  let fixture: ComponentFixture<BombTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BombTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BombTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
