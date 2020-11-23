import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeScreenMenuComponent } from './home-screen-menu.component';

describe('HomeScreenMenuComponent', () => {
  let component: HomeScreenMenuComponent;
  let fixture: ComponentFixture<HomeScreenMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeScreenMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeScreenMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
