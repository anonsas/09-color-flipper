const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

const clickBtn = document.getElementById('btn');
const colorEl = document.querySelector('.color');

clickBtn.addEventListener('click', () => {
  const randomNumber = getRandomNumber();
  colorEl.textContent = colors[randomNumber];
  document.body.style.backgroundColor = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
