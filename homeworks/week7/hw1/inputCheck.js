let form = document.querySelector('.signup');
form.addEventListener('submit', (e) => {
    let stopSubmit = false;
    let textInputs = form.querySelectorAll('.required input[type="text"]');
    textInputs.forEach(i => {
        if (i.value === '') {
            i.nextElementSibling.classList.add('show');
            stopSubmit = true;
        } else {
            i.nextElementSibling.classList.remove('show');
        }
    })
    let typeInput = form.querySelectorAll('.required input[name="type"]')
    let typeInputP = form.querySelector('label + p');
    if (typeInput[0].checked || typeInput[1].checked) {
        typeInputP.classList.remove('show');
    } else {
        typeInputP.classList.add('show');
        stopSubmit = true;
    }
    if (stopSubmit) {
        e.preventDefault();
    } else {
        let radioResult = typeInput[0].checked ? typeInput[0].parentElement.innerText : typeInput[1].parentElement.innerText;
        let output = [];
        let q = document.querySelectorAll('.signup h2')
        for (let i = 0; i < q.length; i += 1) {
            output[i] = q[i].innerText + ' ';
            if (i < 3) {
                output[i] += textInputs[i].value;
            } else if (i === 3) {
                output[i] += radioResult;
            } else if (i < q.length - 1) {
                output[i] += textInputs[i - 1].value;
            } else {
                output[i] += document.querySelector('.suggestion input').value;
            }
        }
        alert(output.join('\n'));
    }
});