// Основной JavaScript файл без jQuery

// Конфигурация Telegram бота
const TELEGRAM_BOT_TOKEN = '8097543798:AAG5qBsg8UFQm_dyudwtT5LNx2qG57zA3Wc';
const TELEGRAM_CHAT_ID = '5254325840';

// Утилиты
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    initMenu();
    initScroll();
    initGoUp();
    initPhotoGallery();
    initForm();
    initYandexMap();
    initProjects();
});

// Меню бургер
function initMenu() {
    const burger = $('#burger');
    const menuLinks = $$('.header-menu__link');
    
    if (burger) {
        burger.addEventListener('click', function() {
            document.body.classList.toggle('show-menu');
        });
    }
    
    // Обработка кликов по пунктам меню
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            const yakor = this.getAttribute('data-yakor');
            if (yakor) {
                document.body.classList.remove('show-menu');
                scrollToSection(yakor);
            }
        });
    });
}

// Плавная прокрутка к секции
function scrollToSection(yakor) {
    const target = document.getElementById(yakor);
    if (target) {
        const offset = 80; // Высота header
        const targetPosition = target.offsetTop - offset;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Скролл и показ кнопки "Наверх"
function initScroll() {
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 100) {
            document.body.classList.add('scrolling');
        } else {
            document.body.classList.remove('scrolling');
        }
        lastScroll = currentScroll;
    });
}

