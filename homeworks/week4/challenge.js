/* eslint-disable no-underscore-dangle */

const request = require('request');

const API_ENDPOINT = 'https://api.twitch.tv/kraken';
const str = encodeURIComponent(process.argv[2]);
const passport = {
  'Client-ID': 't9k09zo1olpw20idhyf0xjnvobxx4r',
  Accept: 'application/vnd.twitchtv.v5+json',
};
let gameName = '';
const streamURL = `${API_ENDPOINT}/streams/?game=${gameName}`;
const streamURLOffset = `${API_ENDPOINT}/streams/?game=${gameName}&limit=100&offset=100`;

request({
  url: `${API_ENDPOINT}/search/games?query=${str}`,
  headers: { ...passport },
}, (err, res, body) => {
  if (err) console.log('Fail!', err);
  else if (res.statusCode >= 200 && res.statusCode <= 300) {
    let data;
    try {
      data = JSON.parse(body);
    } catch (e) {
      console.log(e);
      return;
    }
    gameName = encodeURIComponent(data.games[0].name);
  }
});

function callback(err, res, body) {
  if (err) console.log('Fail!', err);
  else if (res.statusCode === 200) {
    const data = JSON.parse(body);
    data.streams.forEach(a => console.log(`${a.channel._id} ${a.channel.display_name}`));
  }
}

request({
  url: streamURL,
  headers: { ...passport },
}, callback);
request({
  url: streamURLOffset,
  headers: { ...passport },
}, callback);

/* eslint-enable */
