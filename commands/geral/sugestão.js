module.exports = ({
  name: "suggest",
aliases: ['sugerir','sugestão','sugestao'],
code: `$channelSendMessage[804422159971778601;{author:$userTag[$authorID]:$authorAvatar} {color:BLACK} {description: $message 

\`use !suggest <sugestão>\` para sugerir algo}
{footer:status - espera (aprovado | negado | existe)}{reactions:👍,👎}]
$deletecommand`
})