# DevFest Ica 2025 - Landing Page

Una landing page moderna y atractiva para DevFest Ica 2025, construida con React, TypeScript y TailwindCSS siguiendo los principios de arquitectura limpia.

## 🚀 Características

- **Diseño Moderno**: Interfaz atractiva siguiendo las pautas de diseño de Google
- **Responsive**: Optimizada para todos los dispositivos
- **Performance**: Construida con Vite para una carga ultra-rápida
- **Accesibilidad**: Cumple con los estándares de accesibilidad web
- **SEO Friendly**: Optimizada para motores de búsqueda

## 🛠️ Tecnologías

- **React 19** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático
- **TailwindCSS** - Framework de CSS utilitario
- **Vite** - Herramienta de build y desarrollo
- **ESLint** - Linter para código limpio

## 📁 Estructura del Proyecto

```
src/
├── app/                    # Configuración de la aplicación
├── features/               # Características por dominio
│   └── landing/           
│       ├── components/     # Componentes específicos de landing
│       │   ├── HeroSection.tsx
│       │   ├── FeaturesSection.tsx
│       │   ├── ChallengesSection.tsx
│       │   └── RewardsSection.tsx
│       └── LandingPage.tsx # Página principal
├── shared/                 # Componentes y utilidades compartidas
│   ├── components/         # Componentes reutilizables
│   │   ├── Header.tsx
│   │   ├── Footer.tsx      # Footer original (legacy)
│   │   └── NewFooter.tsx   # Footer mejorado (activo)
│   └── types/             # Tipos TypeScript
└── assets/                # Recursos estáticos
```

## 🎨 Secciones de la Landing Page

### 1. Header/Navegación
- Logo de GDG Ica
- Navegación principal
- Botones de CTA (Iniciar Sesión/Registrarse)
- Menú móvil responsive

### 2. Hero Section
- Título principal con gradiente
- Descripción del evento
- Estadísticas en tiempo real
- Animaciones y elementos decorativos
- Botones de acción principales

### 3. Características
- Grid de 6 características principales
- Iconos y descripciones atractivas
- Efectos hover y animaciones
- Call-to-action integrado

### 4. Retos Destacados
- Cards de retos técnicos
- Información de dificultad y puntos
- Tecnologías utilizadas
- Contador de participantes

### 5. Sistema de Premios
- Catálogo de premios disponibles
- Sistema de puntos explicado
- Stock disponible
- Categorías organizadas

### 6. Footer
- Enlaces de navegación
- Redes sociales
- Newsletter subscription
- Información legal

## 🎯 Componente NewFooter

El componente `NewFooter` es un footer mejorado que sigue las guías de diseño de GDG Ica, proporcionando una experiencia de usuario superior con diseño responsivo y funcionalidades avanzadas.

### ✨ Características

- ✅ **Diseño Responsivo**: Se adapta perfectamente a desktop (4 columnas), tablet (2 columnas) y móviles (1 columna)
- ✅ **Branding GDG Ica**: Utiliza la paleta oficial de colores de Google Developers
- ✅ **Tipografía Google Sans**: Fuente coherente con la identidad de Google
- ✅ **Accesibilidad (WCAG 2.1)**: Navegación por teclado, ARIA labels y semántica HTML correcta
- ✅ **Newsletter Interactivo**: Formulario de suscripción con validación y estados de carga
- ✅ **Enlaces Sociales**: Enlaces a redes sociales con iconos SVG optimizados
- ✅ **Secciones Organizadas**: Navegación, recursos, newsletter y enlaces legales claramente separados
- ✅ **Fácil Extensión**: Estructura modular para agregar nuevos enlaces o sponsors

### 🎨 Diseño y Estructura

```tsx
<NewFooter />
```

**Secciones incluidas:**
1. **Branding**: Logo, nombre y descripción de GDG Ica
2. **Social Links**: Twitter, LinkedIn, GitHub, Instagram
3. **Navegación**: Enlaces principales del sitio
4. **Recursos**: Documentación, tutoriales, API, GitHub
5. **Newsletter**: Suscripción con validación
6. **Legal**: Términos, privacidad, código de conducta

### 📱 Responsive Breakpoints

```css
/* Mobile: stack de 1 columna */
grid-cols-1

/* Tablet: 2 columnas */
md:grid-cols-2 

/* Desktop: 4 columnas con brand section expandida */
lg:grid-cols-4 (brand ocupa 2 columnas)
```

### 🔧 Personalización

**Colores utilizados:**
- `bg-gray-900`: Fondo principal
- `text-white`: Texto principal
- `text-gray-300`: Texto secundario
- `text-gray-400`: Texto deshabilitado
- `gdg-blue`: Enlaces de navegación al hover
- `gdg-green`: Enlaces de recursos al hover

**Espaciado:**
- `py-16`: Padding principal del footer
- `py-8`: Padding sección newsletter
- `py-6`: Padding sección copyright
- `space-x-4`: Espaciado social links
- `space-y-3`: Espaciado lista de enlaces

### 🚀 Implementación

El componente `NewFooter` reemplaza al `Footer` original en:

```tsx
// Antes
import Footer from '../../shared/components/Footer';

// Ahora
import NewFooter from '../../shared/components/NewFooter';

// Uso
<NewFooter />
```

