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
    if (typeInput[0].checked || typeInput[1].checked) {
        typeInput[1].parentElement.nextElementSibling.classList.remove('show');
    } else {
        typeInput[1].parentElement.nextElementSibling.classList.add('show');
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
                output[i] += textInputs[i].value + '\n';
            } else if (i === 3) {
                output[i] += radioResult + '\n';
            } else if (i < q.length - 1) {
                output[i] += textInputs[i - 1].value + '\n';
            } else {
                output[i] += document.querySelector('.suggestion input').value;
            }
        }
        alert(output.join(''), typeInput[0].checked, typeInput[1].checked);
    }
});