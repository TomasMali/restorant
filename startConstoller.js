

'use strict';
const Telegram = require('telegram-node-bot')

const request = require('request')

const http = require('http')


const axios = require('axios');



class StarTomas extends Telegram.TelegramBaseController  {
  
    start($) {
        $.sendMessage('Hello!')
    }

    get routes() {
        return {
            'startHandler': 'start'
        }
    }
}


module.exports = StarTomas;