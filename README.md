# jones-fivem_discordbot
A Discord Bot for FiveM that lets you do almost anything in game from discord

## Description
After spending days trying to find something that would let me send messages and trigger events in the game from discord with no results, I decided to build my own discord bot that would have the functionality. To save the time and hair of others who are also in need of this, I have made this open source.
The bot itself comes in the form of a FiveM resource so you can do almost anything you could do with a normal FiveM resource. I have added basic commands like freeze, unfreeze, say, asay but you can add more yourself. 
Feel free to contribute.

## Installation
- Download or clone the repository
- Put it in your resources folder
- Open config.json and replace token with your own bot token which you can find by opening https://discord.com/developers/applications in your browser, click on New Application > Type a name > Click Create > On the left side, you'll see "Bot" click on it > Click on Add Bot > Under token, click copy.
- Add `ensure jones-fivem_discordbot` to your server.cfg
- Invite the bot to your discord server by opening https://discordapp.com/oauth2/authorize?client_id=123456789&permissions=403254272&scope=bot in your browser and replace client_id with your bot's client_id which you can find by opening https://discord.com/developers/applications > Select the application you used with your bot > Under client ID, click copy.
- Enjoy!

## FAQs
**Q:** I'm getting 
> Warning: Resource jones-fivem_discordbot does not specify an `fx_version` in fxmanifest.lua. 

What should I do?

**A:** You need to update your FiveM server artifacts. Download the latest version depending on your OS: [Linux](https://runtime.fivem.net/artifacts/fivem/build_proot_linux/master/) [Windows](https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/).
