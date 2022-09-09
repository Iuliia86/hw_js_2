alert(
  "Задача 4. Полювання. Заєць знаходиться у верхньому лівому кутку поля. Поле складається з двох рядків і двох стовпців. За один крок заєць може стрибнути у будь-яку із вільних клітинок. Користувач ставить пастку вказуючи номер рядка і стовпця клітинки. Якщо заєць потрапляє у пастку, то користувач виграв і отримав 100 балів. Якщо користувач зловить зайця за другою спробою, то одержує 50 балів."
);
let rabbitRow = 1 + Math.floor(Math.random() * 2);
let rabbitColumn = 1 + Math.floor(Math.random() * 2);
if (rabbitRow === 1) {
  rabbitColumn = 2;
}
let trapRow = parseInt(prompt("Введіть рядок пастки"));
let trapColumn = parseInt(prompt("Введіть колонку пастки"));
if (rabbitRow === trapRow && rabbitColumn === trapColumn) {
  document.write("<h1>100 балів</h1>");
  if (rabbitRow === 1 && rabbitColumn === 2) {
    document.write(`
        <table>
          <tr>
            <td></td>
            <td>
              <img src="./images/rabbit.jpg" alt="Заєць" />
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
        </table>
      `);
  } else if (rabbitRow === 2 && rabbitColumn === 1) {
    document.write(`
        <table>
          <tr>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <img src="./images/rabbit.jpg" alt="Заєць" />
            </td>
            <td></td>
          </tr>
        </table>
      `);
  } else if (rabbitRow === 2 && rabbitColumn === 2) {
    document.write(`
        <table>
          <tr>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>
              <img src="./images/rabbit.jpg" alt="Заєць" />
            </td>
          </tr>
        </table>
      `);
  }
} else {
  alert("Не спіймали! Зробіть другу спробу!");
  trapRow = parseInt(prompt("Введіть рядок нової пастки"));
  trapColumn = parseInt(prompt("Введіть колонку нової пастки"));
  if (rabbitRow === trapRow && rabbitColumn === trapColumn) {
    document.write("<h1>50 балів</h1>");
    if (rabbitRow === 1 && rabbitColumn === 2) {
      document.write(`
        <table>
          <tr>
            <td></td>
            <td>
              <img src="./images/rabbit.jpg" alt="Заєць" />
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
        </table>
      `);
    } else if (rabbitRow === 2 && rabbitColumn === 1) {
      document.write(`
        <table>
          <tr>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <img src="./images/rabbit.jpg" alt="Заєць" />
            </td>
            <td></td>
          </tr>
        </table>
      `);
    } else if (rabbitRow === 2 && rabbitColumn === 2) {
      document.write(`
        <table>
          <tr>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>
              <img src="./images/rabbit.jpg" alt="Заєць" />
            </td>
          </tr>
        </table>
      `);
    }
  } else {
    document.write(
      `<h1>Заєць вільний! Позиція зайця ${rabbitRow} ${rabbitColumn}</h1>`
    );
    if (rabbitRow === 1 && rabbitColumn === 2) {
      document.write(`
        <table>
          <tr>
            <td></td>
            <td>
              <img src="./images/rabbit_free.jpg" alt="Заєць вільний" />
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
        </table>
      `);
    } else if (rabbitRow === 2 && rabbitColumn === 1) {
      document.write(`
        <table>
          <tr>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <img src="./images/rabbit_free.jpg" alt="Заєць вільний" />
            </td>
            <td></td>
          </tr>
        </table>
      `);
    } else if (rabbitRow === 2 && rabbitColumn === 2) {
      document.write(`
        <table>
          <tr>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>
              <img src="./images/rabbit_free.jpg" alt="Заєць вільний" />
            </td>
          </tr>
        </table>
      `);
    }
  }
}
