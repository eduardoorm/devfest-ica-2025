---
applyTo: 'src/**/*'
---

# GitHub Copilot Test Instructions – DevFest Ica Frontend

## Contexto
Este proyecto es una **landing page interactiva** para el evento **DevFest Ica 2025**, desarrollado con **React**, **TypeScript** y **TailwindCSS**. La aplicación incluye funcionalidades como retos técnicos, sistema de puntos, y un catálogo de premios. El frontend consume un backend basado en **NestJS** y **PostgreSQL**, pero mientras tanto utiliza **mock data** o **API stubs**.

## Objetivo
Escribir pruebas unitarias y de integración que aseguren:
- **Confiabilidad**: El código funciona como se espera.
- **Cobertura**: Las funcionalidades críticas están bien cubiertas.
- **Mantenimiento**: Las pruebas son claras y fáciles de actualizar.

## Requisitos Técnicos
- **Framework de Pruebas**: Jest.
- **Pruebas de Componentes**: React Testing Library.
- **Cobertura**: Al menos 80% de cobertura en líneas, funciones y ramas.
- **Mocks**: Utiliza `jest.mock` para simular servicios y dependencias externas.

## Tipos de Pruebas
1. **Pruebas Unitarias**:
   - Componentes individuales (e.g., `ChallengeCard`, `RewardCard`).
   - Hooks personalizados (e.g., `useFetchChallenges`).
   - Funciones utilitarias (e.g., `calculatePoints`).
2. **Pruebas de Integración**:
   - Flujos completos entre componentes (e.g., redención de premios).
   - Interacción con servicios mockeados.
3. **Pruebas de Accesibilidad**:
   - Verifica que los componentes cumplan con WCAG 2.1 usando `axe` o herramientas similares.

## Guías de Desarrollo
1. **Estructura de Pruebas**:
   - Coloca las pruebas junto al código fuente en archivos con el sufijo `.test.tsx` o `.test.ts`.
   - Ejemplo:
     ```
     src/
     ├── features/
     │   ├── challenges/
     │   │   ├── components/
     │   │   │   ├── ChallengeCard.tsx
     │   │   │   └── ChallengeCard.test.tsx
     ```
2. **Buenas Prácticas**:
   - Usa nombres descriptivos para los casos de prueba.
   - Asegúrate de que cada prueba sea independiente.
   - Limpia los mocks y estados después de cada prueba (`afterEach`).
3. **Pruebas de Componentes**:
   - Renderiza el componente con `render` de React Testing Library.
   - Simula interacciones con `fireEvent` o `userEvent`.
   - Verifica el DOM resultante con `expect` y queries (`getByText`, `getByRole`, etc.).
4. **Pruebas de Hooks**:
   - Usa `renderHook` de React Testing Library.
   - Mockea dependencias externas como `fetch` o `axios`.
5. **Pruebas de Servicios**:
   - Mockea las respuestas de la API con `jest.fn()` o bibliotecas como `msw`.

## Ejemplo de Prueba
```tsx
// filepath: /Users/eduardo/Documents/Projects/DevFest-Event/src/features/challenges/components/ChallengeCard.test.tsx
import { render, screen } from '@testing-library/react'
import ChallengeCard from './ChallengeCard'

describe('ChallengeCard', () => {
  it('muestra el título del reto', () => {
    render(<ChallengeCard title="Reto 1" points={100} />)
    expect(screen.getByText('Reto 1')).toBeInTheDocument()
  })

  it('muestra los puntos del reto', () => {
    render(<ChallengeCard title="Reto 1" points={100} />)
    expect(screen.getByText('100 puntos')).toBeInTheDocument()
  })
})
```

## Notas Adicionales
- Prioriza las pruebas de funcionalidades críticas.
- Asegúrate de que las pruebas sean rápidas y confiables.
- Documenta cualquier caso especial o limitación en los tests.
