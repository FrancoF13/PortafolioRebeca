// Funciones principales del portfolio

// Función para contactar
function contactar() {
    // Puedes cambiar esto por el email real de Rebeca
    const email = 'rebeca@email.com';
    const subject = 'Consulta desde Portfolio';
    const body = 'Hola Rebeca, me interesa tu trabajo como comunicadora gráfica...';

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);

    // Alternativa: mostrar un modal de contacto
    mostrarModalContacto();
}

// Función para descargar CV
function descargarCV() {
    // URL de la imagen del CV
    const cvUrl = 'assets/Curriculum-Vitae-Rebeca.jpg';

    // Crear un enlace temporal para descargar
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Curriculum-Vitae-Rebeca.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Mostrar notificación
    mostrarNotificacion('CV descargado correctamente');
}

// Función para mostrar modal de contacto
function mostrarModalContacto() {
    const modal = document.createElement('div');
    modal.className = 'modal-contacto';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h3>Contactar con Rebeca</h3>
            <div class="contact-info">
                <p><i class="fas fa-envelope"></i> fradesrebeca5@gmail.com</p>
                <p><i class="fab fa-linkedin"></i> rebeca.frades</p>
                <p><i class="fab fa-instagram"></i> rebeca.elizabettt</p>
            </div>
            <div class="contact-buttons">
                <button onclick="window.open('https://wa.me/+543794744446')" class="btn btn-primary">
                    <i class="fab fa-whatsapp"></i> WhatsApp
                </button>
                <button onclick="window.open('https://www.instagram.com/rebeca.elizabettt')" class="btn btn-secondary">
                    <i class="fab fa-instagram"></i> Instagram
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Cerrar modal
    const closeBtn = modal.querySelector('.close');
    closeBtn.onclick = () => {
        document.body.removeChild(modal);
    };

    // Cerrar al hacer clic fuera del modal
    modal.onclick = (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    };
}

// Función para mostrar notificaciones
function mostrarNotificacion(mensaje) {
    const notificacion = document.createElement('div');
    notificacion.className = 'notificacion';
    notificacion.textContent = mensaje;

    document.body.appendChild(notificacion);

    // Animación de entrada
    setTimeout(() => {
        notificacion.classList.add('show');
    }, 100);

    // Remover después de 3 segundos
    setTimeout(() => {
        notificacion.classList.remove('show');
        setTimeout(() => {
            if (document.body.contains(notificacion)) {
                document.body.removeChild(notificacion);
            }
        }, 300);
    }, 3000);
}

// Animación de scroll suave para navegación
document.addEventListener('DOMContentLoaded', function () {
    // Navegación suave
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animación de elementos al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observar elementos para animación
    const animateElements = document.querySelectorAll('.project-card, .certificate-card');
    animateElements.forEach(el => observer.observe(el));

    // Animación de barras de habilidades removida por solicitud del usuario

    // Header transparente al inicio, blanco al hacer scroll
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Efecto parallax removido por solicitud del usuario

    // Botones de marco removidos - usando solo marco imagen.png
});

// Función para cambiar imagen de proyecto al hacer hover
function cambiarImagenProyecto(elemento, imagenOriginal, imagenAlternativa) {
    const img = elemento.querySelector('img');

    elemento.addEventListener('mouseenter', () => {
        img.src = imagenAlternativa;
    });

    elemento.addEventListener('mouseleave', () => {
        img.src = imagenOriginal;
    });
}

// Inicializar cambio de imágenes en proyectos
document.addEventListener('DOMContentLoaded', function () {
    const proyectos = [
        {
            elemento: document.querySelector('.project-card:nth-child(1)'),
            original: 'assets/img/Proyecto-1.png',
            alternativa: 'assets/img/Proyecto-1b.png'
        },
        {
            elemento: document.querySelector('.project-card:nth-child(2)'),
            original: 'assets/img/Proyecto-2.jpg',
            alternativa: 'assets/img/Proyecto-2b.jpg'
        },
        {
            elemento: document.querySelector('.project-card:nth-child(3)'),
            original: 'assets/img/Proyecto-3.jpg',
            alternativa: 'assets/img/Proyecto-3b.jpg'
        },
        {
            elemento: document.querySelector('.project-card:nth-child(4)'),
            original: 'assets/img/Proyecto-4.png',
            alternativa: 'assets/img/Proyecto-4b.png'
        },
        {
            elemento: document.querySelector('.project-card:nth-child(5)'),
            original: 'assets/img/Proyecto-5.png',
            alternativa: 'assets/img/Proyecto-5b.png'
        },
        {
            elemento: document.querySelector('.project-card:nth-child(6)'),
            original: 'assets/img/Proyecto-6.png',
            alternativa: 'assets/img/Proyecto-6b.png'
        }
    ];

    proyectos.forEach(proyecto => {
        if (proyecto.elemento) {
            cambiarImagenProyecto(proyecto.elemento, proyecto.original, proyecto.alternativa);
        }
    });
});

// Estilos CSS adicionales para funcionalidades JavaScript
const estilosAdicionales = `
    .modal-contacto {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    }
    
    .modal-content {
        background: white;
        padding: 40px;
        border-radius: 15px;
        max-width: 400px;
        width: 90%;
        position: relative;
        animation: slideIn 0.3s ease;
    }
    
    .close {
        position: absolute;
        top: 15px;
        right: 20px;
        font-size: 24px;
        cursor: pointer;
        color: #7f8c8d;
    }
    
    .close:hover {
        color: #2c3e50;
    }
    
    .contact-info {
        margin: 20px 0;
    }
    
    .contact-info p {
        margin: 10px 0;
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .contact-buttons {
        display: flex;
        gap: 10px;
        margin-top: 20px;
    }
    
    .notificacion {
        position: fixed;
        top: 20px;
        right: 20px;
        background: #87a9c6;
        color: white;
        padding: 15px 25px;
        border-radius: 25px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        transform: translateX(100%);
        transition: transform 0.3s ease;
        z-index: 10001;
    }
    
    .notificacion.show {
        transform: translateX(0);
    }
    
    .header.scrolled {
        background: rgba(255,255,255,0.95);
        backdrop-filter: blur(10px);
    }
    
    .animate-in {
        animation: fadeInUp 0.8s ease-out forwards;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes slideIn {
        from { transform: translateY(-50px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
`;

/* Funciones de cambio de marco removidas - usando solo marco imagen.png */

// Agregar estilos al documento
const styleSheet = document.createElement('style');
styleSheet.textContent = estilosAdicionales;
document.head.appendChild(styleSheet); 