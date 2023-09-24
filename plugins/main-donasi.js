let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'donasi'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `Hai 👋
Ayo kakak kakak dan teman teman untuk ikut membantu owner HaFlazh-BOT menjadi lebih 
baik kembali dengan cara ikut berdonasi, opsi pembayarannya ada dibawah yaa kak
┏━━━ꕥ〔 Hafizh's 〕ꕥ━⬣ 
┃Pulsa: 085651307830 ( Im3 )
┃Pulsa: 085921738489 ( XL )
┃Gopay: 085651307830
┃Dana: 085651307830
┃ShopeePay: 085651307830
┃OVO: 085651307830
┃LinkAja: 085651307830
┗━━━ꕥ
┏━━━ꕥ〔 Website 〕ꕥ━⬣ 
┃Saweria: https://saweria.co/HafizhFlash
┃Trakteer: https://trakteer.id/HafizhFlash22
┃Socialbuzz: https://socialbuzz.com/hafizh_flash
┃Thanks for Donationing!
┗━━━ꕥ

Bagi kalian yang sudah berdonasi, chat owner ajaa untuk mendapatkan premium dengan 
ketik .owner lalu kirim bukti ke owner yaaa
Terimakasih atas donasinya kakak

Contact person Owner:
wa.me/${numberowner} (Owner)

*donasi via follow ig juga boleh hehe...*`
  m.reply(anu)

let img = 'https://i.ibb.co/CpjLDhr/Screenshot-20230906-203053-Order-Kuota.png'
conn.sendFile(m.chat, img, 'img.jpg', don, m)
  
}
handler.help = ['donasi', 'donate']
handler.tags = ['xp', 'info']
handler.command = /^(donasi|donate)$/i

module.exports = handler
