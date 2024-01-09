const recipes = [
  ["Green Tea", "https://en.wikipedia.org/wiki/Green_tea"],
  ["Oolong Tea", "https://en.wikipedia.org/wiki/Oolong"],
  ["Black Tea", "https://en.wikipedia.org/wiki/Black_tea"],
  ["Pu-erh Tea", "https://en.wikipedia.org/wiki/Pu%27er_tea"],
  ["Jasmine Tea", "https://en.wikipedia.org/wiki/Jasmine_tea"],
  ["Matcha Tea", "https://en.wikipedia.org/wiki/Matcha"],
  ["White Dragon Bush Tea", "https://avatar.fandom.com/wiki/White_dragon_bush"],
  ["Hojicha Tea", "https://en.wikipedia.org/wiki/H%C5%8Djicha"],
  ["Genmaicha Tea", "https://en.wikipedia.org/wiki/Genmaicha"],
  ["Gyokuro Tea", "https://en.wikipedia.org/wiki/Gyokuro"],
  ["Sencha Tea", "https://en.wikipedia.org/wiki/Sencha"],
  ["Ginseng Tea", "https://en.wikipedia.org/wiki/Ginseng_tea"],
];

export default function teaRand() {
  let x = Math.floor(Math.random() * 12);
  return recipes[x][1];
}
