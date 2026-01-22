
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

//add your session id

global.session = "https://khanxmd-pair.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "IK~H4sIAAAAAAAAA5VUXZOiOhD9L3nFWuVDEKqmahHxY1DED3T01j5EEiAKAZOg4tb891s4OzP7cHdrLk+hCadPnz7dPwEtCMceroH1E5SMXKDAzVHUJQYW6FdxjBloAQQFBBZYjY7hYgLJYRtvgiA4VHR1ZSfnpTY9BUnGIc2Gg/rmiPOoeAKvLVBWh4xEfwGc4wOxoVhKz/tTmWJvd4pEZ7Ve+9ddGfXGS2elBsZzJ5KPDWCDCAkjNHHLFOeYwczDdQAJ+xr9xcg4D9pqWNBYv6v3Q1uXkaKXJ20UB7W9zp1prQ33QWbnu6/RN+Eli7C6p9PsXNB7ZHfbam74lw3ODbV+xlc/2sfpIOmlyRt9ThKK0QRhKoiov6w7cc1+qbUXN18e1rXaNbQooj3bTMZFrhD3uHbD4eSw6KRU+xrx/rRWYd/eGjZXRIX2YRrs6rUzo1mtj9MYZWh/zvunqRMWvxMP2LtXTv9H97mzV7yRb3e6+bAQE1z2RiFT3aHtVPA2taUqgtNun4Yo/KJtNhgniRltlI3s8QPCV8lHfj1xBBNr5zg/iZt+S7eDvaZeP+lDUbG/sVS4YivoZaxlUlzsqNhIS3llUuMQ7sedNmHyWQpfwqEx3Imaz9vBCie92XOse2uHj/F5M1grB6OM7GybtosFqxfByT3aT4+KTrieIGDJry3AcEK4YFCQgjYxRTNaAKLLCkcMi4e8YBGs0FQ+t9vXilSjS+WEF49u0uFNv7nd6HRw7mIymrnzIjs9gRYoWRFhzjEaEy4KVs8w5zDBHFj//GgBim/irXFNup6stUBMGBchrcqsgOi9rR9fYRQVFRWrmkZOc8AMWJ3PMBaC0IQ3SlYUsiglF+ykUHBgxTDj+KNGzDAClmAV/phbp0CN9AOl75r7bQBaIH+0hKBmmhRVVWS9q2t6z5K/82/XBhWW5TeKBWiB7HFLUXSzZ3ZNpaOpuqlb8vcm/vrBr4FDWECScWABx1cR8Weu68Xz24yPRrab2E5ig8963q3xJn24FJ1ZGYwN5cpiimdKqBBVqeemM4oLZvYu3n3bVQ3jkCRP/wECLHBdqtNpJ9icaByNJn2+6e30gWvHbJXpo3twjcjl5V7e5P1hIk85YtF4OndmC2VVoEpG/sutT0s/WOy3V02zL8id94pxv/FRCyB8IRH+PZk7OBeqdsx7eXxGlwwj47gN0XB3K2yplIf35fiEsLSL5ASfbyzLF4Ksc7xb6fcIPs/xMjZTNtefpcVA78UzLEndrnG8vpn2MTTZr2VFHnZqOtW8xgQ/Zp/Cpn9/6Mk738ZYndfWb7/+WiJ/Wk4b94AG3vommdxTu+rRz/xCmPx4WaRU99rxtOZyhSRJ0Sbg9fVHC5QZFHHBcmABSBErHslZUTVGndC4+Esyx04mdpL4TcEZ5ML+NP+a5JgLmJfAkg3d7CiqYnTfbgWsKMeQp8ACsqelY61xcm2X5UpA8T5MwG4eb9gFr/8C197Mz2kHAAA=", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "true", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed By JAWAD MD", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "923427582273", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "JawadTech", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "🩵", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "💙", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "true", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "null, pm, dm, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 Auto Call Reject Mode Active. 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "JAWAD-MD", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://files.catbox.moe/pf270b.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "i am jawad md",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
//not working for the moment do don't on it
GOODBYE: process.env.GOODBYE || "false", //not working for the moment do don't on it
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Asia/Karachi", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
//KHAN MD; 🔥💸💀
