import { Command } from 'discord-akairo';
import { Message, MessageEmbed } from 'discord.js';

export default class PingCommand extends Command {
    public constructor() {
        super('help', {
            aliases: ['help', "info"],
            description: {
                content: 'Use this command to see commands'
            },
            category: 'commands',
            ratelimit: 0,
        });
    }

    public async exec(message: Message): Promise<Message> { 
        const progressembed = new MessageEmbed().setColor([155, 200, 200]).setDescription('Getting help...');
        const m = await message.util!.send(progressembed);
        const resultembed = new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`**Help**\nBot Prefix is "("\n\n🏓 **Ping**\nUse this command to check how fast the bot is!\n**Examples**: (ping, (latency\n🗣 **Say**\nUse this command to make the bot repeat what you say.\n**Examples**: (say Hello\n🖼 **Avatar**\nUse this command to display a members avatar.\n**Examples**: (avatar @B'n'Y#0877`);

        return m.edit(resultembed);
    }
}
