/* Autor, tradutor, revisador, programador e suporte: Lucas R. - KillovSky
* Beta Testers: Pedro, Tio das Trevas, Jon, Alisson, Joke, Prodka & Lucas R.
* Edite onde quiser, exceto nos créditos por gentiliza.
* Agradeço desde já, e se planeja remover, leia a "exports.tos" e tenha em mente que passei varias noites em claro e até doente pra terminar isso e trazer um excelente programa de graça.
*/

// Configurações
const config = require('../config/Bot/config.json')
var prefix = config.prefix

// Inicio, não remova as funções marcadas

// Mensagens
//menus principal

exports.menu = (pushname, time, theMsg, uzrXp, uneedxp, uzrlvl, mping, patente, pvativo, gpativo) => { return `
╔✪〘🇰.🇦.🇴.🇹.🇮. 🇨⚡🇧.🇴.🇹.〙✪
║ _🧏🏻-Olá -_ *"${pushname}"*!
║ _📅-Dia →_ *${time}*
║ _🔄-Suas Mensagens →_ *${theMsg}*
║ _🆙-Seu XP →_ *${uzrXp}* / *${uneedxp}*
║ _〽️-Seu Level →_ *${uzrlvl}*
║ _🛡️-Sua Patente →_ *${patente}*
║ _🐌-Meu Ping →_ *${mping}* _segundos_
║ _📜-Pvs do Kaotic →_*${pvativo.length - gpativo.length}*
║ _📩-Grupos no Kaotic →_*${gpativo.length}*
╚═════════════════

╔══✪「 ❔ Grupos/Suporte 🤓 」
║
║ 🏆 - *1° → ${prefix}gps*
║ ᐳ _Conheça os grupos oficial do Kaotic._
║
║ 🆘 - *2° → ${prefix}Help (Mensagem)*
║ ᐳ _Informe os erros que encontrar._
║
║ 〽️ - *4° → ${prefix}comandos*
║ ᐳ _lista de todos os comandos._
║
╚═════════════════

╔═══「 🔖 Menu📌 」
║
║ 🏖️ - *1° → ${prefix}Figurinhas*
║ ᐳ _Comandos pra criar figurinhas._
║
║ 😎 - *2° → ${prefix}menuadm*
║ ᐳ _Comandos para Administradores_
║
║ 👾 - *3° → ${prefix}menudono*
║ ᐳ _Menu de comandos para 
║    _o Dono do Bot_
║
║ 🖥 - *4° → ${prefix}Figurinhas*
║ ᐳ _Menu de comandos para 
║    _o Dono do Bot_
║
╚═════════════════
`}

exports.menu2 = (pushname, time, theMsg1, uzrXp1, uneedxp1, uzrlvl1, mping1, patente) => { return `
╔✪〘🇰.🇦.🇴.🇹.🇮. 🇨⚡🇧.🇴.🇹.〙✪
║📅-Dia →_ *${time}*
╠═══════❶.❷═══════
║〘 INFORMAÇÕES 〙
║
╠🤖 Olá*"${pushname}"*! 
╠🤖 Level Atual → *${uzrlvl1}*
╠🤖 XP → *${uzrXp1}* / *${uneedxp1}*
╠🤖 Patente → *${patente}*
╠🤖 𝐒𝐓𝐀𝐓𝐔𝐒: ON
╠🤖 Meu Ping → *${mping1}* _segundos_
║
╠════✪〘 Menu〙✪
║
╠🏖️ - *1° → ${prefix}Figurinhas*
╠ _Comandos pra criar figurinhas._
║
╠😎 - *2° → ${prefix}menuadm*
╠ᐳ _Comandos para Administradores_
║
╠👾 - *2° → ${prefix}menudono*
╠ᐳ _Menu de comandos para o 
║   _Dono do Bot_
║
╠════✪〘Grupos Oficiais〙✪
║
║ 🤖 - *1° → ${prefix}gp 1*
║ ᐳ *GRUPO OFICIAL Kaotic*
║
║ 🆙 - *2° → ${prefix}gp 2*
║ ᐳ _Clube das Figurinhas 3.5⚜(figuinha e zoeras)._
║
║ 👋 - *3° → ${prefix}gp 3*
║ ᐳ _🔱Death🚫Kaotic🔱(gore, porno, shitpost)._
║
║ 🚫 - *4° → ${prefix}gp 4*
║ ᐳ _🇮🇹CᎥᏆᎽ™ MᎾᏒᎶuᎬ🇮🇹 (Gore e Porno)._
╚════════════════
`}

