const api = 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery';
const errMsg = '系統不穩定，請再試一次';
const prize = {
    'FIRST': ['first', '恭喜你中頭獎了！日本東京來回雙人遊！'],
    'SECOND': ['second', '二獎！90 吋電視一台！'],
    'THIRD': ['third', '恭喜你抽中三獎：知名 YouTuber 簽名握手會入場券一張，bang！'],
    'NONE': ['none', '銘謝惠顧'],
}
const section = document.querySelector('.bg');
let prize_class, prize_h2;

function getPrize(cb) {
    const request = new XMLHttpRequest();
    request.open('GET', api, true);
    request.onload = function() {
        if (request.status >= 200 && request.status < 400 && request.responseText.indexOf('prize') !== -1) {
            let data;
            try {
                data = JSON.parse(request.responseText);
            }catch(e) {
                cb('err');
                return;
            }
            if (!data.prize) {
                cb('err');
                return;
            }
            cb(data);
        } else {
            cb('err');
        }
    }
    request.onerror = function() {
        cb('err');
    }
    request.send()
}

document.querySelector('.btn_important').addEventListener('click', () => {
    if (section.classList.contains('game')) {
        getPrize(result => {
            if (result === 'err') {
                alert(errMsg);
            } else {
                [prize_class, prize_h2] = prize[result.prize];
                section.querySelector('h2 + ul').classList.add('dn');
                section.classList.remove('game');
                section.classList.add(prize_class);
                section.querySelector('h2').innerText = prize_h2;
            }
        });
    } else {
        section.classList.remove(prize_class);
        section.classList.add('game');
        section.querySelector('h2 + ul').classList.remove('dn');
        section.querySelector('h2').innerText = '2020 夏日輕盈特賞！ 抽獎活動辦法';
    } 
})

