import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBombComponent } from './create-bomb.component';

describe('CreateBombComponent', () => {
  let component: CreateBombComponent;
  let fixture: ComponentFixture<CreateBombComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateBombComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBombComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
