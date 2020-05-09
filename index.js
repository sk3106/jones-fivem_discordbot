const Discord = require('discord.js')
const client = new Discord.Client()
const {
	prefix,
	token,
} = require('./config.json');
const AllowedRoles = ["Admin", "Administrator", "Owner", "Founder", "Moderator"];

client.on('ready', () => {
  console.log(`\x1b[34m[Jones \x1b[34mDiscord] \x1b[37m${client.user.tag} started!`)
  client.user.setStatus('dnd')
  client.user.setActivity(`Servers running Jones Discord`, {type: "WATCHING"});
});

client.on("message", async message => {
	if (message.author.bot) return;
	if(message.content.indexOf(prefix) !== 0) return;
  
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	
	switch(command) {
		case "say":
			if (args[0] != null) {
				let txt = args.join(" ");
				
				emitNet('chat:addMessage', -1, { args: [ `^1[DISCORD] ^0${message.author.username}: ${txt}` ] });
			}
			else {
				return message.channel.send("I cannot send an empty message!");
			}
			break;
		case "asay":
			if (args[0] != null) {
				if (message.member.roles.some(r=>AllowedRoles.includes(r.name))) {
					let txt = args.join(" ");
					
					emitNet('chat:addMessage', -1, { args: [ `^1[DISCORD] ^0${message.author.username}: ^1${txt}` ] });
				}
				else {
					return message.channel.send("Insufficient Permissions.");
				}
			}
			else {
				return message.channel.send("I cannot send an empty message!");
			}
			break;
		case "freeze":
			if (args[0] != null && !isNaN(args[0])) {
				if (message.member.roles.some(r=>AllowedRoles.includes(r.name))) {
					let player = args[0];
					let target = GetPlayerName(player);
					
					emitNet('chat:addMessage', -1, { args: [ `^2${target}^0 has been frozen by ^1${message.author.username}` ] });
					emitNet('noderp_bot:Freeze', player, 1, `${message.author.username}`);
				}
				else {
					return message.channel.send("Insufficient Permissions.");
				}
			}
			else {
				return message.channel.send("Invalid ID");
			}
			break;
		case "unfreeze":
			if (args[0] != null && !isNaN(args[0])) {
				if (message.member.roles.some(r=>AllowedRoles.includes(r.name))) {
					let player = args[0];
					let target = GetPlayerName(player);
					
					emitNet('chat:addMessage', -1, { args: [ `^2${target}^0 has been unfrozen by ^1${message.author.username}` ] });
					emitNet('noderp_bot:Freeze', player, 0, `${message.author.username}`);
				}
				else {
					return message.channel.send("Insufficient Permissions.");
				}
			}
			else {
				return message.channel.send("Invalid ID");
			}
			break;
		case "kick":
			if (args[0] != null && args[1] != null && !isNaN(args[0])) {
				if (message.member.roles.some(r=>AllowedRoles.includes(r.name))) {
					let player = args[0];
					let sliced = args.slice(1);
					let reason = sliced.join(" ");
					let target = GetPlayerName(player);
					
					if (target != null) {
						emitNet('chat:addMessage', -1, { args: [ `^2${target}^0 has been kicked by ^1${message.author.username}^0 for ^1${reason}` ] });
						DropPlayer(player, reason);
					}
					else {
						return message.channel.send("Invalid Player.");
					}
				}
				else {
					return message.channel.send("Insufficient Permissions.");
				}
			}
			else {
				return message.channel.send("Invalid ID or no reason specified");
			}
			break;
		default:
			return message.channel.send("Invalid Command!");
	}
});


client.login(token)
