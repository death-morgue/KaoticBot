// MODULOS
const { decryptMedia } = require('@open-wa/wa-decrypt')
const fs = require('fs-extra')
const axios = require('axios')
const math = require('mathjs')
const { search } = require("simple-play-store-search")
const google = require('google-it')
const isPorn = require('is-porn')
const moment = require('moment-timezone')
const sinesp = require('sinesp-api')
const { Aki } = require('aki-api')
const request = require('request')
const canvas = require('canvacord')
const ffmpeg = require('fluent-ffmpeg')
const { spawn, exec, execFile } = require('child_process')
const nhentai = require('nhentai-js')
const { API } = require('nhentai-api')
const { removeBackgroundFromImageBase64 } = require('remove.bg')
const fetch = require('node-fetch')
const ms = require('parse-ms')
const ytsearch = require('yt-search')
const removeAccents = require('remove-accents')
const { stdout, send } = require('process')
const bent = require('bent')
const tts = require('node-gtts')
const brainly = require('brainly-scraper-v2')
const deepai = require('deepai')
const wiki = require("@dada513/wikipedia-search")
const { EmojiAPI } = require("emoji-api");
const os = require('os')
const puppeteer = require('puppeteer')
const { XVDL } = require("xvdl")
const youtubedl = require('youtube-dl-exec')
const sharp = require('sharp')


// Utilidades
const { cores, tratarTelefone, sleep, eLink, upload, muitoUsado, addFilter, traduzir, numInt } = require('./lib/funcoes')
const { getLevel, getMsg, getXp, addLevel, addXp, getRank, isWin, wait, addLimit, addMsg, getLimit, getRole } = require('./lib/gaming')
const poll = require('./lib/poll')
const { eReg, grupoVip, reg, vip } = require('./registro')
const config = require('./lib/config/Bot/config.json')
const key = require('./API-KEYS.json')
const patents = require('./lib/config/Bot/patentes.json')
const { meuIdioma, meuMenu } = require('./lib/lingua')
const { reply } = require('canvacord/src/Canvacord')
const { owner, baninjusto } = require('./lib/lingua/pt')
const options = { headless: true, userDataDir: "./logs/Chrome/Maker", args: ['--aggressive-cache-discard', '--disable-application-cache', '--disable-cache', '--disable-offline-load-stale-cache', '--disable-setuid-sandbox', '--disk-cache-size=0', '--ignore-certificate-errors', '--no-sandbox', '--single-process'] }
// Leia a options.js para maiores detalhes

// ATIVADORES & CONFIGS EXTRAS
const region = config.lang

//est?? dando erro no akinator, vou ver o que ??
/*const aki = new Aki(region)
const akinit = async () => { try { await aki.start() } catch (error) { console.log(cores('[AKI]', 'crimson'), cores(`??? Obtive erros ao iniciar o akinator ??? ${error.message}.`, 'gold')) } }
akinit()*/
const cd = Number(config.tempoJogo * 60000) // * 60000 - Transforma o valor do tempo de aposta em minutos
const mess = meuIdioma()
const menus = meuMenu()
moment.tz.setDefault('America/Sao_Paulo').locale('pt_BR')
const emoji = new EmojiAPI();
var jogadas = 0; var isMuteAll = 0; var oneImage = 0; var oneLink = 0; var oneTrava = 0
axios.defaults.headers.common['User-Agent'] = config.userAgent
var prefix = config.prefix


// JSON'S
const nsfw_ = JSON.parse(fs.readFileSync('./lib/config/Grupos/NSFW.json'))
const welkom = JSON.parse(fs.readFileSync('./lib/config/Grupos/welcome.json'))
const atporn = JSON.parse(fs.readFileSync('./lib/config/Grupos/antiporn.json'))
const bklist = JSON.parse(fs.readFileSync('./lib/config/Grupos/blacklist.json'))
const xp = JSON.parse(fs.readFileSync('./lib/config/Grupos/xp.json'))
const nivel = JSON.parse(fs.readFileSync('./lib/config/Bot/level.json'))
const atbk = JSON.parse(fs.readFileSync('./lib/config/Bot/anti.json'))
const faki = JSON.parse(fs.readFileSync('./lib/config/Grupos/fake.json'))
const slce = JSON.parse(fs.readFileSync('./lib/config/Bot/silence.json'))
const atstk = JSON.parse(fs.readFileSync('./lib/config/Grupos/sticker.json'))
const msgcount = JSON.parse(fs.readFileSync('./lib/config/Bot/msgcount.json'))
const atlinks = JSON.parse(fs.readFileSync('./lib/config/Grupos/antilinks.json'))
const trava = JSON.parse(fs.readFileSync('./lib/config/Grupos/antitrava.json'))
const registros = JSON.parse(fs.readFileSync('./registros.json'))
const vips = JSON.parse(fs.readFileSync('./vip.json'))
const gruposVip = JSON.parse(fs.readFileSync('./gruposVip.json'))

