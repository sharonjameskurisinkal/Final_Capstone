import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamPageComponent } from './stream-page.component';

describe('StreamPageComponent', () => {
  let component: StreamPageComponent;
  let fixture: ComponentFixture<StreamPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreamPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
