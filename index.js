const { criando, cliente, Client } =  require('@open-wa/wa-automate')
const fs = require('fs-extra')
const comandosBot = require('./config')
const opcoes = require('./lib/opcoes')
const { cores, dormir } = require('./lib/funcoes')
const config = require('./lib/config/Bot/config.json')
const canvas = require('discord-canvas')
const { meuIdioma } = require('./lib/lingua')
const axios = require('axios')
const kaoticReq = require('./package.json')
var welcOn =0; var abayo =0

// Maximo de backup de niveis
const maximoBackup = Math.floor(Math.random() * 6) + 1

// Limpa cache do chrome
if (fs.existsSync('./logs/Chrome')) { fs.rmdirSync('./logs/Chrome', { recursive: true }) }

// Cria um cliente para o começo do bot
const iniciar = async (kaotic = new Client()) => {

    

}