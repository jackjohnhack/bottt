
// - Ubah nomor owner dan wm di sini.
// + Daftar apikey terlebih dahulu sebelum menggunakan svript ini link
//https://api.betabotz.org
//https://api.botcahx.live
// - Jika sudah mendaftar salin key yang ada di profie dan paste di global.lann && global.btc
// - Contoh global.btc = 'ngaksk?'//register di https://api.botcahx.live
// - Contoh global.lann = 'Ntahla' //register key di https://api.betabotz.org
// - Jika sudah maka lanjutkan untuk mengubah nomor owner dan wm.


// List Key 
// Betabotz = digunakan hampir di semua fitur kecuali linkshort
// Botcahx  = digunakan untuk linkshort saja

global.owner = ['6285651307830']  
global.mods = ['6285651307830'] 
global.prems = ['6285651307830']
global.nameowner = 'Hafizh'
global.numberowner = '6285651307830' 
global.mail = 'muhafid6422@gmail.com' 
global.dana = '6285651307830'
global.pulsa = '6285921738489'
global.gopay = '6285651307830'
global.namebot = 'HaFlazh-BOT'
global.gc = 'https://chat.whatsapp.com/FZSXzC6XEl12h5mg2dSGJt'
global.web = 'https://github.com/jackjohnhack'
global.instagram = 'https://instagram.com/hfizh22'
global.wm = 'HaFlazhBOT-MD'
global.watermark = wm
global.wm2 = '⫹⫺ HaFlazh-BOT'
global.wm3 = '© hafizh'
global.wm4 = 'made by HaFlazhBOT-MD'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Servernya Error*_'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'
global.stiker_wait = '*⫹⫺ Stikernya otw bosque....*'
global.packname = 'Made with HaFlazh-BOT'
global.author = 'wa.me/6285171662264'

//---- image thumbnail 
global.thumb = 'https://telegra.ph/file/4aab52043f8faf1727355.jpg'

//===> Apikey
global.lann = 'flazhing' //isi apikey mu https://api.betabotz.org
global.btc = 'NT8nDsbT'//Isi apikey di https://api.botcahx.live
global.APIs = {   
  lann: 'https://api.betabotz.org',
  btc: 'https://api.botcahx.live'
}
global.APIKeys = { 
  'https://api.betabotz.org': 'flazhing' //isi apikey mu https://api.betabotz.org
}

global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
