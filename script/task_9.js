alert(
  "Задача 4.1. Модифікувати попередню задачу вказуючи початкову позицію зайця випадковим чином а також можливістю переміщення зайця після пострілу."
);
let rabbitRow = 1 + Math.floor(Math.random() * 2);
let rabbitColumn = 1 + Math.floor(Math.random() * 2);
let trapRow = parseInt(prompt("Введіть рядок пастки"));
let trapColumn = parseInt(prompt("Введіть колонку пастки"));
if (rabbitRow === trapRow && rabbitColumn === trapColumn) {
  document.write("<h1>100 балів</h1>");
  if (rabbitRow === 1 && rabbitColumn === 1) {
    document.write(`
    <table>
      <tr>
        <td>
          <img src="./images/rabbit.jpg" alt="Заєць" />
        </td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
      </tr>
    </table>
  `);
  } else if (rabbitRow === 1 && rabbitColumn === 2) {
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
  alert(
    `Не спіймали! Позиція зайця ${rabbitRow} ${rabbitColumn}. Зробіть другу спробу! Заєць може стрибнути у іншу клітину`
  );
  rabbitRow = 1 + Math.floor(Math.random() * 2);
  rabbitColumn = 1 + Math.floor(Math.random() * 2);
  trapRow = parseInt(prompt("Введіть новий рядок пастки"));
  trapColumn = parseInt(prompt("Введіть нову колонку пастки"));
  if (rabbitRow === trapRow && rabbitColumn === trapColumn) {
    document.write("<h1>50 балів</h1>");
    if (rabbitRow === 1 && rabbitColumn === 1) {
      document.write(`
    <table>
      <tr>
        <td>
          <img src="./images/rabbit.jpg" alt="Заєць" />
        </td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
      </tr>
    </table>
  `);
    } else if (rabbitRow === 1 && rabbitColumn === 2) {
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
    if (rabbitRow === 1 && rabbitColumn === 1) {
      document.write(`
        <table>
          <tr>
            <td>
              <img src="./images/rabbit_free.jpg" alt="Заєць вільний" />
            </td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
        </table>
      `);
    } else if (rabbitRow === 1 && rabbitColumn === 2) {
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
