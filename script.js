// Отримуємо елементи з DOM
const subscribeButton = document.getElementById("subscribeButton");
const subscribeModal = document.getElementById("subscribeModal");
const closeModal = document.getElementById("closeModal");
const subscribeForm = document.getElementById("subscribeForm");
const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("errorMessage");

// Відкриття модального вікна при натисканні на кнопку
subscribeButton.addEventListener("click", function() {
    subscribeModal.style.display = "block";
});

// Закриття модального вікна при натисканні на "×"
closeModal.addEventListener("click", function() {
    subscribeModal.style.display = "none";
});

// Закриття модального вікна при натисканні за межами вікна
window.addEventListener("click", function(event) {
    if (event.target === subscribeModal) {
        subscribeModal.style.display = "none";
    }
});

// Перевірка форми при відправці
subscribeForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Зупиняємо стандартну відправку форми
    
    const emailValue = emailInput.value;

    // Перевірка на наявність @ та на порожнє поле
    if (emailValue === "" || !emailValue.includes("@")) {
        errorMessage.style.display = "block"; // Показуємо повідомлення про помилку
    } else {
        errorMessage.style.display = "none"; // Приховуємо повідомлення про помилку
        alert("Ви успішно підписалися на новини!"); // Виводимо повідомлення про успіх
        subscribeModal.style.display = "none"; // Закриваємо модальне вікно
        emailInput.value = ""; // Очищаємо поле
    }
});

function updateHamsterTimer() {
    const today = new Date();
    const birthdayMonth = 3; // Місяць Дня хом'яків (0 - січень, 3 - квітень)
    const birthdayDate = 12; // День хом'яків
    let hamsterDay = new Date(today.getFullYear(), birthdayMonth, birthdayDate);

    // Якщо День хом'яків уже минув цього року
    if (today > hamsterDay) {
        hamsterDay.setFullYear(today.getFullYear() + 1);
    }

    // Константи для мілісекунд у дні, годині та хвилині
    const day = 86400000;
    const hour = 3600000;
    const minute = 60000;

    // Розрахунок залишку часу
    const time = hamsterDay.getTime() - today.getTime();
    const days = Math.floor(time / day);
    const hours = Math.floor((time % day) / hour);
    const minutes = Math.floor((time % hour) / minute);
    const seconds = Math.floor((time % minute) / 1000);

    // Формування рядка результату
    const str = `${days} днів, ${hours} годин, ${minutes} хвилин, ${seconds} секунд`;

    // Оновлення таймера на сторінці
    document.getElementById("time").textContent = str;
}

// Оновлюємо таймер кожну секунду
setInterval(updateHamsterTimer, 1000);
updateHamsterTimer();