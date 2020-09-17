const gamesNumber = 5;
const streamsNumber = 20;
let offsetNumber = 0;
const tabs = document.querySelector('.games')
const title = document.querySelector('.streams h2');
const api = 'https://api.twitch.tv/kraken/';
let gameName = '';

async function loadSwitchAPI(api, cb) {
  try {
    let response = await fetch(api, {
      headers: new Headers({
        'Client-ID': 't9k09zo1olpw20idhyf0xjnvobxx4r',
        'Accept': 'application/vnd.twitchtv.v5+json'
      })
    });
    if (response.status >= 200 && response.status < 400) {
      let json = await response.json();
      cb(json);
    } else {
      alert(`請重新整理：status ${response.status}`);
    }
  } catch (e) {
    alert(`請重新整理：${e}`);
  }
}

function loadStreams(gameName, streamsNumber, offsetNumber) {
  loadSwitchAPI(`${api}streams/?game=${encodeURIComponent(gameName)}&limit=${streamsNumber}&offset=${offsetNumber}`, json => {
    let streams = document.querySelector('.streams .container');
    for (let stream of json.streams) {
      streams.innerHTML += `
      <a href="${stream.channel.url}" class="stream">
        <img src="${stream.preview.medium}" alt="live stream">
        <h3>${stream.channel.status}</h3>
        <h4>${stream.channel.name}</h4>
      </a>`
    }
    if (offsetNumber === 0) {
      streams.innerHTML += `<button onclick="loadMore()">Watch More</button>`;
    } else {
      let button = streams.querySelector('button');
      streams.removeChild(button);
      if (offsetNumber < 900 && json.streams.length !== 0) {
        streams.appendChild(button);
      }
    }
  });
}

loadSwitchAPI(`${api}games/top?limit=${gamesNumber}`, json => {
  let gameNames = json.top.map(obj => obj.game.name)
  for (let name of gameNames) {
    tabs.innerHTML += `<button onclick="tabbing(event)">${name}</button>`;
  }
  let defaultButton = tabs.querySelector('button');
  defaultButton.classList.add('active');
  gameName = defaultButton.innerText;
  title.innerText = gameName;
  loadStreams(gameName, streamsNumber, offsetNumber);
});

/* functions */
function tabbing(e) {
  document.querySelectorAll('.games button').forEach(btn => btn.classList.remove('active'));
  e.target.classList.add('active');
  document.querySelector('.streams .container').innerHTML = '';
  gameName = e.target.innerText;
  title.innerText = gameName;
  offsetNumber = 0;
  loadStreams(gameName, streamsNumber, offsetNumber);
}

function loadMore() {
  offsetNumber += 20;
  loadStreams(gameName, streamsNumber, offsetNumber);
}
