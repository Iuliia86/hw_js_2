alert(
  "Задача 1. Комп’ютер загадує число від 1 до 5. Дати можливість користувачу за 2 спроби вгадати загадане комп’ютером число."
);
const min = 1;
const max = 5;
const compRandomNumber = min + Math.floor(Math.random() * (max - min + 1));
let userNumber = parseInt(prompt("Введіть число від 1 до 5"));
if (userNumber === compRandomNumber) {
  document.write(
    `<h1>Вітаємо! Ви виграли з першого разу! Загадане число = ${compRandomNumber}.</h1>`
  );
} else {
  userNumber = parseInt(prompt("Спробуйте знову: введіть число від 1 до 5"));
  if (userNumber === compRandomNumber) {
    document.write(
      `<h1>Вітаємо! Друга спроба вдала! Загадане число = ${compRandomNumber}.</h1>`
    );
  } else {
    document.write(
      `<h1>Наступного разу пощастить! Загадане число = ${compRandomNumber}.</h1>`
    );
  }
}
