module.exports = ({
  	name: "existe",
	code: `
	
	$editMessage[$referenceMessageID;{color:YELLOW}{description:$splitText[1]
	
	**revisado por:** <@$authorID>}{footer:status - já existe}]
	$clearReactions[$channelID;$referenceMessageID;all]
$textSplit[$getEmbed[$channelID;$referenceMessageID;description];%%%%%%%]
$onlyPerms[admin;]

$deletecommand
$onlyForChannels[804422159971778601;]
`,
  nonPrefixed: true
})