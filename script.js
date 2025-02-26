// Inicializa EmailJS con tu User ID (regístrate en emailjs.com para obtenerlo)
emailjs.init("TU_USER_ID_PUBLICO");

// Manejo del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(e) {
    // No necesitamos preventDefault() porque queremos que el formulario se envíe
    
    // Mostramos un indicador de carga
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Enviando...';
    submitButton.disabled = true;

    // El formulario se enviará automáticamente a Formspree
    // y redirigirá a una página de agradecimiento
});

// Smooth scroll para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Manejo del tema oscuro/claro
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

// Verificar si hay una preferencia guardada
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

// Detectar preferencia del sistema
if (!localStorage.getItem('theme')) {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
        updateThemeIcon('dark');
    }
}

// Menú hamburguesa
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

// Toggle del menú
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    // Cambiar el ícono
    const icon = menuToggle.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Cerrar el menú al hacer clic en un enlace
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});
