    const {Client, RichEmbed, Discord} = require('discord.js') ;
    const client = new Client ;
    const settings = require('./settings.json') ;
    
    client.on('ready',()=>{
        console.log(`${client.user.tag} 準備好上戰場惹！`) ;
    }) ;

    client.on('message',msg=>{
        if(msg.content.startsWith(settings.prefix+'test')){
            msg.channel.send('test committed') ;
        }
        if(msg.content.startsWith(settings.prefix+'tel')){
            msg.channel.send('0976') ;
        }
        if(msg.content.startsWith(settings.prefix+'OK')){
            msg.channel.send('OK?') ;
        }
    }) ;

    client.login(settings.token) ;
