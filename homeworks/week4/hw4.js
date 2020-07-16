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
    const data = JSON.parse(body);
    data.top.map(a => console.log(`${a.viewers} ${a.game.name}`));
  }
});
