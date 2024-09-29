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

        // Для демонстрации показываем сообщение об успешной отправке
        showSuccessMessage();
    });
});
