module.exports = ({
  	name: "aprovado",
	code: `
	
	$editMessage[$referenceMessageID;{color:GREEN}{description:$splitText[1]
	
	**revisado por:** <@$authorID>}{footer:status - aprovado}]
	$clearReactions[$channelID;$referenceMessageID;all]
$textSplit[$getEmbed[$channelID;$referenceMessageID;description];%%%%%%%]
$onlyPerms[admin;]
$deletecommand
$onlyForChannels[804422159971778601;]
`,
  nonPrefixed: true
})

