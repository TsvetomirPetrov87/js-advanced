function lockedProfile() {
   document.getElementById('container').addEventListener('click', (ev) => {
       if(ev.target.tagName === 'BUTTON') {
           const profile = ev.target.parentNode;
           let radioSelector = profile.querySelector('input[type=radio]:checked');
            let isLocked = radioSelector.value === 'lock';

            if(isLocked) {
                return;
            }

            let currentDiv = profile.querySelector('div');
            let isVisible = currentDiv.style.display === 'block';
            currentDiv.style.display = isVisible ? 'none' : 'block';

            ev.target.textContent = isVisible ? 'Show more' : 'Hide it';
       }
   })
}