







const fs = require('fs');
const path = require('path');
const { AUTO_STATUS_SEEN, ALWAYS_ONLINE, AUTO_TYPING } = require('../config'); 
const { cmd, commands } = require('../command');

// Commande body
cmd({
    pattern: 'body',
    react: '📝',
    desc: 'Sends typing status.',
    category: 'status',
    filename: __filename
}, async (_conn, _mek, _m, { body, reply }) => {
    if (AUTO_STATUS_SEEN === true) {
        _conn.sendPresenceUpdate('composing', _mek.key.remoteJid);
    } else {
        _conn.sendPresenceUpdate('available', _mek.key.remoteJid);
    }
});

// Commande available
cmd({
    pattern: 'available',
    react: '🟢',
    desc: 'Sets bot status as available or unavailable.',
    category: 'status',
    filename: __filename
}, async (_conn, _mek, _m, { isOwner, reply }) => {
    if (ALWAYS_ONLINE === true) {
        _conn.sendPresenceUpdate('available', _mek.key.remoteJid);
    } else {
        _conn.sendPresenceUpdate('unavailable', _mek.key.remoteJid);
    }
});

// Commande composing (fake typing)
cmd({
    pattern: 'composing',
    react: '✍️',
    desc: 'Simulates typing.',
    category: 'status',
    filename: __filename
}, async (_conn, _mek, _m, { body, reply }) => {
    if (AUTO_TYPING === true) {
        _conn.sendPresenceUpdate('composing', _mek.key.remoteJid);
    }
});

// Commande pour afficher l'état du bot
cmd({
    pattern: 'status',
    react: '⚙️',
    desc: 'Display the current status of the bot.',
    category: 'tools',
    filename: __filename
}, async (_conn, _mek, _m, { reply }) => {
    let statusMessage = `Bot status:\n`;
    statusMessage += `Current status: ${AUTO_STATUS_SEEN ? 'Active' : 'Inactive'}\n`;
    statusMessage += `Always online: ${ALWAYS_ONLINE ? 'Yes' : 'No'}\n`;
    statusMessage += `Fake typing: ${AUTO_TYPING ? 'Enabled' : 'Disabled'}`;
    reply(statusMessage);
});
