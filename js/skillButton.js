const langText = document.getElementById('lang-text');
const toolText = document.getElementById('tool-text');
const auxText = document.getElementById('aux-skills');
const exText = document.getElementById('code-examples');
const langBtn = document.getElementById('lang');
const toolBtn = document.getElementById('tools');
const auxBtn = document.getElementById('soft');
const exBtn = document.getElementById('examples');

function showLang() {
  exText.style.display = `none`;
  auxText.style.display = `none`;
  toolText.style.display = `none`;
  langText.style.display = `flex`;
  langText.style.flexDirection = `column`;
  langBtn.style.backgroundColor = `#23232A`;
  langBtn.style.color = `#fff`;
  toolBtn.style.backgroundColor = `#fff`;
  toolBtn.style.color = `#23232A`;
  auxBtn.style.backgroundColor = `#fff`;
  auxBtn.style.color = `#23232A`;
  exBtn.style.backgroundColor = `#fff`;
  exBtn.style.color = `#23232A`;
}

function showTools() {
  exText.style.display = `none`;
  auxText.style.display = `none`;
  toolText.style.display = `flex`;
  langText.style.display = `none`;
  toolText.style.flexDirection = `column`;
  toolBtn.style.backgroundColor = `#23232A`;
  toolBtn.style.color = `#fff`;
  langBtn.style.backgroundColor = `#fff`;
  langBtn.style.color = `#23232A`;
  auxBtn.style.backgroundColor = `#fff`;
  auxBtn.style.color = `#23232A`;
  exBtn.style.backgroundColor = `#fff`;
  exBtn.style.color = `#23232A`;
}

function showAux() {
  exText.style.display = `none`;
  auxText.style.display = `flex`;
  toolText.style.display = `none`;
  langText.style.display = `none`;
  auxText.style.flexDirection = `column`;
  auxBtn.style.backgroundColor = `#23232A`;
  auxBtn.style.color = `#fff`;
  langBtn.style.backgroundColor = `#fff`;
  langBtn.style.color = `#23232A`;
  toolBtn.style.backgroundColor = `#fff`;
  toolBtn.style.color = `#23232A`;
  exBtn.style.backgroundColor = `#fff`;
  exBtn.style.color = `#23232A`;
}

function showEx() {
  exText.style.display = `flex`;
  auxText.style.display = `none`;
  toolText.style.display = `none`;
  langText.style.display = `none`;
  exText.style.flexDirection = `column`;
  exBtn.style.backgroundColor = `#23232A`;
  exBtn.style.color = `#fff`;
  langBtn.style.backgroundColor = `#fff`;
  langBtn.style.color = `#23232A`;
  toolBtn.style.backgroundColor = `#fff`;
  toolBtn.style.color = `#23232A`;
  auxBtn.style.backgroundColor = `#fff`;
  auxBtn.style.color = `#23232A`;
}

langBtn.addEventListener('click', showLang);
toolBtn.addEventListener('click', showTools);
auxBtn.addEventListener('click', showAux);
exBtn.addEventListener('click', showEx);
