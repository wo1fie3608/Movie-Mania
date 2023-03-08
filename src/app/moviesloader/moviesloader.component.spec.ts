import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesloaderComponent } from './moviesloader.component';

describe('MoviesloaderComponent', () => {
  let component: MoviesloaderComponent;
  let fixture: ComponentFixture<MoviesloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesloaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
