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

	// Default response: Output commands
	if(message.content.startsWith(`${prefix}`)) {
		displayCommand(message);
		return;
	}
});

async function displayCommand(message) {
	let output = '\:house_with_garden: \n';
	output += '`!meow fact` to learn some facts about meow \:kissing_cat: \n';
	output += '`!meow img` to see a cute picture of meow \:cat2: \n\n';
	output += '`!woof fact` to display fact about woof \:dog: \n';
	output += '`!woof img` to check out a cute picture of woof woof \:dog2: \n';
	return message.channel.send(output);
}

const cat = require('https');
async function callCat(message) { 
	const catFact = 'https://cat-fact.herokuapp.com/facts/random';
	const catImg = 'https://aws.random.cat/meow';

	const args = message.content.split(' ');
	const request = args[1];

	if(request == 'fact') {
		cat.get(catFact, (resp) => {
			let data = '';
			resp.on('data', (fact) => {
				data+= fact;
			});

			resp.on('end', () => {
				const obj = JSON.parse(data);
				const output = obj.text;
				//console.log('Retrieved fact:\n' + output.text);
				return message.channel.send(output);
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
				const imgLink = obj.file;
				//console.log(imgLink);
				return message.channel.send("Meowww \:smiley_cat: ", {files: [imgLink]});
			});

		}).on('Error', (err) => {
			console.log("error: \n" + err.message);
		});
	} else {
		return message.channel.send('Invalid input \:scream_cat:');
	}
	
}

const dog = require('https');
async function callDog(message) { 
	const dogFact = 'https://some-random-api.ml/facts/dog';
	const dogImg = 'https://random.dog/woof.json';

	const args = message.content.split(' ');
	const request = args[1];

	if(request == 'fact') {
		dog.request(dogFact, (resp) => {
			let data = '';
			resp.on('data', (fact) => {
				data += fact;
			});

			resp.on('end', () => {
				const obj = JSON.parse(data);
				const output = obj.fact;
				console.log('Retrieved fact:\n' + output);
				return message.channel.send(output);
			});
		}).on('error', (err) => {
			console.log("error: \n" + err.message);
		});
		
	} else if (request == 'img') {
		dog.get(dogImg, (resp) => {
			let data = '';
			resp.on('data', (info) => {
				data += info;
			});

			resp.on('end', () => {
				const obj = JSON.parse(data);
				const imgLink = obj.url;
				//console.log(imgLink);
				return message.channel.send("Woof wooff \:dog:", {files: [imgLink]});
			});
		}).on('Error', (err) => {
			console.log("error: \n" + err.message);
		});

	} else {
		return message.channel.send('Invalid input \:hotdog:');
	}
	
}

client.login(token);