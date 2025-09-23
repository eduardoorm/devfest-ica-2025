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
│   │   └── Footer.tsx
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
