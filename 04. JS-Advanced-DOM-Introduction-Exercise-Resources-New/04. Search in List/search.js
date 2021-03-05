function search() {
   const citiesList = document.querySelectorAll('#towns li');
   let input = document.getElementById('searchText').value;
   let result = document.getElementById('result');

   let totalMatchCities = 0;

   for (let i = 0; i < citiesList.length; i++) {
      if(citiesList[i].textContent.includes(input)) {
         citiesList[i].style.fontWeight = 'bold';
         citiesList[i].style.textDecoration = 'underline';
         totalMatchCities++;
      } 
   }

   result.textContent = `${totalMatchCities} matches found`;
}
