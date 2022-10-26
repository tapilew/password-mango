"use strict";

const charset = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  special: "!@#$%^&*",
};

const charGroups = [];

for (const prop in charset) {
  charGroups.push(prop);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomStr(len, chars) {
  let result = "";
  for (let i = 0; i < len; i++) {
    const index = getRandomInt(0, chars.length);
    result += chars[index];
  }
  return result;
}

function rearrangeStrRandomly(str) {
  let word = str;
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const index = getRandomInt(0, word.length);
    result += word.substr(index, 1);
    word = word.substr(0, index) + word.substr(index + 1);
  }
  return result;
}

function generatePassword(
  len = 16,
  minNum = 4,
  minSpecial = 4,
  groups = charGroups
) {
  let pw = "";
  let allowedChars = "";
  for (let i = 0; i < groups.length; i++) {
    allowedChars += charset[groups[i]];
  }
  pw += getRandomStr(minNum, charset.numbers);
  pw += getRandomStr(minSpecial, charset.special);
  pw += getRandomStr(len - pw.length, allowedChars);
  return rearrangeStrRandomly(pw);
}
