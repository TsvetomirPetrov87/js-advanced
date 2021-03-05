function encodeAndDecodeMessages() {
    const textareas = document.querySelectorAll('textarea');
    const buttons = document.querySelectorAll('button');

    const obj = {
        encode: {
            textMessage: textareas[0],
            btn: buttons[0],
            func: (char) => String.fromCharCode(char.charCodeAt(0) + 1)
        },
        decode: {
            textMessage: textareas[1],
            btn: buttons[1],
            func: (char) => String.fromCharCode(char.charCodeAt(0) - 1)
        }
    }

    document.getElementById('main').addEventListener('click', (ev) => {
        if(ev.target.tagName === 'BUTTON') {
            let typeOfButton = ev.target.textContent.toLowerCase().includes('encode') ? 'encode' : 'decode';

            const message = obj[typeOfButton].textMessage.value.split('').map(obj[typeOfButton].func).join('');

            obj.encode.textMessage.value = '';
            obj.decode.textMessage.value = message;
            
        }
    })
}