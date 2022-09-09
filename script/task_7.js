alert(
  "Задача 3.2. Модифікувати попередню задачу (модификація задачі 3) таким чином, що кораблем керує користувач, а комп’ютер стріляє. "
);
const cellsNumber = parseInt(
  prompt("Введіть кількість квадратів для можливого розташування корабля")
);
const shipPosition = parseInt(
  prompt(`Введіть позицію корабля від 1 до ${cellsNumber}`)
);
let compShot = 1 + Math.floor(Math.random() * cellsNumber);
if (compShot === shipPosition) {
  document.write(
    `<h1>Нажаль корабель потоплено! Постріл комп'ютера у квадрат ${compShot}</h1>`
  );
} else if (Math.abs(compShot - shipPosition) !== 1) {
  document.write(
    `<h1>Корабель не пошкоджений! Постріл комп'ютера у квадрат ${compShot}</h1>`
  );
} else {
  alert(
    `Корабель поранено! Постріл комп'ютера у квадрат ${compShot}. Комп'ютер стріляє знову!`
  );
  const randomNumber = Math.floor(Math.random() * 2);
  if (
    (randomNumber === 0 && compShot !== 1) ||
    (randomNumber === 1 && compShot === cellsNumber)
  )
    compShot -= 1;
  else compShot += 1;
  if (compShot === shipPosition) {
    document.write(
      `<h1>Нажаль корабель потоплено другим пострілом ! Постріл комп'ютера у квадрат ${compShot}</h1>`
    );
  } else
    document.write(
      `<h1>Вітаємо! Корабель витримав! Постріл комп'ютера у квадрат ${compShot}</h1>`
    );
}
