# Birthday Journey Web

Una Single Page Application (SPA) estática, responsiva (Mobile-First), diseñada para una felicitación de cumpleaños interactiva. Incluye música de fondo y una galería tipo "Polaroid" a través de un camino curvo que cuenta una historia.

## Estructura de Archivos Necesarios

Para que la aplicación funcione correctamente, debes agregar tus propios archivos multimedia en las carpetas correspondientes. **Actualmente no se incluyen imágenes ni audios en el repositorio.**

### 1. Música de Fondo
Se ha agregado un archivo de audio en la siguiente ruta:
- `assets/music/Luis Fonsi - Girasoles (Letra).mp3`

### 2. Imágenes de las Paradas (Galería)
El recorrido cuenta con 7 paradas, y cada parada tiene **5 fotos** en la carpeta `assets/images/`.

Es crucial que las imágenes respeten el siguiente formato de nombre: `[titulodelaseccion]_[numero].jpeg` (todo en minúsculas).

**Lista completa de imágenes necesarias (`assets/images/`):**

#### Parada 1: BRIELITA
- `brielita_1.jpeg`
- `brielita_2.jpeg`
- `brielita_3.jpeg`
- `brielita_4.jpeg`
- `brielita_5.jpeg`

#### Parada 2: FAMILIA
- `familia_1.jpeg`
- `familia_2.jpeg`
- `familia_3.jpeg`
- `familia_4.jpeg`
- `familia_5.jpeg`

#### Parada 3: BRUNO
- `bruno_1.jpeg`
- `bruno_2.jpeg`
- `bruno_3.jpeg`
- `bruno_4.jpeg`
- `bruno_5.jpeg`

#### Parada 4: BOO
- `boo_1.jpeg`
- `boo_2.jpeg`
- `boo_3.jpeg`
- `boo_4.jpeg`
- `boo_5.jpeg`

#### Parada 5: LEO
- `leo_1.jpeg`
- `leo_2.jpeg`
- `leo_3.jpeg`
- `leo_4.jpeg`
- `leo_5.jpeg`

#### Parada 6: ELA
- `ela_1.jpeg`
- `ela_2.jpeg`
- `ela_3.jpeg`
- `ela_4.jpeg`
- `ela_5.jpeg`

#### Parada 7: AMISTAD
- `amistad_1.jpeg`
- `amistad_2.jpeg`
- `amistad_3.jpeg`
- `amistad_4.jpeg`
- `amistad_5.jpeg`

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
