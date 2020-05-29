import shortid from "shortid";
import faker from "faker";

export const colors = [
  "#F6F8F9",
  "#E8384F",
  "#FD612C",
  "#FD9A00",
  "#EEC300",
  "#A4CF30",
  "#62D26F",
  "#37C5AB",
  "#20AAEA",
  "#4186E0",
  "#7A6FF0",
  "#AA62E3",
  "#E362E3",
  "#EA4E9D",
  "#FC91AD",
  "#8DA3A6",
];

export const generateRandomColorIndex = () => {
  return Math.floor(Math.random() * colors.length);
};

export const randomFirstName = () => faker.name.firstName();
export const randomLastName = () => faker.name.lastName();
export const randomAvatar = () => faker.image.avatar();
export const randomWords = () => faker.random.words();
export const generateId = () => shortid.generate();
export const randomParagraph = () => faker.lorem.paragraph();
export const randomDate = () => faker.date.recent();
export const randomUserIdArray = () => faker.random.arrayElement();
export const randomNumber = () => faker.random.number();
export const randomSentence = () => faker.lorem.sentence();

//https://stackoverflow.com/a/13532993
export function shadeColor(color, percent) {
  var R = parseInt(color.substring(1, 3), 16);
  var G = parseInt(color.substring(3, 5), 16);
  var B = parseInt(color.substring(5, 7), 16);

  R = parseInt((R * (100 + percent)) / 100);
  G = parseInt((G * (100 + percent)) / 100);
  B = parseInt((B * (100 + percent)) / 100);

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  var RR = R.toString(16).length == 1 ? "0" + R.toString(16) : R.toString(16);
  var GG = G.toString(16).length == 1 ? "0" + G.toString(16) : G.toString(16);
  var BB = B.toString(16).length == 1 ? "0" + B.toString(16) : B.toString(16);

  return "#" + RR + GG + BB;
}
