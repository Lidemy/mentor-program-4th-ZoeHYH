const gamesNumber = 5;
const streamsNumber = 20;
let offsetNumber = 0;
const tabs = document.querySelector('.games')
const title = document.querySelector('.streams h2');
const api = 'https://api.twitch.tv/kraken/';
let gameName = '';

function loadSwitchAPI(api, callback) {
  const request = new XMLHttpRequest();
  request.open('GET', api, true);
  request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
      callback(JSON.parse(request.responseText));
    } else {
      alert('請重新整理');
    }
  };
  request.onerror = () => alert('請重新整理');
  request.setRequestHeader('Client-ID', 't9k09zo1olpw20idhyf0xjnvobxx4r');
  request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
  request.send();
}

/* make page */

function makePage(json) {
  let gameNames = json.top.map(obj => obj.game.name)
  for (let i = 0; i < gamesNumber; i += 1) {
    tabs.innerHTML += `<button onclick="tabbing(event)">${gameNames[i]}</button>`;
  }
  let defaultButton = tabs.querySelector('button');
  defaultButton.classList.add('active');
  gameName = defaultButton.innerText;
  title.innerText = gameName;
  loadSwitchAPI(`${api}streams/?game=${encodeURIComponent(gameName)}&limit=${streamsNumber}&offset=${offsetNumber}${api}streams/?game=${encodeURIComponent(gameName)}&limit=${streamsNumber}&offset=${offsetNumber}`, makeStreams);
}

/* make streams */
function makeStreams(json) {
  let streams = document.querySelector('.streams .container');
  for (stream of json.streams) {
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
    if (offsetNumber < 900 && json.streams.length !== 0) streams.appendChild(button);
  }
}

loadSwitchAPI(`${api}games/top?limit=${gamesNumber}`, makePage);

/* functions */
function tabbing(e) {
  document.querySelectorAll('.games button').forEach(btn => btn.classList.remove('active'));
  e.target.classList.add('active');
  document.querySelector('.streams .container').innerHTML = '';
  gameName = e.target.innerText;
  title.innerText = gameName;
  offsetNumber = 0;
  loadSwitchAPI(`${api}streams/?game=${encodeURIComponent(gameName)}&limit=${streamsNumber}&offset=${offsetNumber}${api}streams/?game=${encodeURIComponent(gameName)}&limit=${streamsNumber}&offset=${offsetNumber}`, makeStreams);
}

function loadMore() {
  offsetNumber += 20;
  loadSwitchAPI(`${api}streams/?game=${encodeURIComponent(gameName)}&limit=${streamsNumber}&offset=${offsetNumber}${api}streams/?game=${encodeURIComponent(gameName)}&limit=${streamsNumber}&offset=${offsetNumber}`, makeStreams);
}
