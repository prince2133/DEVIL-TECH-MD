/* 
created by CYBER LOKU ASHUU
contact me 94760091093
© Copy coder alert ⚠
*/

const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try{
let about = `*╭┈──────────────────•*

*👋 HELLO* *${pushname}*

*╰┈──────────────────•*
 *♡︎•━━━━━━━━━☻︎━━━━━━━━━•♡︎*
*╭─────────────────────┈⊷*
*┃◈ •╭═══ ━ ━ • ━ ━ ━ ═══♡᭄*
*┃◈ •│       「 𝗠𝗬 𝗜𝗡𝗧𝗥𝗢 」*
*┃◈ •│ Name      : ᴄʏʙᴇʀ ʟᴏᴋᴜ ᴀꜱʜᴜᴜ*
*┃◈ •│ Place      : ꜱʀɪ ʟᴀɴᴋᴀ*
*┃◈ •│ Gender    : ᴍᴀʟᴇ*
*┃◈ •│ Age       : 18+*
*┃◈ •│ Status     : 𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁*
*┃◈ •│ Phone     : wa.me/94760091093*
*┃◈ •│ Github     : deviltech567*
*┃◈ •│ Website    : undefined* 
*┃◈ •╰═══ ━ ━ • ━ ━ ━ ═══♡᭄*
*┃◈ •│repo : https://github.com/deviltech567/DEVIL-TECH-MD*
*╰─────────────────────┈⊷*
*╭─────────────────────┈⊷*
*┃◈ •[ • DEVIL-TECH-MD-TEAM • ]*
*┃◈ •╭┈───────────────•*
*┃◈ •│  ◦* *▢➠ ᴛᴇᴀᴍ ᴠᴏɪᴅ ɴᴇxᴜꜱ*
*┃◈ •│  ◦* *▢➠ ᴄʏʙᴇʀ ᴛʜᴇʜᴀɴ*
*┃◈ •│  ◦* *▢➠ ꜱᴛɪʟ xᴀɴᴅᴇʀ*
*┃◈ •│  ◦* *▢➠ ᴀʟᴀɴ xᴅ*
*┃◈ •╰┈───────────────•*
*┃◈ •────────────•⟢*
> *㊛ Ꮲᴏꪝᴇʀᴅ Вʏ Cʏʙᴇʀ Lᴏᴋᴜ Aꜱʜᴜᴜ Oꜰᴄ ❗*
*╰─────────────────────┈⊷*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:about},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
