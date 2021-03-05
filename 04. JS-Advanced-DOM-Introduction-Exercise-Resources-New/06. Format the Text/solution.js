function solve() {
    const input = document.getElementById('input').value;
    let printText = document.getElementById('output');

    let inputArray = input.split('.').filter(e => e !== '');
    let arrOfParagraphs = [];

    while (inputArray.length > 0) {
            let currentParagraph = inputArray.slice(0, 3).join('.') + '.';
            arrOfParagraphs.push(currentParagraph);
            inputArray.splice(0, 3);
      
    }

    let finalOutput = arrOfParagraphs.map(p => `<p>${p}</p>`);

    printText.innerHTML = finalOutput;
}