const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const clickBtn = document.getElementById('btn');
const colorEl = document.querySelector('.color');

clickBtn.addEventListener('click', () => {
  let hexColor = '#';

  for (let i = 0; i < hex.length; i++) {
    const randomNumber = getRandomNumber();
    if (hexColor.length === 7) {
      colorEl.textContent = hexColor;
      document.body.style.backgroundColor = hexColor;
      break;
    }

    hexColor += hex[randomNumber];
  }
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
