require("dotenv").config();

const Discord = require("discord.js");
const bot = new Discord.Client();

//Iniciar BOT + propiedades
bot.on("ready", () => {
  console.log(`El bot esta listo como ${bot.user.tag}`);
  // Cambiar estado de coneccion
  bot.user.setStatus("online");
  //Retorna el estado de conneccion del bot
  //console.log(bot.user.presence.status);
});

//Bot respondiendo en discord
bot.on("message", async (message) => {
  console.log(message.content);
  const mensaje = message.content;

  if (mensaje === "ping") {
    // * .reply(), responde el mensaje en especifico
    message.reply("pong");
  }

  //Saludar en el canal - pero adjuntando nombre de quien escribio el mensaje
  if (mensaje.toLowerCase() === "hola") {
    message.channel.send(`Hola, Bienvenido ${message.author}`);
  }

  // * Utilizar .include() como si fueran comandos.
  if (mensaje.includes("!insta")) {
    message.channel.send("https://www.instagram.com/desspair_/");
  }

  // * Eliminar mensajes como si fuera un comando
  if (mensaje === "!clear") {
    const mensajeObtenidos = await message.channel.messages.fetch({
      limit: 100,
    });
    message.channel.bulkDelete(mensajeObtenidos);
    console.log("Mensajes Eliminados");
  }
  // * Borrar Mensajes en especifico
  if (mensaje === "ctm") {
    message.reply(`Por favor, no digas garabatos`);
    message.delete();
  }
});

// Token Discord BOT
const token = process.env.TOKEN_DISCORD;
bot.login(token);
