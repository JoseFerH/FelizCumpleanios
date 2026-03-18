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

## Personalización de Textos

Para que la experiencia sea completamente tuya, puedes (y debes) personalizar los textos de la página. A continuación se detalla dónde encontrar y modificar cada texto:

### 1. Pantalla de Bienvenida (Landing Page)
Los textos principales de la pantalla inicial se encuentran en el archivo **`index.html`**:

Abre `index.html` y busca estas líneas (aproximadamente en la línea 13):
```html
<div class="landing-content">
    <h1>¡Feliz Cumpleaños!</h1> <!-- Título Principal -->
    <p>Un viaje especial por tus recuerdos...</p> <!-- Subtítulo -->
    <button id="start-btn" class="cta-button">Comenzar el Viaje</button> <!-- Texto del botón -->
</div>
```

### 2. Títulos y Descripciones de las Paradas
Los textos que aparecen en las fotos tipo "Polaroid" y dentro del modal al hacer clic, se encuentran en el archivo **`script.js`**.

Abre `script.js` y busca el objeto `sectionsData` (en las primeras líneas). Verás algo como esto:

```javascript
const sectionsData = {
    1: { title: "BRIELITA", images: [...], desc: "Momentos inolvidables de Brielita." },
    2: { title: "FAMILIA", images: [...], desc: "La familia siempre unida en cada paso." },
    // ...
};
```

Para cada parada, puedes modificar:
- **`title`**: El título corto que aparece debajo de la foto polaroid en el camino (Ej: "BRIELITA").
- **`desc`**: El texto o mensaje largo que aparece dentro del modal cuando se abre la galería de fotos de esa sección (Ej: "Momentos inolvidables de Brielita...").

*Nota: No modifiques la lista de `images` a menos que sepas lo que haces, ya que están configuradas para buscar los archivos con los nombres exactos descritos arriba.*

## Tecnologías Utilizadas
- HTML5
- CSS3 (Flexbox, Pseudo-elementos, Variables CSS, Mobile-First)
- JavaScript Vanilla (Manipulación del DOM, Sistema de Modales, API de Audio)

## Despliegue
Este proyecto utiliza rutas relativas (`./`), por lo que está completamente optimizado para ser desplegado en **GitHub Pages** u otro servidor estático sin problemas de configuración de rutas.
