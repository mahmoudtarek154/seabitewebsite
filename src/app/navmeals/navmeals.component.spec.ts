import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavmealsComponent } from './navmeals.component';

describe('NavmealsComponent', () => {
  let component: NavmealsComponent;
  let fixture: ComponentFixture<NavmealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavmealsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavmealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
