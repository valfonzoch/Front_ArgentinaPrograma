import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { IniciarSesionComponent } from './iniciar-sesion.component';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

describe('IniciarSesionComponent', () => {
  let component: IniciarSesionComponent;
  let fixture: ComponentFixture<IniciarSesionComponent>;
  let authServiceSpy: jasmine.SpyObj<AutenticacionService>;

  beforeEach(async () => {
    authServiceSpy = jasmine.createSpyObj('AutenticacionService', ['iniciarSesion']);
    authServiceSpy.iniciarSesion.and.returnValue(of(true));

    await TestBed.configureTestingModule({
      declarations: [IniciarSesionComponent],
      imports: [ReactiveFormsModule],
      providers: [{ provide: AutenticacionService, useValue: authServiceSpy }]
    }).compileComponents();

    fixture = TestBed.createComponent(IniciarSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should mark form as invalid when empty', () => {
    expect(component.form.valid).toBeFalse();
  });

  it('should call iniciarSesion when form is valid', () => {
    component.form.patchValue({
      email: 'test@mail.com',
      password: '12345678'
    });

    const event = new Event('submit');
    spyOn(event, 'preventDefault');
    component.onEnviar(event);

    expect(event.preventDefault).toHaveBeenCalled();
    expect(authServiceSpy.iniciarSesion).toHaveBeenCalledWith({
      email: 'test@mail.com',
      password: '12345678'
    });
  });
});
