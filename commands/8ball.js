const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!args[2]) return message.reply("Zadaj pełne pytanie!");
  let replies = ["Tak.", "Nie.", "Nie ma chuja.", "Passat 1.9 TDI.", "Nie wiem.", "Nie mam czasu!"];

  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(1).join(" ");

  let ballEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setColor("#ff9900")
  .addField("Pytanie", question)
  .addField("Odpowiedź", replies[result]);

  message.channel.send(ballEmbed);
}
 
module.exports.help = {
  name: "8ball"
}