const gamesNumber = 5;
const streamsNumber = 20;
let offsetNumber = 0;
const tabs = document.querySelector('.games')
const title = document.querySelector('.streams h2');

function loadSwitchAPI(request, callback) {
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
function loadPage() {
  const request = new XMLHttpRequest()
  request.open('GET', `https://api.twitch.tv/kraken/games/top?limit=${gamesNumber}`, true)
  loadSwitchAPI(request, makePage);
}

function makePage(json) {
  let gameNames = json.top.map(a => a.game.name)
  for (let i = 0; i < gamesNumber; i += 1) {
    tabs.innerHTML += `<button onclick="tabbing(event)">${gameNames[i]}</button>`;
  }
  let firstButton = tabs.querySelector('button');
  firstButton.classList.add('active');
  title.innerText = firstButton.innerText;
  loadStreams(firstButton.innerText);
}

/* make streams */
function loadStreams(gameName) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://api.twitch.tv/kraken/streams/?game=${gameName}&limit=${streamsNumber}&offset=${offsetNumber}`, true);
  loadSwitchAPI(request, makeStreams);
}

function makeStreams(json) {
  console.log(json.streams.length === 0)
  let streams = document.querySelector('.streams .container');
  for (let i = 0; i < json.streams.length; i += 1) {
    streams.innerHTML += `
    <a href="${json.streams[i].channel.url}" class="stream">
      <img src="${json.streams[i].preview.medium}" alt="live stream">
      <h3>${json.streams[i].channel.status}</h3>
      <h4>${json.streams[i].channel.name}</h4>
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

loadPage();

/* tab functions */
function tabbing(event) {
  document.querySelectorAll('.games button').forEach(a => a.classList.remove('active'));
  event.currentTarget.classList.add('active');
  title.innerText = event.currentTarget.innerText;
  document.querySelector('.streams .container').innerHTML = '';
  offsetNumber = 0;
  loadStreams(event.currentTarget.innerText);
}

function loadMore() {
  offsetNumber += 20;
  loadStreams(title.innerText);
}
