import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLeftBarComponent } from './home-left-bar.component';

describe('HomeLeftBarComponent', () => {
  let component: HomeLeftBarComponent;
  let fixture: ComponentFixture<HomeLeftBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLeftBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLeftBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
