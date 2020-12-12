"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
const moment_1 = __importDefault(require("moment"));
require("moment-duration-format");
const filterLevels = {
    DISABLED: 'Off',
    MEMBERS_WITHOUT_ROLES: 'No Role',
    ALL_MEMBERS: 'Everyone'
};
const verificationLevels = {
    NONE: 'None',
    LOW: 'Low',
    MEDIUM: 'Medium',
    HIGH: '(╯°□°）╯︵ ┻━┻',
    VERY_HIGH: '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'
};
const regions = {
    brazil: '🇧🇷 Brazil',
    europe: '🇪🇺 Europe',
    hongkong: '🇭🇰 Hong Kong',
    india: '🇮🇳 India',
    japan: '🇯🇵 Japan',
    russia: '🇷🇺 Russia',
    singapore: '🇸🇬 Singapore',
    southafrica: '🇿🇦 South Africa',
    sydeny: '🇦🇺 Sydeny',
    'us-central': '🇺🇸 US Central',
    'us-east': '🇺🇸 US East',
    'us-west': '🇺🇸 US West',
    'us-south': '🇺🇸 US South'
};
class ServerInfoCommand extends discord_akairo_1.Command {
    constructor() {
        super('serverinfo', {
            aliases: ['serverinfo', 'server'],
            description: {
                content: 'Gets info about a server'
            },
            category: 'commands',
            channel: 'guild',
            clientPermissions: ['EMBED_LINKS'],
            ratelimit: 2
        });
    }
    async exec(message) {
        const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
        const members = message.guild.members.cache;
        const channels = message.guild.channels.cache;
        const emojis = message.guild.emojis.cache;
        const guildOwner = await message.guild.members.fetch(message.guild.ownerID);
        const embed = new discord_js_1.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`**${message.guild.name}** (${message.guild.id})`)
            .setColor('#94d82d')
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .addField('General Info:', [
            `**Server Name**:\n ${message.guild.name}`,
            `**Server Owner**:\n ${guildOwner.user.tag}`,
            `**Server Region**:\n ${regions[message.guild.region]}`,
            `**Boosts Tier:**\n  ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'None'}`,
            `**Time Created**:\n ${moment_1.default(message.guild.createdTimestamp).format('LT')} ${moment_1.default(message.guild.createdTimestamp).format('LL')} ${moment_1.default(message.guild.createdTimestamp).fromNow()}`,
            '\u200b'
        ], true)
            .addField('Server Stats:', [
            `**Roles**:\n ${roles.length}`,
            `**Emotes**:\n ${emojis.size}`,
            `**Regular Emotes**:\n ${emojis.filter(emoji => !emoji.animated).size}`,
            `**Animated Emotes**:\n ${emojis.filter(emoji => emoji.animated).size}`,
            `**Members**:\n ${message.guild.memberCount}`,
            '\u200b'
        ], true)
            .addField('Continued...', [
            `**Humans**:\n ${members.filter(member => !member.user.bot).size}`,
            `**Bots**:\n ${members.filter(member => member.user.bot).size}`,
            `**Text Channels**:\n ${channels.filter(channel => channel.type === 'text').size}`,
            `**Voice Channels**:\n ${channels.filter(channel => channel.type === 'voice').size}`,
            `**Boost Count**:\n ${message.guild.premiumSubscriptionCount || '0'}`,
            '\u200b'
        ], true)
            .setTimestamp();
        return message.util.send(embed);
    }
}
exports.default = ServerInfoCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmVyU3RhdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvU2VydmVyU3RhdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtREFBeUM7QUFDekMsMkNBQW1EO0FBQ25ELG9EQUE0QjtBQUM1QixrQ0FBZ0M7QUFFaEMsTUFBTSxZQUFZLEdBQUc7SUFDcEIsUUFBUSxFQUFFLEtBQUs7SUFDZixxQkFBcUIsRUFBRSxTQUFTO0lBQ2hDLFdBQVcsRUFBRSxVQUFVO0NBQ3ZCLENBQUM7QUFFRixNQUFNLGtCQUFrQixHQUFHO0lBQzFCLElBQUksRUFBRSxNQUFNO0lBQ1osR0FBRyxFQUFFLEtBQUs7SUFDVixNQUFNLEVBQUUsUUFBUTtJQUNoQixJQUFJLEVBQUUsY0FBYztJQUNwQixTQUFTLEVBQUUsa0JBQWtCO0NBQzdCLENBQUM7QUFFRixNQUFNLE9BQU8sR0FBRztJQUNmLE1BQU0sRUFBRSxhQUFhO0lBQ3JCLE1BQU0sRUFBRSxhQUFhO0lBQ3JCLFFBQVEsRUFBRSxnQkFBZ0I7SUFDMUIsS0FBSyxFQUFFLFlBQVk7SUFDbkIsS0FBSyxFQUFFLFlBQVk7SUFDbkIsTUFBTSxFQUFFLGFBQWE7SUFDckIsU0FBUyxFQUFFLGdCQUFnQjtJQUMzQixXQUFXLEVBQUUsbUJBQW1CO0lBQ2hDLE1BQU0sRUFBRSxhQUFhO0lBQ3JCLFlBQVksRUFBRSxpQkFBaUI7SUFDL0IsU0FBUyxFQUFFLGNBQWM7SUFDekIsU0FBUyxFQUFFLGNBQWM7SUFDekIsVUFBVSxFQUFFLGVBQWU7Q0FDM0IsQ0FBQztBQUVGLE1BQXFCLGlCQUFrQixTQUFRLHdCQUFPO0lBQ3JEO1FBQ0MsS0FBSyxDQUFDLFlBQVksRUFBRTtZQUNuQixPQUFPLEVBQUUsQ0FBRSxZQUFZLEVBQUUsUUFBUSxDQUFFO1lBQ25DLFdBQVcsRUFBRTtnQkFDWixPQUFPLEVBQUUsMEJBQTBCO2FBQ25DO1lBQ0QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsT0FB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QyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFO1lBQzlFLGVBQWUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFO1lBQy9ELHdCQUF3QixRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUU7WUFDbEYseUJBQXlCLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRTtZQUNwRixzQkFBc0IsT0FBTyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsSUFBSSxHQUFHLEVBQUU7WUFDckUsUUFBUTtTQUNSLEVBQUUsSUFBSSxDQUFDO2FBQ1AsWUFBWSxFQUFFLENBQUM7UUFDaEIsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNqQyxDQUFDO0NBQ0Q7QUFwREQsb0NBb0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJ2Rpc2NvcmQtYWthaXJvJztcclxuaW1wb3J0IHsgTWVzc2FnZSwgTWVzc2FnZUVtYmVkIH0gZnJvbSAnZGlzY29yZC5qcyc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0ICdtb21lbnQtZHVyYXRpb24tZm9ybWF0JztcclxuXHJcbmNvbnN0IGZpbHRlckxldmVscyA9IHtcclxuXHRESVNBQkxFRDogJ09mZicsXHJcblx0TUVNQkVSU19XSVRIT1VUX1JPTEVTOiAnTm8gUm9sZScsXHJcblx0QUxMX01FTUJFUlM6ICdFdmVyeW9uZSdcclxufTtcclxuXHJcbmNvbnN0IHZlcmlmaWNhdGlvbkxldmVscyA9IHtcclxuXHROT05FOiAnTm9uZScsXHJcblx0TE9XOiAnTG93JyxcclxuXHRNRURJVU06ICdNZWRpdW0nLFxyXG5cdEhJR0g6ICco4pWvwrDilqHCsO+8ieKVr++4tSDilLvilIHilLsnLFxyXG5cdFZFUllfSElHSDogJ+KUu+KUgeKUuyDvvpDjg70o4LKg55uK4LKgKeODjuW9oeKUu+KUgeKUuydcclxufTtcclxuXHJcbmNvbnN0IHJlZ2lvbnMgPSB7XHJcblx0YnJhemlsOiAn8J+Hp/Cfh7cgQnJhemlsJyxcclxuXHRldXJvcGU6ICfwn4eq8J+HuiBFdXJvcGUnLFxyXG5cdGhvbmdrb25nOiAn8J+HrfCfh7AgSG9uZyBLb25nJyxcclxuXHRpbmRpYTogJ/Cfh67wn4ezIEluZGlhJyxcclxuXHRqYXBhbjogJ/Cfh6/wn4e1IEphcGFuJyxcclxuXHRydXNzaWE6ICfwn4e38J+HuiBSdXNzaWEnLFxyXG5cdHNpbmdhcG9yZTogJ/Cfh7jwn4esIFNpbmdhcG9yZScsXHJcblx0c291dGhhZnJpY2E6ICfwn4e/8J+HpiBTb3V0aCBBZnJpY2EnLFxyXG5cdHN5ZGVueTogJ/Cfh6bwn4e6IFN5ZGVueScsXHJcblx0J3VzLWNlbnRyYWwnOiAn8J+HuvCfh7ggVVMgQ2VudHJhbCcsXHJcblx0J3VzLWVhc3QnOiAn8J+HuvCfh7ggVVMgRWFzdCcsXHJcblx0J3VzLXdlc3QnOiAn8J+HuvCfh7ggVVMgV2VzdCcsXHJcblx0J3VzLXNvdXRoJzogJ/Cfh7rwn4e4IFVTIFNvdXRoJ1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VydmVySW5mb0NvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcignc2VydmVyaW5mbycsIHtcclxuXHRcdFx0YWxpYXNlczogWyAnc2VydmVyaW5mbycsICdzZXJ2ZXInIF0sXHJcblx0XHRcdGRlc2NyaXB0aW9uOiB7XHJcblx0XHRcdFx0Y29udGVudDogJ0dldHMgaW5mbyBhYm91dCBhIHNlcnZlcidcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2F0ZWdvcnk6ICdjb21tYW5kcycsXHJcblx0XHRcdGNoYW5uZWw6ICdndWlsZCcsXHJcblx0XHRcdGNsaWVudFBlcm1pc3Npb25zOiBbICdFTUJFRF9MSU5LUycgXSxcclxuXHRcdFx0cmF0ZWxpbWl0OiAyXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBhc3luYyBleGVjKG1lc3NhZ2U6IE1lc3NhZ2UpOiBQcm9taXNlPE1lc3NhZ2UgfCBNZXNzYWdlW10+IHtcclxuXHRcdGNvbnN0IHJvbGVzID0gbWVzc2FnZS5ndWlsZC5yb2xlcy5jYWNoZS5zb3J0KChhLCBiKSA9PiBiLnBvc2l0aW9uIC0gYS5wb3NpdGlvbikubWFwKHJvbGUgPT4gcm9sZS50b1N0cmluZygpKTtcclxuXHRcdGNvbnN0IG1lbWJlcnMgPSBtZXNzYWdlLmd1aWxkLm1lbWJlcnMuY2FjaGU7XHJcblx0XHRjb25zdCBjaGFubmVscyA9IG1lc3NhZ2UuZ3VpbGQuY2hhbm5lbHMuY2FjaGU7XHJcblx0XHRjb25zdCBlbW9qaXMgPSBtZXNzYWdlLmd1aWxkLmVtb2ppcy5jYWNoZTtcclxuXHRcdGNvbnN0IGd1aWxkT3duZXIgPSBhd2FpdCBtZXNzYWdlLmd1aWxkIS5tZW1iZXJzLmZldGNoKG1lc3NhZ2UuZ3VpbGQhLm93bmVySUQpO1xyXG5cdFx0Y29uc3QgZW1iZWQgPSBuZXcgTWVzc2FnZUVtYmVkKClcclxuXHRcdFx0LnNldENvbG9yKCdSQU5ET00nKVxyXG5cdFx0XHQuc2V0RGVzY3JpcHRpb24oYCoqJHttZXNzYWdlLmd1aWxkIS5uYW1lfSoqICgke21lc3NhZ2UuZ3VpbGQhLmlkfSlgKVxyXG5cdFx0XHQuc2V0Q29sb3IoJyM5NGQ4MmQnKVxyXG4gICAgICAgICAgICAuc2V0VGh1bWJuYWlsKG1lc3NhZ2UuZ3VpbGQuaWNvblVSTCh7IGR5bmFtaWM6IHRydWUgfSkpXHJcblx0XHRcdC5hZGRGaWVsZCgnR2VuZXJhbCBJbmZvOicsIFtcclxuXHRcdFx0XHRgKipTZXJ2ZXIgTmFtZSoqOlxcbiAke21lc3NhZ2UuZ3VpbGQubmFtZX1gLFxyXG5cdFx0XHRcdGAqKlNlcnZlciBPd25lcioqOlxcbiAke2d1aWxkT3duZXIudXNlci50YWd9YCxcclxuXHRcdFx0XHRgKipTZXJ2ZXIgUmVnaW9uKio6XFxuICR7cmVnaW9uc1ttZXNzYWdlLmd1aWxkLnJlZ2lvbl19YCxcclxuXHRcdFx0XHRgKipCb29zdHMgVGllcjoqKlxcbiAgJHttZXNzYWdlLmd1aWxkLnByZW1pdW1UaWVyID8gYFRpZXIgJHttZXNzYWdlLmd1aWxkLnByZW1pdW1UaWVyfWAgOiAnTm9uZSd9YCxcclxuXHRcdFx0XHRgKipUaW1lIENyZWF0ZWQqKjpcXG4gJHttb21lbnQobWVzc2FnZS5ndWlsZC5jcmVhdGVkVGltZXN0YW1wKS5mb3JtYXQoJ0xUJyl9ICR7bW9tZW50KG1lc3NhZ2UuZ3VpbGQuY3JlYXRlZFRpbWVzdGFtcCkuZm9ybWF0KCdMTCcpfSAke21vbWVudChtZXNzYWdlLmd1aWxkLmNyZWF0ZWRUaW1lc3RhbXApLmZyb21Ob3coKX1gLFxyXG5cdFx0XHRcdCdcXHUyMDBiJ1xyXG5cdFx0XHRdLCB0cnVlKVxyXG5cdFx0XHQuYWRkRmllbGQoJ1NlcnZlciBTdGF0czonLCBbXHJcblx0XHRcdFx0YCoqUm9sZXMqKjpcXG4gJHtyb2xlcy5sZW5ndGh9YCxcclxuXHRcdFx0XHRgKipFbW90ZXMqKjpcXG4gJHtlbW9qaXMuc2l6ZX1gLFxyXG5cdFx0XHRcdGAqKlJlZ3VsYXIgRW1vdGVzKio6XFxuICR7ZW1vamlzLmZpbHRlcihlbW9qaSA9PiAhZW1vamkuYW5pbWF0ZWQpLnNpemV9YCxcclxuXHRcdFx0XHRgKipBbmltYXRlZCBFbW90ZXMqKjpcXG4gJHtlbW9qaXMuZmlsdGVyKGVtb2ppID0+IGVtb2ppLmFuaW1hdGVkKS5zaXplfWAsXHJcbiAgICAgICAgICAgICAgICBgKipNZW1iZXJzKio6XFxuICR7bWVzc2FnZS5ndWlsZC5tZW1iZXJDb3VudH1gLFxyXG4gICAgICAgICAgICAgICAgJ1xcdTIwMGInXHJcbiAgICAgICAgICAgIF0sIHRydWUpXHJcbiAgICAgICAgICAgIC5hZGRGaWVsZCgnQ29udGludWVkLi4uJywgW1xyXG4gICAgICAgICAgICAgICAgYCoqSHVtYW5zKio6XFxuICR7bWVtYmVycy5maWx0ZXIobWVtYmVyID0+ICFtZW1iZXIudXNlci5ib3QpLnNpemV9YCxcclxuXHRcdFx0XHRgKipCb3RzKio6XFxuICR7bWVtYmVycy5maWx0ZXIobWVtYmVyID0+IG1lbWJlci51c2VyLmJvdCkuc2l6ZX1gLFxyXG5cdFx0XHRcdGAqKlRleHQgQ2hhbm5lbHMqKjpcXG4gJHtjaGFubmVscy5maWx0ZXIoY2hhbm5lbCA9PiBjaGFubmVsLnR5cGUgPT09ICd0ZXh0Jykuc2l6ZX1gLFxyXG5cdFx0XHRcdGAqKlZvaWNlIENoYW5uZWxzKio6XFxuICR7Y2hhbm5lbHMuZmlsdGVyKGNoYW5uZWwgPT4gY2hhbm5lbC50eXBlID09PSAndm9pY2UnKS5zaXplfWAsXHJcblx0XHRcdFx0YCoqQm9vc3QgQ291bnQqKjpcXG4gJHttZXNzYWdlLmd1aWxkLnByZW1pdW1TdWJzY3JpcHRpb25Db3VudCB8fCAnMCd9YCxcclxuXHRcdFx0XHQnXFx1MjAwYidcclxuXHRcdFx0XSwgdHJ1ZSlcclxuXHRcdFx0LnNldFRpbWVzdGFtcCgpO1xyXG5cdFx0XHRyZXR1cm4gbWVzc2FnZS51dGlsLnNlbmQoZW1iZWQpXHJcblx0fVxyXG59Il19