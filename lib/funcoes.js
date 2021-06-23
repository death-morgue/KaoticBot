const fs = require('fs-extra')
const request = require('request')
const config = require('./config/Bot/config.json')
const chalk = require('chalk')
const fetch = require('node-fetch')
const FormData = require('form-data')
const fromBuffer = require('file-type')
const tradus = require('@vitalets/google-translate-api')

// Da a cor as mensagens do terminal
const cores = (text, cores) => { return !cores ? chalk.green(text) : chalk.keyword(cores)(text) }

// Verifica se é uma URL
const eLink = (url) => { return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi)) }

// Para o bot por milisegundos
const sleep = async (ms) => { return new Promise(resolve => setTimeout(resolve, ms)) }

// tratamento de telefones
const tratarTelefone = (number) => {
	let numero = number
	numero = numero.replace('@', '')
	numero = numero.replace('(', '')
	numero = numero.replace(')')
	numero = numero.replace(')')
	numero = numero.replace(/\ /g, '')
	numero = numero.replace(/\-/g, '')

	if (numero.length == 9) { numero = '5531' + numero.slice(2); return numero }
	else if (numero.length == 8) { numero = '5531' + numero; return numero }
	else if (numero.length == 10) { numero = '55' + numero; return numero }
	else if (numero.length == 12) {
		const ddd5 = numero.replace('55', '').replace(numero.slice(3), '')
		const num5 = numero.slice(5)

		numero = '55'.concat(ddd5).concat(num5)
		return numero
	}
	else if (numero.length == 13) {
		const ddd5 = numero.replace('55', '').replace(numero.slice(3), '')
		const num5 = numero.slice(6)

		numero = '55'.concat(ddd5).concat(num5)
		return numero
	}
	else if (numero.length == 11) {
		const ddd = numero.replace(numero.slice(3), '')
		const num = numero.slice(6)

		numero = '55'.concat(ddd).concat(num)
		return numero
	} else { return 'error' }
}

// Upa imagens no telegra pra usar em comandos
const upload = async (buffData, type) => {
	return new Promise(async (resolve, reject) => {
		const { ext } = await fromBuffer(buffData)
		const filePath = './lib/media/tmp.' + ext
		await fs.writeFile(filePath, buffData, { encoding: 'base64' }, async (err) => {
			if (err) return reject(err)
			const fileData = fs.readFileSync(filePath)
			const form = new FormData()
			form.append('file', fileData, 'tmp.' + ext)
			await fetch('https://telegra.ph/upload', {
				method: 'POST',
				body: form
			}).then(res => res.json()).then(res => {
				if (res.error) return reject(res.error)
				resolve('https://telegra.ph' + res[0].src)
			}).then(() => fs.unlinkSync(filePath)).catch(err => reject(err))
		})
	})
}

// Verifica se ja usou comando
const comandoUsadoRecente = new Set()

// Caso tenha sido usado muitas vezes
const muitoUsado = (from) => !!comandoUsadoRecente.has(from)

// Anti Flood
const addFilter = (from) => {
	comandoUsadoRecente.add(from)
	setTimeout(() => comandoUsadoRecente.delete(from), Number(config.antiFlood * 1000)) // * 1000 - Transforma o valor do tempo de aposta em segundos
}

// Tradutor
const traduzir = (text, lang) => { return new Promise(async (resolve, reject) => { tradus(text, { client: 'gtx', to: lang }).then((res) => resolve(res.text)).catch((err) => reject(err)) }) }

// Verifica se é um número inteiro
const numInt = (number) => { return !isNaN(number) && (function(x) { return (x | 0) === x; })(parseFloat(number)) }

module.exports = {
	cores,
	sleep,
	eLink,
	upload,
	muitoUsado,
	addFilter,
	traduzir,
	numInt,
	tratarTelefone
}