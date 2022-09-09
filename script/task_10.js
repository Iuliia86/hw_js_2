alert(
  "Задача 5. Гра в кості. Правила гри: \n 1) користувач може кинути кості не більше двох разів (користувач сам вирішує чи робити, чи не робити другий кидок); \n 2) якщо випадає парне число, то кількість балів збільшується на це число; \n 3) якщо випадає непарне число, то кількість балів зменшується на це число; \n 4) виграє той, у кого кількість балів більша."
);
alert("Перший гравець кидає кості");
let scoreUser1 = 1 + Math.floor(Math.random() * 6);
let userAnswer = parseInt(
  prompt(
    `Ваш результат ${scoreUser1} балів. \n Бажаєте кинути кості ще раз? \n так - 1 \n ні - 2 `
  )
);
if (userAnswer === 1) {
  let score = 1 + Math.floor(Math.random() * 6);
  if (score % 2 === 0) {
    scoreUser1 += score;
  } else {
    scoreUser1 -= score;
  }
}
alert("Другий гравець кидає кості");
let scoreUser2 = 1 + Math.floor(Math.random() * 6);
userAnswer = parseInt(
  prompt(
    `Ваш результат ${scoreUser2} балів. \n Бажаєте кинути кості ще раз? \n так - 1 \n ні - 2 `
  )
);
if (userAnswer === 1) {
  let score = 1 + Math.floor(Math.random() * 6);
  if (score % 2 === 0) {
    scoreUser2 += score;
  } else {
    scoreUser2 -= score;
  }
}
if (scoreUser1 > scoreUser2)
  document.write(
    `<h1>Виграв гравець 1. <br/> (Загальна к-ть балів гравця 1 = ${scoreUser1}. Загальна к-ть балів гравця 2 = ${scoreUser2}.)</h1>`
  );
else if (scoreUser1 < scoreUser2)
  document.write(
    `<h1>Виграв гравець 2. <br/> (Загальна к-ть балів гравця 1 = ${scoreUser1}. Загальна к-ть балів гравця 2 = ${scoreUser2}.)</h1>`
  );
else
  document.write(
    `<h1>Нічия! <br/> (Загальна к-ть балів гравця 1 = ${scoreUser1}. Загальна к-ть балів гравця 2 = ${scoreUser2}.)</h1>`
  );
