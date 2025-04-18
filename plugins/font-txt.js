




const { cmd } = require('../command'); const axios = require('axios'); cmd({ pattern: "fancy", alias: ['font', "style"], react: '♻️', desc: "Convert text into various fonts.", category: "tools", filename: __filename }, async (conn, mek, m, { from, quoted, body, args, q, reply }) => { try { if (!q) return reply("Please provide text to convert into fonts. Eg .fancy Carmen"); let response = await axios.get('https://www.dark-yasiya-api.site/other/font?text=' + encodeURIComponent(q)); let data = response.data; if (!data.status) return reply("Error fetching fonts. Please try again later."); let fontResults = data.result.map(font => '*' + font.name + ":*\n" + font.result).join("\n\n"); let message = `*DEVIL-TECH-MD FANCY FONTS*:\n\n${fontResults}\n\n> *㊛ Ꮲᴏꪝᴇʀᴅ Вʏ Cʏʙᴇʀ Lᴏᴋᴜ Aꜱʜᴜᴜ Oꜰᴄ❗*`; await conn.sendMessage(from, { text: message, contextInfo: { mentionedJid: [m.sender], forwardingScore: 999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363395467876104@newsletter', newsletterName: '????? ???? ?', serverMessageId: 143 } } }, { quoted: mek }); } catch (error) { console.error(error); reply("An error occurred while fetching fonts."); } });
