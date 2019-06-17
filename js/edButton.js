const cl = document.getElementById('cl');
const uk = document.getElementById('uk');

function showUK() {
  cl.style.display = `none`;
  uk.style.display = `flex`;
  uk.style.flexDirection = `column`;
  uni.style.backgroundColor = `#23232A`;
  uni.style.color = `#fff`;
  code.style.backgroundColor = `#fff`;
  code.style.color = `#23232A`;
}

function showCode() {
  cl.style.display = `flex`;
  cl.style.flexDirection = `column`;
  uk.style.display = `none`;
  code.style.backgroundColor = `#23232A`;
  code.style.color = `#fff`;
  uni.style.backgroundColor = `#fff`;
  uni.style.color = `#23232A`;
}

const code = document.getElementById('showCode');
const uni = document.getElementById('showUK');
uni.addEventListener('click', showUK);
code.addEventListener('click', showCode);
