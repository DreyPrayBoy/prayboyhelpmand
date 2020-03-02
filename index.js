const Discord = require('discord.js');
const bot = new Discord.Client();
const ms = require('ms');

const token = 'NjgzMjI3NDU5OTEwNjMxNDM0.Xlofpg.2whKYV5IpV7HYI7izKPlZp02f48';

const PREFIX = '!';



bot.on('ready', () =>{
    console.log('This bot is online!');
    bot.user.setActivity('MADE BY DREY[PB]', { type: 'WATCHING'}).catch(console.error);

});

bot.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.find(channel => channel.name === 'intrari-iesiri');
    if(!channel) return;

    channel.send(`Bine ati venit pe comunitatea Prayboy Romania, ${member}, va rog sa cititi regulamentele existente pe discord!`);
});

bot.on('guildMemberRemove', member =>{

    const channel = member.guild.channels.find(channel => channel.name === 'intrari-iesiri');
    if(!channel) return;

    channel.send(`Ne pare rau ca ai parasit comunitatea, ${member}, speram sa te reintorci!`);
});

bot.on('message', (message) => {

    if (message.content == '!ip') {
        //message.reply('pong');
        message.channel.sendMessage('Pentru a te conecta pe server-ul comunitatii Prayboy Romania, va trebui sa folosesti ip-ul: 185.244.151.16:30549');
    }

});

bot.on('message', (message) => {

    if (message.content == '!prayboy') {
        //message.reply('pong');
        message.channel.sendMessage('Prayboy Romania este o comunitate de Hard Roleplay. Pentru mai multe detalii va rog sa verificati personal sectiunile de regulamente!');
    }

});

bot.on('message', (message) => {

    if (message.content == '!despre') {
        //message.reply('pong');
        message.channel.sendMessage('Fondatorii acestei comunitati sunt Drey&Safira&Zetson. Donatiile se vor realiza doar catre fondatori! Nu raspundem de donatiile realizate catre alti membrii ai comunitatii noastre!');
    }

});

bot.on('message', (message) => {

    if (message.content == '!drey') {
        //message.reply('pong');
        message.channel.sendMessage('Instagram-ul lui Drey: https://www.instagram.com/aftheotfwt/');
    }

});

bot.on('message', (message) => {

    if (message.content == '!zetson') {
        //message.reply('pong');
        message.channel.sendMessage('Instagram-ul lui Zetson: https://www.instagram.com/zetsonel/');
    }

});

bot.on('message', (message) => {

    if (message.content == '!safira') {
        //message.reply('pong');
        message.channel.sendMessage('Instagram-ul lui Safirei: https://www.instagram.com/ksafiraa/');
    }

});

bot.on('message', (message) => {

    if (message.content == '!ytbzetson') {
        //message.reply('pong');
        message.channel.sendMessage('Canalul de youtube al lui Zetson: https://www.youtube.com/channel/UC5tH_Nb80c5yaQzd3En905g');
    }

});

bot.on('message', (message) => {

    if (message.content == '!ytbdrey') {
        //message.reply('pong');
        message.channel.sendMessage('Canalul de youtube al lui Drey: https://www.youtube.com/channel/UCWKhwsHpdWPVbZ6Q5WW8Qyw?view_as=subscriber');
    }

});

bot.on('message', (message) => {

    if (message.content == '!ytbmuzica') {
        //message.reply('pong');
        message.channel.sendMessage('Canalul de youtube de muzica al lui Drey: https://www.youtube.com/channel/UCn60wxb1xAWH2TOpV2empWA');
    }

});


bot.on('message', (message) => {

    if (message.content == '!buy') {
        //message.reply('pong');
        message.channel.sendMessage('Daca vrei un bot la fel de bun ca si mine sau niste masini facute unice, da-i mesaj lui Drey !');
    }

});


bot.on('message', (message) => {

    if (message.content == '!aplicatii') {
        //message.reply('pong');
        message.channel.sendMessage('@everyone Aplicatii deschise ! Am sa te rog sa folosesti comanda %apply in aceasta camera tip chat, iar in privat vei primi un chestionar pe care va trebui sa il completezi. [ 14 + ] + [ MINIM 5 ORE PE ZI ]');
    }

});


bot.login('NjgzMjI3NDU5OTEwNjMxNDM0.Xlofpg.2whKYV5IpV7HYI7izKPlZp02f48');


