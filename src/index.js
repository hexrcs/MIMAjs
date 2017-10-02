// import libraries
const bin = require("bitfriendly").bitArray;
const op = require("bitfriendly").operate;

function empty24() {
  return new Array(24).fill(false);
}

function empty20() {
  return new Array(20).fill(false);
}

// constant register with value of 1 in 24-bit binary
let one = new Array(23).fill(false);
one.push(true);

// 24-bit registers
let [accu, regX, regY, regZ, regIns, regStr] =
  [empty24(), empty24(), empty24(), empty24(), empty24(), empty24()];

// 20-bit registers
let [adrIns, adrStr] =
  [empty20(), empty20()];

