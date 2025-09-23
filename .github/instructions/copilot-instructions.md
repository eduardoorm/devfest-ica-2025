---
applyTo: 'src/**/*'
---

# GitHub Copilot Instructions – DevFest Ica Frontend

## Contexto
Este proyecto es una **landing page interactiva** para el evento **DevFest Ica 2025**, desarrollado con **React**, **TypeScript** y **TailwindCSS**. La aplicación incluye funcionalidades como retos técnicos, sistema de puntos, y un catálogo de premios. El frontend consume un backend basado en **NestJS** y **PostgreSQL**, pero mientras tanto utiliza **mock data** o **API stubs**.

## Objetivo
Crear una aplicación frontend que sea:
- **Escalable**: Fácil de mantener y extender.
- **Modular**: Componentes reutilizables y organizados.
- **Consistente**: UI/UX alineada con la identidad de GDG Ica.
- **Accesible**: Cumple con WCAG 2.1.

## Requisitos Técnicos
- **Framework**: React con TypeScript.
- **Estilos**: TailwindCSS con branding de GDG Ica.
- **Estado**: React Query o Zustand.
- **Ruteo**: React Router.
- **Pruebas**: Jest + React Testing Library.
- **API**: Axios o Fetch.

## Estructura del Proyecto
Sigue una arquitectura basada en **features** y **clean architecture**:
```
src/
├── app/                    # Configuración global
├── features/               # Funcionalidades por dominio
│   ├── auth/               # Autenticación
│   ├── landing/            # Página principal
│   ├── challenges/         # Retos técnicos
│   ├── rewards/            # Sistema de premios
│   └── profile/            # Perfil de usuario
├── shared/                 # Componentes y utilidades compartidas
│   ├── components/         # Componentes reutilizables
│   ├── hooks/              # Hooks personalizados
│   ├── utils/              # Funciones utilitarias
│   └── types/              # Tipos TypeScript
└── assets/                 # Recursos estáticos
```

## Guías de Desarrollo
1. **Componentes Reutilizables**:
   - Usa principios de diseño atómico (atoms, molecules, organisms).
   - Mantén la lógica separada de la presentación.
2. **Estilo y Branding**:
   - Utiliza la paleta de colores de GDG Ica (azul, verde, amarillo, rojo).
   - Asegura un diseño responsive y accesible.
3. **Pruebas**:
   - Escribe pruebas unitarias para componentes críticos.
   - Asegura cobertura básica para hooks y servicios.
4. **Calidad del Código**:
   - Configura ESLint y Prettier.
   - Usa Husky para pre-commits (lint-staged).

## Notas Adicionales
- Prioriza la **experiencia del usuario** (UI/UX).
- Asegura que el código sea **fácil de entender y mantener**.
- Sigue las mejores prácticas de **React y TypeScript**.
