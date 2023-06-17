/**Penjelasan: Untuk menggunakan script ini, kamu akan perlu mengganti nomor owner dan wm terlebih dahulu. Kamu juga harus memiliki api key dari kedua website ini https://api.botcahx.live dan https://api.betabotz.me. Setelah memiliki api key, kamu bisa menggantinya dengan menyalin key tersebut dari profilmu dan paste di variabel global.btc. Contohnya, global.btc = 'xzRhejka'. Setelah itu, kamu bisa melanjutkan dengan mengubah nomor owner dan wm.
**/


global.owner = ['51945463812','51966099729']  
global.mods = ['51945463812'] 
global.prems = ['51945463812']
global.nameowner = '𝐒𝐘𝐒𝕊𝕠𝕝𝕦𝕥𝕚𝕠𝕟𝕤'
global.numberowner = '51945463812' 
global.mail = 'SysSolutions.Peru@outlook.com' 
global.dana = '51945463812'
global.pulsa = '51945463812'
global.gopay = '51945463812'
global.namebot = '𝐒𝐘𝐒𝕊𝕠𝕝𝕦𝕥𝕚𝕠𝕟𝕤'
global.gc = 'https://chat.whatsapp.com/I78hAmdyLzt8zBIxOIHRtd'
global.web = 'https://github.com/SysSolutionsPE'
global.instagram = 'https://instagram.com/syssolutionsperu'
global.wm = '©𝐒𝐘𝐒𝕊𝕠𝕝𝕦𝕥𝕚𝕠𝕟𝕤'
global.watermark = '𝐒𝐘𝐒𝕊𝕠𝕝𝕦𝕥𝕚𝕠𝕟𝕤'
global.wm2 = '⫹⫺ 𝐒𝐘𝐒𝕊𝕠𝕝𝕦𝕥𝕚𝕠𝕟𝕤'
global.wm3 = '© 𝐒𝐘𝐒𝕊𝕠𝕝𝕦𝕥𝕚𝕠𝕟𝕤'
global.wm4 = '© 𝐒𝐘𝐒𝕊𝕠𝕝𝕦𝕥𝕚𝕠𝕟𝕤'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made with'
global.author = '𝐒𝐘𝐒𝕊𝕠𝕝𝕦𝕥𝕚𝕠𝕟𝕤'
global.alpiskey = 'a25d62c9' //daftar sendiri jika key habis https://alpis.eu.org

global.btc = 'wyMUT6hb' //Daftar terlebih dahulu https://api.botcahx.live
global.lann = '5Db5PFby' //Note Key Ini Hanya Bertahan Selama 4 Day Sejak Config.js update! lebih baik register di https://api.betabotz.me
global.APIs = { 
  tio: 'https://api.botcahx.live',
  alpis: 'https://alpis.eu.org'
}
global.APIKeys = { 
  'https://api.botcahx.live': 'wyMUT6hb' //isi apikey mu https://api.botcahx.live
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
