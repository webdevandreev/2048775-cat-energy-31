// Получаем элементы input
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#tel');

// Функция для проверки валидности email
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return email !== '' && emailPattern.test(email);
}

// Функция для проверки валидности телефона
function validatePhone(phone) {
  const phonePattern = /^\+?[0-9]{10,14}$/; // Простая проверка: 10-14 цифр, может начинаться с '+'
  return phone !== '' && phonePattern.test(phone);
}

// Функция для обработки изменений в input
function handleInput(inputElement, validationFunction) {
  inputElement.addEventListener('input', () => {
    if (inputElement.value === '' || validationFunction(inputElement.value)) {
      inputElement.classList.remove('error');
    } else {
      inputElement.classList.add('error');
    }
  });

  inputElement.addEventListener('focus', () => {
    inputElement.classList.add('focused');
  });

  inputElement.addEventListener('blur', () => {
    inputElement.classList.remove('focused');
    if (inputElement.value !== '' && !validationFunction(inputElement.value)) {
      inputElement.classList.add('error');
    } else {
      inputElement.classList.remove('error');
    }
  });
}

// Применяем обработку к обоим полям
handleInput(emailInput, validateEmail);
handleInput(phoneInput, validatePhone);

// Обработка отправки формы
document.querySelector('#cat-form').addEventListener('submit', (event) => {
  let isValid = true;

  [emailInput, phoneInput].forEach((input) => {
    if (input.value === '') {
      input.classList.add('error');
      isValid = false;
    } else if ((input === emailInput && !validateEmail(input.value)) ||
                (input === phoneInput && !validatePhone(input.value))) {
      input.classList.add('error');
      isValid = false;
    }
  });

  if (!isValid) {
    event.preventDefault(); // Предотвращаем отправку формы, если поля невалидны
  }
});
