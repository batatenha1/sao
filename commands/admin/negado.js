module.exports = ({
  	name: "negado",
	code: `
	
	$editMessage[$referenceMessageID;{color:RED}{description:$splitText[1]
	
	**revisado por:** <@$authorID>}{footer:status - negado}]
	$clearReactions[$channelID;$referenceMessageID;all]
$textSplit[$getEmbed[$channelID;$referenceMessageID;description];%%%%%%%]
$onlyPerms[admin;]
$deletecommand
$onlyForChannels[804422159971778601;]
`,
  nonPrefixed: true
})

