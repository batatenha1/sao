let img = `$replaceText[$userAvatar[$findMember[$message]];webp;png]`;
let userData = {
 xp: `$getUserVar[xp;$mentioned[1;yes]]`,
 requiredXP: `$getUserVar[req;$mentioned[1;yes]]`,
 level: `$getUserVar[level;$mentioned[1;yes]]`,
 status: `$status[$mentioned[1;yes]]`,
 name: `$getGlobalUserVar[nome;$mentioned[1;yes]]`,
 discriminator: `0001`,
 rank: `$getLeaderboardInfo[xp;$mentioned[1;yes];globaluser;top]`,
 title: `$getGlobalUserVar[title]`
};

module.exports = ({
 name: "rank",
 aliases: ['level', 'lvl', 'rnk'],
 code: `
$djsEval[const Discord = require('discord.js');
const canvacord = require("canvacord");
 
const rank = new canvacord.Rank().setAvatar("${img}").setLevel(${userData.level}, "Level", true).setCurrentXP(${userData.xp}).setRequiredXP(${userData.requiredXP}).setStatus(\`${userData.status}\`).setProgressBar("#34ebe5", "COLOR").setUsername(\`${userData.name}\`).setDiscriminator(\`${userData.discriminator}\`).setRank(${userData.rank}, "Rank", true).renderEmojis(true);

rank.build()
 .then(data => {
 const attachment = new Discord.MessageAttachment(data, "SAO.png");
 d.channel.send(attachment);
 });
]
$onlyIf[$isBot[$mentioned[1;yes]]==false;{description: Bots nao tem xp!}{color:RED}{author: Invalid user.:$userAvatar[$mentioned[1;yes]]}]
$botTyping`
});
