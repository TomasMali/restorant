


'use strict';

const http = require('http')
const axios = require('axios');

const Telegram = require('telegram-node-bot');

class OtherwiseController extends Telegram.TelegramBaseController {
  handle($) {

    $.sendMessage('jsdfkjdsf');
  }
}

module.exports = OtherwiseController;