// Кнопка "Наверх"
function initGoUp() {
    const goUp = $('#GoUp');
    if (goUp) {
        goUp.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Инициализация галереи фото готовых домов - 2 слайдера рядом со стрелками
function initPhotoGallery() {
    const galleryContainer = $('#photos-gallery');
    if (!galleryContainer) return;
    
    // Разделяем фото на две группы
    const photos1 = [
        // photo_1 - первая колонка
        'img/photo_1/IMG-20250714-WA0006.jpg',
        'img/photo_1/IMG-20250714-WA0008.jpg',
        'img/photo_1/IMG-20250714-WA0009.jpg',
        'img/photo_1/IMG-20250714-WA0010.jpg',
        'img/photo_1/IMG-20250714-WA0011.jpg',
        'img/photo_1/IMG-20250714-WA0012.jpg',
        'img/photo_1/IMG-20250714-WA0013.jpg',
        'img/photo_1/IMG-20250714-WA0014.jpg',
        'img/photo_1/IMG-20250714-WA0015.jpg',
        'img/photo_1/IMG-20250714-WA0016.jpg',
        'img/photo_1/IMG-20250714-WA0017.jpg',
        'img/photo_1/IMG-20250714-WA0018.jpg',
        'img/photo_1/IMG-20250714-WA0019.jpg',
        'img/photo_1/IMG-20250714-WA0020.jpg',
        'img/photo_1/IMG-20250714-WA0021.jpg',
        'img/photo_1/IMG-20250714-WA0022.jpg',
        'img/photo_1/IMG-20250714-WA0023.jpg',
        'img/photo_1/IMG-20250714-WA0024.jpg',
        'img/photo_1/IMG-20250714-WA0025.jpg',
        'img/photo_1/IMG-20250714-WA0026.jpg',
        'img/photo_1/IMG-20250714-WA0027.jpg',
        'img/photo_1/IMG-20250714-WA0028.jpg',
        'img/photo_1/IMG-20250714-WA0031.jpg',
        'img/photo_1/IMG-20250714-WA0032.jpg',
        'img/photo_1/IMG-20250714-WA0033.jpg',
        'img/photo_1/IMG-20250714-WA0034.jpg',
        'img/photo_1/IMG-20250714-WA0035.jpg',
        'img/photo_1/IMG-20250714-WA0036.jpg',
        'img/photo_1/IMG-20250714-WA0037.jpg',
        'img/photo_1/IMG-20250714-WA0038.jpg',
        'img/photo_1/IMG-20250714-WA0039.jpg',
        'img/photo_1/IMG-20250714-WA0040.jpg',
        'img/photo_1/IMG-20250714-WA0041.jpg',
        'img/photo_1/IMG-20250714-WA0042.jpg',
        'img/photo_1/IMG-20250714-WA0043.jpg',
        'img/photo_1/IMG-20250714-WA0044.jpg',
        'img/photo_1/IMG-20250714-WA0045.jpg',
        'img/photo_1/IMG-20250714-WA0046.jpg',
        'img/photo_1/IMG-20250714-WA0047.jpg',
        'img/photo_1/IMG-20250714-WA0056.jpg',
        'img/photo_1/IMG-20250714-WA0058.jpg',
        'img/photo_1/IMG-20250714-WA0059.jpg',
        'img/photo_1/IMG-20250714-WA0060.jpg',
        'img/photo_1/IMG-20250714-WA0061.jpg',
        'img/photo_1/IMG-20250714-WA0062.jpg',
        'img/photo_1/IMG-20250714-WA0063.jpg',
        'img/photo_1/IMG-20250714-WA0064.jpg',
        'img/photo_1/IMG-20250714-WA0065.jpg',
        'img/photo_1/IMG-20250714-WA0068.jpg',
        'img/photo_1/IMG-20250714-WA0069.jpg',
        'img/photo_1/IMG-20250714-WA0071.jpg',
        'img/photo_1/IMG-20250714-WA0072.jpg',
        'img/photo_1/IMG-20250714-WA0073.jpg',
        'img/photo_1/IMG-20250714-WA0074.jpg',
        'img/photo_1/IMG-20250714-WA0075.jpg',
        'img/photo_1/IMG-20250714-WA0077.jpg',
        'img/photo_1/IMG-20250714-WA0078.jpg',
        'img/photo_1/IMG-20250714-WA0079.jpg',
        'img/photo_1/IMG-20250714-WA0080.jpg',
        'img/photo_1/IMG-20250714-WA0081.jpg',
        'img/photo_1/IMG-20250714-WA0082.jpg',
        'img/photo_1/IMG-20250714-WA0083.jpg',
        'img/photo_1/IMG-20250714-WA0110.jpg',
        'img/photo_1/IMG-20250714-WA0111.jpg',
        'img/photo_1/IMG-20250714-WA0112.jpg',
        'img/photo_1/IMG-20250714-WA0113.jpg',
        'img/photo_1/IMG-20250714-WA0114.jpg',
        'img/photo_1/IMG-20250714-WA0115.jpg',
        'img/photo_1/IMG-20250714-WA0116.jpg',
        'img/photo_1/IMG-20250714-WA0117.jpg',
        'img/photo_1/IMG-20250714-WA0118.jpg',
        'img/photo_1/IMG-20250714-WA0119.jpg',
        'img/photo_1/IMG-20250714-WA0120.jpg',
        'img/photo_1/IMG-20250714-WA0121.jpg',
        'img/photo_1/IMG-20250714-WA0122.jpg',
        'img/photo_1/IMG-20250714-WA0123.jpg',
        'img/photo_1/IMG-20250714-WA0124.jpg',
        'img/photo_1/IMG-20250714-WA0125.jpg',
        'img/photo_1/IMG-20250714-WA0126.jpg',
        'img/photo_1/IMG-20250714-WA0127.jpg',
        'img/photo_1/IMG-20250714-WA0128.jpg',
        'img/photo_1/IMG-20250714-WA0129.jpg',
        'img/photo_1/IMG-20250714-WA0130.jpg',
        'img/photo_1/IMG-20250714-WA0149.jpg',
        'img/photo_1/IMG-20250714-WA0150.jpg',
        'img/photo_1/IMG-20250714-WA0151.jpg',
        'img/photo_1/IMG-20250714-WA0152.jpg',
        'img/photo_1/IMG-20250714-WA0153.jpg',
        'img/photo_1/IMG-20250714-WA0154.jpg',
        'img/photo_1/IMG-20250714-WA0156.jpg',
        'img/photo_1/IMG-20250714-WA0158.jpg',
        'img/photo_1/IMG-20250714-WA0159.jpg',
        'img/photo_1/IMG-20250714-WA0160.jpg',
        'img/photo_1/IMG-20250714-WA0161.jpg',
        'img/photo_1/IMG-20250714-WA0162.jpg',
        'img/photo_1/IMG-20250714-WA0163.jpg',
        'img/photo_1/IMG-20250714-WA0164.jpg',
        'img/photo_1/IMG-20250714-WA0165.jpg',
        'img/photo_1/IMG-20250714-WA0166.jpg',
        'img/photo_1/IMG-20250714-WA0167.jpg',
        'img/photo_1/IMG-20250714-WA0168.jpg',
        'img/photo_1/IMG-20250714-WA0169.jpg',
        'img/photo_1/IMG-20250714-WA0170.jpg',
        'img/photo_1/IMG-20250714-WA0171.jpg',
        'img/photo_1/IMG-20250714-WA0172.jpg',
        'img/photo_1/IMG-20250714-WA0174.jpg',
        'img/photo_1/IMG-20250714-WA0175.jpg',
        'img/photo_1/IMG-20250717-WA0001.jpg'
    ];
    
    const photos2 = [
        // photo_2 - вторая колонка
        'img/photo_2/IMG-20250714-WA0001.jpg',
        'img/photo_2/IMG-20250714-WA0002.jpg',
        'img/photo_2/IMG-20250714-WA0003.jpg',
        'img/photo_2/IMG-20250714-WA0004.jpg',
        'img/photo_2/IMG-20250714-WA0005.jpg',
        'img/photo_2/IMG-20250714-WA0007.jpg',
        'img/photo_2/IMG-20250714-WA0029.jpg',
        'img/photo_2/IMG-20250714-WA0030.jpg',
        'img/photo_2/IMG-20250714-WA0048.jpg',
        'img/photo_2/IMG-20250714-WA0049.jpg',
        'img/photo_2/IMG-20250714-WA0050.jpg',
        'img/photo_2/IMG-20250714-WA0051.jpg',
        'img/photo_2/IMG-20250714-WA0052.jpg',
        'img/photo_2/IMG-20250714-WA0053.jpg',
        'img/photo_2/IMG-20250714-WA0054.jpg',
        'img/photo_2/IMG-20250714-WA0055.jpg',
        'img/photo_2/IMG-20250714-WA0057.jpg',
        'img/photo_2/IMG-20250714-WA0076.jpg',
        'img/photo_2/IMG-20250714-WA0084.jpg',
        'img/photo_2/IMG-20250714-WA0085.jpg',
        'img/photo_2/IMG-20250714-WA0086.jpg',
        'img/photo_2/IMG-20250714-WA0087.jpg',
        'img/photo_2/IMG-20250714-WA0088.jpg',
        'img/photo_2/IMG-20250714-WA0089.jpg',
        'img/photo_2/IMG-20250714-WA0090.jpg',
        'img/photo_2/IMG-20250714-WA0091.jpg',
        'img/photo_2/IMG-20250714-WA0092.jpg',
        'img/photo_2/IMG-20250714-WA0093.jpg',
        'img/photo_2/IMG-20250714-WA0094.jpg',
        'img/photo_2/IMG-20250714-WA0095.jpg',
        'img/photo_2/IMG-20250714-WA0096.jpg',
        'img/photo_2/IMG-20250714-WA0097.jpg',
        'img/photo_2/IMG-20250714-WA0098.jpg',
        'img/photo_2/IMG-20250714-WA0099.jpg',
        'img/photo_2/IMG-20250714-WA0100.jpg',
        'img/photo_2/IMG-20250714-WA0101.jpg',
        'img/photo_2/IMG-20250714-WA0102.jpg',
        'img/photo_2/IMG-20250714-WA0103.jpg',
        'img/photo_2/IMG-20250714-WA0104.jpg',
        'img/photo_2/IMG-20250714-WA0105.jpg',
        'img/photo_2/IMG-20250714-WA0106.jpg',
        'img/photo_2/IMG-20250714-WA0107.jpg',
        'img/photo_2/IMG-20250714-WA0108.jpg',
        'img/photo_2/IMG-20250714-WA0109.jpg',
        'img/photo_2/IMG-20250714-WA0131.jpg',
        'img/photo_2/IMG-20250714-WA0132.jpg',
        'img/photo_2/IMG-20250714-WA0133.jpg',
        'img/photo_2/IMG-20250714-WA0134.jpg',
        'img/photo_2/IMG-20250714-WA0135.jpg',
        'img/photo_2/IMG-20250714-WA0136.jpg',
        'img/photo_2/IMG-20250714-WA0137.jpg',
        'img/photo_2/IMG-20250714-WA0138.jpg',
        'img/photo_2/IMG-20250714-WA0139.jpg',
        'img/photo_2/IMG-20250714-WA0140.jpg',
        'img/photo_2/IMG-20250714-WA0141.jpg',
        'img/photo_2/IMG-20250714-WA0142.jpg',
        'img/photo_2/IMG-20250714-WA0143.jpg',
        'img/photo_2/IMG-20250714-WA0144.jpg',
        'img/photo_2/IMG-20250714-WA0145.jpg',
        'img/photo_2/IMG-20250714-WA0146.jpg',
        'img/photo_2/IMG-20250714-WA0147.jpg',
        'img/photo_2/IMG-20250714-WA0148.jpg',
        'img/photo_2/IMG-20250714-WA0150.jpg',
        'img/photo_2/IMG-20250714-WA0151.jpg',
        'img/photo_2/IMG-20250714-WA0176.jpg',
        'img/photo_2/IMG-20250714-WA0177.jpg',
        'img/photo_2/IMG-20250714-WA0178.jpg'
    ];
    
    // Создаем два слайдера
    const slider1 = createPhotoSlider(photos1, 'slider1');
    const slider2 = createPhotoSlider(photos2, 'slider2');
    
    galleryContainer.appendChild(slider1);
    galleryContainer.appendChild(slider2);
}

// Создание слайдера с фото
function createPhotoSlider(photos, sliderId) {
    const slider = document.createElement('div');
    slider.className = 'photos-gallery__slider';
    slider.id = sliderId;
    
    const container = document.createElement('div');
    container.className = 'photos-gallery__container';
    
    // Добавляем фото
    photos.forEach(photoSrc => {
        const item = document.createElement('div');
        item.className = 'photos-gallery__item';
        
        const img = document.createElement('img');
        img.src = photoSrc;
        img.alt = 'Фото готового дома';
        img.loading = 'lazy';
        
        item.appendChild(img);
        item.addEventListener('click', () => openPhotoModal(photoSrc));
        
        container.appendChild(item);
    });
    
    // Стрелки навигации
    const arrowPrev = document.createElement('button');
    arrowPrev.className = 'photos-gallery__arrow photos-gallery__arrow--prev';
    arrowPrev.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>';
    arrowPrev.setAttribute('aria-label', 'Предыдущее фото');
    
    const arrowNext = document.createElement('button');
    arrowNext.className = 'photos-gallery__arrow photos-gallery__arrow--next';
    arrowNext.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>';
    arrowNext.setAttribute('aria-label', 'Следующее фото');
    
    // Текущий индекс
    let currentIndex = 0;
    
    // Функция обновления позиции
    function updatePosition() {
        const sliderWidth = slider.offsetWidth || slider.clientWidth;
        container.style.transform = `translateX(-${currentIndex * sliderWidth}px)`;
    }
    
    // Обновляем позицию при изменении размера окна
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(updatePosition, 100);
    });
    
    // Инициализация после загрузки изображений
    const images = container.querySelectorAll('img');
    let loadedCount = 0;
    images.forEach(img => {
        if (img.complete) {
            loadedCount++;
        } else {
            img.addEventListener('load', () => {
                loadedCount++;
                if (loadedCount === images.length) {
                    updatePosition();
                }
            });
        }
    });
    if (loadedCount === images.length) {
        setTimeout(updatePosition, 100);
    }
    
    // Обработчики стрелок
    arrowPrev.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : photos.length - 1;
        updatePosition();
    });
    
    arrowNext.addEventListener('click', () => {
        currentIndex = (currentIndex < photos.length - 1) ? currentIndex + 1 : 0;
        updatePosition();
    });
    
    // Скрываем стрелки если фото одно
    if (photos.length <= 1) {
        arrowPrev.style.display = 'none';
        arrowNext.style.display = 'none';
    }
    
    slider.appendChild(container);
    slider.appendChild(arrowPrev);
    slider.appendChild(arrowNext);
    
    // Инициализация
    updatePosition();
    
    return slider;
}

