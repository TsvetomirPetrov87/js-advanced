function attachEventsListeners() {
    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');

    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', () => {
        let days = daysInput.value;
        hoursInput.value = days * 24;
        minutesInput.value = days * 24 * 60;
        secondsInput.value = days * 24 * 60 * 60;
    })

    hoursBtn.addEventListener('click', () => {
        let hours = hoursInput.value;
        daysInput.value = hours / 24;
        minutesInput.value = hours * 60;
        secondsInput.value = hours * 60 * 60;
    })

    minutesBtn.addEventListener('click', () => {
        let minutes = minutesInput.value;
        daysInput.value = minutes / 24 / 60;
        hoursInput.value = minutes / 60;
        secondsInput.value = minutes * 60;
    })

    secondsBtn.addEventListener('click', () => {
        let seconds = secondsInput.value;
        daysInput.value = seconds / 24 / 3600;
        hoursInput.value = seconds / 3600;
        minutesInput.value = seconds / 60;
    })
}