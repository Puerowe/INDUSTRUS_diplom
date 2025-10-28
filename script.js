// ФУНКЦИЯ ДЛЯ ВЫРАВНИВАНИЯ ВЫСОТЫ ШАПКИ
function normalizeHeaderHeight() {
    const header = document.querySelector('.header');
    const hero = document.querySelector('.hero');
    
    // Принудительно устанавливаем фиксированные значения
    if (header) {
        header.style.height = '70px';
        header.style.display = 'flex';
        header.style.alignItems = 'center';
        header.style.position = 'fixed';
        header.style.top = '0';
        header.style.width = '100%';
        header.style.zIndex = '1000';
    }
    
    // Для всех секций, которые должны быть под шапкой
    const mainSections = document.querySelectorAll('.hero, .features, .archive-preview, .archive-main');
    mainSections.forEach(section => {
        if (section) {
            section.style.marginTop = '70px';
            section.style.paddingTop = section.classList.contains('hero') ? '140px' : '80px';
        }
    });
    
    // Специально для hero секции
    if (hero) {
        hero.style.marginTop = '70px';
        hero.style.paddingTop = '140px';
    }
}

// ФУНКЦИЯ ДЛЯ ПРОВЕРКИ СУЩЕСТВОВАНИЯ СТРАНИЦ
function checkPageExistence(url) {
    console.log('Переход на:', url);
    return true;
}

// УНИВЕРСАЛЬНАЯ ФУНКЦИЯ ПОКАЗА УВЕДОМЛЕНИЙ
function showNotification(message, type = 'info') {
    console.log(`Уведомление (${type}): ${message}`);
    // Здесь можно добавить реальное отображение уведомлений
}

function initCommunityPages() {
    loadForumTopics();
    loadProjects();
    loadExperts();
    loadBlogPosts();
}

function loadForumTopics() {
    const topicsContainer = document.querySelector('.forum-topics');
    if (!topicsContainer) return;
    
    // Загрузка тем форума
    const topics = [
        {
            id: 1,
            title: "Новые материалы в промдизайне",
            description: "Обсуждаем инновационные материалы и их применение в промышленном дизайне",
            author: "Иван Петров",
            replies: 45,
            lastActivity: "2 часа назад"
        },
        {
            id: 2,
            title: "Проблемы дизайн-образования", 
            description: "Как улучшить подготовку дизайнеров в российских вузах?",
            author: "Мария Сидорова",
            replies: 28,
            lastActivity: "5 часов назад"
        }
    ];
    
    topics.forEach(topic => {
        const topicElement = document.createElement('div');
        topicElement.className = 'topic-card';
        topicElement.innerHTML = `
            <div class="topic-header">
                <h3>${topic.title}</h3>
                <span class="topic-stats">💬 ${topic.replies}</span>
            </div>
            <p>${topic.description}</p>
            <div class="topic-meta">
                <span>👤 ${topic.author}</span>
                <span>📅 ${topic.lastActivity}</span>
            </div>
        `;
        topicElement.addEventListener('click', () => {
            window.location.href = `forum-discussion.html?id=${topic.id}`;
        });
        topicsContainer.appendChild(topicElement);
    });
}



