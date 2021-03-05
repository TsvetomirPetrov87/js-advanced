function solve() {
  const textareas = document.querySelectorAll('textarea');
  const buttons = document.querySelectorAll('button');
  const body = document.querySelector('tbody');

  buttons[0].addEventListener('click', (generate) => {
    const arr = JSON.parse(textareas[0].value);

    for (let el of arr) {
      const tr = document.createElement('tr');

      const tdImage = document.createElement('td');
      const img = document.createElement('img');
      img.setAttribute('src', el.img);
      tdImage.appendChild(img);

      const tdName = document.createElement('td');
      const pName = document.createElement('p');
      pName.textContent = el.name
      tdName.appendChild(pName);

      const tdPrice = document.createElement('td');
      const pPrice = document.createElement('p');
      pPrice.textContent = el.price;
      tdPrice.appendChild(pPrice);

      const tdDecorationFactor = document.createElement('td');
      const pDecorationFactor = document.createElement('p');
      pDecorationFactor.textContent = el.decFactor;
      tdDecorationFactor.appendChild(pDecorationFactor);

      const tdInput = document.createElement('td');
      const input = document.createElement('input');
      input.setAttribute('type', 'checkbox');
      tdInput.appendChild(input);

      tr.appendChild(tdImage);
      tr.appendChild(tdName);
      tr.appendChild(tdPrice);
      tr.appendChild(tdDecorationFactor);
      tr.appendChild(tdInput);

      body.appendChild(tr);
    }

  })

  buttons[1].addEventListener('click', (buy) => {
    let markedProduct = Array.from(body.querySelectorAll('input[type=checkbox]:checked'));
    let arrColumns = markedProduct.map(input => input.parentNode.parentNode);

    const result = {
      bought: [],
      totalPrice: 0,
      decFactorSum: 0
    }

    for (let row of arrColumns) {
      let td = row.children;

      let name = td[1].children[0].textContent;
      result.bought.push(name);

      let price = Number(td[2].children[0].textContent);
      result.totalPrice += price;

      let decFactor = Number(td[3].children[0].textContent);
      result.decFactorSum += decFactor;

    }
    textareas[1].value = `Bought furniture: ${result.bought.join(', ')}\nTotal price: ${result.totalPrice.toFixed(2)}\nAverage decoration factor: ${(result.decFactorSum / arrColumns.length)}`;
  })
}