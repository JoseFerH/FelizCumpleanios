// Data Handling
const sectionsData = {
    1: { title: "BRIELITA", images: ["brielita_1.jpeg", "brielita_2.jpeg", "brielita_3.jpeg", "brielita_4.jpeg", "brielita_5.jpeg"], desc: "ERES EL CENTRO DE ESTO, DE TUS AMIGOS, DE TU FAMILIA, DE TODO LO QUE TE RODEA, QUIERETE COMO TODOS TE QUEREMOS" },
    2: { title: "FAMILIA", images: ["familia_1.jpeg", "familia_2.jpeg", "familia_3.jpeg", "familia_4.jpeg", "familia_5.jpeg"], desc: "TODA TU FAMILIA TE ACOMPAÑARÁ SIEMPRE, LA QUE TIENES AQUÍ Y LA QUE TE CUIDA DESDE EL CIELO, TODOS TE AMAN MUCHO" },
    3: { title: "BRUNO", images: ["bruno_1.jpeg", "bruno_2.jpeg", "bruno_3.jpeg", "bruno_4.jpeg", "bruno_5.jpeg"], desc: "NO TENGO TANTAS FOTOS DE BRUNO, PERO LAS QUE TENGO SON ESPECIALES, Y SON HACEN VER LO IMPORTANTE QUE ES PARA TÍ" },
    4: { title: "BOO", images: ["boo_1.jpeg", "boo_2.jpeg", "boo_3.jpeg", "boo_4.jpeg", "boo_5.jpeg"], desc: "EL PRINCIPE, EL REY, BOO LA ESTRELLA EN TU VIDA. HACE NO MUCHO QUE SE FUE, PERO AQUÍ SIGUE EN CADA RECUERDO QUE TIENES" },
    5: { title: "LEO", images: ["leo_1.jpeg", "leo_2.jpeg", "leo_3.jpeg", "leo_4.jpeg", "leo_5.jpeg"], desc: "LEITO ES ESPECIAL, DIFERENTE A BOO, PERO IGUAL DE IMPORTANTE PARA TI Y AMOROSO, DESDE TAN PEQUEÑO Y JUGUETON HASTA HOY IGUAL DE JUGUETON, MENOS PEQUEÑO JAJA" },
    6: { title: "ELA", images: ["ela_1.jpeg", "ela_2.jpeg", "ela_3.jpeg", "ela_4.jpeg", "ela_5.jpeg"], desc: "ELA APENAS TIENE TIEMPO CONTIGO, PERO HASTA POSA PARA CUALQUIER FOTO. A PESAR DE SER RACISTA ME QUIERE A MI TAMBIEN JAJA POR ESO LA AMO" },
    7: { title: "AMISTAD", images: ["amistad_1.jpeg", "amistad_2.jpeg", "amistad_3.jpeg", "amistad_4.jpeg", "amistad_5.jpeg"], desc: "Y PUES NUESTRA AMISTAD SIGNIFICA MUCHO PARA MI, NAH, SIGNIFICA TODO PARA MI. DE LAS MILES DE FOTOS QUE TENEMOS JUNTOS, ELEGÍ ESTÁS QUE TIENEN SU PROPOA HISTORIA" }
};

// DOM Elements
const landingScreen = document.getElementById('landing');
const pathScreen = document.getElementById('path-screen');
const startBtn = document.getElementById('start-btn');
const pathContainer = document.getElementById('path-container');
const dynamicModal = document.getElementById('dynamic-modal');
const modalImagesContainer = document.getElementById('modal-images');
const modalDesc = document.getElementById('modal-desc');
const closeBtn = document.querySelector('.close-btn');

// Audio Management
const audio = new Audio('assets/music/bg-music.mp3');
audio.loop = true;

// Event Listeners
startBtn.addEventListener('click', () => {
    // Play audio (requires user interaction)
    audio.play().catch(error => console.warn('Audio play failed:', error));

    // Transition screens
    landingScreen.classList.remove('active');
    landingScreen.classList.add('hidden');

    pathScreen.classList.remove('hidden');
    pathScreen.classList.add('active');

    // Render path items
    renderPathItems();
});

// Render Path Items
function renderPathItems() {
    pathContainer.innerHTML = ''; // Clear container

    for (const [id, data] of Object.entries(sectionsData)) {
        // Generar una rotación aleatoria entre -15 y 15 grados
        const randomRotation = Math.floor(Math.random() * 31) - 15;

        // Crear el contenedor path-item
        const pathItem = document.createElement('div');
        pathItem.classList.add('path-item');

        // Template literal para el polaroid
        pathItem.innerHTML = `
            <div class="polaroid" style="--rotation: ${randomRotation};" data-id="${id}">
                <img src="assets/images/${data.images[0]}" alt="${data.title}" loading="lazy">
                <p>${data.title}</p>
            </div>
        `;

        pathContainer.appendChild(pathItem);
    }

    // Attach click events to polaroids
    const polaroids = document.querySelectorAll('.polaroid');
    polaroids.forEach(polaroid => {
        polaroid.addEventListener('click', () => {
            const id = polaroid.getAttribute('data-id');
            openModal(id);
        });
    });
}

// Modal Management
function openModal(id) {
    const data = sectionsData[id];
    if (!data) return;

    // Inject images using template literals
    modalImagesContainer.innerHTML = data.images.map(imgSrc =>
        `<img src="assets/images/${imgSrc}" alt="Memoria" loading="lazy">`
    ).join('');

    // Inject description
    modalDesc.textContent = data.desc;

    // Show modal
    dynamicModal.classList.remove('hidden');
}

function closeModal() {
    dynamicModal.classList.add('hidden');
    // Clear content to free up memory (optional)
    modalImagesContainer.innerHTML = '';
    modalDesc.textContent = '';
}

// Close modal when clicking close button or outside content
closeBtn.addEventListener('click', closeModal);

dynamicModal.addEventListener('click', (e) => {
    if (e.target === dynamicModal) {
        closeModal();
    }
});