exports.comandos = () => { return `
╔✪〘🇰.🇦.🇴.🇹.🇮. 🇨⚡🇧.🇴.🇹.〙✪
║ Todos os comandos do Kaotic
╠══════════════════
║🤖 - *1° → ${prefix}menu*
║ᐳ _Menu Principal._
║
║🤖 - *2° → ${prefix}welcome*
║ᐳ _Ative Boas Vindas. On/Off_
║
║🤖 - *3° → ${prefix}grupo*
║ᐳ _feche o grupo para adm._
║   _On/Off_
║
║🤖 - *4° → ${prefix}sticker*
║ᐳ _faça figurinhas de imagens_
║
║🤖 - *5° → ${prefix}rank*
║ᐳ _Ative os jogos de XP._
║   _On/Off_
║
║🤖 - *6° → ${prefix}img*
║ᐳ _Transforma uma figurinha_
║   _em foto_
║
║🤖 - *7° → ${prefix}gifSicker*
║ᐳ _Transforma um gif ou video em_
║   _figurinha_
║
║🤖 - *8° → ${prefix}licenca*
║ᐳ _Esse BOT é licenciado, confira_
║
║🤖 - *9° → ${prefix}banirpor*
║ᐳ _Da ban temporario_
║
║🤖 - *10° → ${prefix}ban*
║ᐳ _Da ban_
║
║🤖 - *11° → ${prefix}attp*
║ᐳ _Crie sticker animados por frases_
║
║ 🤖 - *12° → ${prefix}gp 1*
║ ᐳ *GRUPO OFICIAL Kaotic*
║
║ 🤖 - *13° → ${prefix}gp 2*
║ ᐳ _Clube das Figurinhas 3.5⚜(figuinha e zoeras)._
║
║ 🤖 - *14° → ${prefix}gp 3*
║ ᐳ _🔱Death🚫Kaotic🔱(gore, porno, shitpost)._
║
║ 🤖 - *15° → ${prefix}gp 4*
║ ᐳ _🇮🇹CᎥᏆᎽ™ MᎾᏒᎶuᎬ🇮🇹 (Gore e Porno)._
║
║ 🤖 - *16° → ${prefix}bFigurinha*
║ ᐳ _Faz stickers sem fundo!_
║
║ 🤖 - *17° → ${prefix}Roubar <Pack|Autor>*
║ ᐳ _Roube sticker para você!_
╚═══════════════════
` }
//Sub menus
exports.Figurinhas = () => { return `
╔═══✪〘📷Figurinhas📹〙✪
║
║ ♾️ - *1° → ${prefix}IMG <Sticker>*
║ ᐳ _É para converter sticker em foto._
║
║ 🖼️ - *2° → ${prefix}Sticker <Foto|Link|-circle|-fill|-nocut>*
║ ᐳ _Converta fotos e links em sticker._
║
║ 🔤 - *3° → ${prefix}TTP <Mensagem>*
║ ᐳ _Transforme frases em stickers._
║
║ 🖍️ - *4° → ${prefix}ATTP <Mensagem>*
║ ᐳ _Crie sticker animados por frases._
║
║ 📷 - *5° → ${prefix}NoBG <Foto>*
║ ᐳ _Esse faz stickers sem fundo!_
║
║ 📹 - *6° → ${prefix}GIF <Video | GIF>*
║ ᐳ _Stickers usando gifs e videos!_
║
║ 🔎 - *7° → ${prefix}bFigurinha <Busca>*
║ ᐳ _Faz stickers sem fundo!_
║
║ 🔖 - *8° → ${prefix}Giphy <Link>*
║ ᐳ _Use o Giphy para fazer stickers._
║
║ 😍 - *9° → ${prefix}Emoji <Emoji>*
║ ᐳ _Faça stickers de 10+ tipos de emoji._
║
║ 🪧 - *10° → ${prefix}Cosplay <Link>*
║ ᐳ _Faça plaquinhas sensuais._
║
║ ✍🏻 - *11° → ${prefix}Roubar <Pack|Autor>*
║ ᐳ _Roube sticker para você!_
║
╚═══════════════════` 
}

exports.menuadm = (pushname, time, theMsg1, uzrXp1, uneedxp1, uzrlvl1, mping1, patente) => { return `
╔✪〘🇰.🇦.🇴.🇹.🇮. 🇨⚡🇧.🇴.🇹.〙✪
║📅-Dia →_ *${time}*
╠═══════❶.❷═══════
║〘 INFORMAÇÕES 〙
║
╠🤖 Olá*"${pushname}"*! 
╠🤖 Level Atual → *${uzrlvl1}*
╠🤖 XP → *${uzrXp1}* / *${uneedxp1}*
╠🤖 Patente → *${patente}*
╠🤖 𝐒𝐓𝐀𝐓𝐔𝐒: ON
╠🤖 Meu Ping → *${mping1}* _segundos_
║
╠════「 🔖 Menu Adm📌 」
║
║🤖 - *1° → ${prefix}Grupo 
║ ᐳ _of/off fechar grupo_
║ 
║🤖 - *1° → ${prefix}Ban
║ ᐳ _Marque alguem para banir_
║
║🤖 - *1° → ${prefix}Banirpor
║ ᐳ _marque e coloque o tempo_
║ ᐳ _para banir alguem temporariamente_
║
║🤖 - *1° → ${prefix}Rank
║ ᐳ _on/off para ligar o Xp._
║
║🤖 - *1° → ${prefix}Demitir <@user ou cite sua mensagem>
║ ᐳ _ Remover admin de uma pessoa
║
║🤖 - *1° → ${prefix}Promover<@user ou cite sua mensagem>
║ ᐳ _Da um Admin pra uma pessoa
║
║🤖 - *1° → 
║ ᐳ _
║🤖 - *1° → 
╚═══════════════════` 
}

exports.gps = () => { return `╔═══「 ⚠️ GRUPOS 🌚 」
║
║ 🤖 - *1° → ${prefix}gp 1*
║ ᐳ *GRUPO OFICIAL Kaotic*
║
║ 🆙 - *2° → ${prefix}gp 2*
║ ᐳ _Clube das Figurinhas 3.5⚜(figuinha e zoeras)._
║
║ 👋 - *3° → ${prefix}gp 3*
║ ᐳ _🔱Death🚫Kaotic🔱(gore, porno, shitpost)._
║
║ 🚫 - *4° → ${prefix}gp 4*
║ ᐳ _🇮🇹CᎥᏆᎽ™ MᎾᏒᎶuᎬ🇮🇹 (Gore e Porno)._
║
║ ⚠️ *_⚠Antes de obter o link leia as regras na descrição_*
║
╚═══════════════════` }
