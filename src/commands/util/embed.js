const {EmbedBuilder, PermissionsBitField} = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

const embed = new EmbedBuilder()
    .setTitle('Test')
    .setDescription('Test')
    .setColor(0x0099FF)
    .setImage('https://images-ext-1.discordapp.net/external/PG11MTqv8YA1OBUIisMXVGDhGa1trTYcVRGy5RNa7Kw/https/cdn-longterm.mee6.xyz/plugins/welcome/images/878962067309199410/755cb2f187aa54552a0bd3c6f60b8701f7a24523f7e6cfeb3c3a47f08a1bf9d8.gif?width=176&height=99');
exports.commandBase = {
	slashData: new SlashCommandBuilder()
		.setName('embed')
		.setDescription('Crée un embed.'),



	cooldown: 2000,
	ownerOnly: false, 

	async slashRun(client, interaction) {
		interaction.reply({ embeds: [embed] });
	},
};