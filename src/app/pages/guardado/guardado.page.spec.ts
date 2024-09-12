import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuardadoPage } from './guardado.page';

describe('GuardadoPage', () => {
  let component: GuardadoPage;
  let fixture: ComponentFixture<GuardadoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
