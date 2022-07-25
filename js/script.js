const X_IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/x.png';
const O_IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/circle.png';

function onClick(event) {
  // Element that was clicked
  const element = event.target;
  // Create an <img> tag with the X img src
  const image = document.createElement('img');
  image.src = X_IMAGE_URL;
  // Append that <img> tag to the element
  element.appendChild(image);
}

const gridItems = document.querySelector('#grid div');
for (const item of gridItems) {
  item.addEventListener('click', onClick);
}