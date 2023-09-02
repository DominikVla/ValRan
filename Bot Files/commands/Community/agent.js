const {SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('agent')
    .setDescription('Selects a random agent for Valorant.'),
    async execute(interaction, client) {
        
        if (interaction.user.id === "359341748922613762") { 
        await interaction.reply({content: "Agent: **Fade**"});
        } else {
            const agents = [
            "Brim", 
            "Viper", 
            "Omen",
            "Killjoy", 
            "Cypher", 
            "Sova",
            "Sage", 
            "Phoenix", 
            "Jett",
            "Reyna", 
            "Raze", 
            "Breach",
            "Skye",
            "Yoru", 
            "Astra", 
            "KAY/O",
            "Chamber", 
            "Neon", 
            "Fade",
            "Harbor", 
            "Gekko",
            "Deadlock"];

            let agent = agents[Math.floor(Math.random() * agents.length)];

            await interaction.reply({content: `Agent: **${agent}**`});
        }

    }
}
