const {EmbedBuilder, PermissionsBitField} = require('discord.js');
const {SlashCommandBuilder} = require('@discordjs/builders');

exports.commandBase = {
	slashData: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Pong!'),
	cooldown: 5000,
	ownerOnly: false, 
	async slashRun(client, interaction) {
		interaction.reply('Pong 🏓');
	},
};