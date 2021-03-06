import { Command } from "discord-akairo";
import { Message, GuildMember, MessageEmbed, ImageSize } from "discord.js";

export default class AvatarCommand extends Command {
    public constructor() {
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
                    id:"member",
                    type: "member",
                    match: "rest",
                    default: (msg: Message) => msg.member
                },
                {
                    id: "size",
                    type: (_: Message, str: string): null | Number => {
                        if (str && !isNaN(Number(str)) && [16, 32, 64, 128, 256, 512, 1024, 2048].includes(Number(str))) return Number(str);
                        return null;
                    },
                    match: "option",
                    flag: ["-size="], // Avatar @DanTechBoy#9531 size=512
                    default: 2048
                }
            ]
        }
        );
    }
    public exec(message: Message, { member, size }: { member: GuildMember, size: number }): Promise<Message> {
        return message.util.send(new MessageEmbed()
        .setTitle(` Avatar | ${member.user.tag}`)
        .setColor("RANDOM")
        .setImage(member.user.displayAvatarURL({ size: size as ImageSize }))
        
        )
    }
}