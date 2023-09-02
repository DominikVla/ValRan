const {SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('map')
    .setDescription('Selects a random map for Valorant.')
    .addStringOption(option =>
        option.setName('gamemode')
            .setDescription('Select between normal maps and TDM maps')
            .setRequired(true)
            .addChoices(
                { name: 'Normal', value: '0' },
                { name: 'Team Death Match', value: '1'},
            )),
    async execute(interaction, client) {

        const mode =  interaction.options.getString('gamemode');

        const norMaps = [
        "Ascent",
        "Haven",
        "Lotus",
        "Pearl",
        "Split",
        "Bind",
        "Fracture",
        "Ice Box",
        "Breeze",
        "Sunset"];

        const tdmMaps = [
        "Piazza",
        "District",
        "Kasbah"];

        switch (Number(mode)) {
            case 0:
                map = norMaps[Math.floor(Math.random() * norMaps.length)];
                break;
            case 1:
                map = tdmMaps[Math.floor(Math.random() * tdmMaps.length)];
                break;
            default:
                map = "An Error has occured";
        }
        await interaction.reply({content: `Map: **${map}**`});

    }
}
