"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class CommandName extends discord_akairo_1.Command {
    constructor() {
        super('leave', {
            aliases: ['leave'],
            description: {
                content: 'Leaves the voice channel.'
            },
            category: 'Music',
            ratelimit: 0,
        });
    }
    async exec(message) {
        // Checks if the member is in a voice channel
        if (!message.member.voice.channel)
            return message.util.send("It doesn't look like you are in a voice channel.");
        // Checks if the bot is in a voice channel
        if (!message.guild.me.voice.channel)
            return message.util.send("I am not in a voice channel.");
        // Checks if the bot and the member are in the same voice channel
        if (message.guild.me.voice.channel.id !== message.member.voice.channel.id)
            return message.util.send("We need to be in the same voice channel.");
        // Leaves the voice channel if all checks passes
        message.guild.me.voice.channel.leave();
        // Tells the member the bot left the voice channel
        message.util.send("B'n'Y has left the voice channel.");
    }
}
exports.default = CommandName;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGVhdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvTXVzaWMvTGVhdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBeUM7QUFHekMsTUFBcUIsV0FBWSxTQUFRLHdCQUFPO0lBQzVDO1FBQ0ksS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUNYLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUNsQixXQUFXLEVBQUU7Z0JBQ1QsT0FBTyxFQUFFLDJCQUEyQjthQUN2QztZQUNELFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFNBQVMsRUFBRSxDQUFDO1NBQ2YsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBZ0I7UUFDN0IsNkNBQTZDO1FBQ3BELElBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPO1lBQUUsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO1FBRS9HLDBDQUEwQztRQUMxQyxJQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU87WUFBRSxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLENBQUM7UUFFN0YsaUVBQWlFO1FBQ2pFLElBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFBRSxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLDBDQUEwQyxDQUFDLENBQUM7UUFFL0ksZ0RBQWdEO1FBQ2hELE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFdkMsa0RBQWtEO1FBQ2xELE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLENBQUM7SUFDckQsQ0FBQztDQUNKO0FBNUJELDhCQTRCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tICdkaXNjb3JkLWFrYWlybyc7XHJcbmltcG9ydCB7IE1lc3NhZ2UsIE1lc3NhZ2VFbWJlZCB9IGZyb20gJ2Rpc2NvcmQuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbWFuZE5hbWUgZXh0ZW5kcyBDb21tYW5kIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignbGVhdmUnLCB7XHJcbiAgICAgICAgICAgIGFsaWFzZXM6IFsnbGVhdmUnXSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdMZWF2ZXMgdGhlIHZvaWNlIGNoYW5uZWwuJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ011c2ljJyxcclxuICAgICAgICAgICAgcmF0ZWxpbWl0OiAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBleGVjKG1lc3NhZ2U6IE1lc3NhZ2UpOiBQcm9taXNlPE1lc3NhZ2U+IHtcclxuICAgICAgICAgLy8gQ2hlY2tzIGlmIHRoZSBtZW1iZXIgaXMgaW4gYSB2b2ljZSBjaGFubmVsXHJcbiAgaWYoIW1lc3NhZ2UubWVtYmVyLnZvaWNlLmNoYW5uZWwpIHJldHVybiBtZXNzYWdlLnV0aWwuc2VuZChcIkl0IGRvZXNuJ3QgbG9vayBsaWtlIHlvdSBhcmUgaW4gYSB2b2ljZSBjaGFubmVsLlwiKTtcclxuICBcclxuICAvLyBDaGVja3MgaWYgdGhlIGJvdCBpcyBpbiBhIHZvaWNlIGNoYW5uZWxcclxuICBpZighbWVzc2FnZS5ndWlsZC5tZS52b2ljZS5jaGFubmVsKSByZXR1cm4gbWVzc2FnZS51dGlsLnNlbmQoXCJJIGFtIG5vdCBpbiBhIHZvaWNlIGNoYW5uZWwuXCIpO1xyXG4gIFxyXG4gIC8vIENoZWNrcyBpZiB0aGUgYm90IGFuZCB0aGUgbWVtYmVyIGFyZSBpbiB0aGUgc2FtZSB2b2ljZSBjaGFubmVsXHJcbiAgaWYobWVzc2FnZS5ndWlsZC5tZS52b2ljZS5jaGFubmVsLmlkICE9PSBtZXNzYWdlLm1lbWJlci52b2ljZS5jaGFubmVsLmlkKSByZXR1cm4gbWVzc2FnZS51dGlsLnNlbmQoXCJXZSBuZWVkIHRvIGJlIGluIHRoZSBzYW1lIHZvaWNlIGNoYW5uZWwuXCIpO1xyXG4gIFxyXG4gIC8vIExlYXZlcyB0aGUgdm9pY2UgY2hhbm5lbCBpZiBhbGwgY2hlY2tzIHBhc3Nlc1xyXG4gIG1lc3NhZ2UuZ3VpbGQubWUudm9pY2UuY2hhbm5lbC5sZWF2ZSgpO1xyXG4gIFxyXG4gIC8vIFRlbGxzIHRoZSBtZW1iZXIgdGhlIGJvdCBsZWZ0IHRoZSB2b2ljZSBjaGFubmVsXHJcbiAgbWVzc2FnZS51dGlsLnNlbmQoXCJCJ24nWSBoYXMgbGVmdCB0aGUgdm9pY2UgY2hhbm5lbC5cIik7XHJcbiAgICB9XHJcbn0iXX0=