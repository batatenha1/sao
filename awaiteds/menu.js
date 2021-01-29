module.exports = ({
  name: "menu1",
  code: `
  
  $reactionCollector[$message[1];$authorID;5m;🔄,1️⃣,2️⃣,3️⃣;home,itens,skils,equipamento;yes]
  $editMessage[$message[1];https://cdn.discordapp.com/attachments/804490366664572930/804545281243742228/menu_.png]
  $setUserVar[pagina;1]
  $onlyIf[$getUserVar[pagina]==0;]`
})