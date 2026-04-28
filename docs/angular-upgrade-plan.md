# Plan de actualización técnica: Angular 14 -> LTS

Este plan propone una migración incremental para reducir riesgo y mantener el proyecto deployable en cada etapa.

## Objetivos

- Llevar el frontend de Angular 14 a la versión LTS actual.
- Mantener compatibilidad funcional durante toda la migración.
- Mejorar tooling (tests, build, lint) sin romper flujos existentes.

## Estrategia recomendada

Actualizar por saltos mayores consecutivos usando `ng update`:

1. Angular 14 -> 15
2. Angular 15 -> 16
3. Angular 16 -> 17
4. Continuar hasta LTS vigente

Evitar saltos de varias majors en un solo paso.

## Checklist por versión

En cada salto mayor:

1. Crear rama de migración (`chore/upgrade-angular-xx`).
2. Actualizar Node.js al rango soportado por esa versión de Angular.
3. Ejecutar:
   - `npx ng update @angular/core@<version> @angular/cli@<version>`
4. Resolver cambios automáticos y warnings.
5. Ejecutar validaciones:
   - `npx ng build`
   - `npx ng test --watch=false --browsers=ChromeHeadless`
6. Corregir deprecaciones antes del siguiente salto.
7. Deploy a entorno de staging y prueba funcional.

## Riesgos típicos a vigilar

- Cambios en configuración de `tsconfig` y strict mode.
- Diferencias de comportamiento en `RxJS`.
- Ajustes en Karma/Jasmine o migración a runners más nuevos.
- Dependencias de terceros (Bootstrap wrappers, librerías sin soporte).

## Mejoras opcionales durante la migración

- Evaluar migrar componentes a `standalone` gradualmente.
- Evaluar reemplazo de Karma por Jest o Vitest.
- Incorporar pipeline CI (build + tests) en cada PR.

## Criterio de finalización

La migración se considera completa cuando:

- Build de producción pasa sin warnings críticos.
- Suite de tests pasa en local y CI.
- Flujo de login + CRUD de portfolio validado manualmente.
- Deploy de producción estable al menos un ciclo completo.
