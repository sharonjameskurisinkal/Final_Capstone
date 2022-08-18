import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMovieCreateUpdateComponent } from './admin-movie-create-update.component';

describe('AdminMovieCreateUpdateComponent', () => {
  let component: AdminMovieCreateUpdateComponent;
  let fixture: ComponentFixture<AdminMovieCreateUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMovieCreateUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMovieCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
