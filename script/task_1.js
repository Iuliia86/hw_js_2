alert(
  "Задача 0.1. На екран виводиться меню: \n 1. Веселий \n 2. Сумний \n 3. Обурений \n Користувач вводить номер пункту меню і на екрані з’являється відповідне зображення смайла."
);
const userNumber = parseInt(
  prompt("Введіть число від 1 до 3, де: 1 - Веселий. 2 - Сумний. 3 - Обурений.")
);
if (userNumber === 1)
  document.write(
    '<div><img src="./images/smile.jpg" alt="Веселий смайл"></div>'
  );
else if (userNumber === 2)
  document.write('<div><img src="./images/sad.jpg" alt="Сумний смайл"></div>');
else if (userNumber === 3)
  document.write(
    '<div><img src="./images/indignant.jpg" alt="Обурений смайл"></div>'
  );
else
  document.write(
    "<div><p>Вибачте, але Ваш вибір не відповідає умові. Спробуйте ще</p></div>"
  );
