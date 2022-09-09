alert(
  "Задача 2. Комп’ютер загадує число від 1 до 10. Двоє користувачів надають свої відповіді. Виграє той, у кого число знаходиться ближче до загаданого комп’ютером числа."
);
const min = 1;
const max = 10;
const compRandomNumber = min + Math.floor(Math.random() * (max - min + 1));
const numberUser1 = parseInt(prompt("Користувач 1: введіть число від 1 до 10"));
const numberUser2 = parseInt(prompt("Користувач 2: введіть число від 1 до 10"));
if (
  Math.abs(numberUser1 - compRandomNumber) <
  Math.abs(numberUser2 - compRandomNumber)
) {
  document.write(
    `<h1>Виграв користувач 1. Загадане число = ${compRandomNumber} <br/> (Число користувача_1 = ${numberUser1}. Число користувача_2 = ${numberUser2}.)</h1>`
  );
} else if (
  Math.abs(numberUser1 - compRandomNumber) >
  Math.abs(numberUser2 - compRandomNumber)
) {
  document.write(
    `<h1>Виграв користувач 2. Загадане число = ${compRandomNumber} <br/> (Число користувача_1 = ${numberUser1}. Число користувача_2 = ${numberUser2}.)</h1>`
  );
} else {
  document.write(
    `<h1>Нічия! Загадане число = ${compRandomNumber} <br/> (Число користувача_1 = ${numberUser1}. Число користувача_2 = ${numberUser2}.)</h1>`
  );
}