// ФУНКЦИЯ ДЛЯ ЗАГРУЗКИ ДАННЫХ ОБЪЕКТА ПО ID
function loadObjectData() {
    // Получаем ID из URL
    const urlParams = new URLSearchParams(window.location.search);
    const objectId = urlParams.get('id');
    
    // База данных объектов
    const objects = {
        '1': {
            title: 'Фотоаппарат "Зенит-Е"',
            subtitle: '1970 • Красногорский механический завод',
            description: 'Первый массовый зеркальный фотоаппарат в СССР. Выпускался на Красногорском механическом заводе с 1965 по 1986 год.',
            specs: {
                production: '1965-1986',
                manufacturer: 'Красногорский механический завод',
                materials: 'Пластик, Металл',
                category: 'Электроника'
            },
            images: ['../icons/zenit.jpg']
        },
        '2': {
            title: 'Холодильник "ЗИЛ-Москва"',
            subtitle: '1965 • Завод имени Лихачёва',
            description: 'Легендарный советский холодильник, символ эпохи. Один из самых популярных бытовых приборов в СССР.',
            specs: {
                production: '1960-1970',
                manufacturer: 'Завод имени Лихачёва',
                materials: 'Металл, Пластик, Резина',
                category: 'Бытовая техника'
            },
            images: ['../icons/zil_moscow.jpg']
        },
        '3': {
            title: '"Москвич-412"',
            subtitle: '1970 • АЗЛК',
            description: 'Советский легковой автомобиль с передовым дизайном. Символ отечественного автопрома.',
            specs: {
                production: '1967-1976',
                manufacturer: 'АЗЛК (Автомобильный завод имени Ленинского комсомола)',
                materials: 'Металл, Стекло, Пластик',
                category: 'Автомобили'
            },
            images: ['../icons/moskvich.jpg']
        },
        '4': {
            title: 'Телевизор "Рекорд В-312"',
            subtitle: '1975 • Воронежский завод',
            description: 'Чёрно-белый телевизор для массового потребителя. Один из самых популярных телевизоров в СССР.',
            specs: {
                production: '1975-1985',
                manufacturer: 'Воронежский завод',
                materials: 'Пластик, Стекло, Металл',
                category: 'Электроника'
            },
            images: ['../icons/teliv_rek.jpg']
        },
        '5': {
            title: 'Фотоаппарат "ФЭД-2"',
            subtitle: '1955 • Харьковский машиностроительный завод ФЭД',
            description: 'Дальномерный фотоаппарат, выпускавшийся с 1955 года на Харьковском машиностроительном заводе ФЭД. Являлся клоном немецкого Leica II и стал одной из самых популярных фотокамер в СССР.',
            specs: {
                production: '1955-1970',
                manufacturer: 'Харьковский машиностроительный завод ФЭД',
                materials: 'Металл, Стекло, Кожа',
                category: 'Фототехника'
            },
            images: ['../icons/fed2.jpg']
        },
        '6': {
            title: 'Фотоаппарат "Смена-8М"',
            subtitle: '1970 • ЛОМО',
            description: 'Простая и надежная шкальная фотокамара для начинающих фотографов. Выпускалась на Ленинградском оптико-механическом объединении (ЛОМО) с 1970 года.',
            specs: {
                production: '1970-1995',
                manufacturer: 'ЛОМО (Ленинградское оптико-механическое объединение)',
                materials: 'Пластик, Стекло',
                category: 'Фототехника'
            },
            images: ['../icons/smena8m.jpg']
        },
        '7': {
            title: 'Вспышка "Фотон"',
            ubtitle: '1975 • Завод "Квант"',
            description: 'Электронная фотовспышка для любительской съемки. Производилась на заводе "Квант" с 1975 года.',
            specs: {
                production: '1975-1985',
                manufacturer: 'Завод "Квант"',
                materials: 'Пластик, Металл',
                category: 'Фотовспышки'
            },
            images: ['../icons/foton.jpg']
        },
        '8': {
            title: 'Радиола "Вега-108"',
            subtitle: '1978 • Бердский радиозавод',
            description: 'Трехпрограммная радиола с проигрывателем виниловых пластинок. Выпускалась на Бердском радиозаводе с 1978 года.',
            specs: {
                production: '1978-1985',
                manufacturer: 'Бердский радиозавод',
                materials: 'Дерево, Пластик, Металл',
                category: 'Радиотехника'
            },
            images: ['../icons/vega108.jpg']
        },
        '9': {
            title: 'Магнитофон "Весна-202"',
            subtitle: '1982 • Орловский радиозавод',
            description: 'Кассетный магнитофон с УКВ-диапазоном для записи и воспроизведения аудиокассет. Производился на Орловском заводе с 1982 года.',
            specs: {
                production: '1982-1990',
                manufacturer: 'Орловский радиозавод',
                materials: 'Пластик, Металл',
                category: 'Аудиотехника'
            },
            images: ['../icons/vesna.jpg']
        },
    };
    
    // Возвращаем объект по ID или первый по умолчанию
    return objects[objectId] || objects['1'];
}


