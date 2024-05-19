const {EmbedBuilder, PermissionsBitField} = require('discord.js');
const {SlashCommandBuilder} = require('@discordjs/builders');
exports.commandBase = {
	prefixData: {
		name: 'pignouf',
		aliases: ['😏😏😏'],
	},
	slashData: new SlashCommandBuilder()
		.setName('pignouf')
		.setDescription('😏😏😏')
		.addUserOption(option => option.setName('target').setDescription('The user').setRequired(true)),
	
	cooldown: 500,
	ownerOnly: false,
	async slashRun(client, interaction) {
		interaction.reply(
            '8===✊=='+ ' <@' + interaction.options.getUser('target').id + '>')
        setTimeout(async () => {
           await interaction.editReply('8====✊=' + ' <@' + interaction.options.getUser('target').id + '>');
        }, 500);
		    setTimeout(async () => {
           await interaction.editReply('8===✊=='+ ' <@' + interaction.options.getUser('target').id + '>');
        }, 1000);
		    setTimeout(async () => {
           await interaction.editReply('8====✊='+ ' <@' + interaction.options.getUser('target').id + '>');
        }, 1500);
		    setTimeout(async () => {
           await interaction.editReply('8===✊=='+ ' <@' + interaction.options.getUser('target').id + '>');
        }, 2000);
		    setTimeout(async () => {
           await interaction.editReply('8=====✊💦'+ ' <@' + interaction.options.getUser('target').id + '> 🤰');
        }, 2500);
    }
};
