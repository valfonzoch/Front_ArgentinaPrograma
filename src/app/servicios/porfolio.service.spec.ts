import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PorfolioService } from './porfolio.service';
import { environment } from 'src/environments/environment';
import { Persona } from '../modelos/portfolio.models';

describe('PorfolioService', () => {
  let service: PorfolioService;
  let httpMock: HttpTestingController;

  const personaMock: Persona = {
    id: 4,
    name: 'Test User',
    backImagen: 'back.jpg',
    imagen: 'profile.jpg',
    position: 'Developer',
    company: 'Company',
    college: 'College',
    location: 'Buenos Aires',
    title1: 'Acerca de',
    about: 'Bio',
    title2: 'Experiencia',
    email: 'test@mail.com',
    listEducacion: [],
    listExperiencia: [],
    listCertificaciones: []
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PorfolioService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get portfolio data for default person', () => {
    service.obtenerDatos().subscribe((data) => {
      expect(data).toEqual(personaMock);
    });

    const req = httpMock.expectOne(
      `${environment.apiUrl}/ver/persona/${environment.defaultPersonaId}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(personaMock);
  });

  it('should request single persona by id', () => {
    service.verPersona(4).subscribe((data) => {
      expect(data.id).toBe(4);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/ver/persona/4`);
    expect(req.request.method).toBe('GET');
    req.flush(personaMock);
  });
});
