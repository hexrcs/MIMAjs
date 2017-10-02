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

function ALU(signal = [false, false, false]) {
  signal = bin(signal); // unify format first
  if (signal.length !== 3) {
    throw new Error("Invalid ALU OpCode: " + op(signal).toString());
  }

  switch (signal.toString()) {
    case "000":
      break;
    case "001":
      regZ = op(regX).add(regY).result;
      break;
    case "010":
      regZ = op(regX).rcr().result;
      break;
    case "011":
      regZ = op(regX).and(regY).result;
      break;
    case "100":
      regZ = op(regX).or(regY).result;
      break;
    case "101":
      regZ = op(regX).xor(regY).result;
      break;
    case "110":
      regZ = op(regX).not().result;
      break;
    case "111":
      regZ = op(regX).eql(regY).result;
  }
}
