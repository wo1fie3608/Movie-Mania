import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviedescComponent } from './moviedesc.component';

describe('MoviedescComponent', () => {
  let component: MoviedescComponent;
  let fixture: ComponentFixture<MoviedescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviedescComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviedescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
