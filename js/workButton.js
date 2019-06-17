const present = document.getElementById('present');
const previous = document.getElementById('previous');
const first = document.getElementById('first');
const sk = document.getElementById('sidekick');
const ssi = document.getElementById('ssi');
const free = document.getElementById('freelance');

function showPresent() {
  previous.style.display = `none`;
  first.style.display = `none`;
  present.style.display = `flex`;
  present.style.flexDirection = `column`;
  sk.style.backgroundColor = `#23232A`;
  sk.style.color = `#fff`;
  ssi.style.backgroundColor = `#fff`;
  ssi.style.color = `#23232A`;
  free.style.backgroundColor = `#fff`;
  free.style.color = `#23232A`;
}

function showPrevious() {
  present.style.display = `none`;
  first.style.display = `none`;
  previous.style.display = `flex`;
  previous.style.flexDirection = `column`;
  ssi.style.backgroundColor = `#23232A`;
  ssi.style.color = `#fff`;
  sk.style.backgroundColor = `#fff`;
  sk.style.color = `#23232A`;
  free.style.backgroundColor = `#fff`;
  free.style.color = `#23232A`;
}

function showFirst() {
  previous.style.display = `none`;
  present.style.display = `none`;
  first.style.display = `flex`;
  first.style.flexDirection = `column`;
  free.style.backgroundColor = `#23232A`;
  free.style.color = `#fff`;
  ssi.style.backgroundColor = `#fff`;
  ssi.style.color = `#23232A`;
  sk.style.backgroundColor = `#fff`;
  sk.style.color = `#23232A`;
}

sk.addEventListener('click', showPresent);
ssi.addEventListener('click', showPrevious);
free.addEventListener('click', showFirst);
