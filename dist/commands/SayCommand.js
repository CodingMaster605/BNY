"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class SayCommand extends discord_akairo_1.Command {
    constructor() {
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
                        start: (msg) => `${msg.author}, What do you want me to say?`
                    }
                }
            ]
        });
    }
    async exec(message, { msg }) {
        // To avoid spam and scams, I put the author of the message on a new line.
        return message.util.send(`${msg}`);
    }
}
exports.default = SayCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2F5Q29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9TYXlDb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXlDO0FBR3pDLE1BQXFCLFVBQVcsU0FBUSx3QkFBTztJQUMzQztRQUNJLEtBQUssQ0FBQyxLQUFLLEVBQUU7WUFDVCxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDaEIsV0FBVyxFQUFFO2dCQUNULE9BQU8sRUFBRSxrREFBa0Q7YUFDOUQ7WUFDRCxRQUFRLEVBQUUsVUFBVTtZQUNwQixTQUFTLEVBQUUsQ0FBQztZQUNaLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLGtEQUFrRDtZQUNsRCxJQUFJLEVBQUU7Z0JBQ0Y7b0JBQ0ksRUFBRSxFQUFFLEtBQUs7b0JBQ1QsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsS0FBSyxFQUFFLFNBQVM7b0JBQ2hCLGtFQUFrRTtvQkFDbEUsTUFBTSxFQUFFO3dCQUNKLEtBQUssRUFBRSxDQUFDLEdBQVksRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSwrQkFBK0I7cUJBQ3hFO2lCQUVKO2FBQ0o7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFnQixFQUFFLEVBQUUsR0FBRyxFQUFFO1FBQ3ZDLDBFQUEwRTtRQUUxRSxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQTtJQUN0QyxDQUFDO0NBQ0o7QUEvQkQsNkJBK0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJ2Rpc2NvcmQtYWthaXJvJztcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJ2Rpc2NvcmQuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2F5Q29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdzYXknLCB7XHJcbiAgICAgICAgICAgIGFsaWFzZXM6IFsnc2F5J10sXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnQSBjb21tYW5kIHRoYXQgc2VuZHMgYSBtZXNzYWdlIHRoYXQgeW91IHNwZWNpZnkuJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2NvbW1hbmRzJyxcclxuICAgICAgICAgICAgcmF0ZWxpbWl0OiAwLFxyXG4gICAgICAgICAgICBjaGFubmVsOiAnZ3VpbGQnLFxyXG4gICAgICAgICAgICAvLyBDcmVhdGluZyBhbiBhcmd1bWVudCBjYWxsZWQgXCJtc2dcIiAodGhlIG1lc3NhZ2UpXHJcbiAgICAgICAgICAgIGFyZ3M6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogJ21zZycsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2g6ICdjb250ZW50JyxcclxuICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGluZyBhIHByb21wdCBpZiB0aGUgdXNlciBkaWRuJ3Qgc3BlY2lmeSBhIG1lc3NhZ2UgdG8gc2VuZC5cclxuICAgICAgICAgICAgICAgICAgICBwcm9tcHQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IChtc2c6IE1lc3NhZ2UpID0+IGAke21zZy5hdXRob3J9LCBXaGF0IGRvIHlvdSB3YW50IG1lIHRvIHNheT9gXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBleGVjKG1lc3NhZ2U6IE1lc3NhZ2UsIHsgbXNnIH0pOiBQcm9taXNlPE1lc3NhZ2U+IHtcclxuICAgICAgICAvLyBUbyBhdm9pZCBzcGFtIGFuZCBzY2FtcywgSSBwdXQgdGhlIGF1dGhvciBvZiB0aGUgbWVzc2FnZSBvbiBhIG5ldyBsaW5lLlxyXG5cclxuICAgICAgICByZXR1cm4gbWVzc2FnZS51dGlsLnNlbmQoYCR7bXNnfWApXHJcbiAgICB9XHJcbn0iXX0=