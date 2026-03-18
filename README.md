# Birthday Journey Web

Una Single Page Application (SPA) estática, responsiva (Mobile-First), diseñada para una felicitación de cumpleaños interactiva. Incluye música de fondo y una galería tipo "Polaroid" a través de un camino curvo que cuenta una historia.

## Estructura de Archivos Necesarios

Para que la aplicación funcione correctamente, debes agregar tus propios archivos multimedia en las carpetas correspondientes. **Actualmente no se incluyen imágenes ni audios en el repositorio.**

### 1. Música de Fondo
Debes colocar un archivo de audio en la siguiente ruta:
- `assets/music/bg-music.mp3`

### 2. Imágenes de las Paradas (Galería)
El recorrido cuenta con 7 paradas, y cada parada debe tener **5 fotos** en la carpeta `assets/images/`.

Es crucial que las imágenes respeten el siguiente formato de nombre: `[titulodelaseccion]_[numero].jpg` (todo en minúsculas).

**Lista completa de imágenes necesarias (`assets/images/`):**

#### Parada 1: BRIELITA
- `brielita_1.jpg`
- `brielita_2.jpg`
- `brielita_3.jpg`
- `brielita_4.jpg`
- `brielita_5.jpg`

#### Parada 2: FAMILIA
- `familia_1.jpg`
- `familia_2.jpg`
- `familia_3.jpg`
- `familia_4.jpg`
- `familia_5.jpg`

#### Parada 3: BRUNO
- `bruno_1.jpg`
- `bruno_2.jpg`
- `bruno_3.jpg`
- `bruno_4.jpg`
- `bruno_5.jpg`

#### Parada 4: BOO
- `boo_1.jpg`
- `boo_2.jpg`
- `boo_3.jpg`
- `boo_4.jpg`
- `boo_5.jpg`

#### Parada 5: LEO
- `leo_1.jpg`
- `leo_2.jpg`
- `leo_3.jpg`
- `leo_4.jpg`
- `leo_5.jpg`

#### Parada 6: ELA
- `ela_1.jpg`
- `ela_2.jpg`
- `ela_3.jpg`
- `ela_4.jpg`
- `ela_5.jpg`

#### Parada 7: AMISTAD
- `amistad_1.jpg`
- `amistad_2.jpg`
- `amistad_3.jpg`
- `amistad_4.jpg`
- `amistad_5.jpg`

## Tecnologías Utilizadas
- HTML5
- CSS3 (Flexbox, Pseudo-elementos, Variables CSS, Mobile-First)
- JavaScript Vanilla (Manipulación del DOM, Sistema de Modales, API de Audio)

## Despliegue
Este proyecto utiliza rutas relativas (`./`), por lo que está completamente optimizado para ser desplegado en **GitHub Pages** u otro servidor estático sin problemas de configuración de rutas.
