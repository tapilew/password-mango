"use strict";

const charset = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  specialChar: "!@#$%^&*",
};

let allowedChars = "";

for (const prop in charset) {
  allowedChars += charset[prop];
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomStr(chars, len) {
  let result = "";
  for (let i = 0; i < len; i++) {
    const index = getRandomInt(0, chars.length);
    result += chars[index];
  }
  return result;
}

function generatePassword() {}
