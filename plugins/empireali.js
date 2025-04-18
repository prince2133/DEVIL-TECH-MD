const { cmd } = require("../command");

cmd({
    pattern: "family",
    desc: "devil tech Family",
    category: "fun",
    react: "👨‍👩‍👧‍👦",
    filename: __filename
}, async (conn, mek, m, { reply }) => {

    const familyList = `
*╔═════『 DEVIL-TECH-MD 𝖥𝖠𝖬𝖨𝖫𝖸 』═════╗*
  👑 *𝖣𝖠𝖬𝖤 DEVIL TECH:* *𝖢𝖠𝖱𝖬𝖤𝖭 👸*
*╚══════════════════════════════╝*

*╭━━━━━『 𝖥𝖱𝖨𝖤𝖭𝖣’𝖲 』━━━━━●●►*
*┃  1. ➠ ALAN XD (KLW)*
*┃  2. ➠ ZORO XD (KLW)*
*┃  3. ➠ SAURON XD (KLW)*
*┃  4. ➠ STIL XD (KLW)*
*┃  5. ➠ ALVIN XD (KLW)*
*┃  6. ➠ TOM (KLW)*
*┃  7. ➠ CYBER DINA (DTZ)*
*┃  8. ➠ SULA MD (DTZ)*
*┃  9. ➠ CYBER CHAMA (DTZ)*
*┃ 10. ➠ CHETHIYA MD (DTZ)*
*┃ 11. ➠ CRYPTO KNIGHT (DTZ)*
*┃ 12. ➠ CYBER RIKADO (DTZ)*
*┃ 13. ➠ NURO MD (DTZ)
*┃ 14. ➠ SUPUN MD (DTZ)*
*┃ 15. ➠ DRK CYBER MISHUU (DTZ)*
*┃ 16. ➠ REAL SUDU BBA (DTZ)*
*┃ 17. ➠ UDMODZ MD (DTZ)*
*┃ 18. ➠ THISAGA MD (DTZ)*
*┃ 19. ➠ DRK CYBER ASH (DTZ)*
*┃ 20. ➠ CYBER DINU (DTZ)*
*╰━━━━━━━━━━━━━━━━━━━━●●►*

> *㊛ Ꮲᴏꪝᴇʀᴅ Вʏ Cʏʙᴇʀ Lᴏᴋᴜ Aꜱʜᴜᴜ Oꜰᴄ❗**
`;

    try {
        await conn.sendMessage(m.chat, {
            image: { url: "https://i.ibb.co/zhvB3bLg/7535.jpg" },
            caption: familyList.trim()
        }, { quoted: mek });

        await conn.sendMessage(m.chat, {
            audio: { url: 'https://cdn.ironman.my.id/i/hmxjch.mp43' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });

    } catch (error) {
        console.error(error);
        reply("❌ *An error occurred while fetching the family list. Please try again.*");
    }
});

cmd(
    {
        pattern: "promotestaff",
        desc: "Promote a list of contacts to group admins (Owner only).",
        category: "admin",
        react: "👑",
        filename: __filename,
    },
    async (conn, mek, m, { from, isGroup, isBotAdmins, reply, sender, isOwner }) => {
        try {
            if (!isGroup) {
                return reply("❌ This command can only be used in groups.");
            }

            if (!isBotAdmins) {
                return reply("❌ I need to be an admin to perform this action.");
            }

            if (!isOwner) {
                return reply("❌ This command is restricted to the bot owner.");
            }

            const staffContacts = [
                "94760091093@s.whatsapp.net",
                "94760091093@s.whatsapp.net",
                "94760091093@s.whatsapp.net",
                "94760091093@s.whatsapp.net",
                "94760091093@s.whatsapp.net",
                "94760091093@s.whatsapp.net",
                "94760091093@s.whatsapp.net",
                "94760091093@s.whatsapp.net",
                "94760091093@s.whatsapp.net",
                "94760091093@s.whatsapp.net"
            ];

            // Remove duplicate contacts
            const uniqueStaff = [...new Set(staffContacts)];

            const groupMetadata = await conn.groupMetadata(from);
            const groupParticipants = groupMetadata.participants;

            const existingAdmins = groupParticipants
                .filter(p => p.admin === "admin" || p.admin === "superadmin")
                .map(p => p.id);

            const toPromote = uniqueStaff.filter(jid => !existingAdmins.includes(jid));

            if (toPromote.length === 0) {
                return reply("⚠️ All staff contacts are already admins or invalid.");
            }

            await reply(`⏳ Promoting ${toPromote.length} staff member(s)...`);

            let success = [];
            let failed = [];

            for (const contact of toPromote) {
                try {
                    await conn.groupParticipantsUpdate(from, [contact], "promote");
                    success.push(contact);
                } catch (e) {
                    failed.push(contact);
                }
            }

            let msg = "✅ *Promotion Result:*\n\n";
            if (success.length) msg += `*Promoted:*\n${success.map(j => `- ${j}`).join('\n')}\n\n`;
            if (failed.length) msg += `*Failed:*\n${failed.map(j => `- ${j}`).join('\n')}`;

            reply(msg.trim());

        } catch (error) {
            console.error(error);
            reply(`❌ Error promoting staff: ${error.message}`);
        }
    }
);