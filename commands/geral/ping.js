let color = process.env.INVISIBLE
module.exports = ({
  name: "ping",
  code: `$title[PONG!]
  $description[**$ping Ms**]
  $color[${color}]`
})