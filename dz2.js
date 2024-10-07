$(document).ready(function() {
    // Применяем маску к полю с id phone
    $('#phone').mask('+7 (999) 999-99-99');

    // Получаем элементы модального окна, кнопки и форму
    const modal = document.getElementById('myModal');
    const closeModal = document.getElementById('closeModal');
    const openModals = document.querySelectorAll('.openModal');
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    // Функция для открытия модального окна
    function openModal() {
        resetForm(); // Сбрасываем форму перед каждым новым открытием модального окна
        modal.style.display = 'block';
    }

    // Функция для закрытия модального окна
    function closeModalFunc() {
        modal.style.display = 'none';
    }

    // Функция для отображения сообщения об успешной отправке формы
    function showSuccessMessage() {
        contactForm.style.display = 'none'; // Скрыть форму
        successMessage.style.display = 'block'; // Показать сообщение
    }

    // Функция для сброса формы и подготовки к повторной отправке
    function resetForm() {
        contactForm.reset(); // Сбросить значения полей
        contactForm.style.display = 'block'; // Показать форму
        successMessage.style.display = 'none'; // Скрыть сообщение
    }

    // Добавляем обработчики событий для кнопок открытия модального окна
    openModals.forEach(button => {
        button.addEventListener('click', openModal);
    });

    // Добавляем обработчик события для закрытия модального окна при нажатии на крестик
    closeModal.addEventListener('click', closeModalFunc);

    // Закрытие модального окна при клике вне его области
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModalFunc();
        }
    });

    // Добавляем обработчик отправки формы
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Предотвращаем отправку формы по умолчанию

        // Логика отправки данных формы (здесь можно добавить AJAX запрос, если нужно)

        // Показать сообщение об успешной отправке
        showSuccessMessage();

        // Через 3 секунды сбросить форму и снова показать её для повторной отправки
        setTimeout(resetForm, 3000); // Таймер для повторного отображения формы через 3 секунды
    });
    phoneInput.addEventListener('input', function() {
        this.value = this.value.replace(/[^\d\+\(\)\-\s]/g, ''); // Разрешаем только цифры и спецсимволы
    });
});

