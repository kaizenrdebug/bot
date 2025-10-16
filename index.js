import { Client, GatewayIntentBits, REST, Routes } from "discord.js";

const token = process.env.BOT_TOKEN;
const clientId = process.env.CLIENT_ID;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once("ready", async () => {
  const rest = new REST({ version: "10" }).setToken(token);
  await rest.put(Routes.applicationCommands(clientId), { body: [
    {
      name: "ping",
      description: "test :D"
    }
  ] });
  console.log(`${client.user.tag} is online`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  if (interaction.commandName === "ping") {
    await interaction.reply("wsp nigga");
  }
});

client.login(token);