// Глобальные переменные для модального окна
let allPhotos = [];
let currentPhotoIndex = 0;

// Модальное окно для фото с навигацией
function openPhotoModal(photoSrc) {
    // Собираем все фото из обоих слайдеров
    const slider1 = $('#slider1');
    const slider2 = $('#slider2');
    allPhotos = [];
    
    if (slider1) {
        const items1 = slider1.querySelectorAll('.photos-gallery__item img');
        items1.forEach(img => allPhotos.push(img.src));
    }
    
    if (slider2) {
        const items2 = slider2.querySelectorAll('.photos-gallery__item img');
        items2.forEach(img => allPhotos.push(img.src));
    }
    
    // Находим текущий индекс
    currentPhotoIndex = allPhotos.findIndex(src => src === photoSrc || src.includes(photoSrc.split('/').pop()));
    if (currentPhotoIndex === -1) currentPhotoIndex = 0;
    
    // Создаем модальное окно если его нет
    let modal = $('#photo-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'photo-modal';
        modal.className = 'photo-modal';
        
        const content = document.createElement('div');
        content.className = 'photo-modal__content';
        
        const closeBtn = document.createElement('span');
        closeBtn.className = 'photo-modal__close';
        closeBtn.innerHTML = '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z" fill="currentColor"></path></svg>';
        closeBtn.addEventListener('click', closePhotoModal);
        
        const prevBtn = document.createElement('button');
        prevBtn.className = 'photo-modal__arrow photo-modal__arrow--prev';
        prevBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>';
        prevBtn.setAttribute('aria-label', 'Предыдущее фото');
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navigatePhoto(-1);
        });
        
        const nextBtn = document.createElement('button');
        nextBtn.className = 'photo-modal__arrow photo-modal__arrow--next';
        nextBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>';
        nextBtn.setAttribute('aria-label', 'Следующее фото');
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navigatePhoto(1);
        });
        
        const img = document.createElement('img');
        img.id = 'photo-modal-img';
        img.alt = 'Фото готового дома';
        
        content.appendChild(closeBtn);
        content.appendChild(prevBtn);
        content.appendChild(nextBtn);
        content.appendChild(img);
        modal.appendChild(content);
        
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closePhotoModal();
            }
        });
        
        // Навигация клавиатурой
        document.addEventListener('keydown', handleModalKeyboard);
        
        document.body.appendChild(modal);
    }
    
    updateModalPhoto();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function navigatePhoto(direction) {
    if (allPhotos.length === 0) return;
    
    currentPhotoIndex += direction;
    if (currentPhotoIndex < 0) {
        currentPhotoIndex = allPhotos.length - 1;
    } else if (currentPhotoIndex >= allPhotos.length) {
        currentPhotoIndex = 0;
    }
    
    updateModalPhoto();
}