// ФУНКЦИЯ ДЛЯ ОБНОВЛЕНИЯ СТРАНИЦЫ ОБЪЕКТА
function updateObjectPage() {
    // Проверяем, находимся ли мы на странице объекта
    if (!document.querySelector('.object-detail')) return;
    
    const objectData = loadObjectData();
    
    // Обновляем заголовки
    const mainTitle = document.querySelector('.hero h1');
    const subtitle = document.querySelector('.hero h2');
    
    if (mainTitle) mainTitle.textContent = objectData.title;
    if (subtitle) subtitle.textContent = objectData.subtitle;
    
    // Обновляем описание
    const description = document.querySelector('.object-info-detailed p');
    if (description) description.textContent = objectData.description;
    
    // Обновляем характеристики
    const specItems = document.querySelectorAll('.spec-item');
    if (specItems.length >= 4) {
        specItems[0].innerHTML = `<strong>Годы производства:</strong> ${objectData.specs.production}`;
        specItems[1].innerHTML = `<strong>Производитель:</strong> ${objectData.specs.manufacturer}`;
        specItems[2].innerHTML = `<strong>Материалы:</strong> ${objectData.specs.materials}`;
        specItems[3].innerHTML = `<strong>Категория:</strong> ${objectData.specs.category}`;
    }
    
    // Обновляем основное изображение (если есть)
    const mainImage = document.querySelector('.main-image');
    if (mainImage && objectData.images && objectData.images[0]) {
        mainImage.innerHTML = `<img src="${objectData.images[0]}" alt="${objectData.title}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 12px;">`;
    }
    
    console.log('Данные объекта загружены:', objectData.title);
}

function shareObject() {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl).then(() => {
        showNotification('Ссылка на объект скопирована в буфер обмена!', 'success');
    }).catch(() => {
        // Fallback для старых браузеров
        const tempInput = document.createElement('input');
        tempInput.value = currentUrl;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        showNotification('Ссылка на объект скопирована!', 'success');
    });
}

// ФУНКЦИИ ДЛЯ МОДАЛЬНЫХ ОКОН
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

function closeAllModals() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.style.display = 'none';
    });
}

// ОСНОВНАЯ ФУНКЦИЯ ИНИЦИАЛИЗАЦИИ
function initializeAll() {
    normalizeHeaderHeight();
    initNavigation();
    initInteractiveElements();
    initLanguageSwitcher();
    initSmoothScrolling();
    initScrollAnimations();
    setupFormHandlers();
    setupModalHandlers();
    initImageHandlers(); // ДОБАВЬТЕ ЭТУ СТРОЧКУ
    updateObjectPage();
    initCommunityPages();
    initAllAnimations();
    
    console.log('Все функции инициализированы');
}

// ИНИЦИАЛИЗАЦИЯ НАВИГАЦИИ
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const dropdowns = document.querySelectorAll('.nav-item.dropdown');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', function() {
            const menu = this.querySelector('.dropdown-menu');
            if (menu) menu.style.display = 'block';
        });
        
        dropdown.addEventListener('mouseleave', function() {
            const menu = this.querySelector('.dropdown-menu');
            if (menu) menu.style.display = 'none';
        });
    });
}

// ИНИЦИАЛИЗАЦИЯ ИНТЕРАКТИВНЫХ ЭЛЕМЕНТОВ
function initInteractiveElements() {
    // Обработчики для карточек
    const cards = document.querySelectorAll('.feature-card, .object-card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const link = this.querySelector('a');
            if (link) {
                window.location.href = link.href;
            }
        });
    });
}

// ИНИЦИАЛИЗАЦИЯ ПЕРЕКЛЮЧАТЕЛЯ ЯЗЫКА
let currentLanguage = 'ru';

const translations = {
    'ru': {
        'events': 'События',
        'archive': 'Архив',
        'community': 'Сообщество',
        'career': 'Карьера',
        'contacts': 'Контакты',
        'webinars': 'Вебинары',
        'exhibitions': 'Выставки',
        'competitions': 'Конкурсы',
        'conferences': 'Конференции',
        'objects': 'Объекты',
        'collections': 'Коллекции',
        'authors': 'Авторы',
        'timeline': 'Таймлайн'
    },
    'en': {
        'events': 'Events',
        'archive': 'Archive',
        'community': 'Community',
        'career': 'Career',
        'contacts': 'Contacts',
        'webinars': 'Webinars',
        'exhibitions': 'Exhibitions',
        'competitions': 'Competitions',
        'conferences': 'Conferences',
        'objects': 'Objects',
        'collections': 'Collections',
        'authors': 'Authors',
        'timeline': 'Timeline'
    }
};

