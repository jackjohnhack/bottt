const axios = require("axios");

var handler = async (m, { text, usedPrefix, command }) => {
  if (!text) {
    throw `Contoh:\n${usedPrefix + command} boobs`;
  }
  
const q = text;
const search = await fetch(API('lann', '/api/search/xvideos', { query: q, apikey: lann }));    
  const hasil = search.data.result;  
  let teks = `*XVIDEOS RESULTS* \n\n🔍 *KEYWORDS*: *${text}*\n\n`;
  let no = 1;
  
  for (let i of hasil) {
    teks += `📑 *No* : ${no++}\n📚 *Title* : ${i.title}\n⏱️ *Duration* : ${i.duration}\n🔗 *URL* ${i.url}\n\n─────────────────\n\n`;
  }
  
  await conn.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});
  await conn.sendMessage(m.chat, { image: { url: hasil[0].thumb }, caption: teks }, { quoted: m });
 };

handler.command = ['xvideossearch','xsearch'];
handler.tags = ['internet'];
handler.premium = true

module.exports = handler;
