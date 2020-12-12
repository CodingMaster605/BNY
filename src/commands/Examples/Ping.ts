import { Command } from 'discord-akairo';
import { Message, MessageEmbed } from 'discord.js';

export default class PingCommand extends Command {
    public constructor() {
        super('ping', {
            aliases: ['ping', 'latency'],
            description: {
                content: 'Gets the bot\'s heartbeat and latency. Useful to test if the bot is working.'
            },
            category: 'Examples',
            ratelimit: 0,
        });
    }

    public async exec(message: Message): Promise<Message> {
        const progressembed = new MessageEmbed().setColor([155, 200, 200]).setDescription('Pinging...');
        const m = await message.util!.send(progressembed);
        const resultembed = new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`Pong! **${Math.round(this.client.ws.ping).toString()}**ms`);

        return m.edit(resultembed);
    }
}
