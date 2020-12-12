import { Command } from 'discord-akairo';
import { Message } from 'discord.js';

export default class SayCommand extends Command {
    public constructor() {
        super('say', {
            aliases: ['say'],
            description: {
                content: 'A command that sends a message that you specify.'
            },
            category: 'commands',
            ratelimit: 0,
            channel: 'guild',
            // Creating an argument called "msg" (the message)
            args: [
                {
                    id: 'msg',
                    type: 'string',
                    match: 'content',
                    // Creating a prompt if the user didn't specify a message to send.
                    prompt: {
                        start: (msg: Message) => `${msg.author}, What do you want me to say?`
                    }

                }
            ]
        });
    }

    public async exec(message: Message, { msg }): Promise<Message> {
        // To avoid spam and scams, I put the author of the message on a new line.

        return message.util.send(`${msg}`)
    }
}