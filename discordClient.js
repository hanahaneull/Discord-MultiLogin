var Discord = require('discord.js');
var botFactory = {};
 
botFactory.buildBot = function (config)
{	
	const settings = new Discord.Client({
		disableEveryone: true
	});
	
	const bot = settings
	
	bot.token = config.token;
	
	bot.on('ready', () => {
		console.log("Logged as: " + bot.user.tag);
	});

	bot.doLogin = function ()
	{
		this.login(this.token);
	}
	
	
	return bot;
}
 
module.exports = botFactory;