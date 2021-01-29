module.exports = ({
  name: "link-start" , 
  code: `
  $deleteChannels[$splitText[1]]
  $wait[35m]
  $deleteIn[5s]
  $sendDM[$authorID;<@$authorID> **o canal com seu nome foi criado e você deve fazer seu resgitro nele. leia as mensagens que o bot colocou no canal para nao se perder.**
  **prossiga para o canal:** <#$splitText[1]>]
  $setUserVar[reg;1]
  $setChannelVar[reg;$authorID;$splitText[1]]
  $modifyChannelPerms[$splitText[1];+viewchannel;+sendmessages;/managemessages;$authorID]
  
 $channelSendMessage[$splitText[1];<@$authorID> **bem vindo! esse é o SEU canal de registro, apenas voce e o suporte conseguem digitar nesse canal. se precisar de ajuda, pode marcar qualquer suporte aqui.**
 **vamos estabelecer algumas regras para esse canal ok? certo**
 1 - \`voce nao deve falar neste chat a menos que seja para responder alguma pergunta do bot.\`
  *(entenda que toda mensagem enviada aqui será usada no bot como resposta)*
  
2 - \`esse canal vai se deletar automaticamente em 35 minutos, então por favor nao enrole em seu registro\`

3 - \`caso voce esteja insatisfeito com suas respostas, no final do registro surgirá a opção de ser refeito, então nao há necessidade de usar o comando "link-start" mais de uma vez\`

4 - \`nao responda a mesma pergunta mais de uma vez. apenas responda e espere a proxima pergunta\`

assim que estiver pronto para iniciar o registro, diga **pronto** (em minusculo)]
  $textSplit[$createChannel[$userTag;text;yes;804417854090903592]; ]
  $botTyping
  $suppressErrors[]
  $deletecommand
  $onlyForChannels[804445523804160000;esse comando só pode ser executado no canal "criar personagem"]
`,
nonPrefixed: true
});