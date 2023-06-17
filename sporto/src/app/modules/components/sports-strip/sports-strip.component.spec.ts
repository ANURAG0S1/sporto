import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsStripComponent } from './sports-strip.component';

describe('SportsStripComponent', () => {
  let component: SportsStripComponent;
  let fixture: ComponentFixture<SportsStripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsStripComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportsStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
