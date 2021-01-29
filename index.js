const dbd = require("dbd.js")
const fetch = require('node-fetch')

const bot = new dbd.Bot({
token: process.env.TOKEN , 
prefix: ['!']
})

bot.status({
  text: "Sword Art Online",
  type: "PLAYING",
  status: "dnd",
  time: 12
})
bot.status({
  text: "Prefix: !",
  type: "PLAYING",
  status: "dnd",
  time: 12
})


bot.onMessage({
respondToBots: false
})



const fs = require('fs')

const folders = fs.readdirSync("./commands/")

for (const files of folders) {
const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))

for (const commands of folder) {
const command = require(`./commands/${files}/${commands}`) 
bot.command({
name: command.name,
aliases: command.aliases,
code: command.code ,
nonPrefixed: command.nonPrefixed
})
} 
}

///awaited

for (const files of folders) {
const folder = fs.readdirSync(`./awaiteds/`).filter(file => file.endsWith(".js"))

for (const commands of folder) {
const command = require(`./awaiteds/${commands}`) 
bot.awaitedCommand({
name: command.name,
code: command.code
})
} 
}

bot.variables({
  xp: "0",
  level: "1",
  nome: "Unnamed",
  req: "100",
  title: "",
  altura: "0",
  peso: "0",
  imagem: "",
  idade: "0",
  pagina: "0"
})


const express = require("express");
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('Hey am online :)'))

app.listen(port, () =>
console.log('Your app is listening at https://localhost:${port}'))
console.log('beep beep')