import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';

import { CertificacionesComponent } from './certificaciones.component';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

describe('CertificacionesComponent', () => {
  let component: CertificacionesComponent;
  let fixture: ComponentFixture<CertificacionesComponent>;
  let porfolioServiceSpy: jasmine.SpyObj<PorfolioService>;
  let authServiceSpy: jasmine.SpyObj<AutenticacionService>;

  beforeEach(async () => {
    porfolioServiceSpy = jasmine.createSpyObj('PorfolioService', [
      'obtenerDatos',
      'agregarCertificado',
      'verCertificado',
      'editarCertificacion',
      'borrarCertificacion'
    ]);
    porfolioServiceSpy.obtenerDatos.and.returnValue(of({
      id: 4,
      listExperiencia: [],
      listEducacion: [],
      listCertificaciones: []
    } as any));

    authServiceSpy = jasmine.createSpyObj('AutenticacionService', ['logged']);
    authServiceSpy.logged.and.returnValue(true);

    await TestBed.configureTestingModule({
      declarations: [CertificacionesComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: PorfolioService, useValue: porfolioServiceSpy },
        { provide: AutenticacionService, useValue: authServiceSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
