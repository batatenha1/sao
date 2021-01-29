module.exports = ({
  name: "menu",
  code: `
  $reactionCollector[$splitText[1];$authorID;5m;🔄,1️⃣,2️⃣,3️⃣;home,menu1,friends,locate;yes]
  $setUserVar[pagina;0]
  $textSplit[$sendMessage[https://cdn.discordapp.com/attachments/804490366664572930/804543271329071125/menu.png;yes]; ]`
})