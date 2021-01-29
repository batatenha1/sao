module.exports = ({
  name: "setnome",
  code: `
  ✅ nome alterado para \`$message\`
  $setGLobalUserVar[nome;$message]
  $setServerVar[nome;$getServerVar[nome]%div% $toLowercase[$message]]
  $onlyIf[$checkContains[$getServerVar[nome];%div% $toLowercase[$message]]==false;<:dennied:804398417132126238> Ops! esse nome já está em uso]`
})