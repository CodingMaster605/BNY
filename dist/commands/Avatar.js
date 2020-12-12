"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
class AvatarCommand extends discord_akairo_1.Command {
    constructor() {
        super("avatar", {
            aliases: ["avatar", "profile"],
            category: "Info",
            description: {
                content: "Shows you the avatar of a member.",
                usage: "avatar [member]",
                examples: [
                    "avatar",
                    "avatar @B'n'Y#0877",
                    "avatar B`n`Y"
                ]
            },
            ratelimit: 3,
            args: [
                {
                    id: "member",
                    type: "member",
                    match: "rest",
                    default: (msg) => msg.member
                },
                {
                    id: "size",
                    type: (_, str) => {
                        if (str && !isNaN(Number(str)) && [16, 32, 64, 128, 256, 512, 1024, 2048].includes(Number(str)))
                            return Number(str);
                        return null;
                    },
                    match: "option",
                    flag: ["-size="],
                    default: 2048
                }
            ]
        });
    }
    exec(message, { member, size }) {
        return message.util.send(new discord_js_1.MessageEmbed()
            .setTitle(` Avatar | ${member.user.tag}`)
            .setColor("RANDOM")
            .setImage(member.user.displayAvatarURL({ size: size })));
    }
}
exports.default = AvatarCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXZhdGFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL0F2YXRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUF5QztBQUN6QywyQ0FBMkU7QUFFM0UsTUFBcUIsYUFBYyxTQUFRLHdCQUFPO0lBQzlDO1FBQ0ksS0FBSyxDQUFDLFFBQVEsRUFBRTtZQUNaLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUM7WUFDOUIsUUFBUSxFQUFFLE1BQU07WUFDaEIsV0FBVyxFQUFFO2dCQUNULE9BQU8sRUFBRSxtQ0FBbUM7Z0JBQzVDLEtBQUssRUFBRSxpQkFBaUI7Z0JBQ3hCLFFBQVEsRUFBRTtvQkFDTixRQUFRO29CQUNSLG9CQUFvQjtvQkFDcEIsY0FBYztpQkFDakI7YUFDSjtZQUNELFNBQVMsRUFBRSxDQUFDO1lBQ1osSUFBSSxFQUFFO2dCQUNGO29CQUNJLEVBQUUsRUFBQyxRQUFRO29CQUNYLElBQUksRUFBRSxRQUFRO29CQUNkLEtBQUssRUFBRSxNQUFNO29CQUNiLE9BQU8sRUFBRSxDQUFDLEdBQVksRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU07aUJBQ3hDO2dCQUNEO29CQUNJLEVBQUUsRUFBRSxNQUFNO29CQUNWLElBQUksRUFBRSxDQUFDLENBQVUsRUFBRSxHQUFXLEVBQWlCLEVBQUU7d0JBQzdDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7NEJBQUUsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3BILE9BQU8sSUFBSSxDQUFDO29CQUNoQixDQUFDO29CQUNELEtBQUssRUFBRSxRQUFRO29CQUNmLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQztvQkFDaEIsT0FBTyxFQUFFLElBQUk7aUJBQ2hCO2FBQ0o7U0FDSixDQUNBLENBQUM7SUFDTixDQUFDO0lBQ00sSUFBSSxDQUFDLE9BQWdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUF5QztRQUNqRixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUkseUJBQVksRUFBRTthQUMxQyxRQUFRLENBQUMsYUFBYSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQ3hDLFFBQVEsQ0FBQyxRQUFRLENBQUM7YUFDbEIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBaUIsRUFBRSxDQUFDLENBQUMsQ0FFbkUsQ0FBQTtJQUNMLENBQUM7Q0FDSjtBQTVDRCxnQ0E0Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSBcImRpc2NvcmQtYWthaXJvXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UsIEd1aWxkTWVtYmVyLCBNZXNzYWdlRW1iZWQsIEltYWdlU2l6ZSB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdmF0YXJDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoXCJhdmF0YXJcIiwge1xyXG4gICAgICAgICAgICBhbGlhc2VzOiBbXCJhdmF0YXJcIiwgXCJwcm9maWxlXCJdLFxyXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJJbmZvXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlNob3dzIHlvdSB0aGUgYXZhdGFyIG9mIGEgbWVtYmVyLlwiLFxyXG4gICAgICAgICAgICAgICAgdXNhZ2U6IFwiYXZhdGFyIFttZW1iZXJdXCIsXHJcbiAgICAgICAgICAgICAgICBleGFtcGxlczogW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiYXZhdGFyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhdmF0YXIgQEInbidZIzA4NzdcIixcclxuICAgICAgICAgICAgICAgICAgICBcImF2YXRhciBCYG5gWVwiXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJhdGVsaW1pdDogMyxcclxuICAgICAgICAgICAgYXJnczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOlwibWVtYmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJtZW1iZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaDogXCJyZXN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogKG1zZzogTWVzc2FnZSkgPT4gbXNnLm1lbWJlclxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogXCJzaXplXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogKF86IE1lc3NhZ2UsIHN0cjogc3RyaW5nKTogbnVsbCB8IE51bWJlciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHIgJiYgIWlzTmFOKE51bWJlcihzdHIpKSAmJiBbMTYsIDMyLCA2NCwgMTI4LCAyNTYsIDUxMiwgMTAyNCwgMjA0OF0uaW5jbHVkZXMoTnVtYmVyKHN0cikpKSByZXR1cm4gTnVtYmVyKHN0cik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2g6IFwib3B0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZmxhZzogW1wiLXNpemU9XCJdLCAvLyBBdmF0YXIgQERhblRlY2hCb3kjOTUzMSBzaXplPTUxMlxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IDIwNDhcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGV4ZWMobWVzc2FnZTogTWVzc2FnZSwgeyBtZW1iZXIsIHNpemUgfTogeyBtZW1iZXI6IEd1aWxkTWVtYmVyLCBzaXplOiBudW1iZXIgfSk6IFByb21pc2U8TWVzc2FnZT4ge1xyXG4gICAgICAgIHJldHVybiBtZXNzYWdlLnV0aWwuc2VuZChuZXcgTWVzc2FnZUVtYmVkKClcclxuICAgICAgICAuc2V0VGl0bGUoYCBBdmF0YXIgfCAke21lbWJlci51c2VyLnRhZ31gKVxyXG4gICAgICAgIC5zZXRDb2xvcihcIlJBTkRPTVwiKVxyXG4gICAgICAgIC5zZXRJbWFnZShtZW1iZXIudXNlci5kaXNwbGF5QXZhdGFyVVJMKHsgc2l6ZTogc2l6ZSBhcyBJbWFnZVNpemUgfSkpXHJcbiAgICAgICAgXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il19