module.exports = kconfig = async (kaotic, message) => {

	//possibilita receber os alertas no wpp
	const { type, id, from, t, sender, author, isGroupMsg, chat, chatId, caption, isMedia, mimetype, quotedMsg, quotedMsgObj, mentionedJidList } = message
	let { body } = message
	const ownerNumber = config.donos
	const chats = (type === 'chat') ? body : ((type === 'image' || type === 'video')) ? caption : ''
	body = (type === 'chat' && body.startsWith(prefix)) ? body : (((type === 'image' || type === 'video') && caption) && caption.startsWith(prefix)) ? caption : ''
	const comma = body.slice(1).trim().split(/ +/).shift().toLowerCase()
	const command = removeAccents(comma)
	try {

		// Parametros e diario
		var daily = JSON.parse(fs.readFileSync('./lib/config/Bot/diario.json'))
		const { name, formattedTitle } = chat
		let { pushname, verifiedName, formattedName } = sender
		
		pushname = pushname || verifiedName || formattedName

		//infos do bot
		const botNumber = await kaotic.getHostNumber()
		const blockNumber = await kaotic.getBlockedIds()

		//info de quem manda msg
		const user = sender.id
		const groupId = isGroupMsg ? chat.groupMetadata.id : ''

		//infos do grupo
		const groupMembers = isGroupMsg ? await kaotic.getGroupMembers(groupId) : false
		const groupMembersId = isGroupMsg ? await kaotic.getGroupMembersId(groupId) : false
		const groupAdmins = isGroupMsg ? await kaotic.getGroupAdmins(groupId) : ''

		//booleans para usar de condicional em comando
		const eAdm = isGroupMsg ? groupAdmins.includes(user) : false
		const botAdm = isGroupMsg ? groupAdmins.includes(botNumber + '@c.us') : false
		const isNsfw = isGroupMsg ? nsfw_.includes(groupId) : false
		const eDono = ownerNumber.includes(user)
		const autoSticker = isGroupMsg ? atstk.includes(groupId) : false
		const isOwner = ownerNumber.includes(user)
		const eRegistrado = eReg(user, registros)
		const eVip = eReg(user, vips)
		const gVip = eReg(groupId, gruposVip)


		//tempo
		const time = moment(t * 1000).format('DD/MM HH:mm:ss')
		const processTime = (timestamp, now) => { return moment.duration(now - moment(timestamp * 1000)).asSeconds() }

		//msg
		const arg = body.trim().substring(body.indexOf(' ') + 1)
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const url = args.length !== 0 ? args[0] : ''

		//permiss??es do grupo
		const uaOverride = config.userAgent
		const isBlocked = blockNumber.includes(user)
		const isAntiPorn = isGroupMsg ? atporn.includes(groupId) : false
		const isAntiTravas = isGroupMsg ? trava.includes(groupId) : false
		const isAntiLink = isGroupMsg ? atlinks.includes(groupId) : false
		const isxp = isGroupMsg ? xp.includes(groupId) : false

		//mute
		const mute = isGroupMsg ? slce.includes(groupId) : false
		const pvmte = !isGroupMsg ? slce.includes(user) : false

		//tipo msg
		const isQuotedImage = quotedMsg && quotedMsg.type === 'image'
		const isQuotedVideo = quotedMsg && quotedMsg.type === 'video'
		const isQuotedSticker = quotedMsg && quotedMsg.type === 'sticker'
		const isQuotedGif = quotedMsg && quotedMsg.mimetype === 'image/gif'
		const isQuotedAudio = quotedMsg && quotedMsg.type === 'audio'
		const isQuotedPtt = quotedMsg && quotedMsg.type === 'ptt'
		const isImage = type === 'image'
		const isVideo = type === 'video'
		const isAudio = type === 'audio'
		const isPtt = type === 'ptt'
		const isGif = mimetype === 'image/gif'

		//msg
		const arqs = body.trim().split(' ')
		const arks = args.join(' ')
		const isTrava = type === 'oversized'

		//funcao de membro aleatorio
		const aMemberS = isGroupMsg ? groupMembers[Math.floor(Math.random() * groupMembers.length)] : user
		const randomMember = isGroupMsg ? aMemberS.id : user


		//para usar em jogos
		const side = Math.floor(Math.random() * 2) + 1
		const lvpc = Math.floor(Math.random() * 100) + 1
		const lvrq = 100 - lvpc
		const milSort = Math.floor(Math.random() * 1000) + 1
		const sorteio250 = math.floor(math.random() * 250) + 1

		//vota????o
		global.pollfile = 'poll_Config_' + groupId + '.json'
		global.voterslistfile = 'poll_voters_Config_' + groupId + '.json'

		//erro
		const errorurl = './lib/midia/img/404.jpg'
		const errorImg = './lib/midia/img/user.png'

		//respostas
		const kaoticBotMsgs = await fs.readFileSync('./lib/config/Util/reply.txt').toString().split('\n')
		const chatBotR = kaoticBotMsgs[Math.floor(Math.random() * kaoticBotMsgs.length)].replace('%name$', `${name}`).replace('%battery%', `${lvpc}`)
		const lgbt = await fs.readFileSync('./lib/config/Util/lgbt.txt').toString().split('\n')
		const guei = lgbt[Math.floor(Math.random() * lgbt.length)]
		const weaponC = await fs.readFileSync('./lib/config/Util/armas.txt').toString().split('\n')
		const whatWeapon = weaponC[Math.floor(Math.random() * weaponC.length)]
		const q = args.join(' ')


		// Sobe patente por n??vel, se desejar edite as patentes em 'lib/config/Bot/patentes.json'
		const check = await getLevel(user, nivel)
		var patente = patents.a0
		if (eDono) { patente = patents.a31 }
		else if (check <= 4) { patente = patents.a1 }
		else if (check <= 10) { patente = patents.a2 }
		else if (check <= 15) { patente = patents.a3 }
		else if (check <= 20) { patente = patents.a4 }
		else if (check <= 25) { patente = patents.a5 }
		else if (check <= 30) { patente = patents.a6 }
		else if (check <= 35) { patente = patents.a7 }
		else if (check <= 40) { patente = patents.a8 }
		else if (check <= 45) { patente = patents.a9 }
		else if (check <= 50) { patente = patents.a10 }
		else if (check <= 55) { patente = patents.a11 }
		else if (check <= 60) { patente = patents.a12 }
		else if (check <= 65) { patente = patents.a13 }
		else if (check <= 70) { patente = patents.a14 }
		else if (check <= 75) { patente = patents.a15 }
		else if (check <= 80) { patente = patents.a16 }
		else if (check <= 85) { patente = patents.a17 }
		else if (check <= 90) { patente = patents.a18 }
		else if (check <= 95) { patente = patents.a19 }
		else if (check <= 100) { patente = patents.a20 }
		else if (check <= 200) { patente = patents.a21 }
		else if (check <= 300) { patente = patents.a22 }
		else if (check <= 400) { patente = patents.a23 }
		else if (check <= 500) { patente = patents.a24 }
		else if (check <= 550) { patente = patents.a25 }
		else if (check <= 600) { patente = patents.a26 }
		else if (check <= 700) { patente = patents.a27 }
		else if (check <= 800) { patente = patents.a28 }
		else if (check <= 900) { patente = patents.a29 }
		else if (check <= 1000 || check >= 1000) { patente = patents.a30 }


		// Sistema do XP
		if (isGroupMsg && isxp && !isWin(user) && !isBlocked) {
			try {
				await wait(user)
				var levelAtual = await getLevel(user, nivel)
				const levelInicial = await getLevel(user, nivel)
				const xpAtual = Math.floor(Math.random() * 20) + 11 // XP de 10 a 30
				const neededXp = 5 * Math.pow(levelAtual, 2) + 50 * levelAtual + 100
				await sleep(2000)
				await addXp(user, xpAtual, nivel)
				if (neededXp <= getXp(user, nivel)) {
					var nivelReq = neededXp
					while (nivelReq <= getXp(user, nivel)) {

						await addLevel(user, 1, nivel)
						levelAtual = await getLevel(user, nivel)
						nivelReq = await 5 * Math.pow(levelAtual, 2) + 50 * levelAtual + 100

					}

					// Ative isso para fazer a Kaotic mandar mensagem de level UP
					const userLevel = await getLevel(user, nivel)
					const takeXp = 5 * Math.pow(userLevel, 2) + 50 * userLevel + 100
					await kaotic.reply(from, `*[+1 NIVEL]*\n\n??? *Nome*: ${pushname}\n??? *XP*: ${await getXp(user, nivel)} / ${takeXp}\n??? *Level*: ${levelInicial} ??? ${await getLevel(user, nivel)} ???? \n??? *Patente*: *${patente}* ????`, id)
				}
			} catch (err) { console.log(cores('[XP]', 'crimson'), err) }
		}

		// Anti Imagens pornogr??ficas
		if (isGroupMsg &&
			!eAdm &&
			botAdm &&
			isAntiPorn &&
			isMedia &&
			isImage &&
			!isCmd &&
			!eDono &&
			oneImage == 0) {
			try {
				oneImage = 1; console.log(
					cores('[IMAGEM]', 'red'),
					cores('Verificando a imagem por pornografia...', 'gold'))

				const mediaData = await decryptMedia(message, uaOverride)
				const getUrl = await upload(mediaData, false)
				deepai.setApiKey(config.deepai)
				const resp = await deepai.callStandardApi("nsfw-detector", { image: `${getUrl}` })

				if (resp.output.nsfw_score > 0.85) {

					await kaotic.removeParticipant(groupId, user).then(async () => {
						await kaotic.sendTextWithMentions(from, mess.baninjusto(user) + 'Porno.')
					})//remove se for porno

					console.log(cores('[NSFW]', 'red'),
						cores(`A imagem cont??m tra??os de conte??do adulto, removerei o ??? ${pushname} - [${user}]...`, 'gold'));
					return oneImage = 0

				} else {
					console.log(
						cores('[SEM NSFW]', 'lime'),
						cores(`??? A imagem n??o aparenta ser pornogr??fica.`, 'gold'));
					oneImage = 0
				}

			} catch (error) { return oneImage = 0 }
		}
		if( body.includes('carro')) return await kaotic.reply(from, `teste`,id)
		
		// Auto-stickers de fotos
		if (isGroupMsg &&
			autoSticker &&
			isMedia &&
			isImage &&
			!isCmd) {
			const mediaData = await decryptMedia(message, uaOverride)
			await kaotic.sendImageAsSticker(from, `data:${mimetype};base64,${mediaData.toString('base64')}`, { author: config.author, pack: config.pack, keepScale: true })
		}

		// Auto-sticker de videos & gifs
		if (isGroupMsg &&
			autoSticker &&
			isMedia &&
			isVideo &&
			!isCmd) {
			const mediaData = await decryptMedia(message, uaOverride)
			await kaotic.sendMp4AsSticker(from, `data:${mimetype};base64,${mediaData.toString('base64')}`, null, { stickerMetadata: true, pack: config.pack, author: config.author, fps: 10, crop: true, loop: 0 })
		}

		// Anti links de grupo
		if (isGroupMsg &&
			!eAdm &&
			botAdm &&
			isAntiLink &&
			!eDono &&
			oneLink == 0) {
			try {
				if (chats.match(new RegExp(/(https:\/\/chat.whatsapp.com)/gi))) {
					oneLink = 1; const gplka = await kaotic.inviteInfo(chats)
					if (gplka) {
						console.log(
							cores('[BAN]', 'red'),
							cores('Link de grupo detectado, removendo participante...', 'gold'))

						await kaotic.removeParticipant(groupId, user).then(async () => {
							await kaotic.sendTextWithMentions(from, mess.baninjusto(user) + 'WhatsApp Link.');
							return oneLink = 0
						})

					} else {
						console.log(cores('[ALERTA]', 'gold'),
							cores('Link de grupo invalido recebido...', 'gold')); oneLink = 0
					}
				}
			} catch (error) { return oneLink = 0 }
		}

		// Bloqueia todas as travas, seja contato, localiza????o, texto e outros
		if (isGroupMsg &&
			isAntiTravas &&
			isTrava &&
			!eAdm &&
			botAdm &&
			!eDono &&
			oneTrava == 0) {
			try {

				oneTrava = 1; console.log(cores('[TRAVA]', 'red'),
					cores(`Possivel trava recebida pelo ??? ${pushname} - [${user.replace('@c.us', '')}] em ${name}...`, 'gold'))

				let wakeAdm = 'ACORDA - WAKE UP ADM\n\n'
				var shrekDes = ''
				for (let i = 0; i < 20; i++) {

					//destrava shrek
					shrekDes += `????????????????????????????????????????????????\n?????????????????????????????????????????????????????????\n????????????????????????????????????????????????????????????\n??????????????????????????????????????????????????????????????????\n????????????????????????????????????????????????????????????????????????????????? \n????????????????????????????????????????????????????????????????????????????????? \n????????????????????????????????????????????????????????????????????????\n?????????????????????????????????????????????????????????????????????\n?????????????????????????????????????????????????????????????????????\n?????????????????????????????????????????????????????????????????????\n??????????????????????????????????????????????????????????????????\n??????????????????????????????????????????????????????????????????\n???????????????????????????????????????????????????????????????\n????????????????????????????????????????????????????????????\n???????????????????????????????????????????????????\n\n`
				}

				for (let adminls of groupAdmins) {

					wakeAdm += `??? @${adminls.replace(/@c.us/g, '')}\n`

				}

				await kaotic.removeParticipant(groupId, user).then(async () => {
					await kaotic.setGroupToAdminsOnly(groupId, true)
				}) // Fecha s?? para admins e bane o cara que travou

				await kaotic.sendText(from, shrekDes, id).then(async () => {
					await kaotic.sendTextWithMentions(from, wakeAdm)
				})  // Anti-Trava BR do Shrek muahauhauha + Chamar ADMS

				await kaotic.sendTextWithMentions(from, mess.baninjusto(user) + 'Travas.').then(async () => {
					await kaotic.sendText(from, mess.nopanic(), id)
				}) // Manda o motivo do ban e explica para os membros

				await kaotic.sendText(ownerNumber[0], mess.recTrava(user) + `\nNo > ${name}`).then(async () => {
					await kaotic.contactBlock(user)
				}) // Avisa o dono do bot e bloqueia o cara

				await kaotic.setGroupToAdminsOnly(groupId, false); return oneTrava = 0 // Reabre o grupo

			} catch (error) { return oneTrava = 0 }
		}

		// Bloqueia travas no PV
		if (!isGroupMsg && !eDono && isTrava) {
			await kaotic.contactBlock(user).then(async () => {
				await kaotic.sendText(ownerNumber[0], mess.recTrava(user))
			})
		}
		// Para limpar automaticamente sem voc?? verificar, adicione "await kaotic.clearChat(chatId)", o mesmo no de grupos.

		// Anti links pornogr??ficos
		if (isGroupMsg && !eAdm && botAdm && isAntiPorn && !eDono && oneLink == 0) {
			try {
				if (eLink(chats)) {
					oneLink = 1; const inilkn = new URL(chats)
					console.log(cores('[URL]', 'gold'), 'URL recebida ???', inilkn.hostname)
					await isPorn(inilkn.hostname, async (err, status) => {
						if (err) return console.error(err)
						if (status) {
							console.log(cores('[NSFW]', 'red'), cores(`O link ?? pornografico, removerei o ??? ${pushname} - [${user.replace('@c.us', '')}]...`, 'gold'))
							await kaotic.removeParticipant(groupId, user).then(async () => {
								await kaotic.sendTextWithMentions(from, mess.baninjusto(user) + 'Porno/Porn.');
								return oneLink = 0
							})

						} else {
							console.log(
								cores('[SEM NSFW]', 'lime'),
								cores(`??? O link n??o possui pornografia.`, 'gold'));
							oneLink = 0
						}
					})
				}
			} catch (error) { return oneLink = 0 }
		}

		// Impede travas ou textos que tenham mais de 5.000 linhas
		if (isGroupMsg && !eAdm && botAdm && !eDono && oneTrava == 0) {
			try {
				if (chats.length > 5000) {

					oneTrava = 1;
					console.log(cores('[TRAVA]', 'red'),

						cores(`Possivel trava recebida pelo ??? ${pushname} - [${user.replace('@c.us', '')}] em ${name}...`, 'gold'))
					await kaotic.removeParticipant(groupId, user).then(async () => {
						await kaotic.sendTextWithMentions(from, mess.baninjusto(user) + 'Travas.')
					}) // Remove e manda o motivo no grupo

					await kaotic.sendText(ownerNumber[0], mess.recTrava(user)).then(async () => {
						await kaotic.contactBlock(user); return oneTrava = 0
					}) // Avisa o dono e ent??o bloqueia a pessoa
				}
			} catch (error) { return oneTrava = 0 }
		}

		// Bloqueia travas no PV que tenham mais de 5.000 linhas
		if (!isGroupMsg && !eDono) {
			try {
				if (chats.length > 5000) {
					console.log(cores('[TRAVA]', 'red'),
						cores(`Possivel trava recebida pelo ??? ${pushname} - [${user.replace('@c.us', '')}]...`, 'gold'))
					return await kaotic.contactBlock(user).then(async () => {
						await kaotic.sendText(ownerNumber[0], mess.recTrava(user))
					}) // Avisa o dono e bloqueia
				}
			} catch (error) { return }
		}

		// Ative para banir quem mandar todos os tipos de links (Ative removendo a /* e */)
		/*if (isGroupMsg && !eAdm && botAdm && isAntiLink && !eDono && eLink(chats)) { 
			await kaotic.removeParticipant(groupId, user) 
		}*/

		// Comandos sem prefix, esse responde se marcar a BOT
		if (!muitoUsado(from) && !isMedia && !isCmd) {
			try {
				if (chats.includes(`@${botNumber.replace('@c.us', '')}`)) {
					await kaotic.reply(from, chatBotR, id)
				}
			} catch (error) { return }
		}

		// Caso deseje criar siga o estilo disso abaixo, para usar a base remova a /* e a */
		/*if (!muitoUsado(from) && !isCmd) { 
			try { 
				if (chats == 'Mensagem a receber, sem espa??os') {
					await kaotic.reply(from, 'Resposta para enviar', id)
				} 
			} catch (error) { return } 
		}*/

		// Impede comandos em PV'S mutados
		if (!isGroupMsg && isCmd && pvmte && !eDono) {
			return console.log(cores('> [SILENCE]', 'red'),
				cores(`Ignorando comando de ${pushname} - [${user.replace('@c.us', '')}] pois ele est?? mutado...`, 'gold'))
		}

		// Impede comandos em grupos mutados
		if (isGroupMsg && isCmd && !eAdm && mute && !eDono) {
			return console.log(cores('> [SILENCE]', 'red'),
				cores(`Ignorando comando de ${name} pois ele est?? mutado...`, 'gold'))
		}

		// Muta geral, reseta ao reiniciar
		if (isCmd && !eDono && isMuteAll == 1) {
			return console.log(cores('> [SILENCE]', 'red'),
				cores(`Ignorando comando de ${pushname} pois os PV'S e Grupos est??o mutados...`, 'gold'))
		}

		// Ignora pessoas bloqueadas
		if (isBlocked && isCmd && !eDono) {
			return console.log(cores('> [BLOCK]', 'red'),
				cores(`Ignorando comando de ${pushname} - [${user.replace('@c.us', '')}] por ele estar bloqueado...`, 'gold'))
		}

		// Anti Flood para PV'S
		if (isCmd && muitoUsado(from) && !isGroupMsg && !eDono) {
			await addXp(user, -100, nivel);
			return console.log(cores('> [FLOOD AS]', 'red'),
				cores(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'gold'),
				cores(`"[${prefix}${command.toUpperCase()}] [${args.length}]"`, 'red'), 'DE',
				cores(`"${pushname} - [${user.replace('@c.us', '')}]"`, 'red'))
		}

		// Anti Flood para grupos
		if (isCmd && muitoUsado(from) && isGroupMsg && !eDono) {
			await addXp(user, -100, nivel);
			return console.log(cores('> [FLOOD AS]', 'red'),
				cores(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'gold'),
				cores(`"[${prefix}${command.toUpperCase()}] [${args.length}]"`, 'red'), 'DE',
				cores(`"${pushname} - [${user.replace('@c.us', '')}]"`, 'red'), 'EM',
				cores(`"${name || formattedTitle}"`))
		}

		// Contador de Mensagens (em grupo) | Para contar do PV bote sem aspas "isGroupMsg || !isGroupMsg"
		if (isGroupMsg) {
			await getMsg(user, msgcount);
			await addMsg(user, 1, msgcount)
		}

		// Mensagens no PV
		if (!isCmd && !isGroupMsg) {
			return console.log('- MENSAGEM AS',
				cores(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'gold'), 'DE',
				cores(`"${pushname} - [${user.replace('@c.us', '')}]"`))
		}

		// Mensagem em Grupo
		if (!isCmd && isGroupMsg) {
			return console.log('- MENSAGEM AS',
				cores(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'gold'), 'DE',
				cores(`"${pushname} - [${user.replace('@c.us', '')}]"`), 'EM',
				cores(`"${name || formattedTitle}"`))
		}

		// Comandos no PV
		if (isCmd && !isGroupMsg) {
			console.log(cores(`- COMANDO "[${prefix}${command.toUpperCase()}]"`), 'AS',
				cores(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'gold'), 'DE',
				cores(`"${pushname} - [${user.replace('@c.us', '')}]"`))
		}

		// Comandos em grupo
		if (isCmd && isGroupMsg) {
			console.log(cores(`- COMANDO "[${prefix}${command.toUpperCase()}]"`), 'AS',
				cores(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'gold'), 'DE',
				cores(`"${pushname} - [${user.replace('@c.us', '')}]"`), 'EM',
				cores(`"${name || formattedTitle}"`))
		}

		// Impede SPAM
		if (isCmd) await addFilter(from)

		if (isCmd &&
			(
				args[0] == '--help' ||
				args[0] == '-help' ||
				args[0] == '/h' ||
				args[0] == '/?' ||
				args[0] == '--?' ||
				args[0] == '-?' ||
				args[0] == '?' ||
				args[0] == 'ajuda' ||
				args[0] == '--ajuda' ||
				args[0] == '-ajuda'

			)
		) {

			switch (command) {
				case 'grupo':
					return await kaotic.reply(from, `Comando usado para abrir e fechar o grupo\n\non: fecha\noff:abre`, id)


				case 'rank':
					return await kaotic.reply(from, `Comando feito para ligar as fun????es de xp e jogos no grupo,\n\npara ativar digite ${prefix}rank on\npara desativar digite ${prefix}rank off`, id)

				case 'boasvindas':
				case 'welcome':
				case 'saudacoes':
					return await kaotic.reply(from, `Comando feito para ligar e desligar as sauda????es no grupo,\n\npara ligar difite ${prefix}welcome on\npara desativar digite ${prefix}welcome off`, id)


				case 'menu':
					return await kaotic.reply(from, `Envia menu de comandos primario`, id)

				case 'comandos':
				case 'comando':
					return await kaotic.reply(from, `envia todos os comandos do bot`, id)


				case 'img':
					return await kaotic.reply(from, `transforma  figurinhas em imagens`, id)

				case 'emoji':
					return await kaotic.reply(from, `transforma  emoji em figurinha\nEx: ${prefix}emoji ???? `, id)

				case 'sticker':
				case 'fig':
				case 'stiker':
				case 'f':
				case 's':
					return await kaotic.reply(from, `Transforma, fotos marcadas ou legendadas, ou links de imagens em uma figurinha`, id)


				case 'stickergif':
				case 'gif':
				case 'g':
				case 'gifsticker':
					return await kaotic.reply(from, `Marque ou responda um video ou gif, para transformalo em figurinha animada`, id)


				case 'license':
				case 'licenca':
				case 'licen??a':
					return await kaotic.reply(from, `Esse BOT ?? lincenciado pelo MIT(Massachusetts Institute of Technology), digite ${prefix}licen??a para ver`, id)

				case 'softban':
					return await kaotic.reply(from, `Comando feito para dar ban temporario em alguem, basta marcar e colocar o tempo em minutos.`)

				case 'kick':
				case 'k':
				case 'ban':
				case 'k':
				case 'b':
				case 'banir':
					return await kaotic.reply(from, `Comando usado para banir os arroaceiros do grupo!`, id)

				case 'banirpor': ; case 'softban': ; case 'bantempo':
					return await kaotic.reply(from, `Bani a pessoa por um determinado tempo ex \n ${prefix}banirpor @Deyvisson 10 \nou marca / cita mensagen${prefix}banirpor 10\n em dez minutos colocarei novamente`, id)

				case 'attp':
					return await kaotic.reply(from, `cria uma figurinha com palavras`, id)

				case 'gps':
					return await kaotic.reply(from, `Grupos oficiais do Kaotic`, id)

				case 'gp':
					return await kaotic.reply(from, `Comando usado para enviar link dos grupos oficiais`, id)

				case 'grupos':
					return await kaotic.reply(from, `Comando usado para enviar a Id's de todos os grupos`, id)

				case 'links':
					return await kaotic.reply(from, `Comando feito para dono, para pegar o link de todos os grupos que o Kaotic se encontra`)

				case 'roleta':
				case 'aposta':
					return await kaotic.reply(from, `Comando feito para realizar apostas de Xp.`, id)

				case 'attp':
					return await kaotic.reply(from, `Comando faz uma figurinha com o texto digitado piscando, Ex:\n\n${prefix}attp Mensagem`, id)

				case 'emoji':
					return await kaotic.reply(from, `Comando envia uma figurinha com o emoji que voc?? desejar, e envia uma lista de outros modelos de emoji para que voc?? possa pedir com o comando ${prefix}figurinha`)

				case 'bfigurinha':
					return await kaotic.reply(from, `Comando procura uma figurinha`, id)

				case 'nobg':
					return await kaotic.reply(from, `Remove o fundo de uma foto e envia como figurinha, uso limitado mensal`)

					case 'roubar':
						return await kaotic.reply(from, `coloca na descri????o da figurinha ex: \n marque uma figuruinha coloque /roubar roubei | kaotic`)
	
				
				/*
				// para criar um --help, coloque no seguinte formato
				case 'comando':

					return await kaotic.reply(from, `sua explica????o do comando`)

			*/

				default:

					return await kaotic.sendText(from, `Comando n??o existe`)

			}

		}
		switch (command) {
			// AREA DE TESTES \\
			case 'vip':
				if(!eDono) return kaotic.reply(from, mess.soDono(pushname, config.nomeDono1, config.nomeDono2), id)
				if(args.length <= 2 ||arg.split == 0) return await kaotic.reply(from, `faltando coisa ae`, id)
				var numero = await tratarTelefone(args[0])
				const ids = numero.concat('@c.us')
				const idade = Number(args[1])
				const nome = arg.split('|')[1]

				const regis = await eReg(ids, vips)
				if(regis){
					return await kaotic.reply(from, `j?? ta`, id)
				}
				await vip(ids, nome, idade, vips)
				await kaotic.reply(from, mess.pronto(pushname), id)
				break
			// FIM AREA DE TESTES \\

			case 'grupo': //abre e fecha o grupo
				if (!isGroupMsg) return await kaotic.reply(from, mess.soGrupo(pushname), id)
				if (!botAdm) return await kaotic.sendTextWithMentions(from, mess.botAdm(name, chat.groupMetadata.owner.replace('@c.us', '')), id)
				if (!eAdm) return await kaotic.reply(from, mess.soAdm(pushname), id)
				if (args.length <= 0) return await kaotic.reply(from, `Esse comando tem op????es, caso tenha duvidas digite ${prefix}grupo --help`, id)
				if (args[0] == 'on') {
					await kaotic.setGroupToAdminsOnly(from, true)
					await kaotic.sendText(from, `Os Ademiros dominam`)
				}
				else if (args[0] == 'off') {
					await kaotic.setGroupToAdminsOnly(from, false)
					await kaotic.sendText(from, `Podem falar membros comuns, os ademiros tem d?? de voc??s`)
				} else {
					kaotic.reply(from, mess.onOff(pushname, 'grupo'), id)
				}
				break

			case 'banirpor':
			case 'softban':
			case 'bantempo':

				try {
					if (isGroupMsg && eAdm || isGroupMsg && eDono) {
						if (!eAdm) return await kaotic.reply(from, mess.soGrupo(), id)
						const aatimep = Number(args[0]) * 60000
						const timeaddmsg = Number(aatimep) + 10000

						if (quotedMsg) {
							if (args.length == 0 || isNaN(args[0])) return await kaotic.reply(from, mess.nomark() + ' + time/tempo (minutos/minutes)\n(Ex: 30)', id)
							const bgmcomum = quotedMsgObj.sender.id
							if (ownerNumber.includes(bgmcomum) || groupAdmins.includes(bgmcomum)) return await kaotic.reply(from, mess.vip(), id)
							if (!groupMembersId.includes(bgmcomum)) return await kaotic.reply(from, mess.notongp(), id)
							await kaotic.sendTextWithMentions(from, mess.irritouqm(bgmcomum, args))

							await sleep(3000)
							await kaotic.removeParticipant(groupId, bgmcomum)
							await sleep(aatimep)

							const checkIsHere = await kaotic.getGroupMembersId(groupId)
							if (checkIsHere.includes(bgmcomum)) return await kaotic.reply(from, mess.janogp(), id)

							await kaotic.reply(from, mess.timeadd(), id)
							await kaotic.addParticipant(groupId, bgmcomum)
							await sleep(timeaddmsg)
							await kaotic.sendText(from, mess.voltargp())
						}

						else {
							if (args.length == 0 || isNaN(args[1]) || mentionedJidList.length == 0) return await kaotic.reply(from, mess.semmarcar() + '\n\n@user time/tempo (minutos/minutes)\n(Ex: @user 30)', id)
							if (!groupMembersId.includes(mentionedJidList[0])) return await kaotic.reply(from, mess.notongp(), id)
							await kaotic.sendTextWithMentions(from, mess.irritouml(mentionedJidList, args))
							await sleep(3000)
							if (ownerNumber.includes(mentionedJidList[0]) || groupAdmins.includes(mentionedJidList[0])) return await kaotic.reply(from, mess.vip(), id)
							await kaotic.removeParticipant(groupId, mentionedJidList[0])
							await sleep(aatimep)
							const checkIsHerea = await kaotic.getGroupMembersId(groupId)
							if (checkIsHerea.includes(mentionedJidList[0])) return await kaotic.reply(from, mess.janogp(), id)
							await kaotic.reply(from, mess.timeadd(), id)
							await kaotic.addParticipant(groupId, mentionedJidList[0])
							await sleep(timeaddmsg)
							await kaotic.sendText(from, mess.voltargp())
						}
					} else if (isGroupMsg) {
						await kaotic.reply(from, mess.soademiro(), id)
					} else return await kaotic.reply(from, mess.sogrupo(), id)
				} catch (error) {
					await kaotic.reply(from, mess.addpessoa(), id)
					console.log(cores('[SOFTBAN]', 'crimson'), cores(`??? Obtive erros no comando ${prefix}${command} ??? ${error.message} - Voc?? pode ignorar.`, 'gold'))

				}
				break

			case 'kick':
			case 'k':
			case 'ban':
			case 'k':
			case 'b':

				if (isGroupMsg && eAdm ||
					isGroupMsg && eDono) {

					if (!botAdm) return await kaotic.reply(from, mess.botAdm(name, chat.groupMetadata.owner.replace('@c.us', '')), id)
					if (quotedMsg) {

						const negquo = quotedMsgObj.sender.id

						if (ownerNumber.includes(negquo)) return await kaotic.reply(from, mess.vip(), id)
						if (groupAdmins.includes(negquo)) return await kaotic.reply(from, mess.removeradm(), id)
						if (!groupMembersId.includes(negquo)) return await kaotic.reply(from, mess.notongp(), id)

						await kaotic.sendTextWithMentions(from, mess.ban(negquo))
						await kaotic.removeParticipant(groupId, negquo)

					} else {

						if (mentionedJidList.length == 0) return await kaotic.reply(from, mess.semMarcar(pushname), id)
						await kaotic.sendTextWithMentions(from, mess.kick(mentionedJidList))

						for (let i = 0; i < mentionedJidList.length; i++) {

							if (ownerNumber.includes(mentionedJidList[i])) return await kaotic.reply(from, mess.vip(), id)
							if (groupAdmins.includes(mentionedJidList[i])) return await kaotic.reply(from, mess.removeradm(), id)

							await kaotic.removeParticipant(groupId, mentionedJidList[i])

						}
					}
				} else if (isGroupMsg) {

					await kaotic.reply(from, mess.soAdm(pushname), id)
				} else return await kaotic.reply(from, mess.soGrupo(pushname), id)

				break


			case 'rank': //liga e desliga o rank nos grupos
				if (!isGroupMsg) return await kaotic.reply(from, mess.soGrupo(pushname), id)
				if (!eAdm || !eDono) return await kaotic.reply(from, mess.soAdm, id)
				const idGrupo = groupId
				// Liga a fun????o xp
				if (args[0] == 'on') {

					//verifica se j?? est?? no arquivo
					if (xp.includes(idGrupo)) return await kaotic.reply(from, mess.jaHabilitado(), id)

					//puxa a id do grupo e coloca na xp.json
					xp.push(idGrupo)
					await fs.writeFileSync('./lib/config/Grupos/xp.json', JSON.stringify(xp))

					//informa que foi habilitado
					await kaotic.reply(from, mess.ligado('Rank'), id)

				} else if (args[0] == 'off') {

					//verifica se est?? ligado
					if (!xp.includes(idGrupo)) return await kaotic.reply(from, mess.jaDesligado(pushname), id)

					//puxa a id e remove do xp.json
					while (xp.includes(idGrupo)) {

						//enquanto tiver no xp.json ele vai remover
						xp.splice(idGrupo, 1)
						await fs.writeFileSync('./lib/config/Grupos/xp.json', JSON.stringify(xp))

					}

					//informa que foi desativado
					await kaotic.reply(from, mess.desligado('Rank'), id)

				}
				else return await kaotic.reply(from, mess.onOff(pushname, 'rank'), id)
				break
			//liga e desliga as sauda????es
			case 'boasvindas':
			case 'welcome':
			case 'saudacoes':

				if (!isGroupMsg) return await kaotic.reply(from, mess.soGrupo(pushname), id)
				if (!eAdm || !eDono) return await kaotic.reply(from, mess.soAdm(pushname), id)

				//ativa
				if (args[0] == 'on') {

					//verifica se j?? est?? ativo
					if (welkom.includes(groupId)) return await kaotic.reply(from, mess.jaHabilitado(pushname), id)

					//escreve no JSON
					welkom.push(groupId)
					await fs.writeFileSync('./lib/config/Grupos/welcome.json', JSON.stringify(welkom))

					//informa que ativou 
					await kaotic.reply(from, mess.ligado('welcome'), id)

				}

				//desativa
				else if (args[0] == 'off') {

					//verifica se est?? ativo
					if (!welkom.includes(groupId)) return await kaotic.reply(from, mess.jaDesligado(pushname), id)

					//remove no JSON
					welkom.splice(groupId, 1)
					await fs.writeFileSync('./lib/config/Grupos/welcome.json', JSON.stringify(welkom))

					//avisa a exclus??o
					await kaotic.reply(from, mess.desligado('welcome'), id)

				}

				// caso n??o sigam as instru????es
				else {

					return await kaotic.reply(from, mess.onOff(pushname), id)

				}

				break

			case 'menu'://menu primario
			
		//numero de mensagens
				const pvativo = await kaotic.getAllChatIds()
				const gpativo = await kaotic.getAllGroups()

				const theMsg = await getMsg(user, msgcount)
				//xp
				const uzrXp = await getXp(user, nivel)

				//nivel
				const uzrlvl = await getLevel(user, nivel)

				//nivel para up
				const uneedxp = 5 * Math.pow(uzrlvl, 2) + 50 * uzrlvl + 100

				//ping
				const mping = processTime(t, moment())

				//envia o menu com as informa????es
					await kaotic.sendFile(from, './lib/midia/img/kaotic.jpg', 'kaoticbot.jpg', menus.menu(pushname, time, theMsg, uzrXp, uneedxp, uzrlvl, mping, patente, pvativo, gpativo))
				break

			case 'Figurinhas':
				await kaotic.sendText(from, mess.Figurinhas())
				break
						
			case 'comandos':
			case 'comando'://todos os comandos
				await kaotic.sendText(from, menus.comandos())
				break

			case 'grupos':

				const todosGrupos = await kaotic.getAllGroups()
				let msg = ''
				for (let ids of todosGrupos) {
					msg += `??? *${ids.contact.name}*\n id = ${ids.contact.id.replace(/@g.us/g, '')}\n\n`
				}
				await kaotic.reply(from, msg, id)

				break

			case 'links':
				if (!eDono) return await reply(from, mess.soDono(pushname, config.nomeDono1, config.nomeDono2), id)
				if (isGroupMsg && args[0] !== '-f') return await kaotic.reply(from, mess.soPv(pushname), id)
				const allGrupos = await kaotic.getAllGroups()
				for (let ids of allGrupos) {
					const adms = await kaotic.getGroupAdmins('' + ids.contact.id)
					if (adms.includes(botNumber + '@c.us')){
						kaotic.getGroupInviteLink('' + ids.contact.id).then((a) => kaotic.sendLinkWithAutoPreview(from, a, `\n => ${ids.contact.name}`))
					}
				}
				await sleep(3000)
				await kaotic.reply(from, mess.pronto(pushname), id)
					break

			case 'gps':
				await kaotic.sendText(from, menus.gps())
				break

			case 'gp': // by luix
				var grupoMsgCliente = '0'
				try {
					grupoMsgCliente = args[0]
				} catch (erro) {
					kaotic.reply(from, `Qual o grupo deseja o link?\n\nCaso tenha duvida digite ${prefix}gps.`, id)
				}
				switch (grupoMsgCliente) {
					case '1':
						kaotic.getGroupInviteLink('557588737769-1620501506@g.us').then((a) => kaotic.sendLinkWithAutoPreview(from, a, `\n\nGrupo oficial do Kaotic Bot`))
						break
					case '2':
						kaotic.getGroupInviteLink('557588737769-1553711859@g.us').then((a) => kaotic.sendLinkWithAutoPreview(from, a))
						break
					case '3':
						kaotic.getGroupInviteLink('553199949012-1601559160@g.us').then((a) => kaotic.sendLinkWithAutoPreview(from, a))
						break
					case '4':
						kaotic.getGroupInviteLink('557588737769-1559309169@g.us').then((a) => kaotic.sendLinkWithAutoPreview(from, a))
						break
					default:
						kaotic.reply(from, `Qual o grupo deseja o link?\n\nCaso tenha duvida digite ${prefix}gps.`, id)
				}
				break

			case 'img'://transoforma stickers em imagens

				//verifica se tem imagem marcada
				if (!isQuotedSticker) return await kaotic.reply(from, mess.nofigu(), id)

				//envia msg para 'entendido'
				await kaotic.reply(from, mess.entendido(), id)

				//decrypta a figurinha
				const mediaData = await decryptMedia(quotedMsg, uaOverride)

				//envia a foto
				await kaotic.sendFile(from, `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`, '', '', id)

				break

			case 'sticker':
			case 'fig':
			case 'stiker':
			case 'f':
			case 's':

				const sharpre = async (mimetype, isCircle, noCut, mediaData) => {
					await sharp(mediaData).resize({
						width: 512, height: 512, fit: 'fill'
					}).toBuffer().then(async (resizedImageBuffer) => {
						await Kaotic.sendImageAsSticker(from,
							`data:${mimetype};base64,${resizedImageBuffer.toString('base64')}`,
							{ author: config.author, pack: config.pack, keepScale: noCut, circle: isCircle }
						)
					})
				}


				if (isMedia && isImage) {

					await kaotic.reply(from, mess.entendido(), id)
					const mediaData = await decryptMedia(message, uaOverride)

					if (arks.includes('-circle')) { var isCircle = true }
					else { var isCircle = false }

					if (arks.includes('-nocut')) { var noCut = true }
					else { var noCut = false }

					if (arks.includes('-fill')) {
						return await sharpre(mimetype, isCircle, noCut, mediaData)
					}

					await kaotic.sendImageAsSticker(from,
						`data:${mimetype};base64,${mediaData.toString('base64')}`,
						{ author: config.author, pack: config.pack, keepScale: noCut, circle: isCircle })

				} else if (isQuotedImage) {

					await kaotic.reply(from, mess.entendido(), id)
					const mediaData = await decryptMedia(quotedMsg, uaOverride)

					if (arks.includes('-circle')) { var isCircle = true }
					else { var isCircle = false }

					if (arks.includes('-nocut')) { var noCut = true }
					else { var noCut = false }

					if (arks.includes('-fill')) {
						return await sharpre(quotedMsg.mimetype, isCircle, noCut, mediaData)
					}
					await kaotic.sendImageAsSticker(from,
						`data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`,
						{ author: config.author, pack: config.pack, keepScale: noCut, circle: isCircle })

				}
				else if (args.length == 1) {

					await kaotic.reply(from, mess.entendido(), id)

					if (isUrl(url)) {

						if (arks.includes('-circle')) { var isCircle = true }
						else { var isCircle = false }

						if (arks.includes('-nocut')) { var noCut = true }
						else { var noCut = false }

						await kaotic.sendStickerfromUrl(from, url, { method: 'get' },
							{ author: config.author, pack: config.pack, keepScale: noCut, circle: isCircle })

					} else return await kaotic.reply(from, mess.semlink(), id)

				} else return await kaotic.reply(from, mess.figurinha(), id)

				break

		
			case 'roleta':
			case 'aposta':

				//grupos permitindo jogos
				if (!isGroupMsg) return await kaotic.reply(from, mess.soGrupo(pushname), id)
				if (!xp.includes(groupId)) return await kaotic.sendTextWithMentions(from, mess.xpGrupo(pushname, name, chat.groupMetadata.owner.replace('@c.us', '')), id)


				//verifica se apostou
				if (body.length < 9) return kaotic.reply(from, mess.numeros(pushname), id)
				
				await sleep(500)

				//valores de xp e xpmaximo
				const xpPessoa = await getXp(user, nivel)
				const xpMaximo = Number(xpPessoa / 2, 10)

					//verifica se apostou numero
					if (isNaN(args[0]) || !numInt(args[0]) || args[0] == undefined || Number(args[0]) < 250 || Number(args[0]) > xpMaximo) return await kaotic.reply(from, mess.praposta(xpPessoa, xpMaximo), id)

					//valores caso ganhe ou perde
					var xpGanhou = math.floor(math.random() * sorteio250) + Number(args[0])
					var xpPerdeu = math.floor(math.random() * -sorteio250) - Number(args[0])

					//limite de jogos
					const limitrl = await getLimit(user, daily)
					if (limitrl !== undefined && cd - (Date.now() - limitrl) > 0) {
						const time = ms(cd - (Date.now() - limitrl))
						await kaotic.reply(from, mess.limitejogo(), id)
					} else {
						//ganha
						if (side == 1) {

							await kaotic.sendFile(from, './lib/midia/img/win.jpg', 'venceu.jpg', mess.ganho(xpGanhou))
							await sleep(1000)
							await addXp(user, xpGanhou, nivel)

							//perde
						} else {


							await kaotic.sendFile(from, './lib/midia/img/perdeu.png', 'perdi.png', mess.perde(xpPerdeu))
							await sleep(1000)
							await addXp(user, xpPerdeu, nivel)

						}
						//adiciona limite
						await addLimit(user, daily)
					}
				break

				

			case 'bfigurinha':
				if (args.length == 0) return await kaotic.reply(from, mess.nocomando() + 'palavras/words/n??meros/numbers.', id)
				await kaotic.reply(from, mess.entendido(), id)
				const stkm = await fetch(`https://api.fdci.se/sosmed/rep.php?gambar=${encodeURIComponent(body.slice(12))}`)
				const stimg = await stkm.json()
				let stkfm = stimg[Math.floor(Math.random() * stimg.length) + 1]
				if (stkfm == null) return await kaotic.reply(from, mess.noResultado(), id)
				await kaotic.sendStickerfromUrl(from, stkfm, { method: 'get' }, { author: config.author, pack: config.pack, keepScale: true })
				break

			case 'stickergif':
			case 'gif':
			case 'g':
			case 'gifsticker':

				//verifica se ??, foto, ou video, seja marcado ou comentado
				if (isMedia &&
					isVideo ||
					isGif ||
					isQuotedVideo ||
					isQuotedGif) {

					//espere
					await kaotic.reply(from, mess.entendido(), id)

					//encrypta mensagem marcada
					const encryptMedia = isQuotedGif || isQuotedVideo ? quotedMsg : message

					//decrypta
					const mediaData = await decryptMedia(encryptMedia, uaOverride)

					//envia a mensagem
					await kaotic.sendMp4AsSticker(from, mediaData, null, { stickerMetadata: true, pack: config.pack, author: config.author, fps: 10, crop: true, loop: 0 }).catch(async () => { await kaotic.reply(from, mess.gifail(), id) })
				}

				else return await kaotic.reply(from, mess.videoOuGif(pushname), id)

				break

			case 'license':
			case 'licenca':
			case 'licen??a':

				kaotic.sendFile(from, './lib/midia/img/licenca.jpg', 'licenca.png')
				await sleep(2000)
				kaotic.sendTextWithMentions(from, mess.licenca())
				kaotic.sendPtt(from, './lib/midia/audio/termos.mp3')

				break

			case 'attp':
				if (args.length == 0) return await kaotic.reply(from, mess.nocomando() + 'palavras/words/n??meros/numbers.', id)
				await kaotic.reply(from, mess.entendido(), id)
				await axios.get(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(body.slice(6))}`, { responseType: 'arraybuffer' }).then(async (response) => {
					const attp = Buffer.from(response.data, 'binary').toString('base64')
					await kaotic.sendImageAsSticker(from, attp, { author: config.author, pack: config.pack, keepScale: true })
				})
				break

			case 'nobg':
				if (isMedia && type === 'image' || isQuotedImage) {
					const nobgmd = isQuotedImage ? quotedMsg : message
					const mediaData = await decryptMedia(nobgmd, uaOverride)
					const imageBase64 = `data:${nobgmd.mimetype};base64,${mediaData.toString('base64')}`
					await kaotic.reply(from, mess.entendido(), id)
					const base64img = imageBase64
					const outFile = `./lib/media/img/${user.replace('@c.us', '')}noBg.png`
					var result = await removeBackgroundFromImageBase64({ base64img, apiKey: config.nobg, size: 'auto', type: 'auto', outFile })
					await fs.writeFile(outFile, result.base64img)
					await kaotic.sendImageAsSticker(from, `data:${nobgmd.mimetype};base64,${result.base64img}`, { pack: config.pack, author: config.author, keepScale: true })
					await kaotic.reply(from, mess.nobgms(), id)
					await sleep(10000).then(async () => { await fs.unlinkSync(`./lib/media/img/${user.replace('@c.us', '')}noBg.png`) })
				} else return await kaotic.reply(from, mess.soimg(), id)
				break

			case 'emoji':
				if (args.length == 0) return await kaotic.reply(from, mess.nocomando() + 'emoji.', id)
				emoji.get(args[0]).then(async (emoji) => {
					await sleep(3000)
					if (emoji.emoji == null) return await kaotic.reply(from, mess.noemoji(), id)
					let moji = `Emoji: ${emoji.emoji}\n\nUnicode: ${emoji.unicode}\n\nNome: ${emoji.name}\n\nInforma????es: ${emoji.description}\n\n`
					for (let i = 0; i < emoji.images.length; i++) { moji += `${emoji.images[i].vendor} ??? ${emoji.images[i].url}\n\n???????????????????????????????????????????????????\n\n` }
					await kaotic.reply(from, moji + mess.emojis(), id)
					await kaotic.sendStickerfromUrl(from, emoji.images[0].url, { method: 'get' }, { author: config.author, pack: config.pack, keepScale: true })
				})
				break

				case 'roubar':
					if (quotedMsg && quotedMsg.type == 'sticker' && arks.includes('|')) {
						await kaotic.reply(from, mess.wait(), id)
						const stickerMeta = await decryptMedia(quotedMsg)
						const packName = arg.split('|')[0]
						const authorName = arg.split('|')[1]
						await kaotic.sendImageAsSticker(from, `data:${quotedMsg.mimetype};base64,${stickerMeta.toString('base64')}`, { author: authorName, pack: packName })
					} else return await kaotic.reply(from, mess.nofigu() + '\n\n' + mess.argsbar() + 'use 1 "|".', id)
					break

               case 'demote':;case 'demitir':
			if (isGroupMsg && eAdm || isGroupMsg && isOwner) {
				if (!botAdm) return await kaotic.reply(from, mess.botademin(), id)
				if (quotedMsg) {
					const demquo = quotedMsgObj.sender.id
					if (!groupAdmins.includes(demquo)) return await kaotic.reply(from, mess.notadm, id)
					await kaotic.sendTextWithMentions(from, mess.demitir(demquo))
					await kaotic.demoteParticipant(groupId, demquo)
				} else {
					if (mentionedJidList.length == 0) return await kaotic.reply(from, mess.semmarcar(), id)
					await kaotic.sendTextWithMentions(from, mess.demitir(mentionedJidList))
					var isNaM = ''
					for (let i = 0; i < mentionedJidList.length; i++) {
						if (!groupAdmins.includes(mentionedJidList[i])) isNaM += `@${mentionedJidList[i].replace('@c.us', '')} `
						await kaotic.demoteParticipant(groupId, mentionedJidList[i])
					}
					if (isNaM !== '') {
						isNaM += `\n\n${mess.notadm()}`
						await kaotic.sendTextWithMentions(from, isNaM, id)
					}
				}
			} else if (isGroupMsg) {
				await kaotic.reply(from, mess.soAdm(), id)
			} else return await kaotic.reply(from, mess.soGrupo(), id)
            break

			case 'promote':;case 'promover':
					if (isGroupMsg && eAdm || isGroupMsg && isOwner) {
					if (!botAdm) return await kaotic.reply(from, mess.botademira(), id)
					if (quotedMsg) {
					const proquo = quotedMsgObj.sender.id
					if (eAdm.includes(proquo)) return await kaotic.reply(from, mess.isadm(), id)
					await kaotic.sendTextWithMentions(from, mess.promote(proquo))
					await kaotic.promoteParticipant(groupId, proquo)
					} else {
					if (mentionedJidList.length == 0) return await kaotic.reply(from, mess.semmarcar(), id)
					await kaotic.sendTextWithMentions(from, mess.promover(mentionedJidList))
					var isPromo = ''
					for (let i = 0; i < mentionedJidList.length; i++) {
					if (eAdm.includes(mentionedJidList[i])) isPromo += `@${mentionedJidList[i].replace('@c.us', '')} `
					await kaotic.promoteParticipant(groupId, mentionedJidList[i])
						}
					if (isPromo !== '') {
						isPromo += `\n\n${mess.isadm()}`
					await kaotic.sendTextWithMentions(from, isPromo, id)
						}
					}
					} else if (isGroupMsg) {
					await kaotic.reply(from, mess.soAdm(), id)
					} else return await kaotic.reply(from, mess.soGrupo(), id)
				break
	
				case 'ping':
					const rTime = (seconds) => {
						const pad = (s) => { return (s < 10 ? '0' : '') + s }
						var hours = Math.floor(seconds / (60*60)); var minutes = Math.floor(seconds % (60*60) / 60); var seconds = Math.floor(seconds % 60)
						return `${pad(hours)} horas | ${pad(minutes)} minutos | ${pad(seconds)} segundos - HH:MM:SS`
					}
					const osUptime = () => {
						var up_sec = os.uptime(); var up_min = up_sec / 60; var up_hour = up_min / 60; up_sec = Math.floor(up_sec); up_min = Math.floor(up_min); up_hour = Math.floor(up_hour); up_hour = up_hour % 60; up_min = up_min % 60; up_sec = up_sec % 60
						return `${up_hour} horas | ${up_min} minutos | ${up_sec} segundos - HH:MM:SS`
					}
					const ramMemory = () => {
						var allRam = os.totalmem(); var kbRam = allRam/1024; var mbRam = kbRam/1024; var gbRam = mbRam/1024; kbRam = Math.floor(kbRam); mbRam = Math.floor(mbRam); gbRam = Math.floor(gbRam); mbRam = mbRam%1024; kbRam = kbRam%1024; allRam = allRam%1024;
						return `${gbRam}GB | ${mbRam}MB | ${kbRam}KB | ${allRam} Bytes`
					}
					const timeBot = rTime(process.uptime())
					const loadedMsg = await kaotic.getAmountOfLoadedMessages()
					const chatIds = await kaotic.getAllChatIds()
					const groups = await kaotic.getAllGroups()
					const zapVer = await kaotic.getWAVersion()
					const botBat = await kaotic.getBatteryLevel()
					const isEnergy = await kaotic.getIsPlugged()
					await kaotic.sendText(from, mess.info(timeBot, osUptime, ramMemory, os, loadedMsg, groups, chatIds, processTime, t, moment, zapVer, botBat, isEnergy))
					break
						
			
			default:

				return await kaotic.reply(from, `Comando n??o existe`, id)

		}

	} catch (err) {
		let { pushname, verifiedName, formattedName } = sender
		pushname = pushname || verifiedName || formattedName
		await kaotic.sendTextWithMentions(config.suporte, `???Obtive erros com o comando ${body}, o Usuario: @${sender.id} / ${pushname}!\n\nErro:\n${err}`)
		await kaotic.reply(from, `??? Ops!\n\nObtive erros com esse comando, tome cuidado ao usa-lo, informei ao dono para que ele concerte!`, id)
		console.log(cores('[FALHA GERAL]', 'red'), err)
	}
}