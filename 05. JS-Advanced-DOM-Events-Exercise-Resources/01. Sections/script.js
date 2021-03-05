function create(words) {
   const oputput = document.getElementById('content');

   for (let i = 0; i < words.length; i++) {
      let divElement = document.createElement('div');
      let paragraph = document.createElement('p');
      paragraph.textContent = words[i];
      paragraph.style.display = 'none';
      divElement.appendChild(paragraph);

      oputput.appendChild(divElement);

   }

   oputput.addEventListener('click', function(ev) {
      if (ev.target.tagName === 'DIV') {
         const p = ev.target.children[0];
         const isVisible = p.style.display === 'block';
         p.style.display = isVisible ? 'none' : 'block';
      }
   });

}
