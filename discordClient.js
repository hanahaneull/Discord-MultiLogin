const Discord = require("discord.js");
const fs = require("fs-extra");

const tokens = fs
  .readFileSync("./token.txt", "utf-8")
  .replace(/\r/gi, "")
  .split("\n");

tokens.forEach((token, i) => {
  const client = new Discord.Client();
  client.login(token);
  client.on('ready', () => {
  console.log(i);
  });
})
