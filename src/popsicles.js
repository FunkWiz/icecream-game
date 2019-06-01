const framesPerPopsicle = 13;
const path = require("path");

function getImages(num) {
  return Array(framesPerPopsicle)
    .fill()
    .map((_, idx) => {
      if (num === 0) {
        return require(`./static/images/giphy-${idx}.png`);
      }
      return require(`./static/images/giphy (${num})-${idx}.png`);
    });
}

export const orange = getImages(1);
export const red = getImages(2);
export const purple = getImages(3);
export const pink = getImages(4);
export const brown = getImages(5);
export const yellow = getImages(6);
export const green = getImages(7);
export const blue = getImages(0);

export const popsicles = [
  orange,
  red,
  purple,
  pink,
  brown,
  yellow,
  green,
  blue
];

export const getRandom = () =>
  popsicles[Math.floor(Math.random() * popsicles.length)];
