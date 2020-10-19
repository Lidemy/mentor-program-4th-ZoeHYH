/* eslint-disable no-alert */
const api = 'http://restaurant_admin.zoehyh.tw/getPrize';
const errMsg = '請再試一次';
const lottery = {
  name: 'game',
  description: '2020 夏日輕盈特賞！ 抽獎活動辦法',
};
const none = {
  name: 'none',
  description: '銘謝惠顧',
};
const section = document.querySelector('.bg');
const lotteryH = document.querySelector('.game_heading');
const lotteryRule = document.querySelector('.game_rule');

async function getPrize() {
  const response = await fetch(api);
  if (!response.ok) {
    throw new Error(`${response.status}：${response.statusText}`);
  }
  const result = await response.json();
  if (result.error) {
    throw new Error(result.error);
  }
  return result;
}

document.querySelector('.btn_important').addEventListener('click', async () => {
  if (section.classList.contains(lottery.name)) {
    const prize = await getPrize().catch((err) => {
      console.log(err.message);
      return alert(errMsg);
    });
    if (prize.name === 'none') {
      section.classList.add('none');
      lotteryH.innerText = none.description;
    } else {
      section.style.background = `url(${prize.image}) center/cover no-repeat`;
      lotteryH.innerText = prize.description;
    }
  } else {
    section.classList.remove(none.name);
    lotteryH.innerText = lottery.description;
    section.style.background = '';
  }
  section.classList.toggle(lottery.name);
  lotteryRule.classList.toggle('dn');
});
