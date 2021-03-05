function validate() {
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const companyInfo = document.getElementById('companyInfo');
    const companyNumber = document.getElementById('companyNumber');

    let isChecked = false;
    const checkbox = document.getElementById('company').addEventListener('change', (ev) => {
        if (ev.target.checked) {
            isChecked = true;
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        }
    });

    const submitBtn = document.querySelector('button').addEventListener('click', (ev) => {
        ev.preventDefault();
        let formIsValid = true;

        if (!username.value.match(/^[a-zA-Z0-9]{3,20}$/)) {
            formIsValid = false;
            username.style.borderColor = 'red';
        } else {
            username.style.border = 'none';
        }

        if (!email.value.match(/^.*@.*\..*$/)) {
            formIsValid = false;
            email.style.borderColor = 'red';
        } else {
            email.style.border = 'none';
        }

        if (!password.value.match(/^[a-zA-Z0-9_]{5,15}$/) && !confirmPassword.value.match(/^[a-zA-Z0-9_]{5,15}$/) || password.value !== confirmPassword.value) {
            formIsValid = false;
            password.style.borderColor = 'red';
            confirmPassword.style.borderColor = 'red';
        } else {
            password.style.border = 'none';
            confirmPassword.style.border = 'none';
        }

        if(isChecked) {
            if(!companyNumber.value.match(/^[1-9][0-9]{3}$/)) {
                formIsValid = false;
                companyNumber.style.borderColor = 'red';
            } else {
                companyNumber.style.border = 'none';
            }
        }

        if(formIsValid) {
            const valid = document.getElementById('valid');
            valid.style.display = 'block';
        } else {
            valid.style.display = 'none';
        }

    });

}
