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

function generatePassword(len, groups = charGroups) {
  let allowedChars = "";
  for (let i = 0; i < groups.length; i++) {
    allowedChars += charset[groups[i]];
  }
  return getRandomStr(len, allowedChars);
}
