# Aww 

<p align="center">
    <img src="logo.png">
</p>

## Description:
The repo is the source code of the Discord bot `Aww` for cat and dog lovers. The bot gives users random facts about either cats and dogs per requested. In addition, you can ask for random cute pictures of them, so you will never be bored !!!

## Demo:

<p align="center">
    <img src="demo.gif">
</p>

## Bot Syntax:
+ `!` to display a list of available command.
+ `!meow fact`: display cat fact.
+ `!meow img`: dislay cat image.
+ `!woof fact`: display dog fact.
+ `!woof img`: display dog image.

## Build your bot:
You need [DiscordJS](https://discord.js.org/#/) to run the program.
+ Install by `npm install discordjs`.

#### Create Discord bot:
+ Create an application from [Discord developer portal](https://discord.com/developers/applications).
+ Check `bot` option from `scopes`. That will create a new bot. Then add server permission for the bot: 
    - `Send Messages`
    - `Manage Messages`
    - These are the needed permissions fot the bot to receive and return request from user.
+ After creating the bot. There will be a link appears at the bottom of scopes section. Copy and paste the link to your browser, Discord will let you to invite the bot into your server in that window.

#### Link the bot to our code base:
+ Clone the repo.
+ Copy the Token of the bot.
+ Edit the file `config.json` in this repo with the token you just received.
Example in `config.json`:
```
{
"prefix": "!",
"token": "NzsndkfjnskdSkb90wMDE2NTExOTQyNjk3.XrlUsA.OOBfhc2Eqn3-0QEAkn_OANJpJGM"
}
```
+ In addition, you can change the prefix of the command as well. The default is `!`

#### Run the bot:
+ `node index.js`
+ If the output on screen is `Ready!`, then the bot is now ready to roll !!

#### Host Aww bot:
+ You can deploy to Heroku to host *Aww-bot*.

## Dependency:
+ [DiscordJS](https://discord.js.org/#/)

## Acknowledgement:
The following APIs were used in the project to feed information to Aww-bot.
+ [Cat facts](https://alexwohlbruck.github.io/cat-facts/)
+ [Cutie cat pictures](https://docs.thecatapi.com/)
+ [Dog facts API I created by myself](https://github.com/DukeNgn/Dog-facts-API)
+ [Dog images](https://random.dog)
+ [Logo Source](https://www.pinterest.ca/pngtree/)
