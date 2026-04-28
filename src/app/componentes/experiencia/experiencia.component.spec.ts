import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';

import { ExperienciaComponent } from './experiencia.component';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

describe('ExperienciaComponent', () => {
  let component: ExperienciaComponent;
  let fixture: ComponentFixture<ExperienciaComponent>;
  let porfolioServiceSpy: jasmine.SpyObj<PorfolioService>;
  let authServiceSpy: jasmine.SpyObj<AutenticacionService>;

  beforeEach(async () => {
    porfolioServiceSpy = jasmine.createSpyObj('PorfolioService', [
      'obtenerDatos',
      'agregarExperiencia',
      'verExperiencia',
      'editarExperiencia',
      'borrarExperiencia'
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
      declarations: [ExperienciaComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: PorfolioService, useValue: porfolioServiceSpy },
        { provide: AutenticacionService, useValue: authServiceSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
