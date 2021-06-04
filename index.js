const { create, Client } = require('@open-wa/wa-automate')
const fs = require('fs-extra')
const kconfig = require('./config')
const opcoes = require('./lib/opcoes')
const { cores, dormir } = require('./lib/funcoes')
const config = require('./lib/config/Bot/config.json')
const canvas = require('discord-canvas')
const { meuIdioma } = require('./lib/lingua')
const axios = require('axios')
const kaoticvs = require('./package.json')
var welcOn = 0;var abayo = 0

// Quantidade máxima de Backups do Level.json e MsgCount.json
const maxBackups = Math.floor(Math.random() * 5) + 1

// Apaga a pasta de cache do Chrome caso exista
if (fs.existsSync('./logs/Chrome')) { fs.rmdirSync('./logs/Chrome', { recursive: true }) }

// Cria um cliente de inicialização da BOT
const start = async (kaotic = new Client()) => {
//	const getversion = await axios.get('https://raw.githubusercontent.com/kaoticovSky/iris/main/package.json')
//	if (kaoticvs.version !== getversion.data.version) { console.log(cores('\n[UPDATE]', 'crimson'), cores(`Uma nova versão da Íris foi lançada [${getversion.data.version}], atualize para obter melhorias e correções! → ${kaoticvs.homepage}`, 'gold')) }
	console.log(cores('\n[SUPORTE]', 'magenta'), cores(`55 31 99994-9012 | +55 75 98873-7769 | ${kaoticvs.bugs.url}\n`, 'lime'), cores(`\n[KAOTIC BOT ${kaoticvs.version}]`, 'magenta'), cores('Estamos prontos para começar mestre!\n', 'lime'))
	
	// Backup do Level.json & MsgCount.json toda vez que religar a BOT
	const levelBk = JSON.parse(fs.readFileSync('./lib/config/Bot/level.json'))
	const messBk = JSON.parse(fs.readFileSync('./lib/config/Bot/msgcount.json'))
	await fs.writeFileSync(`./lib/config/Bot/Backup/level-${maxBackups}.json`, JSON.stringify(levelBk))
	await fs.writeFileSync(`./lib/config/Bot/Backup/msgcount-${maxBackups}.json`, JSON.stringify(messBk))
	
	// Forçar recarregamento caso obtenha erros
	kaotic.onStateChanged(async (state) => {
		console.log(cores('[RELOAD]', 'red'), cores('Isso pode ser ignorado →', 'lime'), cores(state, 'yellow'))
		if (state === 'UNPAIRED' || state === 'CONFLICT' || state === 'UNLAUNCHED') await kaotic.forceRefocus()
	})

	// Lê as mensagens e limpa cache a cada 3000, se quiser menos só editar ali
	kaotic.onMessage(async (message) => {
		await kaotic.getAmountOfLoadedMessages().then(async (msg) => {
			if (msg >= 3000) {
				console.log(cores('[CACHE]', 'red'), cores('Recebemos 3000 mensagens! Limpando o cache delas...', 'yellow'))
				await kaotic.cutMsgCache()
				console.log(cores('[CACHE]', 'red'), cores('O cache das mensagens foi totalmente limpo!', 'lime'))
			}
		})
		await kconfig(kaotic, message)
	})

	// Funções para caso seja adicionada em um grupo
	kaotic.onAddedToGroup(async (chat) => {
		const lmtgru = await kaotic.getAllGroups()
		const totalMem = chat.groupMetadata.participants.length
		if (chat.groupMetadata.participants.includes(config.owner)) {
			await kaotic.sendText(chat.id, meuIdioma().novogrupo())
		} else if (totalMem < config.memberReq) {
			await kaotic.sendText(chat.id, meuIdioma().noreq(totalMem))
			await kaotic.deleteChat(chat.id)
			await kaotic.leaveGroup(chat.id)
		} else if (lmtgru.length > config.gpLimit) {
			await kaotic.sendText(chat.id, meuIdioma().cheio(lmtgru))
			await kaotic.deleteChat(chat.id)
			await kaotic.leaveGroup(chat.id)
		} else { kaotic.sendText(chat.id, meuIdioma().novogrupo()) }
		console.log(cores('[NOVO]', 'red'), cores(`Fui adicionada ao grupo ${chat.contact.name} e eles tem ${totalMem} membros.`, 'yellow'))
	})

	// Configuração do welcome
	kaotic.onGlobalParticipantsChanged(async (event) => {
		const welkom = JSON.parse(fs.readFileSync('./lib/config/Grupos/welcome.json'))
		const bklist = JSON.parse(fs.readFileSync('./lib/config/Bot/anti.json'))
		const anti = JSON.parse(fs.readFileSync('./lib/config/Grupos/blacklist.json'))
		const fks = JSON.parse(fs.readFileSync('./lib/config/Grupos/fake.json'))
		const personr = event.who
		const numebot = await kaotic.getHostNumber() + '@c.us'
		const isMyBot = personr.includes(numebot)
		const ddi = config.ddi
		const isWelkom = welkom.includes(event.chat)
		const isFake = fks.includes(event.chat)
		const fake = personr.startsWith(ddi)
		const isAnti = anti.includes(event.chat)
		const fuck = bklist.includes(event.who)
		const eChat = await kaotic.getContact(event.who)
		let { pushname, verifiedName, formattedName } = eChat
		pushname = pushname || verifiedName || formattedName
		const gChat = await kaotic.getChatById(event.chat)
		const { contact, groupMetadata, name } = gChat
		try {
			if (event.action == 'add') {
				if (isAnti && fuck && !isMyBot) {
					await kaotic.sendText(event.chat, meuIdioma().entrace())
					await dormir(2000)
					await kaotic.removeParticipant(event.chat, event.who)
					await kaotic.contactBlock(event.who) // Evita ser travado por putinhos
					console.log(cores('[BLACKLIST]', 'red'), cores(`${pushname} - (${event.who.replace('@c.us', '')}) foi banido do ${name} por ter sido colocado na blacklist...`, 'yellow'))
				} else if (isFake && !fake && !isMyBot) {
					await kaotic.sendTextWithMentions(event.chat, meuIdioma().nofake(event))
					await dormir(4000) // Anti-fake e Black-List não tem anti-flood por segurança, mexa com a var welcOn para inserir
					await kaotic.removeParticipant(event.chat, event.who)
					await kaotic.contactBlock(event.who) // Evita ser travado por putinhos
					console.log(cores('[FAKE]', 'red'), cores(`${pushname} - (${event.who.replace('@c.us', '')}) foi banido do ${name} por usar número falso ou ser de fora do país...`, 'yellow'))
				} else if (isWelkom && !isMyBot && welcOn == 0 && !fuck && fake) {
					welcOn = 1
					var profile = await kaotic.getProfilePicFromServer(event.who)
					if (profile == '' || profile == undefined) profile = './lib/midia/img/semfoto.png'
					const welcomer = await new canvas.Welcome().setUsername(pushname)
					.setDiscriminator(event.who.substring(6, 10))
					.setMemberCount(groupMetadata.participants.length)
					.setGuildName(name)
					.setAvatar(profile)
					.setText("title", `BEM VINDO`)
					.setText("message", `VOCÊ ESTÁ NO {server}`)
					.setText("member-count", `VOCÊ É O MEMBRO N° {count}`)
					.setColor('border', '#00100C')
					.setColor('username-box', '#00100C')
					.setColor('discriminator-box', '#00100C')
					.setColor('message-box', '#00100C')
					.setColor('title', '#6577AF')
					.setOpacity("username-box", 0.6)
					.setOpacity("discriminator-box", 0.6)
					.setOpacity("message-box", 0.6)
					.setOpacity("border", 0.4)
					.setBackground('./lib/midia/img/fundobemvindo.png')
					.toAttachment()
					const base64 = `data:image/png;base64,${welcomer.toBuffer().toString('base64')}`
					await kaotic.sendFile(event.chat, base64, 'welcome.png', meuIdioma().bemVindo(pushname, name))
					await kaotic.sendPtt(event.chat, `./lib/midia/audio/welcome.mp3`)
					welcOn = 0
					console.log(cores('[ENTROU]', 'red'), cores(`${pushname} - (${event.who.replace('@c.us', '')}) entrou no grupo ${name}...`, 'yellow'))
				}
			} else if (event.action == 'remove' && isWelkom && !isMyBot && abayo == 0 && !fuck && fake) {
				abayo = 1
				var profile = await kaotic.getProfilePicFromServer(event.who)
				if (profile == '' || profile == undefined) profile = './lib/midia/img/semfoto.png'
				const bye = await new canvas.Goodbye().setUsername(pushname)
				.setDiscriminator(event.who.substring(6, 10))
				.setMemberCount(groupMetadata.participants.length)
				.setGuildName(name)
				.setAvatar(profile)
				.setText("title", `ADEUS`)
				.setText("message", `SAIU DO {server}`)
				.setText("member-count", `ELE FOI O MEMBRO N° {count}`)
				.setColor('border', '#00100C')
				.setColor('username-box', '#00100C')
				.setColor('discriminator-box', '#00100C')
				.setColor('message-box', '#00100C')
				.setColor('title', '#6577AF')
				.setOpacity("username-box", 0.6)
				.setOpacity("discriminator-box", 0.6)
				.setOpacity("message-box", 0.6)
				.setOpacity("border", 0.4)
				.setBackground('./lib/midia/img/adeus.png')
				.toAttachment()
				const base64 = `data:image/png;base64,${bye.toBuffer().toString('base64')}`
				await kaotic.sendFile(event.chat, base64, 'welcome.png', meuIdioma().tchau(pushname))
				await kaotic.sendPtt(event.chat, `./lib/midia/audio/bye.mp3`)
				abayo = 0
				console.log(cores('[SAIU/BAN]', 'red'), cores(`${pushname} - (${event.who.replace('@c.us', '')}) saiu ou foi banido do grupo ${name}...`, 'yellow'))
			}
		} catch (err) { console.log(err);welcOn = 0;abayo = 0 }
	})

	// Bloqueia na call
	kaotic.onIncomingCall(async (callData) => {
		await kaotic.sendText(callData.peerJid, meuIdioma().blockcalls())
		await kaotic.contactBlock(callData.peerJid)
		console.log(cores('[CALL]', 'red'), cores(`${callData.peerJid.replace('@c.us', '')} foi bloqueado por me ligar...`, 'yellow'))
	})

}

// Cria uma sessão da Íris
create(opcoes(start)).then((kaotic) => start(kaotic)).catch((err) => console.error(err))