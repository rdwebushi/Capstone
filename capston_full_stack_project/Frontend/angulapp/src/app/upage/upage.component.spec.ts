import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpageComponent } from './upage.component';

describe('UpageComponent', () => {
  let component: UpageComponent;
  let fixture: ComponentFixture<UpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
