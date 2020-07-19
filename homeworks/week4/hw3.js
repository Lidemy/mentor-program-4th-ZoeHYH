const request = require('request');

const country = process.argv[2];
request(`https://restcountries.eu/rest/v2/name/${country}`, (error, response, body) => {
  const data = JSON.parse(body);
  if (data.status === 404) console.log('找不到國家資訊');
  for (let i = 0; i < data.length; i += 1) {
    console.log('============');
    console.log(`國家：${data[i].name}`);
    console.log(`首都：${data[i].capital}`);
    console.log(`貨幣：${data[i].code}`);
    console.log(`國碼：${data[i].callingCodes}`);
  }
});
