const request = new XMLHttpRequest()
const prize = {
    'FIRST': ['first', '恭喜你中頭獎了！日本東京來回雙人遊！'],
    'SECOND': ['second', '二獎！90 吋電視一台！'],
    'THIRD': ['third', '恭喜你抽中三獎：知名 YouTuber 簽名握手會入場券一張，bang！'],
    'NONE': ['none', '銘謝惠顧'],
}
let section = document.querySelector('.bg')
let [prize_class, prize_h2] = [];

request.onload = function() {
    console.log(request.responseText, request.status)
    if (request.status >= 200 && request.status < 400 && request.responseText.indexOf('prize') !== -1) {
        let result = JSON.parse(request.responseText)['prize'];
        [prize_class, prize_h2] = prize[result];
        section.querySelector('h2 + ul').classList.add('dn');
        section.classList.remove('game');
        section.classList.add(prize_class);
        section.querySelector('h2').innerText = prize_h2;
    } else {
        alert('系統不穩定，請再試一次');
    }
}
request.onerror = function() {
    alert('系統不穩定，請再試一次');
}

document.querySelector('.btn_important').addEventListener('click', () => {
    if (section.classList.contains('game')) {
        request.open('GET', 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery', true)
        request.send()
    } else {
        section.classList.remove(prize_class);
        section.classList.add('game');
        section.querySelector('h2 + ul').classList.remove('dn');
        section.querySelector('h2').innerText = '2020 夏日輕盈特賞！ 抽獎活動辦法';
    }
    
})


