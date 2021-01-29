module.exports = ({
  name: "addemoji",
  aliases: ['add-emoji'],
  code: `
  $addEmoji[$messageAttachment;$message;yes]
  $onlyPerms[admin;<:dennied:804398417132126238> Ops! comando admin]`
})