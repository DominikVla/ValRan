const {SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonStyle, ButtonBuilder} = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Shows a list of commands'),
    async execute(interaction, client) {

        const embed1 = new EmbedBuilder()
        .setTitle(`Command List`)
        .setDescription(`**List of all available commands**`) 
        .setColor(0x0099FF)
        .addFields({ name: `/agent`, value: 'Picks a random a random agent'})
        .addFields({ name: `/map`, value: 'Picks a random map [not based on active pool, used mostly for custom]'})
        .addFields({ name: `/weapon`, value: 'Picks a random a random weapon based on category'})
        .addFields({ name: `/gamemode`, value: 'Picks a random a random gamemode'})


        await interaction.reply({ embeds: [embed1], ephemeral: true });

    }
}