### 📝 Estados del Newsletter

- **Idle**: Estado inicial con botón "Suscribirse"
- **Loading**: Muestra "Suscribiendo..." durante el proceso
- **Disabled**: Botón deshabilitado si el email está vacío
- **Success**: Limpia el formulario tras suscripción exitosa

### ♿ Accesibilidad

- **ARIA Labels**: Todos los elementos interactivos tienen etiquetas descriptivas
- **Navegación por teclado**: Focus visible en todos los enlaces y botones
- **Semántica HTML**: Uso correcto de `<nav>`, `<footer>`, `<contentinfo>`
- **Screen readers**: Texto alternativo para iconos y elementos visuales

## 🚀 Instalación y Uso

1. **Clonar el repositorio**
```bash
git clone [repository-url]
cd DevFest-Event
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar servidor de desarrollo**
```bash
npm run dev
```

4. **Construir para producción**
```bash
npm run build
```

## 🎨 Colores y Branding

La landing page utiliza la paleta oficial de Google Developers:

- **Google Blue**: #4285F4
- **Google Red**: #EA4335  
- **Google Yellow**: #FBBC04
- **Google Green**: #34A853

## 📱 Responsive Design

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## ⚡ Performance

- Lazy loading de imágenes
- Code splitting automático
- Optimización de bundle con Vite
- CSS purging con TailwindCSS

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 👥 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Contacto

**GDG Ica** - [@gdgica](https://twitter.com/gdgica) - ica@gdg.dev

Sitio Web: [https://gdg.community.dev/gdg-ica/](https://gdg.community.dev/gdg-ica/)

## 🔐 Componente Login

El componente `Login` es un formulario de autenticación moderno, responsive y accesible diseñado específicamente para DevFest Ica. Incluye validación en tiempo real, integración con redes sociales y estados de carga.

### Características del Componente

- ✅ **Responsive Design**: Se adapta perfectamente a móviles, tablets y desktop
- ✅ **Accesibilidad (WCAG 2.1)**: Etiquetas ARIA, navegación por teclado, lectores de pantalla
- ✅ **Validación en Tiempo Real**: Validación de email y contraseña con mensajes de error
- ✅ **Estados de Carga**: Indicador visual durante el proceso de autenticación
- ✅ **Login Social**: Integración con Google y GitHub (opcional)
- ✅ **Seguridad**: Opción para mostrar/ocultar contraseña
- ✅ **Branding GDG Ica**: Colores oficiales y diseño coherente

### Props del Componente

```typescript
interface LoginProps {
  onLogin: (data: LoginFormData) => void | Promise<void>;
  onForgotPassword?: () => void;
  onSignUp?: () => void;
  isLoading?: boolean;
  error?: string;
  title?: string;
  subtitle?: string;
  enableSocialLogin?: boolean;
  className?: string;
}

interface LoginFormData {
  email: string;
  password: string;
  rememberMe?: boolean;
}
```

### Uso Básico

```typescript
import { Login } from './features/auth';
import type { LoginFormData } from './features/auth';

const MyLoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  const handleLogin = async (data: LoginFormData) => {
    setIsLoading(true);
    try {
      // Tu lógica de autenticación aquí
      await authenticateUser(data.email, data.password);
      console.log('Login exitoso');
    } catch (err) {
      setError('Credenciales incorrectas');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Login
      onLogin={handleLogin}
      isLoading={isLoading}
      error={error}
      onForgotPassword={() => navigate('/forgot-password')}
      onSignUp={() => navigate('/register')}
    />
  );
};
```

### Ejemplo Avanzado

```typescript
// Uso con personalización completa
<Login
  onLogin={handleLogin}
  onForgotPassword={handleForgotPassword}
  onSignUp={handleSignUp}
  isLoading={isLoading}
  error={error}
  title="Portal de Desarrolladores"
  subtitle="Accede a tu cuenta de DevFest Ica"
  enableSocialLogin={true}
  className="min-h-screen bg-custom-gradient"
/>
```

### Demo en Vivo

Para ver el componente en acción:

1. Ejecuta `npm run dev`
2. Abre http://localhost:5173
3. Haz clic en "Ver Login →" en la esquina superior derecha
4. Prueba las diferentes funcionalidades:
   - Validación de formulario
   - Estados de carga
   - Manejo de errores
   - Responsive design

### Estructura de Archivos

```
src/features/auth/
├── components/
│   └── Login.tsx          # Componente principal
├── types.ts               # Tipos TypeScript
└── index.ts              # Exportaciones
```

### Personalización

El componente puede personalizarse mediante:

- **Props**: Títulos, subtítulos, habilitación de funciones
- **Clases CSS**: Prop `className` para estilos adicionales
- **Colores**: Variables CSS de GDG Ica en `tailwind.config.js`
- **Callbacks**: Funciones personalizadas para cada acción

### Validaciones Incluidas

- **Email**: Formato válido requerido
- **Contraseña**: Mínimo 6 caracteres
- **Tiempo Real**: Errores se limpian al escribir
- **Visual**: Indicadores rojos para campos con error

---

⭐ ¡No olvides dar una estrella al proyecto si te gustó!
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
