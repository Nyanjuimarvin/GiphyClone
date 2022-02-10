import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifdisplayComponent } from './gifdisplay.component';

describe('GifdisplayComponent', () => {
  let component: GifdisplayComponent;
  let fixture: ComponentFixture<GifdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifdisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GifdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
