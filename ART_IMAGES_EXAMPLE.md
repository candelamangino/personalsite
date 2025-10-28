// ARCHIVO DE EJEMPLO - Reemplaza estos datos con tus imágenes reales
// Ubicación: src/sections/ArtGallerySection.jsx

// 🎨 ARTE DIGITAL - Reemplaza con tus imágenes reales
const digitalArtData = [
  {
    id: 1,
    title: 'Nombre de tu obra digital',
    description: 'Descripción de tu obra digital',
    instagramUrl: 'https://www.instagram.com/p/TU_POST_DIGITAL_1/', // Solo si es válido
    imageUrl: 'https://ejemplo.com/tu-imagen-digital-1.jpg', // URL real de tu imagen
    valid: true // true si el enlace de Instagram funciona, false si no
  },
  // Agrega más obras digitales...
];

// 🖌️ ÓLEO SOBRE LIENZO - Reemplaza con tus imágenes reales
const oilPaintingData = [
  {
    id: 5,
    title: 'Nombre de tu obra en óleo',
    description: 'Descripción de tu obra en óleo',
    instagramUrl: 'https://www.instagram.com/p/TU_POST_OIL_1/', // Solo si es válido
    imageUrl: 'https://ejemplo.com/tu-imagen-oleo-1.jpg', // URL real de tu imagen
    valid: true // true si el enlace de Instagram funciona, false si no
  },
  // Agrega más obras en óleo...
];

// ✏️ DIBUJOS A LÁPIZ - Reemplaza con tus imágenes reales
const pencilDrawingData = [
  {
    id: 8,
    title: 'Nombre de tu dibujo',
    description: 'Descripción de tu dibujo',
    instagramUrl: 'https://www.instagram.com/p/TU_POST_PENCIL_1/', // Solo si es válido
    imageUrl: 'https://ejemplo.com/tu-imagen-lapiz-1.jpg', // URL real de tu imagen
    valid: true // true si el enlace de Instagram funciona, false si no
  },
  // Agrega más dibujos...
];

// INSTRUCCIONES PARA ACTUALIZAR:
// 1. Ve a tu perfil de Instagram: https://www.instagram.com/cande_mangino.arte
// 2. Para cada obra:
//    - Copia el enlace del post (Compartir → Copiar enlace)
//    - Descarga la imagen o copia su URL directa
//    - Marca como valid: true/false según si el enlace funciona
// 3. Reemplaza los datos de ejemplo en ArtGallerySection.jsx
// 4. Las imágenes se mostrarán automáticamente con fallback elegante si fallan

// CARACTERÍSTICAS IMPLEMENTADAS:
// ✅ Imágenes reales en lugar de placeholders
// ✅ Sistema de validación (valid: true/false)
// ✅ Fallback elegante para imágenes que no cargan
// ✅ Enlaces a Instagram solo para obras válidas
// ✅ Efectos hover diferenciados (clickable vs non-clickable)
// ✅ Estado "Próximamente" para obras no válidas
// ✅ Animaciones Framer Motion mantenidas
// ✅ Diseño Apple-style coherente
// ✅ Botón "Ver más en Instagram" al final
