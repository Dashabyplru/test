function openWhatsApp() {
            const phoneNumber = '375333575587'; // Замените на нужный номер телефона
            const message = 'Привет! У меня есть вопрос.'; // Сообщение по умолчанию
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        }

        function openTelegram() {
            const username = 'PaytonMour'; // Замените на ваш Telegram username (без @)
            const message = 'Привет! У меня есть вопрос.'; // Сообщение по умолчанию
            const url = `https://t.me/${username}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        }
        document.getElementById('openButton').onclick = function() {
            window.location.href = 'second.html';
        };