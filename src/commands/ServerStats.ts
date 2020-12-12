import { Command } from 'discord-akairo';
import { Message, MessageEmbed } from 'discord.js';
import moment from 'moment';
import 'moment-duration-format';

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

export default class ServerInfoCommand extends Command {
	public constructor() {
		super('serverinfo', {
			aliases: [ 'serverinfo', 'server' ],
			description: {
				content: 'Gets info about a server'
			},
			category: 'commands',
			channel: 'guild',
			clientPermissions: [ 'EMBED_LINKS' ],
			ratelimit: 2
		});
	}

	public async exec(message: Message): Promise<Message | Message[]> {
		const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
		const members = message.guild.members.cache;
		const channels = message.guild.channels.cache;
		const emojis = message.guild.emojis.cache;
		const guildOwner = await message.guild!.members.fetch(message.guild!.ownerID);
		const embed = new MessageEmbed()
			.setColor('RANDOM')
			.setDescription(`**${message.guild!.name}** (${message.guild!.id})`)
			.setColor('#94d82d')
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
			.addField('General Info:', [
				`**Server Name**:\n ${message.guild.name}`,
				`**Server Owner**:\n ${guildOwner.user.tag}`,
				`**Server Region**:\n ${regions[message.guild.region]}`,
				`**Boosts Tier:**\n  ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'None'}`,
				`**Time Created**:\n ${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} ${moment(message.guild.createdTimestamp).fromNow()}`,
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
			return message.util.send(embed)
	}
}