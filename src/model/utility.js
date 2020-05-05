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
export const randomAvatar =  () => faker.image.avatar();
export const randomWords = () => faker.random.words();
export const generateId =  () => shortid.generate();
export const randomParagraph = () => faker.lorem.paragraph();
export const randomDate = ()=> faker.date.recent();
export const randomUserIdArray=()=>faker.random.arrayElement();
export const randomNumber = ()=>faker.random.number();