function updateModalPhoto() {
    const img = $('#photo-modal-img');
    if (img && allPhotos[currentPhotoIndex]) {
        img.src = allPhotos[currentPhotoIndex];
    }
}

function handleModalKeyboard(e) {
    const modal = $('#photo-modal');
    if (!modal || !modal.classList.contains('active')) return;
    
    if (e.key === 'ArrowLeft') {
        navigatePhoto(-1);
    } else if (e.key === 'ArrowRight') {
        navigatePhoto(1);
    } else if (e.key === 'Escape') {
        closePhotoModal();
    }
}

function closePhotoModal() {
    const modal = $('#photo-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleModalKeyboard);
    }
}

// Закрытие модального окна по Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closePhotoModal();
    }
});

// Инициализация формы
function initForm() {
    const form = $('#formblock');
    const sendBtn = $('.sendit');
    const phoneInput = $('input[name="phone"]');
    
    if (!form || !sendBtn) return;
    
    // Маска для телефона
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 0) {
                if (value[0] !== '7') {
                    value = '7' + value;
                }
                if (value.length > 1) {
                    value = '+7 (' + value.substring(1);
                }
                if (value.length > 7) {
                    value = value.substring(0, 7) + ') ' + value.substring(7);
                }
                if (value.length > 12) {
                    value = value.substring(0, 12) + '-' + value.substring(12);
                }
                if (value.length > 15) {
                    value = value.substring(0, 15) + '-' + value.substring(15, 17);
                }
                e.target.value = value;
            }
        });
    }
    
    // Отправка формы
    sendBtn.addEventListener('click', function(e) {
        e.preventDefault();
        sendForm();
    });
}

