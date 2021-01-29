module.exports = ({
name: "pronto",
  aliases: ['Pronto','**pronto**','PRONTO'],
code: `$setUserVar[reg;0]
$sendMessage[**certo. qual será o país?**
*(muralhas são locais, você viverá em um desses locais)*
**AVISO: o comando deve ser iniciado com \`>\`**
 exemplo: \`> china\`
**respostas possiveis:** \`qualquer país\`;no]
$botTyping
$onlyIf[$getUserVar[reg]==1;]
$onlyIf[$getChannelVar[reg]==$authorID;]

` ,
  nonPrefixed: true});