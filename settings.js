//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +6283890667327
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
global.ytname = "YT: Yan" //ur yt chanel name
global.socialm = "GitHub: Yan" //ur github or insta name
global.location = "Indonesia, Jawa Barat, Jakarta" //ur location

//new
global.botname = 'Yan' //ur bot name
global.ownernumber = '6283890667327' //ur owner number
global.ownername = 'Yan Milik Mika' //ur owner name
global.websitex = "https://www.youtube.com/@Ryannn0001"
global.wagc = "https://whatsapp.com/channel/0029Vad4tBB1noz9keqWtI0I"
global.themeemoji = '🪀'
global.wm = "Yan x Mika Bot Inc."
global.botscript = 'https://github.com/BlackJackerr/YanCheemsMD11' //script link
global.packname = "Created By"
global.author = "Yan & Mika\n+6283890667327"
global.creator = "6283890667327@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["6283890667327"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v4' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '' //set autoblock country code
global.antiforeignnumber = '' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = true //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
