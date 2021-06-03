const { criando, cliente, Client, STATE, create } =  require('@open-wa/wa-automate')
const fs = require('fs-extra')
const kconfig = require('./config')
const opcoes = require('./lib/opcoes')
const { cores, dormir } = require('./lib/funcoes')
const config = require('./lib/config/Bot/config.json')
const canvas = require('discord-canvas')
const { meuIdioma } = require('./lib/lingua')
const axios = require('axios')
const kaoticReq = require('./package.json')
const { max } = require('moment')
var welcOn =0; var abayo =0

// Maximo de backup de niveis
const maximoBackup = Math.floor(Math.random() * 6) + 1

// Limpa cache do chrome
if (fs.existsSync('./logs/Chrome')) { fs.rmdirSync('./logs/Chrome', { recursive: true }) }

// Cria um cliente para o começo do bot
const start = async (kaotic = new Client()) => {

    // Verifica se tem atualização no github
    const getVersao = await axios.get('https://raw.githubusercontent.com/death-morgue/KaoticBot/main/package.json')
    if (kaoticReq.version !== getVersao.data.version) { console.log(cores('\n[ UPDATE ]', 'crimson'), 
    cores(`Uma nova versão do Kaotic Bot foi lançada [ ${getVersao.data.version} ], atualize para obter as novidades! -> ${kaoticReq.homepage}`, 'gold')) }

    // Informa que o cliente está ativo
    console.log(
    
        cores('\n[ SUPORTE ]', 'crimson'), 
        cores(`+55 31 99994-9012 | +55 75 98873-7769 [ ${kaoticReq.bugs.url} ]\n`, 'gold'),
        cores(`\n[ KAOTIC BOT ${kaoticReq.version} ]`, 'crimson'),
        cores('Estamos prontos para começar!!!\n', 'lime')

    )
    
    // Backup
    const nivelBk = JSON.parse(fs.readFileSync('./lib/config/Bot/level.json'))
    const msgBk = JSON.parse(fs.readFileSync('./lib/config/Bot/msgcount.json'))
    await fs.writeFileSync(`./lib/config/Bot/Backup/level-${maximoBackup}.json`, JSON.stringify(nivelBk))
    await fs.writeFileSync(`./lib/config/Bot/Backup/msgcount-${maximoBackup}.json`, JSON.stringify(msgBk))

    // Recarrega o bot em caso de erro
    kaotic.onStateChanged(async (stade) => {
        if(stade === 'UNPAIRED' || stade === 'CONFLICT' || stade == 'UNLAUCHED'){
            await kaotic.forceRefocus()
        }
    })

    // Lê as msg e limpa a cada 1500 se quiser mudar so alterar o valor
    kaotic.onMessage(async (message) =>{
        kaotic.getAmountOfLoadedMessages().then(async (msg) =>{

            if(msg >= 1500){
                console.log(
                    cores('[ CACHE ]', 'red'), 
                    cores('Mais de 1500 mensagens carregadas, limpando a memoria...', 'gold'))

                await kaotic.cutMsgCache()

                console.log(
                    cores('[ CACHE ]', 'red'), 
                    cores('Todas as mensagens foram apagadas!', 'lime'))
            }
        })
        await kconfig(kaotic, message)
    })

    // Função para identificar caso seja adicionado em grupo
    kaotic.onAddedToGroup(async (chat) =>{
        const totalGrupos = kaotic.getAllGroups()
        const membrosGrupo = chat.groupMetadata.participants.length

        //verifica se o dono está no grupo
        if( chat.groupMetadata.participants.includes(config.donos[0]) || 
            chat.groupMetadata.participants.includes(config.donos[1])){

            return await kaotic.sendText((chat.id, meuIdioma.novogrupo( )))

            } 
        
        //verifica se tem o numero de membros minimos, para editar o minimo vá em ./lib/config/Bot/config.json memberReq
        else if(membrosGrupo < config.memberReq){

                await kaotic.sendText(chat.id, meuIdioma().noreq(membrosGrupo))
                await kaotic.leaveGroup( chat.id )
                await kaotic.deleteChat( chat.id )

            }
        
        //verifica se está no maximo de grupos, para editar o minimo vá em ./lib/config/Bot/config.json gpLimit
        else if(totalGrupos > config.gpLimit){
            
            await kaotic.sendText(chat.id, meuIdioma().cheio(totalGrupos))
            await kaotic.leaveGroup( chat.id )
            await kaotic.deleteChat( chat.id )

        }

        //caso o grupo seja aceito envia as boas vindas
        else{ return await kaotic.sendText((chat.id, meuIdioma.novogrupo( ))) }
        
        //informa no console que fui adicionado
        console.log(
            cores('[ NOVO ]', 'red'),
            cores(`Fui adicionado no grupo ${chat.contact.name} e eles tem ${membrosGrupo} membros`, 'gold')
        )

    })

    // Configurações de boas vindas
    kaotic.onGlobalParticipantsChanged(async (event) =>{

        //Leitura dos JSON
        const bemVindo = JSON.parse(fs.readFileSync('./lib/config/Grupos/welcome.json'))
        const anti = JSON.parse(fs.readFileSync('./lib/config/Bot/anti.json'))
        const blackList =  JSON.parse(fs.readFileSync('/lib/config/Grupos/blacklist.json'))
        const fake = JSON.parse(fs.readFileSync('/lib/config/Grupos/fake.json'))

        //algumas informações
        const pessoa = event.who //id de quem foi adicionado
        const numeroBot = await kaotic.getHostNumber() + '@c.us' //id do bot
        const eBot = pessoa.includes(numeroBot) //retorna boolean, comparando o numero de quem foi adicionado com o do bot
        const ddi = config.ddi //define o ddi dos anti fake, caso queira adicionar mais ddi, não coloque na ddi da config, mais pra frente terá o local
        const grupoTemBemVindo = bemVindo.includes(event.chat) //retorna boolean, verificando se a id do chat está no arquivo de bem vindo
        const grupoTemAntiFake = fake.includes(event.chat)//boolean, verifica se op grupo está com anti fake ligado
        const numeroFake = !pessoa.startsWith(ddi)// // boolean, verifica se começa com o ddi
        const grupoTemBlackList = blackList.includes(event.chat)//boolean, verifica se a black list está ligada
        const numeroBlackList = anti.includes(pessoa)

        //informações de quem foi adicionado
        const infoPessoa = await kaotic.getContact(pessoa)
        let { pushname, verifiedName, formattedName } = infoPessoa
        pushname = pushname || verifiedName || formattedName

        //informações do grupo que foi adicionado
        const infoGrupo = await kaotic.getChatById(event.chat)
        let {contact, groupMetadata, name } = infoGrupo

        try{
            if(event.action == 'add') {

                // Verifica se o numero está na lista negra e se o grupo não permite lista negra
                if(grupoTemBlackList && numeroBlackList && !eBot){
                    
                    await kaotic.sendText(event.chat, meuIdioma().entrace())
                    await dormir(2000)
                    await kaotic.removeParticipant(event.chat, pessoa)
                    await kaotic.contactBlock(pessoa) // Pra evitar que o bot seja travado
                    console.log(
                        cores('[ LISTA NEGRA ]', 'red'),
                        cores(`${pushname} - (${event.who.replace('@c.us', '')}) foi banido do ${name} por estar na black list!!!`, 'gold')
                    )

                }

                // verifica se o grupo tem antifake, e se a pessoa for fake, remove ela
                else if(grupoTemAntiFake && !eBot && numeroFake && !pessoa.startsWith('351')){ //para permitir mais ddi's, basta colocar pessoa.startsWith('ddi desejado')

                    await kaotic.sendText(event.chat, meuIdioma().nofake(event))
                    await dormir(4000)// Anti-fake e Black-List não tem anti-flood por segurança, mexa com a var welcOn para inserir
                    await kaotic.removeParticipant(event.chat, pessoa)
                    await kaotic.contactBlock(pessoa) // Pra evitar que o bot seja travado                    
                    console.log(
                        cores('[ FAKE ]', 'red'),
                        cores(`${event.who.replace('@c.us', '')}) foi banido do ${name} por usar número falso ou ser de fora do país!`, 'gold')
                    )

                }
                else if(grupoTemBemVindo && !eBot && welcOn == 0 && !numeroBlackList){
                    welcOn = 1

                    //pega a foto de perfil
                    var perfil = await kaotic.getProfilePicFromServer(pessoa)
                    if(perfil == '' || perfil == undefined){
                        perfil = './lib/midia/img/semfoto.png'
                    }

                    //cria a foto de boas vindas
                    const boasVindas = await new canvas.Welcome()
                        .setUsername(pushname)
                        .setDiscriminator(event.who.substring(6, 10))
                        .setMemberCount(groupMetadata.participants.length)
                        .setGuildName(name)
                        .setAvatar(perfil)
                        .setText("title", `BEM VINDO`)
                        .setText("message", `VOCÊ ESTÁ NO {server}`)
                        .setText("member-count", `VOCÊ É O MEMBRO Nº {count}`)
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

                    const base64 = `data:image/png;base64,${boasVindas.toBuffer().toString('base64')}`
                
                    //envia as boas vindas
                    await kaotic.sendFile(event.chat, base64, 'boasVindas.png', meuIdioma.bemVindo(pushname, name))
                    //await kaotic.sendPtt [envia audio]

                    welcOn = 0
					console.log(color('[ENTROU]', 'red'), color(`${pushname} - (${event.who.replace('@c.us', '')}) entrou no grupo ${name}.`, 'gold'))
				
                }
            }

            // verifica se um membro foi removido
            if(event.action == 'remove' && !eBot && grupoTemBemVindo && abayo == 0 && !numeroBlackList){

                abayo = 1
                var perfil = await kaotic.getProfilePicFromServer(pessoa)
                    if(perfil == '' || perfil == undefined){
                        perfil = './lib/midia/img/semfoto.png'
                    }
                
                //cria foto de despedidas
                const tchau = await canvas.Goodbye()
                .setUsername(pushname)
                .setDiscriminator(event.who.substring(6, 10))
                .setMemberCount(groupMetadata.participants.length)
                .setGuildName(name)
                .setAvatar(perfil)
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

                const base64 = `data:image/png;base64,${tchau.toBuffer().toString('base64')}`
				await kill.sendFile(event.chat, base64, 'adeus.png', meuIdioma().tchau(pushname))
                //await kaotic.sendPtt [envia audio]

                abayo = 0
				console.log(color('[SAIU/BAN]', 'red'), color(`${pushname} - (${event.who.replace('@c.us', '')}) saiu ou foi banido do grupo ${name}.`, 'gold'))

            }
        }catch(err){
            console.log(err);welcOn = 0;abayo = 0
        }

    })

    //bloqueia os que liga
    kaotic.onIncomingCall(async (callData) =>{
        await kaotic.sendText(callData.peerJid, meuIdioma().blockcalls())
        await kaotic.contactBlock(callData.peerJid)

        console.log(
            cores('[ LIGAÇÃO ]', 'red'),
            color(`${callData.peerJid.replace('@c.us', '')} foi bloqueado por me ligar!!!`, 'gold')
        )
    })

}

// Inicia a sessão do Kaotic
create(opcoes(start)).then((kaotic) => start(kaotic)).catch((err) => console.error(err))