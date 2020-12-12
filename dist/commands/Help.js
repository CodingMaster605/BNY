"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
class PingCommand extends discord_akairo_1.Command {
    constructor() {
        super('help', {
            aliases: ['help', "info"],
            description: {
                content: 'Use this command to see commands'
            },
            category: 'commands',
            ratelimit: 0,
        });
    }
    async exec(message) {
        const progressembed = new discord_js_1.MessageEmbed().setColor([155, 200, 200]).setDescription('Getting help...');
        const m = await message.util.send(progressembed);
        const resultembed = new discord_js_1.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`**Help**\nBot Prefix is "("\n\n🏓 **Ping**\nUse this command to check how fast the bot is!\n**Examples**: (ping, (latency\n🗣 **Say**\nUse this command to make the bot repeat what you say.\n**Examples**: (say Hello\n🖼 **Avatar**\nUse this command to display a members avatar.\n**Examples**: (avatar @B'n'Y#0877`);
        return m.edit(resultembed);
    }
}
exports.default = PingCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9IZWxwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXlDO0FBQ3pDLDJDQUFtRDtBQUVuRCxNQUFxQixXQUFZLFNBQVEsd0JBQU87SUFDNUM7UUFDSSxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ1YsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQztZQUN6QixXQUFXLEVBQUU7Z0JBQ1QsT0FBTyxFQUFFLGtDQUFrQzthQUM5QztZQUNELFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFNBQVMsRUFBRSxDQUFDO1NBQ2YsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBZ0I7UUFDOUIsTUFBTSxhQUFhLEdBQUcsSUFBSSx5QkFBWSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3JHLE1BQU0sQ0FBQyxHQUFHLE1BQU0sT0FBTyxDQUFDLElBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbEQsTUFBTSxXQUFXLEdBQUcsSUFBSSx5QkFBWSxFQUFFO2FBQ2pDLFFBQVEsQ0FBQyxRQUFRLENBQUM7YUFDbEIsY0FBYyxDQUFDLHlUQUF5VCxDQUFDLENBQUM7UUFFL1UsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7Q0FDSjtBQXJCRCw4QkFxQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSAnZGlzY29yZC1ha2Fpcm8nO1xyXG5pbXBvcnQgeyBNZXNzYWdlLCBNZXNzYWdlRW1iZWQgfSBmcm9tICdkaXNjb3JkLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpbmdDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ2hlbHAnLCB7XHJcbiAgICAgICAgICAgIGFsaWFzZXM6IFsnaGVscCcsIFwiaW5mb1wiXSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdVc2UgdGhpcyBjb21tYW5kIHRvIHNlZSBjb21tYW5kcydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdjb21tYW5kcycsXHJcbiAgICAgICAgICAgIHJhdGVsaW1pdDogMCxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZXhlYyhtZXNzYWdlOiBNZXNzYWdlKTogUHJvbWlzZTxNZXNzYWdlPiB7IFxyXG4gICAgICAgIGNvbnN0IHByb2dyZXNzZW1iZWQgPSBuZXcgTWVzc2FnZUVtYmVkKCkuc2V0Q29sb3IoWzE1NSwgMjAwLCAyMDBdKS5zZXREZXNjcmlwdGlvbignR2V0dGluZyBoZWxwLi4uJyk7XHJcbiAgICAgICAgY29uc3QgbSA9IGF3YWl0IG1lc3NhZ2UudXRpbCEuc2VuZChwcm9ncmVzc2VtYmVkKTtcclxuICAgICAgICBjb25zdCByZXN1bHRlbWJlZCA9IG5ldyBNZXNzYWdlRW1iZWQoKVxyXG4gICAgICAgICAgICAuc2V0Q29sb3IoXCJSQU5ET01cIilcclxuICAgICAgICAgICAgLnNldERlc2NyaXB0aW9uKGAqKkhlbHAqKlxcbkJvdCBQcmVmaXggaXMgXCIoXCJcXG5cXG7wn4+TICoqUGluZyoqXFxuVXNlIHRoaXMgY29tbWFuZCB0byBjaGVjayBob3cgZmFzdCB0aGUgYm90IGlzIVxcbioqRXhhbXBsZXMqKjogKHBpbmcsIChsYXRlbmN5XFxu8J+XoyAqKlNheSoqXFxuVXNlIHRoaXMgY29tbWFuZCB0byBtYWtlIHRoZSBib3QgcmVwZWF0IHdoYXQgeW91IHNheS5cXG4qKkV4YW1wbGVzKio6IChzYXkgSGVsbG9cXG7wn5a8ICoqQXZhdGFyKipcXG5Vc2UgdGhpcyBjb21tYW5kIHRvIGRpc3BsYXkgYSBtZW1iZXJzIGF2YXRhci5cXG4qKkV4YW1wbGVzKio6IChhdmF0YXIgQEInbidZIzA4NzdgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG0uZWRpdChyZXN1bHRlbWJlZCk7XHJcbiAgICB9XHJcbn1cclxuIl19