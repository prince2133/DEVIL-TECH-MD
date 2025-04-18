
const { cmd } = require("../command");
const moment = require("moment");

let botStartTime = Date.now(); // Enregistrement de l'heure de démarrage du bot
const ALIVE_IMG = "https://i.ibb.co/Mxk8tP6X/lordali.jpg"; // Assurez-vous que cette URL est valide

cmd({
    pattern: "alive2",
    desc: "Check if the bot is active.",
    category: "info",
    react: "🤖",
    filename: __filename
}, async (conn, mek, m, { reply, from }) => {
    try {
        const pushname = m.pushName || "User"; // Nom de l'utilisateur ou valeur par défaut
        const currentTime = moment().format("HH:mm:ss");
        const currentDate = moment().format("dddd, MMMM Do YYYY");

        const runtimeMilliseconds = Date.now() - botStartTime;
        const runtimeSeconds = Math.floor((runtimeMilliseconds / 1000) % 60);
        const runtimeMinutes = Math.floor((runtimeMilliseconds / (1000 * 60)) % 60);
        const runtimeHours = Math.floor(runtimeMilliseconds / (1000 * 60 * 60));

        const formattedInfo = `
*╭━━━━━〔  DEVIL TECH MD  〕━━━━━⊷*
*┃*
*┃• Hey 👋🏻* *${pushname}*
*┃◈╭──────────────────·๏*
*┃◈│•*
*┃◈│•*🕒 *Time*: *${currentTime}*
*┃◈│•*
*┃◈│•*📅 *Date*: *${currentDate}*
*┃◈│•*
*┃◈│•* *Uptime*: *${runtimeHours} hours, ${runtimeMinutes} minutes, ${runtimeSeconds} seconds*
*┃◈│•*
*┃◈│•* *🤖sᴛᴀᴛᴜs*: *ᴅᴇᴠɪʟ-ᴛᴇᴄʜ-ᴍᴅ ᴀʟɪᴠᴇ ᴀɴᴅ ʀᴇᴀᴅʏ*
*┃◈└─────────────────┈⊷*
*┗═══════════════════════┉┈⚆*

> *㊛ Ꮲᴏꪝᴇʀᴅ Вʏ Cʏʙᴇʀ Lᴏᴋᴜ Aꜱʜᴜᴜ Oꜰᴄ❗*
        `.trim();

        // Send message with video and externalAdReply
        await conn.sendMessage(from, {
            video: { url: 'https://files.catbox.moe/fwjl3x.m4v' },
            caption: status,
            contextInfo: {
                mentionedJid: ['94760091093@s.whatsapp.net'],
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363395467876104@newsletter',
                    newsletterName: "𝐃𝐄𝐕𝐈𝐋 𝐓𝐄𝐂𝐇 𝐌𝐃",
                    serverMessageId: 999
                },
                externalAdReply: {
                    title: '𝐃𝐄𝐕𝐈𝐋 𝐓𝐄𝐂𝐇 𝐌𝐃',
                    body: 'Cʏʙᴇʀ Lᴏᴋᴜ Aꜱʜᴜᴜ Oꜰᴄ ❗',
                    mediaType: 1,
                    sourceUrl: 'https://whatsapp.com/channel/0029Vb9u0GQ8qIzmoGPEtq0s',
                    thumbnailUrl: 'https://i.ibb.co/zhvB3bLg/7535.jpg',
                    renderLargerThumbnail: true,
                    showAdAttribution: true
                }
            }
        }, { quoted: mek });
        
        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://cdn.ironman.my.id/i/hmxjch.mp4' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });

    } catch (error) {
        console.error("Error in alive command: ", error);
        
        // Répondre avec des détails de l'erreur
        const errorMessage = `
❌ An error occurred while processing the alive command.
🛠 *Error Details*:
${error.message}

Please report this issue or try again later.
        `.trim();
        return reply(errorMessage);
    }
});
