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
 name: "test2",
 code: `
$djsEval[const Canvas = require("discord-canvas"),
  Discord = require("discord.js");
 
const image = new Canvas.Goodbye()
  .setUsername("xixi52")
  .setDiscriminator("0001")
  .setMemberCount("140")
  .setGuildName("SAO")
  .setAvatar("${img}")
  .setColor("border", "#8015EA")
  .setColor("username-box", "#8015EA")
  .setColor("discriminator-box", "#8015EA")
  .setColor("message-box", "#8015EA")
  .setColor("title", "#8015EA")
  .setColor("avatar", "#8015EA")
  .setBackground("https://i.pinimg.com/originals/1e/16/c8/1e16c80d7c56260edfa7dd7ae856578f.jpg")
  .toAttachment();

(data => {
const attachment = new Discord.MessageAttachment(data, "image.png");
 
d.message.channel.send(attachment);
});]
$botTyping`
});
