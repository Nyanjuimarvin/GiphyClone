import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifformComponent } from './gifform.component';

describe('GifformComponent', () => {
  let component: GifformComponent;
  let fixture: ComponentFixture<GifformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GifformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