function toggleLanguage() {
    currentLanguage = currentLanguage === 'ru' ? 'en' : 'ru';
    updateLanguage();
}

function updateLanguage() {
    const languageBtn = document.querySelector('.language-btn');
    if (languageBtn) {
        languageBtn.textContent = currentLanguage === 'ru' ? 'RU' : 'EN';
    }
    
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage][key]) {
            if (element.tagName === 'INPUT' && element.type !== 'submit') {
                element.placeholder = translations[currentLanguage][key];
            } else {
                element.textContent = translations[currentLanguage][key];
            }
        }
    });
    
    showNotification(`Language switched to ${currentLanguage.toUpperCase()}`, 'info');
}

function initLanguageSwitcher() {
    updateLanguage();
}

// ИНИЦИАЛИЗАЦИЯ ПЛАВНОЙ ПРОКРУТКИ
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ИНИЦИАЛИЗАЦИЯ АНИМАЦИЙ ПРИ СКРОЛЛЕ
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    const animatedElements = document.querySelectorAll('.feature-card, .object-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ИНИЦИАЛИЗАЦИЯ ОБРАБОТЧИКОВ ФОРМ
function setupFormHandlers() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleContactForm(this);
        });
    }
    
    const eventForm = document.getElementById('eventForm');
    if (eventForm) {
        eventForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleEventForm(this);
        });
    }
    
    const jobForm = document.getElementById('jobForm');
    if (jobForm) {
        jobForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleJobForm(this);
        });
    }
}

// ИНИЦИАЛИЗАЦИЯ МОДАЛЬНЫХ ОКОН
function setupModalHandlers() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
            }
        });
    });
    
    // Закрытие по Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeAllModals();
        }
    });
}



// ОБРАБОТЧИКИ ФОРМ
function handleContactForm(form) {
    const formData = {
        name: form.querySelector('#contactName').value,
        email: form.querySelector('#contactEmail').value,
        topic: form.querySelector('#contactTopic').value,
        message: form.querySelector('#contactMessage').value,
        timestamp: new Date().toLocaleString('ru-RU')
    };
    
    if (saveFormData('contact_submission', formData)) {
        showNotification('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.', 'success');
        form.reset();
    }
}

function handleEventForm(form) {
    const formData = {
        title: form.querySelector('#eventTitle').value,
        type: form.querySelector('#eventType').value,
        datetime: form.querySelector('#eventDateTime').value,
        description: form.querySelector('#eventDescription').value,
        timestamp: new Date().toLocaleString('ru-RU')
    };
    
    if (saveFormData('event_submission', formData)) {
        showNotification('Событие успешно создано!', 'success');
        form.reset();
        closeModal('eventModal');
    }
}

function handleJobForm(form) {
    const formData = {
        title: form.querySelector('#jobTitle').value,
        company: form.querySelector('#jobCompany').value,
        salary: form.querySelector('#jobSalary').value,
        description: form.querySelector('#jobDescription').value,
        timestamp: new Date().toLocaleString('ru-RU')
    };
    
    if (saveFormData('job_submission', formData)) {
        showNotification('Вакансия опубликована!', 'success');
        form.reset();
        closeModal('jobModal');
    }
}

// СОХРАНЕНИЕ ДАННЫХ ФОРМ
function saveFormData(key, data) {
    try {
        const existingData = JSON.parse(localStorage.getItem(key) || '[]');
        existingData.push({
            ...data,
            id: Date.now(),
            timestamp: new Date().toISOString()
        });
        localStorage.setItem(key, JSON.stringify(existingData));
        return true;
    } catch (error) {
        console.error('Ошибка сохранения данных:', error);
        return false;
    }
}

function loadFormData(key) {
    try {
        return JSON.parse(localStorage.getItem(key)) || [];
    } catch (error) {
        console.error('Ошибка загрузки данных:', error);
        return [];
    }
}

// ФУНКЦИИ ДЛЯ АРХИВА
function performArchiveSearch() {
    const searchInput = document.getElementById('archiveSearch');
    if (searchInput && searchInput.value.trim()) {
        const query = searchInput.value.trim();
        showNotification(`Поиск: "${query}"`, 'info');
        filterObjects();
    }
}

