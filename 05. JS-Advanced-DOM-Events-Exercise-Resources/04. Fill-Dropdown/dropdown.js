function addItem() {
    const textInput = document.getElementById('newItemText');
    const valueInput = document.getElementById('newItemValue');
    const button = document.querySelector('input[type=button]');
    const appendOption = document.getElementById('menu');

    let newOption = document.createElement('option');
    newOption.value = valueInput.value;
    newOption.textContent = textInput.value;
    appendOption.appendChild(newOption);
    textInput.value = '';
    valueInput.value = '';
}