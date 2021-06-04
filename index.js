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

	// max de backups
	const maxBackups = Math.floor(Math.random() * 5) + 1

	// Apaga o cache do Chrome
	if (fs.existsSync('./logs/Chrome')) { fs.rmdirSync('./logs/Chrome', { recursive: true }) }

	// inicialização do BOT
	const start = async (kaotic = new Client()) => {

	//verifica a versão
	const getversion = await axios.get('https://raw.githubusercontent.com/death-morgue/KaoticBot/main/package.json')
	if (kaoticvs.version !== getversion.data.version) { console.log(cores('\n[ UPDATE ]', 'crimson'), cores(`Uma nova versão do KaoticBot foi lançada [${getversion.data.version}], atualize para obter melhorias e correções! → ${kaoticvs.homepage}`, 'gold')) }
	
	//inicia o bot
	console.log(cores('\n[ SUPORTE ]', 'magenta'), cores(`55 31 99994-9012 | +55 75 98873-7769 | ${kaoticvs.bugs.url}\n`, 'lime'), cores(`\n[ KAOTIC BOT ${kaoticvs.version} ]`, 'magenta'), cores('Estamos prontos para começar mestre!\n', 'lime'))
	
	// Backup do Level e do contator de msg toda vez que bot
	const levelBk = JSON.parse(fs.readFileSync('./lib/config/Bot/level.json'))
	const messBk = JSON.parse(fs.readFileSync('./lib/config/Bot/msgcount.json'))
	await fs.writeFileSync(`./lib/config/Bot/Backup/level-${maxBackups}.json`, JSON.stringify(levelBk))
	await fs.writeFileSync(`./lib/config/Bot/Backup/msgcount-${maxBackups}.json`, JSON.stringify(messBk))
	
	// Forçar recarregamento caso obtenha erros
	kaotic.onStateChanged(async (state) => {
		console.log(cores('[RELOAD]', 'red'), cores('Isso pode ser ignorado →', 'lime'), cores(state, 'yellow'))
		if (state === 'UNPAIRED' || state === 'CONFLICT' || state === 'UNLAUNCHED') await kaotic.forceRefocus()
	})

	// limpa as mensagens a cada 1500, se quiser menos só editar la
	kaotic.onMessage(async (message) => {
		await kaotic.getAmountOfLoadedMessages().then(async (msg) => {
			if (msg >= 1500) {
				console.log(cores('[CACHE]', 'red'), cores('Recebemos 1500 mensagens! Limpando o cache delas!', 'yellow'))
				await kaotic.cutMsgCache()
				console.log(cores('[CACHE]', 'red'), cores('O cache das mensagens foi totalmente limpo!', 'lime'))
			}
		})
		await kconfig(kaotic, message)
	})

	// Caso seja adicionada em um grupo
	kaotic.onAddedToGroup(async (chat) => {

		// Pega Todos os grupos
		const lmtgru = await kaotic.getAllGroups()

		//Pega o total de membros
		const totalMem = chat.groupMetadata.participants.length

		//verifica de o dono está no grupos
		if (chat.groupMetadata.participants.includes(config.owner)) {
			await kaotic.sendText(chat.id, meuIdioma().novogrupo())
			return console.log(cores('[NOVO]', 'red'), cores(`Fui adicionado ao grupo ${chat.contact.name} e eles tem ${totalMem} membros.`, 'yellow'))
		} 
		// verifica se o total de membros do grupo é maior que o minimo
		else if (totalMem < config.memberReq) {
			await kaotic.sendText(chat.id, meuIdioma().noreq(totalMem))
			await kaotic.deleteChat(chat.id)
			await kaotic.leaveGroup(chat.id)
			return console.log(
				cores('[ GRUPO ]', 'red'),
				cores(`sai do grupo ${chat.contact.name}, pois estamos em capacidade maxima!`, 'gold')
			)
		} 
		
		//verifica se o maximo de grupos foi atingido
		else if (lmtgru.length > config.gpLimit) {
			await kaotic.sendText(chat.id, meuIdioma().cheio(lmtgru))
			await kaotic.deleteChat(chat.id)
			await kaotic.leaveGroup(chat.id)
			return console.log(
				cores('[ GRUPO ]', 'red'),
				cores(`sai do grupo ${chat.contact.name}, pois ele tem poucos membros!`, 'gold')
			)
		} 
		
		// Informa que foi adicionado
		else { kaotic.sendText(chat.id, meuIdioma().novogrupo()) }
		return console.log(cores('[NOVO]', 'red'), cores(`Fui adicionado ao grupo ${chat.contact.name} e eles tem ${totalMem} membros.`, 'yellow'))
	})

	// Configuração do welcome
	kaotic.onGlobalParticipantsChanged(async (event) => {

		// leitura dos JSON
		const welkom = JSON.parse(fs.readFileSync('./lib/config/Grupos/welcome.json'))
		const bklist = JSON.parse(fs.readFileSync('./lib/config/Bot/anti.json'))
		const anti = JSON.parse(fs.readFileSync('./lib/config/Grupos/blacklist.json'))
		const fks = JSON.parse(fs.readFileSync('./lib/config/Grupos/fake.json'))

		//informações da pessoa e do grupo
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

			//caso a ação seja adicionar
			if (event.action == 'add') {

				//se no grupo tiver ligado o bklist e o numero estiver na blacklist
				if (isAnti && fuck && !isMyBot) {
					await kaotic.sendText(event.chat, meuIdioma().entrace())
					await dormir(2000)
					await kaotic.removeParticipant(event.chat, event.who)
					await kaotic.contactBlock(event.who) // Evita ser travado por putinhos
					console.log(cores('[BLACKLIST]', 'red'), cores(`${pushname} - (${event.who.replace('@c.us', '')}) foi banido do ${name} por ter sido colocado na blacklist!`, 'yellow'))
				} 
				
				//se o numero for fake e o grupo tiver antifake ligado
				else if (isFake && !fake && !isMyBot) {
					await kaotic.sendTextWithMentions(event.chat, meuIdioma().nofake(event))
					await dormir(4000) // Anti-fake e Black-List não tem anti-flood por segurança, mexa com a var welcOn para inserir
					await kaotic.removeParticipant(event.chat, event.who)
					await kaotic.contactBlock(event.who) // Evita ser travado por putinhos
					console.log(cores('[FAKE]', 'red'), cores(`${pushname} - (${event.who.replace('@c.us', '')}) foi banido do ${name} por usar número falso ou ser de fora do país!`, 'yellow'))
				} 
				
				//se  o grupo tiver boas vindas
				else if (isWelkom && !isMyBot && welcOn == 0) {
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
					.setcores('border', '#00100C')
					.setcores('username-box', '#00100C')
					.setcores('discriminator-box', '#00100C')
					.setcores('message-box', '#00100C')
					.setcores('title', '#6577AF')
					.setOpacity("username-box", 0.6)
					.setOpacity("discriminator-box", 0.6)
					.setOpacity("message-box", 0.6)
					.setOpacity("border", 0.4)
					.setBackground('./lib/midia/img/fundobemvindo.png')
					.toAttachment()

					//cria a base 64
					const base64 = `data:image/png;base64,${welcomer.toBuffer().toString('base64')}`
					
					// envia a foto
					await kaotic.sendFile(event.chat, base64, 'welcome.png', meuIdioma().welcome(pushname, name))
					welcOn = 0
					console.log(cores('[ENTROU]', 'red'), cores(`${pushname} - (${event.who.replace('@c.us', '')}) entrou no grupo ${name}!`, 'yellow'))
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
				.setcores('border', '#00100C')
				.setcores('username-box', '#00100C')
				.setcores('discriminator-box', '#00100C')
				.setcores('message-box', '#00100C')
				.setcores('title', '#6577AF')
				.setOpacity("username-box", 0.6)
				.setOpacity("discriminator-box", 0.6)
				.setOpacity("message-box", 0.6)
				.setOpacity("border", 0.4)
				.setBackground('./lib/midia/img/adeus.png')
				.toAttachment()
				const base64 = `data:image/png;base64,${bye.toBuffer().toString('base64')}`
				await kaotic.sendFile(event.chat, base64, 'welcome.png', meuIdioma().bye(pushname))
				await kaotic.sendPtt(event.chat, `./lib/media/audio/bye.mp3`)
				abayo = 0
				console.log(cores('[SAIU/BAN]', 'red'), cores(`${pushname} - (${event.who.replace('@c.us', '')}) saiu ou foi banido do grupo ${name}!`, 'yellow'))
			}
		} catch (err) { console.log(err);welcOn = 0;abayo = 0 }
	})

	// Bloqueia quem liga
	kaotic.onIncomingCall(async (callData) => {
		await kaotic.sendText(callData.peerJid, meuIdioma().blockcalls())
		await kaotic.contactBlock(callData.peerJid)
		console.log(cores('[CALL]', 'red'), cores(`${callData.peerJid.replace('@c.us', '')} foi bloqueado por me ligar!`, 'yellow'))
	})

}

// Cria uma sessão do kaotic
create(opcoes(start)).then((kaotic) => start(kaotic)).catch((err) => console.error(err))