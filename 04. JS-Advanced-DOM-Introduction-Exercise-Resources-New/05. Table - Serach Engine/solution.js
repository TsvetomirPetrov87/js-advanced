function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let inputText = document.getElementById('searchField').value;
      let rows = document.querySelectorAll('tbody tr');

      for (let row of rows) {
         if(row.textContent.includes(inputText)) {
            row.setAttribute('class', 'select');
         } else {
            row.removeAttribute('class');

         }
      }
   }
}