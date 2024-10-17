const inputElement = document.querySelector('.subscribe__input');
const buttonElement = document.querySelector('.subscribe__button');

// Функция для проверки валидности email
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Обработчик события для ввода
inputElement.addEventListener('input', () => {
  if (validateEmail(inputElement.value)) {
    inputElement.classList.remove('error');
  } else {
    inputElement.classList.add('error');
  }
});

// Обработчик события для кнопки
buttonElement.addEventListener('click', (event) => {
  event.preventDefault(); // Предотвращаем отправку формы

  if (!validateEmail(inputElement.value)) {
    inputElement.classList.add('error');
  }
});
