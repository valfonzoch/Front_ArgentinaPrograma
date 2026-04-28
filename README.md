# Front Argentina Programa

Aplicación frontend construida con Angular para mostrar y editar un portfolio profesional (perfil, experiencia, educación y certificaciones), con flujo básico de inicio de sesión.

## Tecnologías

- Angular 14
- TypeScript
- RxJS
- Bootstrap 5
- Karma + Jasmine (tests unitarios)
- Firebase Hosting (deploy)

## Requisitos previos

- Node.js 16+ (recomendado LTS)
- npm 8+
- Angular CLI 14 (opcional global, se puede usar con `npx`)

## Instalación

```bash
npm install
```

## Ejecución local

```bash
npm start
```

La aplicación queda disponible en `http://localhost:4200/`.

## Scripts disponibles

- `npm start`: inicia servidor de desarrollo.
- `npm run build`: genera build de producción en `dist/`.
- `npm run watch`: build incremental en modo desarrollo.
- `npm test`: ejecuta tests unitarios con Karma.

## Configuración de entorno

Actualmente la URL del backend está hardcodeada en servicios. Se recomienda moverla a `src/environments/environment.ts` y `src/environments/environment.prod.ts` con una clave como:

```ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080'
};
```

Y en producción:

```ts
export const environment = {
  production: true,
  apiUrl: 'https://tu-backend'
};
```

## Estructura del proyecto

```text
src/
  app/
    componentes/
      encabezado/
      experiencia/
      educacion/
      certificaciones/
      iniciar-sesion/
      porfolio/
    servicios/
      autenticacion.service.ts
      porfolio.service.ts
```

## Flujo funcional actual

1. Se cargan datos de persona/portfolio desde el backend.
2. Se renderizan secciones de perfil, experiencia, educación y certificaciones.
3. Si la sesión está activa, se habilitan acciones de alta/edición/borrado.

## Despliegue

El repo incluye configuración para Firebase (`firebase.json`, `.firebaserc`).

Build:

```bash
npm run build
```

Deploy (si ya tienes Firebase CLI y proyecto configurado):

```bash
firebase deploy
```

## Mejoras recomendadas (roadmap corto)

- Mover configuración de API a `environment`.
- Reemplazar `any` por interfaces tipadas (`Persona`, `Educacion`, etc.).
- Implementar autenticación robusta con token + guard + interceptor.
- Corregir validaciones/formularios y bindings en plantillas.
- Agregar tests de servicios con `HttpTestingController`.
- Actualizar documentación funcional y técnica.

## Troubleshooting

- Si falla `npm run build` con "`ng` no se reconoce...", ejecuta:
  - `npm install`
  - `npx ng build`
- Si no cargan estilos de Bootstrap en runtime, revisar `angular.json` en `build.options.styles`.

## Créditos

Proyecto creado como parte del recorrido de formación en Argentina Programa.
