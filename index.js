const Discord = require('discord.js');
const {
	prefix,
	token,
} = require('./config.json');

const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready !');
});

client.once('reconnecting', () => {
	console.log('Reconnecting!');
});

client.once('disconnect', () => {
	console.log('Disconnect!');
});

client.on('message', async message => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	if (message.content.startsWith(`${prefix}meow`)) {
		callCat(message);
		return;
	}

	if(message.content.startsWith(`${prefix}woof`)) {
		callDog(message);
		return;
	}
});

const cat = require('https');
async function callCat(message) { 
	const catFact = 'https://cat-fact.herokuapp.com/facts/random';
	const catImg = 'https://api.thecatapi.com/v1/images/search';

	const args = message.content.split(' ');
	const request = args[1];

	if(request == 'fact') {
		cat.get(catFact, (resp) => {
			let data = '';
			resp.on('data', (fact) => {
				data+= fact;
			});

			resp.on('end', () => {
				const output = JSON.parse(data);
				//console.log('Retrieved fact:\n' + output.text);
				return message.channel.send(output.text);
			});
		}).on('error', (err) => {
			console.log("error: \n" + err.message);
		});
	} else if (request == 'img') {
		cat.get(catImg, (resp) => {
			let data = '';
			resp.on('data', (info) => {
				data += info;
			});

			resp.on('end', () => {
				const obj = JSON.parse(data);
				const imgLink = obj[0].url;
				//console.log(imgLink);
				return message.channel.send("Meowww", {files: [imgLink]});
			});

		}).on('Error', (err) => {
			console.log("error: \n" + err.message);
		});
	} else {
		return message.channel.send('Invalid input, grrrr');
	}
	
}

const dog = require('http');
async function callDog(message) { 
	const dogFact = 'http://dog-api.kinduff.com/api/facts?number=1';
	const catImg = 'https://api.thecatapi.com/v1/images/search';

	const args = message.content.split(' ');
	const request = args[1];

	if(request == 'fact') {
		dog.get(dogFact, (resp) => {
			let data = '';
			resp.on('data', (fact) => {
				data+= fact;
			});

			resp.on('end', () => {
				const obj = JSON.parse(data);
				const output = obj.facts[0];
				console.log('Retrieved fact:\n' + output);
				return message.channel.send(output);
			});
		}).on('error', (err) => {
			console.log("error: \n" + err.message);
		});
	} else if (request == 'img') {
		console.log('smth');
	} else {
		return message.channel.send('Invalid input, grrrr');
	}
	
}


client.login(token);