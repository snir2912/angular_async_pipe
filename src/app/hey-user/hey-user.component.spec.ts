import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeyUserComponent } from './hey-user.component';

describe('HeyUserComponent', () => {
  let component: HeyUserComponent;
  let fixture: ComponentFixture<HeyUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeyUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeyUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
