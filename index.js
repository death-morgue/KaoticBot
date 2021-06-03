const { criando, cliente, Client, STATE, create } =  require('@open-wa/wa-automate')
const fs = require('fs-extra')
const comandosBot = require('./config')
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
const iniciar = async (kaotic = new Client()) => {

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
        await comandosBot(kaotic, message)
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

    /**
     * tem que criar as mensagens de boas vindas e criar bloqueio de travas e flood
     * 
    */

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
create(opcoes(iniciar)).then((kaotic) => start(kaotic)).catch((err) => console.error(err))