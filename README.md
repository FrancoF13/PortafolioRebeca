# Portfolio de Rebeca - Comunicadora Gráfica

Un portfolio profesional y elegante diseñado para mostrar el trabajo de Rebeca como comunicadora gráfica.

## 🎨 Características

- **Diseño Responsivo**: Se adapta perfectamente a todos los dispositivos
- **Fondo de Madera**: Utiliza la imagen de madera como fondo principal
- **Marco de Imagen**: La foto de Rebeca está enmarcada con el diseño personalizado
- **Sección de Proyectos**: Fondo azul (#87a9c6) con imágenes de proyectos
- **Botones Interactivos**: Contacto y descarga de CV
- **Enlaces a Instagram**: Cada proyecto tiene un botón que lleva a Instagram
- **Sección de Certificados**: Muestra la formación y experiencia profesional
- **Animaciones Suaves**: Efectos visuales modernos y elegantes

## 📁 Estructura del Proyecto

```
PortafolioRebeca/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidades JavaScript
├── README.md           # Este archivo
└── assets/
    ├── background/
    │   ├── background madera.jpg
    │   ├── marco imagen.png
    │   ├── marco imagen 2.png
    │   └── marco imagen 3
    └── img/
        ├── FotoRebeca.JPG
        ├── Proyecto-1.png
        ├── Proyecto-1b.png
        ├── Proyecto-2.jpg
        ├── Proyecto-2b.jpg
        ├── Proyecto-3.jpg
        └── Proyecto-3b.jpg
```

## 🚀 Cómo Usar

1. **Abrir el Portfolio**: Simplemente abre el archivo `index.html` en tu navegador
2. **Navegación**: Usa el menú superior para navegar entre secciones
3. **Contacto**: Haz clic en "Contáctame" para abrir opciones de contacto
4. **Descargar CV**: Haz clic en "Descargar CV" para obtener el currículum
5. **Ver Proyectos**: Explora los proyectos y haz clic en los botones de Instagram

## ⚙️ Personalización

### Cambiar Información Personal

1. **Nombre y Título**: Edita las líneas en `index.html`:
   ```html
   <h1 class="hero-title">Rebeca</h1>
   <h2 class="hero-subtitle">Comunicadora Gráfica</h2>
   ```

2. **Descripción**: Modifica el texto en la sección hero:
   ```html
   <p class="hero-description">
       Tu descripción personal aquí...
   </p>
   ```

3. **Información de Contacto**: Actualiza en `script.js`:
   ```javascript
   const email = 'tu-email@ejemplo.com';
   ```

### Cambiar Enlaces de Instagram

En `index.html`, actualiza los enlaces de Instagram para cada proyecto:
```html
<a href="https://instagram.com/tu-usuario-proyecto1" class="btn btn-instagram" target="_blank">
```

### Agregar CV

1. Coloca tu archivo CV en la carpeta `assets/`
2. Actualiza la URL en `script.js`:
   ```javascript
   const cvUrl = 'assets/tu-cv.pdf';
   ```

### Cambiar Imágenes de Proyectos

1. Reemplaza las imágenes en `assets/img/`
2. Actualiza las rutas en `index.html` y `script.js`
3. Las imágenes alternativas (con "b" al final) se muestran al hacer hover

## 🎯 Funcionalidades

### Botones Principales
- **Contáctame**: Abre un modal con información de contacto y opciones de comunicación
- **Descargar CV**: Descarga automáticamente el archivo CV

### Efectos Visuales
- **Hover en Proyectos**: Las imágenes cambian al pasar el mouse
- **Animaciones de Scroll**: Los elementos aparecen con animaciones suaves
- **Header Transparente**: Se vuelve semi-transparente al hacer scroll
- **Ribbon Parallax**: El elemento azul se mueve con efecto parallax

### Navegación
- **Scroll Suave**: Navegación fluida entre secciones
- **Menú Fijo**: El header permanece visible al hacer scroll

## 📱 Responsive Design

El portfolio está optimizado para:
- **Desktop**: 1200px y superior
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Mobile Pequeño**: Menos de 480px

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con Flexbox y Grid
- **JavaScript**: Interactividad y animaciones
- **Font Awesome**: Iconos
- **Google Fonts**: Tipografías elegantes

## 📧 Contacto

Para personalizar o modificar el portfolio:

1. **Email**: Actualiza la dirección de email en `script.js`
2. **Teléfono**: Modifica el número en el footer
3. **Redes Sociales**: Actualiza los enlaces de Instagram, LinkedIn y Behance

## 🔧 Solución de Problemas

### Las imágenes no se cargan
- Verifica que las rutas en `index.html` sean correctas
- Asegúrate de que los archivos estén en las carpetas correspondientes

### Los botones no funcionan
- Verifica que el archivo `script.js` esté correctamente enlazado
- Revisa la consola del navegador para errores JavaScript

### El diseño no se ve bien en móvil
- Asegúrate de que el viewport esté configurado correctamente
- Verifica que los media queries estén funcionando

## 📄 Licencia

Este portfolio es de uso libre para Rebeca. Puede ser modificado y personalizado según sus necesidades.

---

**¡Disfruta tu nuevo portfolio profesional!** 🎉 