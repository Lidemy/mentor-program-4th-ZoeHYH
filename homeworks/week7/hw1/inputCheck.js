let form = document.querySelector('.signup');
form.addEventListener('submit', (e) => {
    let stopSubmit = false;
    let output = '必填選項：\n';
    const inputs = form.querySelectorAll('.required');
    for (input of inputs) {
        const text = input.querySelector('input[type=text]');
        const radios = input.querySelectorAll('input[type=radio]');
        let isInput = true;
        const title = input.querySelector('h2').innerText;
        const pAlert = input.querySelector('p.important');
        if (text) {
            const value = text.value;
            output += ('|' + title + ' ' + value + '\n');
            if (value === '') isInput = false;
        } else if (radios.length) {
            isInput = [...radios].some(radio => radio.checked);
            if (isInput) {
                output += ('|' + title + ' ' + input.querySelector('input[type=radio]:checked').parentElement.innerText + '\n');
            }
        } else {
            continue;
        }
        if (isInput) {
            pAlert.classList.remove('show');
        } else {
            pAlert.classList.add('show');
            stopSubmit = true;
        }
    }
    if (!stopSubmit) {
        const others = form.querySelectorAll('section:not(.required) input');
        output += '其他：\n';
        for (other of others) {
            const value = other.value;
            if (value !== '') {
                output += ('|' + other.querySelector('h2').innerText + ' ' + value + '\n');
            } else {
                output += '|無\n';
            }  
        }
        alert(output);
    } else {
        e.preventDefault();
    }
});