// Отправка формы в Telegram
function sendForm() {
    const nameInput = $('input[name="name"]');
    const phoneInput = $('input[name="phone"]');
    const commentInput = $('textarea[name="comment"]');
    const errorDiv = $('.order-error');
    const form = $('#formblock');
    
    // Валидация
    let isValid = true;
    
    if (!nameInput || !nameInput.value.trim()) {
        isValid = false;
        if (nameInput) nameInput.classList.add('error');
    } else {
        if (nameInput) nameInput.classList.remove('error');
    }
    
    if (!phoneInput || !phoneInput.value.trim()) {
        isValid = false;
        if (phoneInput) phoneInput.classList.add('error');
    } else {
        if (phoneInput) phoneInput.classList.remove('error');
    }
    
    if (!isValid) {
        if (errorDiv) {
            errorDiv.textContent = 'Пожалуйста, заполните все обязательные поля';
        }
        return;
    }
    
    if (errorDiv) {
        errorDiv.textContent = '';
    }
    
    // Данные формы
    const name = nameInput ? nameInput.value.trim() : '';
    const phone = phoneInput ? phoneInput.value.trim() : '';
    const comment = commentInput ? commentInput.value.trim() : '';
    
    // Формируем сообщение
    const message = `Новая заявка с сайта:\n\nИмя: ${name}\nТелефон: ${phone}\nКомментарий: ${comment || 'Не указан'}`;
    
    // Показываем загрузку
    document.body.classList.add('wait');
    
    // Отправка в Telegram
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: 'HTML'
        })
    })
    .then(response => response.json())
    .then(data => {
        document.body.classList.remove('wait');
        
        if (data.ok) {
            // Успешная отправка
            if (form) {
                form.innerHTML = '<div class="order-success">Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.</div>';
            }
            
            // Прокрутка наверх
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            // Закрытие попапа если открыт
            setTimeout(() => {
                if (document.body.classList.contains('show-popup')) {
                    document.body.classList.remove('show-popup');
                }
            }, 2000);
        } else {
            // Ошибка отправки
            if (errorDiv) {
                errorDiv.textContent = 'Ошибка отправки. Попробуйте позже.';
            }
        }
    })
    .catch(error => {
        document.body.classList.remove('wait');
        if (errorDiv) {
            errorDiv.textContent = 'Ошибка отправки. Попробуйте позже.';
        }
        console.error('Ошибка:', error);
    });
}

