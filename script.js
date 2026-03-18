// Data Handling
const sectionsData = {
    1: { title: "BRIELITA", images: ["brielita_1.jpg", "brielita_2.jpg", "brielita_3.jpg", "brielita_4.jpg", "brielita_5.jpg"], desc: "Momentos inolvidables de Brielita." },
    2: { title: "FAMILIA", images: ["familia_1.jpg", "familia_2.jpg", "familia_3.jpg", "familia_4.jpg", "familia_5.jpg"], desc: "La familia siempre unida en cada paso." },
    3: { title: "BRUNO", images: ["bruno_1.jpg", "bruno_2.jpg", "bruno_3.jpg", "bruno_4.jpg", "bruno_5.jpg"], desc: "Recuerdos divertidos y tiernos de Bruno." },
    4: { title: "BOO", images: ["boo_1.jpg", "boo_2.jpg", "boo_3.jpg", "boo_4.jpg", "boo_5.jpg"], desc: "Las mejores aventuras de Boo." },
    5: { title: "LEO", images: ["leo_1.jpg", "leo_2.jpg", "leo_3.jpg", "leo_4.jpg", "leo_5.jpg"], desc: "Una colección especial de momentos con Leo." },
    6: { title: "ELA", images: ["ela_1.jpg", "ela_2.jpg", "ela_3.jpg", "ela_4.jpg", "ela_5.jpg"], desc: "Los recuerdos más dulces de Ela." },
    7: { title: "AMISTAD", images: ["amistad_1.jpg", "amistad_2.jpg", "amistad_3.jpg", "amistad_4.jpg", "amistad_5.jpg"], desc: "Las amistades que nos acompañan siempre." }
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
