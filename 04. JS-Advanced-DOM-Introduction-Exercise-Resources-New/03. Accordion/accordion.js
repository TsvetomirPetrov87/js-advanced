function toggle() {
    const changeButton = document.getElementsByClassName('button')[0];
    const hideInfo = document.getElementById('extra');

    hideInfo.style.display = hideInfo.style.display !== 'block' ? 'block' : 'none';
    changeButton.textContent = changeButton.textContent === 'More' ? 'Less' : 'More';
    
}