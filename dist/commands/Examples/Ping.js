"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
class PingCommand extends discord_akairo_1.Command {
    constructor() {
        super('ping', {
            aliases: ['ping', 'latency'],
            description: {
                content: 'Gets the bot\'s heartbeat and latency. Useful to test if the bot is working.'
            },
            category: 'Examples',
            ratelimit: 0,
        });
    }
    async exec(message) {
        const progressembed = new discord_js_1.MessageEmbed().setColor([155, 200, 200]).setDescription('Pinging...');
        const m = await message.util.send(progressembed);
        const resultembed = new discord_js_1.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`Pong! **${Math.round(this.client.ws.ping).toString()}**ms`);
        return m.edit(resultembed);
    }
}
exports.default = PingCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9FeGFtcGxlcy9QaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXlDO0FBQ3pDLDJDQUFtRDtBQUVuRCxNQUFxQixXQUFZLFNBQVEsd0JBQU87SUFDNUM7UUFDSSxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ1YsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQztZQUM1QixXQUFXLEVBQUU7Z0JBQ1QsT0FBTyxFQUFFLDhFQUE4RTthQUMxRjtZQUNELFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFNBQVMsRUFBRSxDQUFDO1NBQ2YsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBZ0I7UUFDOUIsTUFBTSxhQUFhLEdBQUcsSUFBSSx5QkFBWSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNoRyxNQUFNLENBQUMsR0FBRyxNQUFNLE9BQU8sQ0FBQyxJQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sV0FBVyxHQUFHLElBQUkseUJBQVksRUFBRTthQUNqQyxRQUFRLENBQUMsUUFBUSxDQUFDO2FBQ2xCLGNBQWMsQ0FBQyxXQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRWpGLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvQixDQUFDO0NBQ0o7QUFyQkQsOEJBcUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJ2Rpc2NvcmQtYWthaXJvJztcclxuaW1wb3J0IHsgTWVzc2FnZSwgTWVzc2FnZUVtYmVkIH0gZnJvbSAnZGlzY29yZC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaW5nQ29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdwaW5nJywge1xyXG4gICAgICAgICAgICBhbGlhc2VzOiBbJ3BpbmcnLCAnbGF0ZW5jeSddLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ0dldHMgdGhlIGJvdFxcJ3MgaGVhcnRiZWF0IGFuZCBsYXRlbmN5LiBVc2VmdWwgdG8gdGVzdCBpZiB0aGUgYm90IGlzIHdvcmtpbmcuJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ0V4YW1wbGVzJyxcclxuICAgICAgICAgICAgcmF0ZWxpbWl0OiAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBleGVjKG1lc3NhZ2U6IE1lc3NhZ2UpOiBQcm9taXNlPE1lc3NhZ2U+IHtcclxuICAgICAgICBjb25zdCBwcm9ncmVzc2VtYmVkID0gbmV3IE1lc3NhZ2VFbWJlZCgpLnNldENvbG9yKFsxNTUsIDIwMCwgMjAwXSkuc2V0RGVzY3JpcHRpb24oJ1BpbmdpbmcuLi4nKTtcclxuICAgICAgICBjb25zdCBtID0gYXdhaXQgbWVzc2FnZS51dGlsIS5zZW5kKHByb2dyZXNzZW1iZWQpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdGVtYmVkID0gbmV3IE1lc3NhZ2VFbWJlZCgpXHJcbiAgICAgICAgICAgIC5zZXRDb2xvcihcIlJBTkRPTVwiKVxyXG4gICAgICAgICAgICAuc2V0RGVzY3JpcHRpb24oYFBvbmchICoqJHtNYXRoLnJvdW5kKHRoaXMuY2xpZW50LndzLnBpbmcpLnRvU3RyaW5nKCl9Kiptc2ApO1xyXG5cclxuICAgICAgICByZXR1cm4gbS5lZGl0KHJlc3VsdGVtYmVkKTtcclxuICAgIH1cclxufVxyXG4iXX0=