// script.js
document.addEventListener('DOMContentLoaded', function() {
    const openModalBtn = document.getElementById('openModalBtn');
    const modal = document.getElementById('modal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const form = document.getElementById('myForm');
    const formMessage = document.getElementById('formMessage');
    
    // Открытие модального окна
    openModalBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    // Закрытие модального окна
    closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Закрытие модального окна при клике вне его области
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Маска для номера телефона
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', function() {
        let value = phoneInput.value.replace(/\D/g, '');
        if (value.length > 10) {
            value = value.slice(0, 10);
        }
        phoneInput.value = value.replace(/(\d{1,3})(\d{1,3})?(\d{1,4})?/, '+$1 ($2) $3');
    });

    // Валидация формы и обработка отправки
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Простой пример валидации
        if (!form.checkValidity()) {
            formMessage.textContent = 'Пожалуйста, заполните все обязательные поля.';
            formMessage.style.color = 'red';
            return;
        }

        // Отправка формы (в данном примере просто отображаем сообщение)
        formMessage.textContent = 'Форма успешно отправлена!';
        formMessage.style.color = 'green';

        // Очистка формы (если нужно)
        form.reset();

        // Закрытие модального окна
        modal.style.display = 'none';
    });
});
