const cellsNumber = parseInt(
  prompt("Введіть кількість квадратів для можливого розташування корабля")
);
const shipPosition = 1 + Math.floor(Math.random() * cellsNumber);
let userShot = parseInt(prompt("Введіть номер квадрату"));
if (userShot === shipPosition) {
  document.write(
    `<h1>Вітаємо! Корабель потоплено! Позиція корабля ${shipPosition}</h1>`
  );
} else if (Math.abs(userShot - shipPosition) !== 1) {
  document.write(`<h1>Не влучили! Позиція корабля ${shipPosition}</h1>`);
} else {
  alert(
    `Корабель поранено! Зробіть ще один постріл! Позиція корабля ${shipPosition}. Він МОЖЕ бути зміщений на 1 клітину (може і ні)`
  );
  let newShipPosition = shipPosition - 1 + Math.floor(Math.random() * 3);
  if (newShipPosition < 1) {
    newShipPosition = 1;
  }
  if (newShipPosition > cellsNumber) {
    newShipPosition = cellsNumber;
  }
  userShot = parseInt(prompt("Введіть номер квадрату"));
  if (userShot === newShipPosition) {
    document.write(
      `<h1>Вітаємо! Корабель потоплено другим пострілом ! Нова позиція корабля ${newShipPosition}</h1>`
    );
  } else
    document.write(
      `<h1>Не влучили! Нова позиція корабля ${newShipPosition}</h1>`
    );
}
