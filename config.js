const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "254795297855 "  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '923184070915' 
global.devs = '923184070915';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  " eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU5qSEFiVEpNSDNockxsYkNmaXcyRXUweGd0eXdTUE51b0g3V084Q1pWaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSEc5aGhGckdML3hnMi9kNzRIRnl3UXRXaEx6eWEzWWxMTGpsYUp0RURGdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRSWE0VVJ4UWIvTWs2dFV3ZExqZ1pQczNOOFhWbGRweVlhUkZVd1kzUTJ3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxM0V2c2FjMG11U3lIYUNYeUVZYUdJYytVQnRjREI2MTRlaGlWS3MzMkFzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldCRWhONzBYUlZ4ckdaVW81cGwyL0tqWVJZSXV1bWVkTEk0Q0xWaFh2Vjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjljS29yeUZHakk0NDU0d3NyVytxTXNKeEhxdi9FQlc0eEJYdzhKSDlPU2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0JKRXdDbUtYNXBxdm1rbGVUcnBiclVBQzBhWXRYc1FSM2tIN2lxZllIbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibCtLSnZPbWpXNE1lRCt6eWJXMUdicVVMR0lJaFpYeW9YZ2c3R3R4blRIRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFxTWQwRmpjWUc1N2I4dmROQVBnN1U4WDNDbjg4TlNYYmFURlJYYi9MaUxTS1lnMHFxMlkvTU9Ha0EyaVlpTG96QnlLOHpuMHlXMFlpZXFMVUhHNmdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTQsImFkdlNlY3JldEtleSI6Iitab1VCSWU2R3hGRXV6SE9TVDd2UWlnM25Rb0tqdGsyQTNicDJFTSsrUTA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0Nzk1Mjk3ODU1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE5OUE5OEI2NDg1NDU0NDlFMTJFQ0MxOEY0REM0Q0Q2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTE3Mjg1OTZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlNVRXh3LVBzU3I2RG1rMER5MzFqcnciLCJwaG9uZUlkIjoiNmUwYjU2MTAtMzczYi00ZmM4LTg1MjEtMTA1YWYwODVmNWY1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik94ODZ1aXgwMm9mNDRDT1NvNHdsYlJZbW5Ocz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGRkJTQmV2ZFJZenRoZDFSNlZMUlR4eVFmRVU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRDZSNVZBVkgiLCJtZSI6eyJpZCI6IjI1NDc5NTI5Nzg1NTozOEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJDSEFEV0lDSyBIT1JBQ0Ug4pyo8J+SqyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUG5FK08wSEVNVFBtN0FHR0FvZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRnplNkJSaDFZTU1tSlhub3JXRFE2aEUxMS9Oa01Hbi9VRS81QURSQlRrVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiOHMzUHd6elVqbVpycS8xbnNLcXZVMFFId2k0OXRIQVhiNFFMeXlhVEZsS2s4S1hwOEJ6NGdDUTRmUW8zcTdlWGd6S1hPSGdjUVhBaS85NXB1ZWJlQUE9PSIsImRldmljZVNpZ25hdHVyZSI6InFwNDBQNWM2Qk1mM3puZEJHT3VCVTdhNHE2R3VoVW5kS2ViVThnaEdHSVJUYzZIQlNLUVcyci8wM2JiR09VelowNmxmREhhUElORW1vVENFQWNvM2p3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0Nzk1Mjk3ODU1OjM4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJjM3VnVVlkV0RESmlWNTZLMWcwT29STmRmelpEQnAvMUJQK1FBMFFVNUYifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTE3Mjg1OTMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT1VkIn0=",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '',
  packname:  process.env.PACK_NAME || '',
   
  botname:   process.env.BOT_NAME === undefined ? "Xlicon-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'salmanytofficial' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '254' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
