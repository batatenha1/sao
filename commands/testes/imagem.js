let img = `$replaceText[$userAvatar[$findMember[$message]];webp;png]`;
let member = {
 xp: `$getUserVar[xp;$mentioned[1;yes]]`,
 requiredXP: `$getUserVar[req;$mentioned[1;yes]]`,
 level: `$getUserVar[level;$mentioned[1;yes]]`,
 status: `$status[$mentioned[1;yes]]`,
 displayName: `$username[$mentioned[1;yes]]`,
 discriminator: `0001`,
 rank: `$getLeaderboardInfo[xp;$mentioned[1;yes];globaluser;top]`,
 title: `$getGlobalUserVar[title]`
};

module.exports = ({
 name: "test",
 code: `
$djsEval[const Discord = require('discord.js');

(async function() {
	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = Canvas.loadImage('https://discordjs.guide/assets/img/8CQvVRV.cced9193.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);



	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'image.png');

	d.channel.send(attachment);
})();]
$botTyping`
});
