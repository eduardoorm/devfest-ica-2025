---
applyTo: 'src/**/*'
---

# DevFest Ica Frontend - Guía de Documentación

## Contexto
Documentación para la landing page de **DevFest Ica 2025**, enfocada en mantener una documentación clara y actualizada tanto para el código como para los procesos.

## Estructura de Documentación

### 1. Documentación de Componentes
```tsx
/**
 * @component ChallengeCard
 * @description Tarjeta que muestra un reto técnico del DevFest
 * 
 * @example
 * ```tsx
 * <ChallengeCard
 *   title="Reto Firebase"
 *   points={100}
 *   difficulty="medium"
 * />
 * ```
 */
```

### 2. Documentación de Hooks
```tsx
/**
 * @hook useChallenge
 * @description Hook personalizado para manejar la lógica de retos
 * 
 * @param {string} challengeId - ID del reto
 * @returns {Object} Datos y métodos del reto
 * 
 * @example
 * ```tsx
 * const { data, isLoading, submit } = useChallenge('challenge-1');
 * ```
 */
```

### 3. Documentación de Utilidades
```ts
/**
 * @function calculatePoints
 * @description Calcula los puntos ganados en un reto
 * 
 * @param {number} basePoints - Puntos base del reto
 * @param {string} difficulty - Dificultad del reto
 * @returns {number} Puntos totales calculados
 */
```

## Estándares de Documentación

### Componentes React
- Descripción del propósito
- Props con tipos y descripciones
- Ejemplos de uso
- Enlaces a diseños/mockups
- Notas de accesibilidad

### Hooks Personalizados
- Descripción de funcionalidad
- Parámetros y retornos
- Ejemplos de implementación
- Dependencias requeridas
- Casos de uso

### Utilidades y Servicios
- Descripción de función
- Parámetros y tipos
- Valor de retorno
- Ejemplos de uso
- Manejo de errores

## JSDoc Templates

### Para Componentes
```tsx
/**
 * @component NombreComponente
 * @description Breve descripción
 * 
 * @prop {tipo} nombreProp - Descripción
 * @prop {tipo} nombreProp2 - Descripción
 * 
 * @example
 * Ejemplo de uso
 * 
 * @see Enlace relacionado
 * @accessibility Notas de accesibilidad
 */
```

### Para Hooks
```tsx
/**
 * @hook nombreHook
 * @description Breve descripción
 * 
 * @param {tipo} nombreParam - Descripción
 * @returns {tipo} Descripción del retorno
 * 
 * @example
 * Ejemplo de uso
 * 
 * @dependencies Dependencias necesarias
 */
```

## README Sections

### Principal README.md
```markdown
# DevFest Ica Frontend

## 🚀 Inicio Rápido
## 📦 Instalación
## 🛠️ Desarrollo
## 📝 Documentación
## 🧪 Testing
## 📈 CI/CD
## 📚 Stack Tecnológico
```

### Feature README.md
```markdown
# Feature Name

## 📝 Descripción
## 🎯 Objetivos
## 💻 Implementación
## 🧪 Tests
## 📚 Referencias
```

## Guías de Estilo

### Commits
```bash
# Formato
type(scope): descripción

# Tipos
feat: nueva característica
fix: corrección de bug
docs: cambios en documentación
style: cambios de formato
refactor: refactorización de código
test: cambios en tests
```

### Comentarios en Código
```tsx
// TODO: Tarea pendiente
// FIXME: Necesita corrección
// NOTE: Información importante
// HACK: Solución temporal
```

## Herramientas Recomendadas

### Generación de Documentación
```bash
# TypeDoc para documentación de TypeScript
npm install -D typedoc

# Storybook para documentación de componentes
npm install -D @storybook/react
```

## Estructura de Carpetas para Docs
```
docs/
├── components/
│   └── README.md
├── hooks/
│   └── README.md
├── architecture/
│   └── README.md
└── api/
    └── README.md
```

## Notas Importantes
- Mantener documentación actualizada con el código
- Incluir ejemplos prácticos
- Documentar decisiones de arquitectura
- Mantener guía de contribución actualizada