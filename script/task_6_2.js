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
    `Корабель поранено! Зробіть ще один постріл! Позиція корабля ${shipPosition}. Позиція буде змінена на 1 клітину`
  );
  const randomNumber = Math.floor(Math.random() * 2);
  let newShipPosition;
  if (
    (randomNumber === 0 && shipPosition !== 1) ||
    (randomNumber === 1 && shipPosition === cellsNumber)
  ) {
    newShipPosition = shipPosition - 1;
  } else newShipPosition = shipPosition + 1;
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
