const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "MbFGASzS#XaxvUmj1UzbPbYCPrqTwVIiCNlPzub3x5pYu19RhtuY",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*JUST NOW YOUR STATUS SEEN BY DEVIL-TECH-MD 👻🤍👀📍*",
// set the auto reply massage on status reply 
PREFIX: process.env.PREFIX || "/",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "DEVIL-TECH-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "ᴄʏʙᴇʀ ʟᴏᴋᴜ ᴀꜱʜᴜᴜ ᴏꜰᴄ",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
CUSTOM_OWNER_REACT: process.env.CUSTOM_OWNER_REACT || "false",
// make this true for custum owner emoji react    
CUSTOM_OWNER_REACT_EMOJIS: process.env.CUSTOM_OWNER_REACT_EMOJIS || "💀,❗,🗿,👀",
// chose custom owner react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "94760091093",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ᴄʏʙᴇʀ ʟᴏᴋᴜ ᴀꜱʜᴜᴜ ᴏꜰᴄ",
// add bot owner name
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
DESCRIPTION: process.env.DESCRIPTION || "*㊛ Ꮲᴏꪝᴇʀᴅ Вʏ Cʏʙᴇʀ Lᴏᴋᴜ Aꜱʜᴜᴜ Oꜰᴄ ❗*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/zhvB3bLg/7535.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> HEY 👋 I'M ALIVE NOW*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
OWNER_REACT: process.env.OWNER_REACT || "false",
// make this true or false for owner react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "private",
// make bot public-private-inbox-group 
DELETE_LINK: process.env.DELETE_LINK || "true",
// make anti link true,false for groups 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "true",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "true",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "94760091093",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", 
// change it to 'same' if you want to resend deleted message in same chat 
PROFILE_IMG: process.env.PROFILE_IMG || "https://i.ibb.co/P7BWbhs/lordali.jpg",
// add img for profile msg
YOUR_DETAILS: process.env.YOUR_DETAILS || "*~◈___🐰 ⃝⃫⃔͜වදන් කාලාවේ කෙල්ල͢න්ගෙ හදව͢තේ ඉන්͢න සිහි͢න කුමා͢රයා⃝⃫⃔͜👅___🧸🤍''◈~*\n\n*~◈___🐰⃝⃫⃔͜  ස්ටේටස් විව්ස් කලාවෙ ලස්සන ලොකු අශූ බබාහ් තමා ඉති͢න් හලි͢ද💸⃝⃫⃔͜_ ___🧸🤍''◈~*\n\n*◈___________▣◈▣___________🧸🤍◈*\n\n> *🐰♥️✨_ 𝐖ᴇʟᴄᴏᴍᴇ ᴍʏ ᴄʜᴀᴛ ʙᴀʙʜ _🙈♥️🔏*\n\n> *~❤️🐣සෙ̶ව් දා̶පි̶ය̶ මාව ගුටි නොකා 🥵💗✨ /ᴀ.~*\n\n\n*ɴ ᴀ ᴍ ᴇ /. Oʟᴅ Kɪɴɢ Lᴏᴋᴜ AꜱHᴜᴜ PᴀᴛHɪyA '' ヤ  𝐁ʙᴀ''ʜ 😩  💀❗ /.*\n\n*ꜰ ʀ ᴏ ᴍ /. ᴘᴀɴᴀᴅᴜʀᴀ 🍒🐣 /.*\n\n*ɢ ᴇ ɴ ᴅ ᴇ ʀ /. ʙᴏʏ 🍒  /. 🐣.*\n\n*ᴀ ɢ ᴇ /. 18+*  *🍓❤ /.*\n\n*~◈___❨ මව, සෙව් දාගන්න පැටියෝ )___🧸🤍◈~*\n\n\n*ɢɪʀʟs ᴀɴᴅ ʙᴏʏs ᴏɴʟʏ sᴛᴀᴛᴜs ᴠɪᴇᴡs 💀❗*\n\n\n\n> ~*◈___හැමෝම හොයන Oʟᴅ Kɪɴɢ Lᴏᴋᴜ AꜱHᴜᴜ PᴀᴛHɪyA '' ヤ  𝐁ʙᴀ''ʜ මම තමයි ___🧸🤍''◈*~",
// add img for profile msg
AUTO_RECORDING: process.env.AUTO_RECORDING || "true"
// make it true for auto recoding 
};
