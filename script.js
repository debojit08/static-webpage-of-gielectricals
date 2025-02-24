 // Navbar Scroll Effect
 window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        navLinks.classList.remove('active');
    });
});

// Slider Functionality
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
            dots[i].classList.add('active');
        }
    });
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        slideIndex = index;
        showSlide(slideIndex);
    });
});

setInterval(nextSlide, 5000);

// Service Slider
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination-service",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});

// About Slider
var swiper_about = new Swiper('.swiper-about', {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    pagination: {
        el: '.swiper-pagination-about',
        clickable: true
    },
    speed: 600 // Smoother transition speed
});

// Product Slider
const swiper_Product = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: { el: '.swiper-pagination-product', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },

    breakpoints: {
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
    }
});

setTimeout(() => {
    swiper_about.autoplay.start();
}, 100);

//Brand Partner
const logos = [
    'img/b-havells.png',
    'img/b-kei.png',
    'img/b-kww.png',
    'img/b-finolex.png',
    'img/b-polycab.png',
    'img/b-kolors2.jpg',
    'img/b-legrand.png',
    'img/b-vinay2.jpg',
    'img/b-atom.webp',
    'img/b-magic2.png',
    'img/b-godrej.png',
    'img/b-luminous.png'
];

const track = document.querySelector('.slider-track');
const doubledLogos = logos.concat(logos);
track.innerHTML = doubledLogos
    .map(logo => `<img src="${logo}" alt="Brand Logo">`)
    .join('');

    const setTrackWidth = () => {
    const imgWidth = track.querySelector('img').offsetWidth;
    const totalWidth = (imgWidth + 80) * doubledLogos.length;
    track.style.width = `${totalWidth}px`;
    };

window.addEventListener('load', setTrackWidth);
window.addEventListener('resize', setTrackWidth);


// team Slider
const swiper_team = new Swiper('.team-swiper', {
slidesPerView: 3,
spaceBetween: 30,
loop: true,
navigation: {nextEl: '.next', prevEl: '.prev',
},
// Add pagination configuration
pagination: {el: '.swiper-pagination-team', clickable: true},
breakpoints: {
// When window width is >= 320px
320: {
    slidesPerView: 1,
    spaceBetween: 20
},
// When window width is >= 768px
768: {
    slidesPerView: 2,
    spaceBetween: 30
},
// When window width is >= 1024px
1024: {
    slidesPerView: 3,
    spaceBetween: 30
    }
}
});

//Testimonial slide
let currentSlide = 0;
const slides_testimonial = document.querySelectorAll(".testimonial-slide");

function showNextSlide() {
    slides_testimonial[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides_testimonial.length;
    slides_testimonial[currentSlide].classList.add("active");
}

setInterval(showNextSlide, 3000); // Change slide every 3 seconds