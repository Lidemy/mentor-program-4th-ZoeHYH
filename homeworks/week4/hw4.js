/* eslint-disable consistent-return */

const request = require('request');

request.get({
  url: 'https://api.twitch.tv/kraken/games/top',
  headers: {
    'Client-ID': 't9k09zo1olpw20idhyf0xjnvobxx4r',
    Accept: 'application/vnd.twitchtv.v5+json',
  },
}, (error, response, body) => {
  if (error) console.log('Fail!', error);
  else if (response.statusCode === 200) {
    let data;
    try {
      data = JSON.parse(body);
    } catch (err) {
      console.log(err);
      return;
    }
    data.top.forEach(a => console.log(`${a.viewers} ${a.game.name}`));
  }
});

/* eslint-enable */
