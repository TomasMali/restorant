


'use strict'

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand
const tg = new Telegram.Telegram('676793933:AAFSqroVLFsRsYU1nk12-gmVWrYprDN2q-I', {
    webAdmin: {
        port: process.env.PORT || 3000,
        host: 'https://restorant-bot.herokuapp.com'
    }
    })    // https://restorant-bot.herokuapp.com

const tomi = require('./startConstoller')
const OtherwiseController = require('./otherwise')



tg.router.
    when(
        new TextCommand('/tomas', 'addUsstartHandlerer'),
        new tomi()
    )   
     .otherwise(
        new OtherwiseController()
    )

