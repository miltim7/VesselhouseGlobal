document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.header__burger');
    const nav = document.querySelector('.header__nav');
    const navLinks = document.querySelectorAll('.header__nav-link');
    
    if (burger && nav) {
        burger.addEventListener('click', function(e) {
            e.preventDefault();
            burger.classList.toggle('active');
            nav.classList.toggle('active');
            document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
        });
        
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                burger.classList.remove('active');
                nav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
    
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (header) {
            if (window.scrollY > 50) {
                header.style.boxShadow = 'var(--shadow-sm)';
            } else {
                header.style.boxShadow = 'none';
            }
        }
    });
    
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    const aboutHeader = document.querySelector('.about__header');
    const aboutLeftContent = document.querySelector('.about__left-content');
    const aboutGalleryBottom = document.querySelector('.about__gallery-bottom');
    const aboutGalleryItems = document.querySelectorAll('.about__gallery-item');
    
    if (aboutHeader) observer.observe(aboutHeader);
    if (aboutLeftContent) observer.observe(aboutLeftContent);
    if (aboutGalleryBottom) observer.observe(aboutGalleryBottom);
    aboutGalleryItems.forEach(item => observer.observe(item));
    
    const servicesHeader = document.querySelector('.services__header');
    const servicesListWrapper = document.querySelector('.services__list-wrapper');
    const servicesBottomImages = document.querySelector('.services__bottom-images');
    const servicesRightImage = document.querySelector('.services__right-image');
    
    if (servicesHeader) observer.observe(servicesHeader);
    if (servicesListWrapper) observer.observe(servicesListWrapper);
    if (servicesBottomImages) observer.observe(servicesBottomImages);
    if (servicesRightImage) observer.observe(servicesRightImage);
    
    const advantagesHeader = document.querySelector('.advantages__header');
    const advantagesImageWrapper = document.querySelector('.advantages__image-wrapper');
    const advantagesListWrapper = document.querySelector('.advantages__list-wrapper');
    
    if (advantagesHeader) observer.observe(advantagesHeader);
    if (advantagesImageWrapper) observer.observe(advantagesImageWrapper);
    if (advantagesListWrapper) observer.observe(advantagesListWrapper);
    
    const contactHeader = document.querySelector('.contact__header');
    const contactInfoWrapper = document.querySelector('.contact__info-wrapper');
    const contactMap = document.querySelector('.contact__map');
    
    if (contactHeader) observer.observe(contactHeader);
    if (contactInfoWrapper) observer.observe(contactInfoWrapper);
    if (contactMap) observer.observe(contactMap);
    
    const lightbox = document.querySelector('.about__lightbox');
    const lightboxImage = document.querySelector('.about__lightbox-image');
    const lightboxClose = document.querySelector('.about__lightbox-close');
    const images = document.querySelectorAll('[data-image]');
    
    images.forEach(item => {
        item.addEventListener('click', function() {
            const imageSrc = this.getAttribute('data-image');
            lightboxImage.src = imageSrc;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    if (lightboxClose) {
        lightboxClose.addEventListener('click', function(e) {
            e.stopPropagation();
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    const servicesLightbox = document.querySelector('.services__lightbox');
    const servicesLightboxImage = document.querySelector('.services__lightbox-image');
    const servicesLightboxClose = document.querySelector('.services__lightbox-close');
    const serviceImages = document.querySelectorAll('[data-service-image]');
    
    serviceImages.forEach(item => {
        item.addEventListener('click', function() {
            const imageSrc = this.getAttribute('data-service-image');
            servicesLightboxImage.src = imageSrc;
            servicesLightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    if (servicesLightboxClose) {
        servicesLightboxClose.addEventListener('click', function(e) {
            e.stopPropagation();
            servicesLightbox.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    if (servicesLightbox) {
        servicesLightbox.addEventListener('click', function(e) {
            if (e.target === servicesLightbox) {
                servicesLightbox.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    const advantagesLightbox = document.querySelector('.advantages__lightbox');
    const advantagesLightboxImage = document.querySelector('.advantages__lightbox-image');
    const advantagesLightboxClose = document.querySelector('.advantages__lightbox-close');
    const advantagesImages = document.querySelectorAll('[data-advantages-image]');
    
    advantagesImages.forEach(item => {
        item.addEventListener('click', function() {
            const imageSrc = this.getAttribute('data-advantages-image');
            advantagesLightboxImage.src = imageSrc;
            advantagesLightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    if (advantagesLightboxClose) {
        advantagesLightboxClose.addEventListener('click', function(e) {
            e.stopPropagation();
            advantagesLightbox.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    if (advantagesLightbox) {
        advantagesLightbox.addEventListener('click', function(e) {
            if (e.target === advantagesLightbox) {
                advantagesLightbox.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
});