import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MotorcyclesPage } from './motorcycles.page';

describe('MotorcyclesPage', () => {
  let component: MotorcyclesPage;
  let fixture: ComponentFixture<MotorcyclesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorcyclesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
