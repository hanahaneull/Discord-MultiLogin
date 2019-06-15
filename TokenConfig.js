var discordClientFactory = require('./discordClient.js');
    var configsArray = [];
    var config;
    var botArray = [];
    
    config = {};
    config.token = ''; //paste your token in here
    configsArray.push(config);
	
    config = {};
    config.token = ''; //paste your token in here
    configsArray.push(config);

    config = {};
    config.token = ''; //paste your token in here
    configsArray.push(config);

    config = {};
    config.token = ''; //paste your token in here
    configsArray.push(config);

    config = {};
    config.token = ''; //paste your token in here
    configsArray.push(config);

    config = {};
    config.token = ''; //paste your token in here
    configsArray.push(config);

    config = {};
    config.token = ''; //paste your token in here
    configsArray.push(config);

    config = {};
    config.token = ''; //paste your token in here
    configsArray.push(config);

    config = {};
    config.token = ''; //paste your token in here
    configsArray.push(config);

    config = {};
    config.token = ''; //paste your token in here
    configsArray.push(config);

    config = {};
    config.token = ''; //paste your token in here
    configsArray.push(config);
	
	
	
    console.log('Number of configurations set up: ' + configsArray.length);
     
    for	(index = 0; index < configsArray.length; index++) {
    	var config = configsArray[index];
		
		var bot = discordClientFactory.buildBot(config);
		bot.doLogin();
		botArray.push(bot);
    }
     
    console.log('Running ' + botArray.length + ' bots.');