function filterObjects() {
    const searchQuery = document.getElementById('archiveSearch')?.value.toLowerCase() || '';
    const periodCheckboxes = document.querySelectorAll('input[value][onchange*="filterObjects"]:checked');
    const categoryCheckboxes = document.querySelectorAll('input[value][onchange*="filterObjects"]:checked');
    const materialCheckboxes = document.querySelectorAll('input[value][onchange*="filterObjects"]:checked');
    
    const selectedPeriods = Array.from(periodCheckboxes).map(cb => cb.value);
    const selectedCategories = Array.from(categoryCheckboxes).map(cb => cb.value);
    const selectedMaterials = Array.from(materialCheckboxes).map(cb => cb.value);
    
    const cards = document.querySelectorAll('.object-card');
    let visibleCount = 0;
    
    cards.forEach(card => {
        const cardPeriod = card.getAttribute('data-period');
        const cardCategory = card.getAttribute('data-category');
        const cardMaterials = card.getAttribute('data-material').split(',');
        const cardTags = card.getAttribute('data-tags').toLowerCase();
        const cardText = card.textContent.toLowerCase();
        
        const matchesSearch = !searchQuery || 
                            cardText.includes(searchQuery) || 
                            cardTags.includes(searchQuery);
        
        const matchesPeriod = selectedPeriods.length === 0 || 
                            selectedPeriods.includes(cardPeriod);
        
        const matchesCategory = selectedCategories.length === 0 || 
                              selectedCategories.includes(cardCategory);
        
        const matchesMaterial = selectedMaterials.length === 0 || 
                              selectedMaterials.some(material => cardMaterials.includes(material));
        
        if (matchesSearch && matchesPeriod && matchesCategory && matchesMaterial) {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    showNotification(`Найдено объектов: ${visibleCount}`, 'success');
}

function sortObjects(criteria) {
    const grid = document.getElementById('objectsGrid');
    if (!grid) return;
    
    const cards = Array.from(grid.querySelectorAll('.object-card'));
    
    cards.sort((a, b) => {
        switch(criteria) {
            case 'name':
                return a.querySelector('.object-name').textContent.localeCompare(b.querySelector('.object-name').textContent);
            case 'newest':
                return b.getAttribute('data-period').localeCompare(a.getAttribute('data-period'));
            case 'oldest':
                return a.getAttribute('data-period').localeCompare(b.getAttribute('data-period'));
            case 'popular':
                return Math.random() - 0.5;
            default:
                return 0;
        }
    });
    
    cards.forEach(card => grid.appendChild(card));
    
    const criteriaNames = {
        'newest': 'по дате (новые)',
        'oldest': 'по дате (старые)', 
        'name': 'по названию',
        'popular': 'по популярности'
    };
    showNotification(`Сортировка: ${criteriaNames[criteria]}`, 'info');
}

// ФУНКЦИИ ДЛЯ СОБЫТИЙ
function registerForEvent(eventId) {
    showNotification('Вы успешно зарегистрированы на мероприятие!', 'success');
    
    const button = event.target;
    button.textContent = '✅ Зарегистрирован';
    button.disabled = true;
    button.classList.add('registered');
}

// ФУНКЦИИ ДЛЯ СООБЩЕСТВА
function showNewPostModal() {
    showModal('newPostModal');
}

function likePost(postId) {
    showNotification('Лайк добавлен!', 'success');
}

function commentOnPost(postId) {
    const comment = prompt('Введите ваш комментарий:');
    if (comment) {
        showNotification('Комментарий добавлен!', 'success');
    }
}

function sharePost(postId) {
    showNotification('Ссылка скопирована в буфер обмена', 'info');
}

function followExpert(expertId) {
    const btn = event.target;
    btn.textContent = '✓';
    btn.disabled = true;
    showNotification('Вы подписались на эксперта!', 'success');
}

// ФУНКЦИИ ДЛЯ КАРЬЕРЫ
function switchCareerTab(tabName) {
    document.querySelectorAll('.career-tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.career-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    const targetContent = document.getElementById(tabName + '-content');
    const targetTab = event.target;
    
    if (targetContent) targetContent.classList.add('active');
    if (targetTab) targetTab.classList.add('active');
}

function showJobModal() {
    showModal('jobModal');
}

function applyForJob(jobId) {
    showNotification('Заявка отправлена!', 'success');
}

function saveJob(jobId) {
    showNotification('Вакансия сохранена!', 'success');
}

// ФУНКЦИИ ДЛЯ ПРОФИЛЯ
function switchProfileTab(tabName) {
    document.querySelectorAll('.profile-tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.profile-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    const targetContent = document.getElementById(tabName + '-content');
    const targetTab = event.target;
    
    if (targetContent) targetContent.classList.add('active');
    if (targetTab) targetTab.classList.add('active');
}

function editProfile() {
    showModal('editProfileModal');
}

function saveProfile() {
    showNotification('Профиль успешно обновлен!', 'success');
    closeModal('editProfileModal');
}

function changeAvatar() {
    showNotification('Функция смены аватара в разработке', 'info');
}

// ФУНКЦИИ ДЛЯ КОНТАКТОВ
function copyContactInfo(type, value) {
    navigator.clipboard.writeText(value).then(() => {
        showNotification(`${type} скопирован в буфер обмена`, 'success');
    });
}

function showOnMap() {
    showNotification('Открываем карту...', 'info');
}

// УТИЛИТЫ
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// ЗАГРУЗКА ДАННЫХ
function loadInitialData() {
    const contactSubmissions = loadFormData('contact_submission');
    const eventSubmissions = loadFormData('event_submission');
    const jobSubmissions = loadFormData('job_submission');
    
    console.log('Загруженные данные:', {
        contactSubmissions,
        eventSubmissions, 
        jobSubmissions
    });
}

// ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
document.addEventListener('DOMContentLoaded', function() {
    initializeAll();
    loadInitialData();
    
    const languageBtn = document.querySelector('.language-btn');
    if (languageBtn) {
        languageBtn.addEventListener('click', toggleLanguage);
    }
    
    const archiveSearch = document.getElementById('archiveSearch');
    if (archiveSearch) {
        archiveSearch.addEventListener('input', debounce(performArchiveSearch, 300));
    }
    
    console.log('Страница полностью загружена и инициализирована');
});

// ОБРАБОТЧИКИ ДЛЯ КНОПОК СТРАНИЦ
window.showEventModal = function() {
    showModal('eventModal');
};

window.showJobModal = function() {
    showModal('jobModal');
};

window.showNewPostModal = function() {
    showModal('newPostModal');
};

window.closeModal = function(modalId) {
    closeModal(modalId);
};

window.registerForEvent = registerForEvent;
window.likePost = likePost;
window.commentOnPost = commentOnPost;
window.sharePost = sharePost;
window.followExpert = followExpert;
window.applyForJob = applyForJob;
window.saveJob = saveJob;
window.editProfile = editProfile;
window.saveProfile = saveProfile;
window.changeAvatar = changeAvatar;
window.copyContactInfo = copyContactInfo;
window.showOnMap = showOnMap;
window.performArchiveSearch = performArchiveSearch;
window.filterObjects = filterObjects;
window.sortObjects = sortObjects;
window.switchCareerTab = switchCareerTab;
window.switchProfileTab = switchProfileTab;


// ФУНКЦИЯ ДЛЯ ОБРАБОТКИ ОШИБОК ЗАГРУЗКИ ИЗОБРАЖЕНИЙ
function initImageHandlers() {
    // Обработчики для feature images
    const featureImages = document.querySelectorAll('.feature-image');
    featureImages.forEach(img => {
        img.addEventListener('error', function() {
            console.warn('Не удалось загрузить изображение:', this.src);
            this.style.display = 'none';
            const parent = this.closest('.feature-icon');
            if (parent) {
                parent.innerHTML = '📁';
                parent.style.fontSize = '32px';
                parent.style.display = 'flex';
                parent.style.alignItems = 'center';
                parent.style.justifyContent = 'center';
            }
        });
    });

    // Обработчики для object images
    const objectImages = document.querySelectorAll('.object-img');
    objectImages.forEach(img => {
        img.addEventListener('error', function() {
            console.warn('Не удалось загрузить изображение объекта:', this.src);
            this.style.display = 'none';
            const placeholder = this.nextElementSibling;
            if (placeholder && placeholder.classList.contains('image-placeholder')) {
                placeholder.style.position = 'relative';
                placeholder.style.background = 'linear-gradient(135deg, var(--aluminum) 0%, var(--light-gray) 100%)';
                placeholder.style.height = '100%';
                placeholder.style.display = 'flex';
                placeholder.style.alignItems = 'center';
                placeholder.style.justifyContent = 'center';
                placeholder.style.fontSize = '16px';
            }
        });
        
        // Показываем placeholder только если изображение загружено
        img.addEventListener('load', function() {
            const placeholder = this.nextElementSibling;
            if (placeholder && placeholder.classList.contains('image-placeholder')) {
                placeholder.style.display = 'block';
            }
        });
    });
}

// Данные для сообщества
const communityData = {
    // Форумы
    forums: [
        {
            id: 1,
            title: "Обсуждение реставрации",
            description: "Восстановление исторических объектов",
            threads: 24,
            lastActivity: "2024-01-15"
        },
        {
            id: 2, 
            title: "Современный дизайн",
            description: "Актуальные тенденции и технологии",
            threads: 18,
            lastActivity: "2024-01-14"
        }
    ],

    // Обсуждения
    discussions: [
        {
            id: 1,
            forumId: 1,
            title: "Реставрация фотоаппарата Зенит-Е",
            author: "Алексей Реставратор",
            replies: 12,
            views: 156,
            lastPost: "2024-01-15"
        }
    ],

    // Проекты
    projects: [
        {
            id: 1,
            title: "Виртуальная реконструкция завода",
            description: "Создание 3D модели исторического предприятия",
            status: "active",
            participants: 8,
            progress: 65
        }
    ],

    // Эксперты
    experts: [
        {
            id: 1,
            name: "Дмитрий Иванов",
            specialization: "Историк промышленного дизайна",
            articles: 15,
            rating: 4.8
        }
    ],

    // Статьи
    articles: [
        {
            id: 1,
            title: "Эволюция советского дизайна: от функциональности к эстетике",
            authorId: 1,
            category: "history",
            readTime: "8 мин",
            publishDate: "2024-01-10"
        }
    ]
};

function loadForumList() {
    const container = document.querySelector('.forum-list');
    if (!container) return;
    
    communityData.forums.forEach(forum => {
        const forumElement = document.createElement('div');
        forumElement.className = 'forum-item';
        forumElement.innerHTML = `
            <h3>${forum.title}</h3>
            <p>${forum.description}</p>
            <div class="forum-stats">
                <span>Тем: ${forum.threads}</span>
                <span>Активность: ${forum.lastActivity}</span>
            </div>
        `;
        forumElement.addEventListener('click', () => {
            window.location.href = `forum-discussion.html?forumId=${forum.id}`;
        });
        container.appendChild(forumElement);
    });
}

function loadDiscussion() {
    const urlParams = new URLSearchParams(window.location.search);
    const discussionId = urlParams.get('id');
    
    if (discussionId) {
        const discussion = communityData.discussions.find(d => d.id == discussionId);
        if (discussion) {
            document.getElementById('discussion-title').textContent = discussion.title;
            // Загрузка постов обсуждения
        }
    }
}






// ДОБАВИТЬ В КОНЕЦ ФАЙЛА script.js

// Функция для инициализации дополнительных анимаций
function initAdvancedAnimations() {
    // Анимация появления элементов при скролле
    const animatedElements = document.querySelectorAll('.feature-card, .object-card, .archive-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => {
        el.style.animation = 'fadeInUp 0.8s ease-out both';
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
    
    // Параллакс эффект для фоновых элементов
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.shape, .dot, .gear');
        
        parallaxElements.forEach(el => {
            const speed = parseFloat(el.getAttribute('data-speed')) || 0.5;
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    // Интерактивные hover-эффекты
    const interactiveCards = document.querySelectorAll('.feature-card, .object-card');
    interactiveCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px) scale(1)';
            this.style.boxShadow = 'var(--hover-shadow)';
        });
    });
}

// Функция для случайной анимации
function getRandomAnimation() {
    const animations = ['float', 'floatHorizontal', 'pulseGlow'];
    return animations[Math.floor(Math.random() * animations.length)];
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    // ... существующий код ...
    
    initAdvancedAnimations();
    
    // Добавляем случайные анимации для фоновых элементов
    const backgroundElements = document.querySelectorAll('.shape, .dot, .line');
    backgroundElements.forEach(el => {
        const randomDelay = Math.random() * 5;
        const randomDuration = 10 + Math.random() * 10;
        
        el.style.animationDelay = `${randomDelay}s`;
        el.style.animationDuration = `${randomDuration}s`;
    });
});

// ДОБАВИТЬ В СУЩЕСТВУЮЩИЙ script.js

// Функция для создания анимированного фона
function createAnimatedBackground() {
    const sections = document.querySelectorAll('.features, .archive-preview, .community-layout, .career-layout');
    
    sections.forEach(section => {
        // Добавляем класс для анимированного фона
        section.classList.add('animated-section-bg');
        
        // Создаем плавающие элементы
        createFloatingElements(section);
        
        // Добавляем сетку
        const grid = document.createElement('div');
        grid.className = 'grid-pattern';
        section.appendChild(grid);
    });
}

// Создание плавающих элементов
function createFloatingElements(container) {
    const elementCount = 8;
    
    for (let i = 0; i < elementCount; i++) {
        const element = document.createElement('div');
        const types = ['tech-line', 'tech-circle', 'tech-rectangle'];
        const type = types[Math.floor(Math.random() * types.length)];
        
        element.className = `content-float-element ${type}`;
        
        // Случайные параметры
        const size = Math.random() * 100 + 20;
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const delay = Math.random() * 10;
        const duration = 15 + Math.random() * 20;
        
        element.style.cssText = `
            top: ${top}%;
            left: ${left}%;
            animation-delay: ${delay}s;
            animation-duration: ${duration}s;
        `;
        
        if (type === 'tech-line') {
            element.style.width = `${size}px`;
            element.style.height = '2px';
        } else if (type === 'tech-circle') {
            element.style.width = `${size}px`;
            element.style.height = `${size}px`;
        } else if (type === 'tech-rectangle') {
            element.style.width = `${size}px`;
            element.style.height = `${size * 0.6}px`;
        }
        
        container.appendChild(element);
    }
}

// Анимация появления контента при скролле
function initContentAppearAnimations() {
    const elements = document.querySelectorAll('.feature-card, .object-card, .section-title, .content-appear');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Анимация для счетчиков
                if (entry.target.classList.contains('counter-animated')) {
                    animateCounter(entry.target);
                }
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach((el, index) => {
        el.classList.add('content-appear', `delay-${(index % 4) + 1}`);
        observer.observe(el);
    });
}

// Анимация счетчиков
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count') || element.textContent);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 16);
}

// Параллакс эффект
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.content-float-element, .grid-pattern');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-speed') || 0.3;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Интерактивные эффекты для карточек
function initInteractiveCards() {
    const cards = document.querySelectorAll('.feature-card, .object-card');
    
    cards.forEach(card => {
        // Магнитный эффект
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const angleX = (y - centerY) / 10;
            const angleY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
        
        // Эффект подсветки
        card.addEventListener('mouseenter', () => {
            card.classList.add('interactive-highlight');
        });
        
        card.addEventListener('mouseleave', () => {
            card.classList.remove('interactive-highlight');
        });
    });
}

