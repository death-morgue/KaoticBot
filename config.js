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


// Util
const { cores, dormir, eLink, upload, muitoUsado, addFilter, traduzir, numInt } = require('./lib/funcoes')
const { getLevel, getMsg, getXp, addLevel, addXp, getRank, isWin, wait, addLimit, addMsg, getLimit, getRole } = require('./lib/gaming')
const poll = require('./lib/poll')
const config = require('./lib/config/Bot/config.json')
const patents = require('./lib/config/Bot/patentes.json')
const { meuIdioma } = require('./lib/lingua')
const { reply } = require('canvacord/src/Canvacord')
const { owner } = require('./lib/lingua/pt')
const options = { headless: true, userDataDir: "./logs/Chrome/Maker", args: ['--aggressive-cache-discard', '--disable-application-cache', '--disable-cache', '--disable-offline-load-stale-cache', '--disable-setuid-sandbox', '--disk-cache-size=0', '--ignore-certificate-errors', '--no-sandbox', '--single-process'] }
// Leia a options.js para maiores detalhes

// ATIVADORES & CONFIGS EXTRAS
const region = config.lang
//const aki = new Aki(region)
//const akinit = async () => { try { await aki.start() } catch (error) { console.log(cores('[AKI]', 'crimson'), cores(`→ Obtive erros ao iniciar o akinator → ${error.message}.`, 'gold')) } }
//akinit()
const cd = Number(config.timePlay * 60000) // * 60000 - Transforma o valor do tempo de aposta em minutos
const mess = meuIdioma()
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
        const isGroupAdmins = isGroupMsg ? groupAdmins.includes(user) : false
        const isBotGroupAdmins = isGroupMsg ? groupAdmins.includes(botNumber + '@c.us') : false
        const isNsfw = isGroupMsg ? nsfw_.includes(groupId) : false
		const isOwner = ownerNumber.includes(user)
        const autoSticker = isGroupMsg ? atstk.includes(groupId) : false

		//tempo
        const time = moment(t * 1000).format('DD/MM HH:mm:ss')
		const processTime = (timestamp, now) => { return moment.duration(now - moment(timestamp * 1000)).asSeconds() }

		//msg
		const arg = body.trim().substring(body.indexOf(' ') + 1)
        const args = body.trim().split(/ +/).slice(1)
        const isCmd = body.startsWith(prefix)
        const url = args.length !== 0 ? args[0] : ''

		//permissões do grupo
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
		
		// OUTRAS

		//para usar em jogos
        const side = Math.floor(Math.random() * 2) + 1
		const lvpc = Math.floor(Math.random() * 100) + 1
		const lvrq = 100 - lvpc
		const milSort = Math.floor(Math.random() * 1000) + 1

		//votação
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

		
		// Sobe patente por nível, se desejar edite as patentes em 'lib/config/Bot/patentes.json'
        const check = await getLevel(user, nivel)
		var patente = patents.a0
		if(isOwner){ patente = patents.a31 } 
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
        if (isGroupMsg /*&& isxp*/ && !isWin(user) && !isBlocked) {
            try {
                await wait(user)
                const levelAtual = await getLevel(user, nivel)
                const xpAtual = Math.floor(Math.random() * 20) + 11 // XP de 10 a 30
                const neededXp = 5 * Math.pow(levelAtual, 2) + 50 * levelAtual + 100
				await dormir(2000)
                await addXp(user, xpAtual, nivel)
                if (neededXp <= getXp(user, nivel)) {
                    await addLevel(user, 1, nivel)
					// Ative isso para fazer a Kaotic mandar mensagem de level UP
					//const userLevel = await getLevel(user, nivel)
                    //const takeXp = 5 * Math.pow(userLevel, 2) + 50 * userLevel + 100
                    //await kaotic.reply(from, `*「 +1 NIVEL 」*\n\n➸ *Nome*: ${pushname}\n➸ *XP*: ${await getXp(user, nivel)} / ${takeXp}\n➸ *Level*: ${levelAtual} -> ${await getLevel(user, nivel)} 🆙 \n➸ *Patente*: *${patente}* 🎉`, id)
                }
            } catch (err) { console.log(cores('[XP]', 'crimson'), err) }
        }
		
		// Anti Imagens pornográficas
		if (isGroupMsg && 
			!isGroupAdmins && 
			isBotGroupAdmins && 
			isAntiPorn && 
			isMedia && 
			isImage && 
			!isCmd && 
			!isOwner && 
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
					cores(`A imagem contém traços de conteúdo adulto, removerei o → ${pushname} - [${user}]...`, 'gold'));
					return oneImage = 0

				} else { console.log(
					cores('[SEM NSFW]', 'lime'), 
					cores(`→ A imagem não aparenta ser pornográfica.`, 'gold'));
					oneImage = 0 }
					
			} catch (error) { return oneImage = 0 }
		}
		
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
			!isGroupAdmins && 
			isBotGroupAdmins && 
			isAntiLink && 
			!isOwner && 
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
							return oneLink = 0 })

					} else { console.log(cores('[ALERTA]', 'gold'), 
					cores('Link de grupo invalido recebido...', 'gold'));oneLink = 0 }
				}
			} catch (error) { return oneLink = 0 }
		}

		// Bloqueia todas as travas, seja contato, localização, texto e outros
		if (isGroupMsg && 
			isAntiTravas &&
			isTrava && 
			!isGroupAdmins && 
			isBotGroupAdmins && 
			!isOwner && 
			oneTrava == 0) {
			try {

				oneTrava = 1; console.log(cores('[TRAVA]', 'red'), 
				cores(`Possivel trava recebida pelo → ${pushname} - [${user.replace('@c.us', '')}] em ${name}...`, 'gold'))

				let wakeAdm = 'ACORDA - WAKE UP ADM\n\n'
				var shrekDes = ''
				for (let i = 0; i < 20; i++) {
					
					//destrava shrek
					shrekDes += `⡴⠑⡄⠀⠀⠀⠀⠀⠀⣀⣀⣤⣤⣤⣀⡀\n⡇⠀⠿⠀⠀⠀⣀⡴⢿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀\n⠀⠀⠀⢄⣠⠾⠁⣀⣄⡈⠙⣿⣿⣿⣿⣿⣿⣿⣿⣆\n⠀⠀⠀⢀⡀⠁⠀⠀⠈⠙⠛⠂⠈⣿⣿⣿⣿⣿⠿⡿⢿⣆\n⠀⠀⢀⡾⣁⣀⠀⠴⠂⠙⣗⡀⠀⢻⣿⣿⠭⢤⣴⣦⣤⣹⠀⠀⠀⢴⣆ \n⠀⢀⣾⣿⣿⣿⣷⣮⣽⣾⣿⣥⣴⣿⣿⡿⢂⠔⢚⡿⢿⣿⣦⣴⣾⠁⡿ \n⢀⡞⠁⠙⠻⠿⠟⠉⠀⠛⢹⣿⣿⣿⣿⣿⣌⢤⣼⣿⣾⣿⡟⠉\n⣾⣷⣶⠇⠀⠀⣤⣄⣀⡀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇\n⠉⠈⠉⠀⠀⢦⡈⢻⣿⣿⣿⣶⣶⣶⣶⣤⣽⡹⣿⣿⣿⣿⡇\n⠀⠀⠀⠀⠀⠀⠉⠲⣽⡻⢿⣿⣿⣿⣿⣿⣿⣷⣜⣿⣿⣿⡇\n⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣷⣶⣮⣭⣽⣿⣿⣿⣿⣿⣿⣿\n⠀⠀⠀⠀⠀⣀⣀⣈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇\n⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃\n⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠁\n⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠻⠿⠿⠿⠿⠛⠉\n\n` 
				}

				for (let adminls of groupAdmins) {

					 wakeAdm += `➸ @${adminls.replace(/@c.us/g, '')}\n` 

					}

				await kaotic.removeParticipant(groupId, user).then(async () => { 
					await kaotic.setGroupToAdminsOnly(groupId, true) }) // Fecha só para admins e bane o cara que travou

				await kaotic.sendText(from, shrekDes, id).then(async () => { 
					await kaotic.sendTextWithMentions(from, wakeAdm) })  // Anti-Trava BR do Shrek muahauhauha + Chamar ADMS

				await kaotic.sendTextWithMentions(from, mess.baninjusto(user) + 'Travas.').then(async () => { 
					await kaotic.sendText(from, mess.nopanic(), id) }) // Manda o motivo do ban e explica para os membros
					
				await kaotic.sendText('557588690774-1621550879@g.us', ownerNumber[0], mess.recTrava(user) + `\nAt/No > ${name}`).then(async () => {
					await kaotic.contactBlock(user) }) // Avisa o dono do bot e bloqueia o cara

				await kaotic.setGroupToAdminsOnly(groupId, false);return oneTrava = 0 // Reabre o grupo

			} catch (error) { return oneTrava = 0 }
		}
		
		// Bloqueia travas no PV
		if (!isGroupMsg && !isOwner && isTrava) { 
			await kaotic.contactBlock(user).then(async () => { 
				await kaotic.sendText(ownerNumber[0], mess.recTrava(user)) 
			}) }
		// Para limpar automaticamente sem você verificar, adicione "await kaotic.clearChat(chatId)", o mesmo no de grupos.

        // Anti links pornográficos
        if (isGroupMsg && !isGroupAdmins && isBotGroupAdmins && isAntiPorn && !isOwner && oneLink == 0) {
			try {
				if (eLink(chats)) {
					oneLink = 1; const inilkn = new URL(chats)
					console.log(cores('[URL]', 'gold'), 'URL recebida →', inilkn.hostname)
					await isPorn(inilkn.hostname, async (err, status) => {
						if (err) return console.error(err)
						if (status) {
							console.log(cores('[NSFW]', 'red'), cores(`O link é pornografico, removerei o → ${pushname} - [${user.replace('@c.us', '')}]...`, 'gold'))
							await kaotic.removeParticipant(groupId, user).then(async () => { 
								await kaotic.sendTextWithMentions(from, mess.baninjusto(user) + 'Porno/Porn.');
								return oneLink = 0 })

						} else { console.log(
							cores('[SEM NSFW]', 'lime'), 
							cores(`→ O link não possui pornografia.`, 'gold'));
							oneLink = 0 }
					})
				}
			} catch (error) { return oneLink = 0 }
		}
		
		// Impede travas ou textos que tenham mais de 5.000 linhas
		if (isGroupMsg && !isGroupAdmins && isBotGroupAdmins && !isOwner && oneTrava == 0) {
			try {
				if (chats.length > 5000) {

					oneTrava = 1; 
					console.log(cores('[TRAVA]', 'red'), 

					cores(`Possivel trava recebida pelo → ${pushname} - [${user.replace('@c.us', '')}] em ${name}...`, 'gold'))
					await kaotic.removeParticipant(groupId, user).then(async () => { 
						await kaotic.sendTextWithMentions(from, mess.baninjusto(user) + 'Travas.') 
					}) // Remove e manda o motivo no grupo

					await kaotic.sendText(ownerNumber[0], mess.recTrava(user)).then(async () => { 
						await kaotic.contactBlock(user);return oneTrava = 0 
					}) // Avisa o dono e então bloqueia a pessoa
				}
			} catch (error) { return oneTrava = 0}
		}
		
		// Bloqueia travas no PV que tenham mais de 5.000 linhas
		if (!isGroupMsg && !isOwner) {
			try {
				if (chats.length > 5000) {
					console.log(cores('[TRAVA]', 'red'), 
					cores(`Possivel trava recebida pelo → ${pushname} - [${user.replace('@c.us', '')}]...`, 'gold'))
					return await kaotic.contactBlock(user).then(async () => { 
						await kaotic.sendText(ownerNumber[0], mess.recTrava(user)) 
					}) // Avisa o dono e bloqueia
				}
			} catch (error) { return }
		}
		
		// Ative para banir quem mandar todos os tipos de links (Ative removendo a /* e */)
		/*if (isGroupMsg && !isGroupAdmins && isBotGroupAdmins && isAntiLink && !isOwner && eLink(chats)) { 
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
				if (chats == 'Mensagem a receber, sem espaços') {
					await kaotic.reply(from, 'Resposta para enviar', id)
				} 
			} catch (error) { return } 
		}*/
		
		// Impede comandos em PV'S mutados
		if (!isGroupMsg && isCmd && pvmte && !isOwner ) {
		return console.log(cores('> [SILENCE]', 'red'), 
		cores(`Ignorando comando de ${pushname} - [${user.replace('@c.us', '')}] pois ele está mutado...`, 'gold'))
		}

		// Impede comandos em grupos mutados
		if (isGroupMsg && isCmd && !isGroupAdmins && mute && !isOwner) {
		return console.log(cores('> [SILENCE]', 'red'), 
		cores(`Ignorando comando de ${name} pois ele está mutado...`, 'gold'))
		}

		// Muta geral, reseta ao reiniciar
		if (isCmd && !isOwner && isMuteAll == 1) {
		return console.log(cores('> [SILENCE]', 'red'), 
		cores(`Ignorando comando de ${pushname} pois os PV'S e Grupos estão mutados...`, 'gold'))
		}

		// Ignora pessoas bloqueadas
		if (isBlocked && isCmd && !isOwner){
		return console.log(cores('> [BLOCK]', 'red'), 
		cores(`Ignorando comando de ${pushname} - [${user.replace('@c.us', '')}] por ele estar bloqueado...`, 'gold'))
		}

        // Anti Flood para PV'S
        if (isCmd && muitoUsado(from) && !isGroupMsg && !isOwner) { 
			await addXp(user, -100, nivel); 
			return console.log(cores('> [FLOOD AS]', 'red'), 
			cores(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'gold'), 
			cores(`"[${prefix}${command.toUpperCase()}] [${args.length}]"`, 'red'), 'DE', 
			cores(`"${pushname} - [${user.replace('@c.us', '')}]"`, 'red')) 
		}
		
		// Anti Flood para grupos
        if (isCmd && muitoUsado(from) && isGroupMsg) { 
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

		if(isCmd && 
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
		){
			
			switch(command){
				case 'grupo':
					
					return await kaotic.sendText(from, `comando usado para abrir e fechar o grupo\n\non: fecha\noff:abre`)

				break

				/*
					// para criar um --help, coloque no seguinte formato
					case 'comando':

						return await kaotic.sendText(from, `sua explicação do comando`)

					break
				*/

				default:
					
					return await kaotic.sendText(from, `Comando não existe`)

				break
			}
			
		}
        switch(command) {
			
        case 'grupo': //abre e fecha o grupo
			if(!isGroupMsg) return await kaotic.reply(from, mess.soGrupo(sender.name), id)
			if(!isBotGroupAdmins) return await kaotic.sendTextWithMentions(from, mess.botAdm(name, chat.groupMetadata.owner.replace('@c.us', '')), id)
			if(!isGroupAdmins) return await kaotic.reply(from, mess.soAdm(sender.name), sender.id)
			if(args.length<=0) return await kaotic.reply(from, `Esse comando tem opções, caso tenha duvidas digite ${prefix}grupo --help`, id)
				if(args[0] == 'on'){
					await kaotic.setGroupToAdminsOnly(from, true)
					await kaotic.sendText(from, `Os Ademiros dominam`)
				}
				else if(args[0] == 'off'){
					await kaotic.setGroupToAdminsOnly(from, false)
					await kaotic.sendText(from, `Podem falar membros comuns, os ademiros tem dó de vocês`)
				}else{
					kaotic.reply(from, `não entendi,\n\non: fechar\noff: abrir\n\ncasso tenha duvidas digite ${prefix}grupo --help`, id)
				}
		break


			default:

				return await kaotic.sendText(from, `Comando não existe`)

				break
        }

    } catch (err) {
        console.log(cores('[FALHA GERAL]', 'red'), err)
    }
}