function solve() {

  let inputText = document.getElementById('text').value;
  let typeOfCase = document.getElementById('naming-convention').value;
  let result = '';

  let wordsInString = inputText.split(' ');
  let arr = [];

  for (let i = 0; i < wordsInString.length; i++) {
    arr.push(wordsInString[i].toLowerCase());
  }

  if (typeOfCase === 'Pascal Case') {
    for (let i = 0; i < arr.length; i++) {
      result += arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
  } else if (typeOfCase === 'Camel Case') {
    result = arr[0];
    for (let i = 1; i < arr.length; i++) {
      result += arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
  } else {
    result = 'Error!';
  }

  document.getElementById('result').textContent = result;
}

