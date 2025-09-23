---
applyTo: 'src/**/*'
---

# GitHub Copilot Design Instructions – DevFest Ica Frontend

## Contexto
Este proyecto necesita mantener una **identidad visual consistente** con GDG Ica y DevFest, adaptando los colores de Google Developer Groups y aplicando principios de diseño moderno y accesible.

## Paleta de Colores
```css
/* Colores Principales */
--gdg-blue: '#4285F4';     /* Azul Google */
--gdg-red: '#DB4437';      /* Rojo Google */
--gdg-yellow: '#F4B400';   /* Amarillo Google */
--gdg-green: '#0F9D58';    /* Verde Google */

/* Variantes y Auxiliares */
--primary: var(--gdg-blue);
--accent: var(--gdg-yellow);
--error: var(--gdg-red);
--success: var(--gdg-green);
--background: '#FFFFFF';
--surface: '#F8F9FA';
--text-primary: '#202124';
--text-secondary: '#5F6368';
```

## Sistema de Diseño

### Tipografía
- **Principal**: 'Google Sans' o 'Inter'
- **Secundaria**: 'Roboto'
- **Jerarquía**:
  ```css
  --h1: 2.5rem/1.2;     /* 40px */
  --h2: 2rem/1.3;       /* 32px */
  --h3: 1.5rem/1.4;     /* 24px */
  --body: 1rem/1.5;     /* 16px */
  --small: 0.875rem;    /* 14px */
  ```

### Espaciado
```css
--space-xs: '0.25rem';   /* 4px */
--space-sm: '0.5rem';    /* 8px */
--space-md: '1rem';      /* 16px */
--space-lg: '1.5rem';    /* 24px */
--space-xl: '2rem';      /* 32px */
```

### Sombras
```css
--shadow-sm: '0 1px 2px rgba(0, 0, 0, 0.05)';
--shadow-md: '0 4px 6px rgba(0, 0, 0, 0.1)';
--shadow-lg: '0 10px 15px rgba(0, 0, 0, 0.1)';
```

### Bordes y Radios
```css
--radius-sm: '0.25rem';  /* 4px */
--radius-md: '0.5rem';   /* 8px */
--radius-lg: '1rem';     /* 16px */
--radius-full: '9999px'; /* Botones circulares */
```

## Componentes Base

### Botones
```tsx
/* Variantes */
button-primary: {
  bg: 'var(--gdg-blue)',
  text: 'white',
  hover: 'opacity-90'
}

button-secondary: {
  bg: 'white',
  border: '1px solid var(--gdg-blue)',
  text: 'var(--gdg-blue)'
}

button-accent: {
  bg: 'var(--gdg-yellow)',
  text: 'var(--text-primary)'
}
```

### Tarjetas
```tsx
card-default: {
  bg: 'white',
  shadow: 'var(--shadow-md)',
  radius: 'var(--radius-md)',
  padding: 'var(--space-lg)'
}
```

### Inputs
```tsx
input-default: {
  border: '1px solid #DFE1E5',
  radius: 'var(--radius-sm)',
  padding: 'var(--space-sm) var(--space-md)'
}
```

## Guías de Diseño

### Layout
- Usar grid de 12 columnas para desktop
- Mobile-first con breakpoints:
  ```css
  --sm: '640px';
  --md: '768px';
  --lg: '1024px';
  --xl: '1280px';
  ```

### Animaciones
```css
--transition-base: 'all 0.3s ease';
--transition-smooth: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
```

### Accesibilidad
- Contraste mínimo 4.5:1 para texto
- Tamaño mínimo de touch targets: 44x44px
- Focus visible en todos los elementos interactivos

## Ejemplos de Uso

### Hero Section
```tsx
<section className="
  bg-gradient-to-r from-gdg-blue to-gdg-green
  text-white
  py-space-xl
  px-space-lg
">
  <h1 className="text-4xl font-bold mb-4">
    DevFest Ica 2025
  </h1>
</section>
```

### Challenge Card
```tsx
<div className="
  bg-white
  shadow-md
  rounded-lg
  p-6
  border border-gray-100
  hover:shadow-lg
  transition-all
">
  <h3 className="text-xl font-medium mb-2">
    {challenge.title}
  </h3>
</div>
```

## Notas Importantes
- Mantener consistencia en espaciado y tipografía
- Usar variables CSS para colores y valores reutilizables
- Seguir principios de diseño responsivo
- Asegurar que todos los componentes sean accesibles