// Показать попап формы
function showPopup() {
    const formRoot = $('#form-root');
    const popupContainer = $('.popup__container');
    
    if (formRoot && popupContainer && !document.body.classList.contains('show-popup')) {
        const popupBlock = formRoot.querySelector('.popup-block');
        if (popupBlock) {
            popupContainer.appendChild(popupBlock);
            document.body.classList.add('show-popup');
        }
    }
}

// Закрыть попап формы
function closePopup() {
    const formRoot = $('#form-root');
    const popupContainer = $('.popup__container');
    
    if (formRoot && popupContainer && document.body.classList.contains('show-popup')) {
        const popupBlock = popupContainer.querySelector('.popup-block');
        if (popupBlock) {
            formRoot.appendChild(popupBlock);
            document.body.classList.remove('show-popup');
        }
    }
}

// Инициализация Яндекс карты
// 
// ==========================================
// ИНСТРУКЦИЯ ПО ИЗМЕНЕНИЮ АДРЕСА НА КАРТЕ:
// ==========================================
// 1. Найдите строку с адресом ниже (примерно строка 709)
// 2. Измените значение переменной 'address' на нужный вам адрес
// 3. Сохраните файл
// 
// Примеры адресов:
// - 'Москва, Красная площадь, 1'
// - 'Санкт-Петербург, Невский проспект, 28'
// - 'Республика Крым, Симферопольский район, с. Мирное, ул. Центральная, 48'
//
// Как это работает:
// - Карта использует геокодер Яндекс.Карт для автоматического определения координат по адресу
// - Вы просто указываете адрес текстом, а Яндекс сам находит координаты
// - Если геокодер не сработает, используются резервные координаты [44.9511, 34.1024]
//
// Параметры карты:
// - zoom: 16 - уровень приближения (можно изменить от 1 до 19, где 19 - максимальное приближение)
// - center - центр карты (координаты или результат геокодирования)
//
// Для получения координат адреса:
// 1. Откройте https://yandex.ru/maps
// 2. Найдите нужный адрес
// 3. Кликните правой кнопкой мыши на точку
// 4. Выберите "Что здесь?"
// 5. В появившемся окне будут координаты в формате: широта, долгота
//
function initYandexMap() {
    const mapContainer = $('#yaMap');
    if (!mapContainer) return;
    
    // Ждем загрузки API Яндекс карт
    if (window.ymaps) {
        ymaps.ready(createMap);
    } else {
        // Если API еще не загружен, ждем
        const checkYmaps = setInterval(function() {
            if (window.ymaps) {
                clearInterval(checkYmaps);
                ymaps.ready(createMap);
            }
        }, 100);
        
        // Таймаут на случай если API не загрузится
        setTimeout(function() {
            clearInterval(checkYmaps);
            if (window.ymaps) {
                ymaps.ready(createMap);
            }
        }, 5000);
    }
    
    function createMap() {
        try {
            // ===== ИЗМЕНИТЕ АДРЕС ЗДЕСЬ =====
            const address = 'Республика Крым, Симферопольский район, с. Мирное, ул. Центральная, 48';
            // =================================
            
            // Используем геокодер для получения координат по адресу
            ymaps.geocode(address, {
                results: 1
            }).then(function (res) {
                const firstGeoObject = res.geoObjects.get(0);
                const coords = firstGeoObject.geometry.getCoordinates();
                
                const map = new ymaps.Map('yaMap', {
                    center: coords,
                    zoom: 16
                });
                
                // Добавляем метку с зеленой иконкой домика и текстом "Уютные дома"
                const placemark = new ymaps.Placemark(coords, {
                    balloonContent: address,
                    iconCaption: 'Уютные дома'
                }, {
                    preset: 'islands#greenHomeIcon',
                    iconColor: '#1bad03'
                });
                
                map.geoObjects.add(placemark);
            }).catch(function (error) {
                console.error('Ошибка геокодирования:', error);
                // Fallback координаты если геокодер не сработал
                const map = new ymaps.Map('yaMap', {
                    center: [44.9511, 34.1024],
                    zoom: 15
                });
                
                const placemark = new ymaps.Placemark([44.9511, 34.1024], {
                    balloonContent: address,
                    iconCaption: 'Уютные дома'
                }, {
                    preset: 'islands#greenHomeIcon',
                    iconColor: '#1bad03'
                });
                
                map.geoObjects.add(placemark);
            });
        } catch (e) {
            console.error('Ошибка создания карты:', e);
        }
    }
}

// Инициализация проектов (показать/скрыть детали)
function initProjects() {
    const readButtons = $$('.projects__item-read');
    const closeButtons = $$('.projects__item-close');
    
    readButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const itemId = this.closest('.projects__item').id;
            if (itemId) {
                showProject(itemId);
            }
        });
    });
    
    closeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const itemId = this.closest('.projects__item').id;
            if (itemId) {
                closeProject(itemId);
            }
        });
    });
}

function showProject(id) {
    const item = $('#' + id);
    if (item) {
        item.classList.add('show');
    }
}

function closeProject(id) {
    const item = $('#' + id);
    if (item) {
        item.classList.remove('show');
    }
}

// Экспорт функций для использования в HTML
window.showPopup = showPopup;
window.closePopup = closePopup;
window.showProject = showProject;
window.closeProject = closeProject;

