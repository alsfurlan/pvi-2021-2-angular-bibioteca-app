import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoresCadastroComponent } from './autores-cadastro.component';

describe('AutoresCadastroComponent', () => {
  let component: AutoresCadastroComponent;
  let fixture: ComponentFixture<AutoresCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoresCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoresCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