// Анимация прогресса загрузки
function initLoadingProgress() {
    const loadingBar = document.createElement('div');
    loadingBar.className = 'loading-bar';
    document.body.appendChild(loadingBar);
    
    window.addEventListener('load', () => {
        loadingBar.style.width = '100%';
        setTimeout(() => {
            loadingBar.style.opacity = '0';
            setTimeout(() => loadingBar.remove(), 300);
        }, 500);
    });
    
    // Обновление прогресса во время загрузки
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress > 90) clearInterval(progressInterval);
        loadingBar.style.width = `${progress}%`;
    }, 100);
}

// Случайные анимации для элементов
function initRandomAnimations() {
    const elements = document.querySelectorAll('.feature-icon, .object-image');
    
    elements.forEach(element => {
        const animations = ['bounce', 'pulse', 'wiggle'];
        const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
        
        element.style.animation = `${randomAnimation} 3s ease-in-out infinite`;
        element.style.animationDelay = `${Math.random() * 2}s`;
    });
}

// Инициализация всех анимаций
function initAllAnimations() {
    createAnimatedBackground();
    initContentAppearAnimations();
    initParallaxEffects();
    initInteractiveCards();
    initLoadingProgress();
    initRandomAnimations();
    
    console.log('Все анимации инициализированы');
}