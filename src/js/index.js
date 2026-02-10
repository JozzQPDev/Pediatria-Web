// === ESTADO PARA BENEFITS ===
let currentBig = {
  title: "Infraestructura diseñada",
  subtitle: "para su bienestar",
  desc: [
    "Nuestra clínica ofrece un entorno seguro, cálido y acogedor, especialmente diseñado para el desarrollo integral de los niños desde sus primeros años.",
    "Contamos con instalaciones modernas equipadas con tecnología médica de vanguardia, consultorios pediátricos adaptados y áreas de espera amigables para reducir el estrés infantil.",
    "Cada espacio ha sido pensado para brindar comodidad tanto a los pacientes como a sus familias, promoviendo una experiencia tranquila y positiva.",
    "Aplicamos estrictos protocolos de bioseguridad, limpieza y control sanitario que garantizan una atención confiable, humana y de alta calidad en cada visita."
  ],
  image: "/images/clinica-home1.jpg"
};

// === FUNCIONES PARA BENEFITS ===
const cards = document.querySelectorAll('.benefit-card');
const bigImage = document.getElementById('big-image');
const bigTitle = document.getElementById('big-title');
const bigSubtitle = document.getElementById('big-subtitle');
const bigDesc = document.getElementById('big-desc-container');

cards.forEach(card => {
  card.addEventListener('click', () => {
    // 1. Extraer datos de la card
    const cardData = JSON.parse(card.getAttribute('data-json') || '{}');

    // 2. SWAP: La Card recibe lo que estaba grande
    const tempToCard = { ...currentBig };

    // Actualizar visualmente la card
    const cardTitleEl = card.querySelector('.card-title');
    const cardDescEl = card.querySelector('.card-desc-preview');
    const cardImgEl = card.querySelector('.card-img');

    cardTitleEl.innerText = tempToCard.title;
    cardDescEl.innerText = tempToCard.desc[0];
    cardImgEl.src = tempToCard.image;
    card.setAttribute('data-json', JSON.stringify(tempToCard));

    // 3. Lo grande recibe lo que estaba en la card
    if (bigImage) {
      bigImage.style.opacity = '0';
      setTimeout(() => {
        bigImage.src = cardData.image;
        bigImage.style.opacity = '1';
      }, 300);
    }

    if (bigTitle && bigSubtitle && bigDesc) {
      bigTitle.style.opacity = '0';
      bigDesc.style.opacity = '0';

      setTimeout(() => {
        bigTitle.innerText = cardData.title;
        bigSubtitle.innerText = cardData.subtitle || "Detalles del servicio";

        bigDesc.innerHTML = cardData.desc.map((p) => `<p class="fade-in">${p}</p>`).join('');

        bigTitle.style.opacity = '1';
        bigDesc.style.opacity = '1';
      }, 300);
    }

    // 4. Actualizar estado
    currentBig = { ...cardData };
  });
});

// === FUNCIONES PARA PARALLAX Y MOUSE ===
const parallaxBg = document.getElementById('parallax-bg');
const mouseIcons = document.querySelectorAll('.mouse-float');

// EFECTO 1: Scroll Parallax
window.addEventListener('scroll', () => {
  const scrollValue = window.scrollY;
  if (parallaxBg) {
    parallaxBg.style.transform = `translateY(${scrollValue * 0.3}px) scale(1.1)`;
  }
});

// EFECTO 2: Mouse Follow
window.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  mouseIcons.forEach((icon, index) => {
    const speed = (index + 1) * 20;
    const x = (centerX - clientX) / speed;
    const y = (centerY - clientY) / speed;

    icon.style.transform = `translate(${x}px, ${y}px)`;
  });
});
