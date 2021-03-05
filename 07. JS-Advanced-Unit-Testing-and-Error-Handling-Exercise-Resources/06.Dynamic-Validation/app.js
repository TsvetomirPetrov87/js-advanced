function validate() {
    const input = document.getElementById('email');
    let pattern = /^[a-z]+@[a-z]+.[a-z]+$/gm
    input.addEventListener('change', (ev) => {
        if(!pattern.test(input.value)) {
            input.classList.add('error');
        } else {
            input.removeAttribute('class');
        }

    })
}