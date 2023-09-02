const {SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('gamemode')
    .setDescription('Selects a random gamemode for Valorant.'),
    async execute(interaction, client) {

        const gamemodes = [
        "Unrated",
        "Competitive",
        "Swift Play",
        "Spike Rush",
        "Escalation",
        "Deathmatch",
        "Team Deathmatch",
        "Custom"];
        
        let mode = gamemodes[Math.floor(Math.random() * gamemodes.length)];

        await interaction.reply({content: `Gamemode: **${mode}**`});

    }
}
