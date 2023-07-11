import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WaiterPage } from './waiter.page';

describe('WaiterPage', () => {
  let component: WaiterPage;
  let fixture: ComponentFixture<WaiterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WaiterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
