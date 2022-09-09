alert(
  "Задача 1.1. Комп’ютер випадковим чином вибирає початок і кінець проміжку (проміжок повинен знаходитися в межах від 1 до 100). Користувач вводить число і виграє, якщо число знаходиться у цьому проміжку, або розташоване від нього (від лівого або правого краю) не більше ніж на 10."
);
const min = 1;
const max = 100;
let rangeRandomStart = min + Math.floor(Math.random() * (max - min + 1));
let rangeRandomEnd = min + Math.floor(Math.random() * (max - min + 1));
if (rangeRandomStart === rangeRandomEnd) {
  rangeRandomStart = min + Math.floor(Math.random() * (max - min + 1));
  rangeRandomEnd = min + Math.floor(Math.random() * (max - min + 1));
}
if (rangeRandomStart > rangeRandomEnd) {
  let temp = rangeRandomStart;
  rangeRandomStart = rangeRandomEnd;
  rangeRandomEnd = temp;
}
const userNumber = parseInt(prompt("Введіть число від 1 до 100"));
if (userNumber >= rangeRandomStart - 10 && userNumber <= rangeRandomEnd + 10) {
  document.write(
    `<h1>Вітаємо! Випадковим чином згенерований проміжок: ${rangeRandomStart} - ${rangeRandomEnd}</h1>`
  );
} else
  document.write(
    `<h1>Нажаль Ви не влучили в проміжок навіть з відхиленням +/- 10. Випадковим чином згенерований проміжок: ${rangeRandomStart} - ${rangeRandomEnd}</h1>`
  );
// Якщо є бажання, то можна умову розаписати
// if (
//   (userNumber >= rangeRandomStart && userNumber <= rangeRandomEnd) ||
//   (userNumber < rangeRandomStart && userNumber >= rangeRandomStart - 10) ||
//   (userNumber > rangeRandomEnd && userNumber <= rangeRandomEnd + 10)
// )
// і при бажанні навіть різний текст виводити(чи влучили точно в проміжок, чи з відхиленням)
