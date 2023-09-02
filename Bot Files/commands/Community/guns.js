const {SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('weapon')
    .setDescription('Selects a random weapon for Valorant.')
    .addStringOption(option =>
        option.setName('category')
            .setDescription('Weapon Category')
            .setRequired(true)
            .addChoices(
                { name: 'Side Arms', value: '0' },
                { name: 'SMGs / Shotguns', value: '1' },
                {name: 'Rifles', value: '2'},
                {name: 'Snipers / Machine Guns', value: '3'},
                {name: 'All Guns', value: '4'},
            )),

    async execute(interaction, client) {
        const category =  interaction.options.getString('category');

        const row1 = ['Classic', 'Shorty', 'Frenzy', 'Ghost', 'Sheriff'];
        const row2 = ['Stinger', 'Spectre', 'Bucky', 'Judge'];
        const row3 = ['Bulldog', 'Guardian', 'Phantom', 'Vandal'];
        const row4 = ['Marshal', 'Operator', 'Ares', 'Odin'];
        const guns = [];
        guns.push(...row1, ...row2, ...row3, ...row4);

        let gun; // Variable established for switch cases

        switch (Number(category)) {
            case 0:
                gun = row1[Math.floor(Math.random() * row1.length)]; // Sidearms
                break;
            case 1:
                gun = row2[Math.floor(Math.random() * row2.length)]; // SMGs / Shotguns
                break;
            case 2:
                gun = row3[Math.floor(Math.random() * row3.length)]; // Rifles
                break;
            case 3:
                gun = row4[Math.floor(Math.random() * row4.length)]; // Snipers / Machine Guns
                break;
            case 4:
                gun = guns[Math.floor(Math.random() * guns.length)]; // All Guns
                break;
            default:
                gun = "An Error has occured";


        }

        await interaction.reply({content: `Weapon: **${gun}**`});

    }
}
