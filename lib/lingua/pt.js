/*
* Nesse arquivo fica localizado as mensagens prontas para otimizar o codigo principal

    FAÇA NO SEGUINTE MODELO

        exports.[nome da mensagem]{
            mensagem
        }

*/

// Configurações
const config = require('../config/Bot/config.json')
var prefix = config.prefix

// Mensagens

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

// Para o Akinator

exports.akifail = () => { return `Puts! A sessão de jogo fechou, vou tentar abrir uma nova, se não funcionar sugiro contatar o dono para que ele me reinicie em ${prefix}help <Detalhes>.` }

exports.akiresp = () => { return `Para jogar akinator, responda com 0 ou 1, na qual 0 é "Sim" e 1 é "Não".` }

exports.akistart = (aki) => { return `Questão: ${aki.question}

Progresso: ${aki.progress}

Responda com ${prefix}akinator -r [0 ou 1], na qual 0 é "Sim" e 1 é "Não".` }

exports.akiwon = (aki, akiwon) => { return `✪ Palpite: ${akiwon.name}

✪ De: ${akiwon.description}

✪ Ranking: ${akiwon.ranking}

✪ Pseudo-Nome: ${akiwon.pseudo}

✪ Quantidade de Palpites: ${aki.guessCount}

Se não for essa continue jogando para bater a quantidade de tentativas!` }

// Aptoide
exports.aptoide = (getApk, sizeApk) => { return `• *Titulo* : ${getApk.name}

• *Package* : ${getApk.package}

• *Peso* : ${sizeApk} MB

• *Versão* : ${getApk.file.vername}

• *Download* : ${getApk.file.path}

• *Download 2* : ${getApk.file.path_alt}` }

// Brainly
exports.brainlyres = (res) => { return `❓ → Questão: ${res.data[0].pertanyaan}

✔️ → *Resposta* : ${res.data[0].jawaban[0].text}` }

// Block Call
exports.blockcalls = () => { return `Que pena! Chamadas não são suportadas e atrapalham muito! 😊
Te bloqueei para evitar novas, contate o dono wa.me/${config.owner[0].replace('@c.us', '')} para efetuar o desbloqueio. 👋` }

// Codigo das moedas
exports.coins = () => { return `╔═══「 💵 Moedas 💸 」 
║
║ 💰 AUD → Australian dollar
║
║ 💰 CAD → Canadian dollar
║
║ 💰 CHF → Swiss franc
║
║ 💰 CLP → Chilean peso
║
║ 💰 CNY → Chinese yuan
║
║ 💰 CZK → Czech koruna
║
║ 💰 DKK → Danish krone
║
║ 💰 EUR → Euro
║
║ 💰 GBP → Pound sterling
║
║ 💰 HKD → Hong Kong dollar
║
║ 💰 HUF → Hungarian forint
║
║ 💰 IDR → Indonesian rupiah
║
║ 💰 ILS → Israeli shekel
║
║ 💰 INR → Indian rupee
║
║ 💰 JPY → Japanese yen
║
║ 💰 KRW → South Korean won
║
║ 💰 MXN → Mexican peso
║
║ 💰 MYR → Malaysian ringgit
║
║ 💰 NOK → Norwegian krone
║
║ 💰 NZD → New Zealand dollar
║
║ 💰 PHP → Philippine peso
║
║ 💰 PKR → Pakistani rupee
║
║ 💰 PLN → Polish zloty
║
║ 💰 RUB → Russian ruble
║
║ 💰 SEK → Swedish krona
║
║ 💰 SGD → Singapore dollar
║
║ 💰 THB → Thai baht
║
║ 💰 TRY → Turkish lira
║
║ 💰 TWD → New Taiwan dollar
║
║ 💰 Moedas Digitais:
║
║ 💰 BTC → Bitcoin
║
║ 💰 XMR → Monero
║
║ 💰 1337 → 1337
║
║ 💰 1ST → FirstBlood
║
║ 💰 2GIVE → 2GIVE
║
║ 💰 300 → 300 Token
║
║ 💰 42 → 42-coin
║
║ 💰 611 → SixEleven
║
║ 💰 808 → 808Coin
║
║ 💰 888 → OctoCoin
║
║ 💰 8BIT → 8Bit
║
║ 💰 ABJ → Abjcoin
║
║ 💰 ABN → Abncoin
║
║ 💰 ABY → ArtByte
║
║ 💰 AC → AsiaCoin
║
║ 💰 ACC → Accelerator Network
║
║ 💰 ACC → AdCoin
║
║ 💰 ACOIN → Acoin
║
║ 💰 ACP → AnarchistsPrime
║
║ 💰 ACT → Achain
║
║ 💰 ADA → Cardano
║
║ 💰 ADC → AudioCoin
║
║ 💰 ADL → Adelphoi
║
║ 💰 ADST → AdShares
║
║ 💰 ADT → adToken
║
║ 💰 ADX → AdEx
║
║ 💰 ADZ → Adzcoin
║
║ 💰 AE → Aeternity
║
║ 💰 AEON → Aeon
║
║ 💰 AERM → Aerium
║
║ 💰 AGRS → Agoras Tokens
║
║ 💰 AHT → Bowhead
║
║ 💰 AIB → Advanced Internet Blocks
║
║ 💰 AION → Aion
║
║ 💰 AIR → AirToken
║
║ 💰 ALIS → ALIS
║
║ 💰 ALL → Allion
║
║ 💰 ALQO → ALQO
║
║ 💰 ALT → Altcoin
║
║ 💰 ALTCOM AltCommunity Coin
║
║ 💰 AMB → Ambrosus
║
║ 💰 AMMO → Ammo Reloaded
║
║ 💰 AMP → Synereo
║
║ 💰 AMS → AmsterdamCoin
║
║ 💰 ANC → Anoncoin
║
║ 💰 ANT → Aragon
║
║ 💰 ANTI → AntiBitcoin
║
║ 💰 APPC → AppCoins
║
║ 💰 APW → AppleCoin
║
║ 💰 APX → APX
║
║ 💰 ARC → ArcticCoin
║
║ 💰 ARCO → AquariusCoin
║
║ 💰 ARDR → Ardor
║
║ 💰 ARG → Argentum
║
║ 💰 ARGUS → Argus
║
║ 💰 ARI → Aricoin
║
║ 💰 ARK → Ark
║
║ 💰 ARN → Aeron
║
║ 💰 ART → Maecenas
║
║ 💰 ASAFE2 AllSafe
║
║ 💰 AST → AirSwap
║
║ 💰 ASTRO → Astro
║
║ 💰 ATB → ATBCoin
║
║ 💰 ATL → ATLANT
║
║ 💰 ATM → ATMChain
║
║ 💰 ATMS → Atmos
║
║ 💰 ATOM → Atomic Coin
║
║ 💰 ATS → Authorship
║
║ 💰 ATX → Artex Coin
║
║ 💰 AU → → AurumCoin
║
║ 💰 AUR → Auroracoin
║
║ 💰 AVT → Aventus
║
║ 💰 B2B → B2B
║
║ 💰 BAS → BitAsean
║
║ 💰 BASH → LuckChain
║
║ 💰 BAT → Basic Attention Token
║
║ 💰 BAY → BitBay
║
║ 💰 BBP → BiblePay
║
║ 💰 BBR → Boolberry
║
║ 💰 BBT → BitBoost
║
║ 💰 BCAP → BCAP
║
║ 💰 BCC → BitConnect
║
║ 💰 BCF → Bitcoin Fast
║
║ 💰 BCH → Bitcoin Cash
║
║ 💰 BCN → Bytecoin
║
║ 💰 BCO → BridgeCoin
║
║ 💰 BCPT → BlockMason Credit Protocol
║
║ 💰 BCY → Bitcrystals
║
║ 💰 BDL → Bitdeal
║
║ 💰 BELA → Bela
║
║ 💰 BENJI → BenjiRolls
║
║ 💰 BERN → BERNcash
║
║ 💰 BET → DAO.Casino
║
║ 💰 BIGUP → BigUp
║
║ 💰 BIOB → BioBar
║
║ 💰 BIP → BipCoin
║
║ 💰 BIS → Bismuth
║
║ 💰 BITB → Bean Cash
║
║ 💰 BITBTC → bitBTC
║
║ 💰 BITCNY → bitCNY
║
║ 💰 BITEUR → bitEUR
║
║ 💰 BITGOLD → bitGold
║
║ 💰 BITS → Bitstar
║
║ 💰 BITSILVER → bitSilver
║
║ 💰 BITUSD → bitUSD
║
║ 💰 BITZ → Bitz
║
║ 💰 BLAS → BlakeStar
║
║ 💰 BLC → Blakecoin
║
║ 💰 BLITZ → Blitzcash
║
║ 💰 BLK → BlackCoin
║
║ 💰 BLN → Bolenum
║
║ 💰 BLOCK → Blocknet
║
║ 💰 BLOCKPAY → BlockPay
║
║ 💰 BLU → BlueCoin
║
║ 💰 BLUE → BLUE
║
║ 💰 BMC → Blackmoon Crypto
║
║ 💰 BNB → Binance Coin
║
║ 💰 BNT → Bancor
║
║ 💰 BNTY → Bounty0x
║
║ 💰 BNX → BnrtxCoin
║
║ 💰 BOAT → BOAT
║
║ 💰 BOLI → Bolivarcoin
║
║ 💰 BON → Bonpay
║
║ 💰 BOT → Bodhi
║
║ 💰 BPC → Bitpark Coin
║
║ 💰 BPL → Blockpool
║
║ 💰 BQ → bitqy
║
║ 💰 BRAIN → Braincoin
║
║ 💰 BRAT → BROTHER
║
║ 💰 BRD → Bread
║
║ 💰 BRIT → BritCoin
║
║ 💰 BRK → Breakout
║
║ 💰 BRO → Bitradio
║
║ 💰 BRX → Breakout Stake
║
║ 💰 BSD → BitSend
║
║ 💰 BSTY → GlobalBoost-Y
║
║ 💰 BTA → Bata
║
║ 💰 BTB → BitBar
║
║ 💰 BTCD → BitcoinDark
║
║ 💰 BTCD → BitcoinDark
║
║ 💰 BTCR → Bitcurrency
║
║ 💰 BTCRED → Bitcoin Red
║
║ 💰 BTCS → Bitcoin Scrypt
║
║ 💰 BTCZ → BitcoinZ
║
║ 💰 BTDX → Bitcloud
║
║ 💰 BTG → Bitcoin Gold
║
║ 💰 BTM → Bitmark
║
║ 💰 BTM → Bytom
║
║ 💰 BTPL → Bitcoin Planet
║
║ 💰 BTQ → BitQuark
║
║ 💰 BTS → BitShares
║
║ 💰 BTWTY → Bit20
║
║ 💰 BTX → Bitcore
║
║ 💰 BUCKS → SwagBucks
║
║ 💰 BUMBA → BumbaCoin
║
║ 💰 BUN → BunnyCoin
║
║ 💰 BURST → Burst
║
║ 💰 BUZZ → BuzzCoin
║
║ 💰 BWK → Bulwark
║
║ 💰 BXT → BitTokens
║
║ 💰 BYC → Bytecent
║
║ 💰 C2 → Coin2.1
║
║ 💰 CAB → Cabbage
║
║ 💰 CACH → CacheCoin
║
║ 💰 CAG → Change
║
║ 💰 CALC → CaliphCoin
║
║ 💰 CANN → CannabisCoin
║
║ 💰 CARBON Carboncoin
║
║ 💰 CASH → Cashcoin
║
║ 💰 CAT → BlockCAT
║
║ 💰 CAT → Catcoin
║
║ 💰 CBX → Crypto Bullion
║
║ 💰 CCN → CannaCoin
║
║ 💰 CCO → Ccore
║
║ 💰 CCRB → CryptoCarbon
║
║ 💰 CCT → Crystal Clear
║
║ 💰 CDN → Canada eCoin
║
║ 💰 CDT → CoinDash
║
║ 💰 CDX → Commodity Ad Network
║
║ 💰 CFD → Confido
║
║ 💰 CFI → Cofound.it
║
║ 💰 CFT → CryptoForecast
║
║ 💰 CHAN → ChanCoin
║
║ 💰 CHC → ChainCoin
║
║ 💰 CHESS → ChessCoin
║
║ 💰 CHIPS → CHIPS
║
║ 💰 CJ → → Cryptojacks
║
║ 💰 CLAM → Clams
║
║ 💰 CLOAK → CloakCoin
║
║ 💰 CMPCO → CampusCoin
║
║ 💰 CMT → Comet
║
║ 💰 CMT → CyberMiles
║
║ 💰 CND → Cindicator
║
║ 💰 CNNC → Cannation
║
║ 💰 CNO → Coin(O)
║
║ 💰 CNT → Centurion
║
║ 💰 CNX → Cryptonex
║
║ 💰 COAL → BitCoal
║
║ 💰 COLX → ColossusCoinXT
║
║ 💰 CON → PayCon
║
║ 💰 CONX → Concoin
║
║ 💰 COSS → COSS
║
║ 💰 COVAL → Circuits of Value
║
║ 💰 CPC → Capricoin
║
║ 💰 CPN → CompuCoin
║
║ 💰 CRAVE → Crave
║
║ 💰 CRB → Creditbit
║
║ 💰 CRC → CrowdCoin
║
║ 💰 CRDNC → Credence Coin
║
║ 💰 CREA → Creativecoin
║
║ 💰 CRED → Verify
║
║ 💰 CREDO → Credo
║
║ 💰 CREVA → CrevaCoin
║
║ 💰 CRM → Cream
║
║ 💰 CRW → Crown
║
║ 💰 CRX → Chronos
║
║ 💰 CSNO → BitDice
║
║ 💰 CTIC2 → Coimatic 2.0
║
║ 💰 CTIC3 → Coimatic 3.0
║
║ 💰 CTR → Centra
║
║ 💰 CTX → CarTaxi Token
║
║ 💰 CUBE → DigiCube
║
║ 💰 CURE → Curecoin
║
║ 💰 CVC → Civic
║
║ 💰 CVCOIN CVCoin
║
║ 💰 CXT → Coinonat
║
║ 💰 CYP → Cypher
║
║ 💰 DAI → Dai
║
║ 💰 DALC → Dalecoin
║
║ 💰 DAR → Darcrus
║
║ 💰 DASH → Dash
║
║ 💰 DAT → Datum
║
║ 💰 DATA → Streamr DATAcoin
║
║ 💰 DAXX → DaxxCoin
║
║ 💰 DBC → DeepBrain Chain
║
║ 💰 DBET → DecentBet
║
║ 💰 DBIX → DubaiCoin
║
║ 💰 DBTC → Debitcoin
║
║ 💰 DCN → Dentacoin
║
║ 💰 DCR → Decred
║
║ 💰 DCT → DECENT
║
║ 💰 DCY → Dinastycoin
║
║ 💰 DDF → DigitalDevelopersFund
║
║ 💰 DEM → Deutsche eMark
║
║ 💰 DENT → Dent
║
║ 💰 DEW → DEW
║
║ 💰 DFS → DFSCoin
║
║ 💰 DFT → DraftCoin
║
║ 💰 DGB → DigiByte
║
║ 💰 DGC → Digitalcoin
║
║ 💰 DGCS → Digital Credits
║
║ 💰 DGD → DigixDAO
║
║ 💰 DGPT → DigiPulse
║
║ 💰 DIBC → DIBCOIN
║
║ 💰 DICE → Etheroll
║
║ 💰 DIME → Dimecoin
║
║ 💰 DIVX → Divi
║
║ 💰 DIX → Dix Asset
║
║ 💰 DLC → Dollarcoin
║
║ 💰 DLISK → DAPPSTER
║
║ 💰 DLT → Agrello
║
║ 💰 DMB → Digital Money Bits
║
║ 💰 DMD → Diamond
║
║ 💰 DNA → EncrypGen
║
║ 💰 DNR → Denarius
║
║ 💰 DNT → district0x
║
║ 💰 DOGE → Dogecoin
║
║ 💰 DOLLAR Dollar Online
║
║ 💰 DOPE → DopeCoin
║
║ 💰 DOT → Dotcoin
║
║ 💰 DOVU → Dovu
║
║ 💰 DP → DigitalPrice
║
║ 💰 DPY → Delphy
║
║ 💰 DRGN → Dragonchain
║
║ 💰 DRP → DCORP
║
║ 💰 DRS → Digital Rupees
║
║ 💰 DRT → DomRaider
║
║ 💰 DRXNE → DROXNE
║
║ 💰 DSH → Dashcoin
║
║ 💰 DSR → Desire
║
║ 💰 DTB → Databits
║
║ 💰 DTR → Dynamic Trading Rights
║
║ 💰 DUO → ParallelCoin
║
║ 💰 DYN → Dynamic
║
║ 💰 EAC → EarthCoin
║
║ 💰 EAGLE → EagleCoin
║
║ 💰 EBCH → eBitcoinCash
║
║ 💰 EBET → EthBet
║
║ 💰 EBST → eBoost
║
║ 💰 EBT → Ebittree Coin
║
║ 💰 EBTC → eBitcoin
║
║ 💰 ECA → Electra
║
║ 💰 ECASH → Ethereum Cash
║
║ 💰 ECC → ECC
║
║ 💰 ECN → E-coin
║
║ 💰 ECO → EcoCoin
║
║ 💰 ECOB → Ecobit
║
║ 💰 EDG → Edgeless
║
║ 💰 EDO → Eidoo
║
║ 💰 EDR → E-Dinar Coin
║
║ 💰 EFL → e-Gulden
║
║ 💰 EFYT → Ergo
║
║ 💰 EGAS → ETHGAS
║
║ 💰 EGC → EverGreenCoin
║
║ 💰 EGO → EGO
║
║ 💰 EL → Elcoin
║
║ 💰 ELE → Elementrem
║
║ 💰 ELF → aelf
║
║ 💰 ELIX → Elixir
║
║ 💰 ELLA → Ellaism
║
║ 💰 ELS → Elysium
║
║ 💰 ELTCOIN ELTCOIN
║
║ 💰 EMC → Emercoin
║
║ 💰 EMC2 → Einsteinium
║
║ 💰 EMD → Emerald Crypto
║
║ 💰 EMV → Ethereum Movie Venture
║
║ 💰 ENG → Enigma
║
║ 💰 ENJ → Enjin Coin
║
║ 💰 ENRG → Energycoin
║
║ 💰 ENT → Eternity
║
║ 💰 EOS → EOS
║
║ 💰 EOT → EOT Token
║
║ 💰 EPY → Emphy
║
║ 💰 EQT → EquiTrader
║
║ 💰 ERC → EuropeCoin
║
║ 💰 ERC20 → ERC20
║
║ 💰 EREAL → eREAL
║
║ 💰 ERO → Eroscoin
║
║ 💰 ERY → Eryllium
║
║ 💰 ESP → Espers
║
║ 💰 ETBS → Ethbits
║
║ 💰 ETC → Ethereum Classic
║
║ 💰 ETG → Ethereum Gold
║
║ 💰 ETH → Ethereum
║
║ 💰 ETHD → Ethereum Dark
║
║ 💰 ETHOS → Ethos
║
║ 💰 ETN → Electroneum
║
║ 💰 ETP → Metaverse ETP
║
║ 💰 ETT → EncryptoTel [WAVES]
║
║ 💰 EUC → Eurocoin
║
║ 💰 EVIL → Evil Coin
║
║ 💰 EVO → Evotion
║
║ 💰 EVX → Everex
║
║ 💰 EXCL → ExclusiveCoin
║
║ 💰 EXN → ExchangeN
║
║ 💰 EXP → Expanse
║
║ 💰 FAIR → FairCoin
║
║ 💰 FC2 → FuelCoin
║
║ 💰 FCN → Fantomcoin
║
║ 💰 FCT → Factom
║
║ 💰 FJC → FujiCoin
║
║ 💰 FLASH → Flash
║
║ 💰 FLAX → Flaxscript
║
║ 💰 FLDC → FoldingCoin
║
║ 💰 FLIK → FLiK
║
║ 💰 FLIXX → Flixxo
║
║ 💰 FLO → FlorinCoin
║
║ 💰 FLT → FlutterCoin
║
║ 💰 FNC → FinCoin
║
║ 💰 FOR → FORCE
║
║ 💰 FRD → Farad
║
║ 💰 FRST → FirstCoin
║
║ 💰 FST → Fastcoin
║
║ 💰 FTC → Feathercoin
║
║ 💰 FUCK → FuckToken
║
║ 💰 FUEL → Etherparty
║
║ 💰 FUN → FunFair
║
║ 💰 FUNC → FUNCoin
║
║ 💰 FUNK → The Cypherfunks
║
║ 💰 FUZZ → FuzzBalls
║
║ 💰 FXE → FuturXe
║
║ 💰 FYN → FundYourselfNow
║
║ 💰 FYP → FlypMe
║
║ 💰 G3N → G3N
║
║ 💰 GAIA → GAIA
║
║ 💰 GAM → Gambit
║
║ 💰 GAME → GameCredits
║
║ 💰 GAP → Gapcoin
║
║ 💰 GAS → Gas
║
║ 💰 GB → GoldBlocks
║
║ 💰 GBX → GoByte
║
║ 💰 GBYTE → Byteball Bytes
║
║ 💰 GCC → TheGCCcoin
║
║ 💰 GCN → GCoin
║
║ 💰 GCR → Global Currency Reserve
║
║ 💰 GEERT → GeertCoin
║
║ 💰 GEO → GeoCoin
║
║ 💰 GIM → Gimli
║
║ 💰 GLD → GoldCoin
║
║ 💰 GLT → GlobalToken
║
║ 💰 GMT → Mercury Protocol
║
║ 💰 GNO → Gnosis
║
║ 💰 GNT → Golem
║
║ 💰 GOLOS → Golos
║
║ 💰 GOOD → Goodomy
║
║ 💰 GP → → GoldPieces
║
║ 💰 GPL → Gold Pressed Latinum
║
║ 💰 GPU → GPU Coin
║
║ 💰 GRC → GridCoin
║
║ 💰 GRE → Greencoin
║
║ 💰 GRID → Grid+
║
║ 💰 GRIM → Grimcoin
║
║ 💰 GRS → Groestlcoin
║
║ 💰 GRWI → Growers International
║
║ 💰 GSR → GeyserCoin
║
║ 💰 GTC → Global Tour Coin
║
║ 💰 GTO → Gifto
║
║ 💰 GUN → Guncoin
║
║ 💰 GUP → Matchpool
║
║ 💰 GVT → Genesis Vision
║
║ 💰 GXS → GXShares
║
║ 💰 HAL → Halcyon
║
║ 💰 HAT → Hawala.Today
║
║ 💰 HBN → HoboNickels
║
║ 💰 HBT → Hubii Network
║
║ 💰 HDG → Hedge
║
║ 💰 HEAT → HEAT
║
║ 💰 HERO → Sovereign Hero
║
║ 💰 HGT → HelloGold
║
║ 💰 HKN → Hacken
║
║ 💰 HMC → HarmonyCoin
║
║ 💰 HMP → HempCoin
║
║ 💰 HMQ → Humaniq
║
║ 💰 HNC → Helleniccoin
║
║ 💰 HODL → HOdlcoin
║
║ 💰 HOLD → Interstellar Holdings
║
║ 💰 HONEY → Honey
║
║ 💰 HPC → Happycoin
║
║ 💰 HSR → Hshare
║
║ 💰 HST → Decision Token
║
║ 💰 HTC → HitCoin
║
║ 💰 HUC → HunterCoin
║
║ 💰 HUSH → Hush
║
║ 💰 HVCO → High Voltage
║
║ 💰 HVN → Hive
║
║ 💰 HWC → HollyWoodCoin
║
║ 💰 HXX → Hexx
║
║ 💰 HYP → HyperStake
║
║ 💰 I0C → I0Coin
║
║ 💰 IBANK → iBank
║
║ 💰 ICE → iDice
║
║ 💰 ICN → Iconomi
║
║ 💰 ICN → iCoin
║
║ 💰 ICOB → ICOBID
║
║ 💰 ICON → Iconic
║
║ 💰 ICOO → ICO OpenLedger
║
║ 💰 ICOS → ICOS
║
║ 💰 ICX → ICON
║
║ 💰 IETH → iEthereum
║
║ 💰 IFLT → InflationCoin
║
║ 💰 IFT → InvestFeed
║
║ 💰 IMPS → ImpulseCoin
║
║ 💰 IMS → Independent Money System
║
║ 💰 IMX → Impact
║
║ 💰 INCNT → Incent
║
║ 💰 IND → Indorse Token
║
║ 💰 INFX → Influxcoin
║
║ 💰 INK → Ink
║
║ 💰 INN → Innova
║
║ 💰 INSN → InsaneCoin
║
║ 💰 INXT → Internxt
║
║ 💰 IOC → I/O Coin
║
║ 💰 ION → ION
║
║ 💰 IOP → Internet of People
║
║ 💰 ITC → IoT Chain
║
║ 💰 ITI → iTicoin
║
║ 💰 ITNS → IntenseCoin
║
║ 💰 ITT → Intelligent Trading Tech
║
║ 💰 IXC → Ixcoin
║
║ 💰 IXT → iXledger
║
║ 💰 JET → Jetcoin
║
║ 💰 JIN → Jin Coin
║
║ 💰 JINN → Jinn
║
║ 💰 JNS → Janus
║
║ 💰 JOBS → JobsCoin
║
║ 💰 KAYI → Kayicoin
║
║ 💰 KCS → KuCoin Shares
║
║ 💰 KED → Darsek
║
║ 💰 KEK → KekCoin
║
║ 💰 KICK → KickCoin
║
║ 💰 KIN → Kin
║
║ 💰 KLC → KiloCoin
║
║ 💰 KLN → Kolion
║
║ 💰 KMD → Komodo
║
║ 💰 KNC → KingN Coin
║
║ 💰 KNC → Kyber Network
║
║ 💰 KOBO → Kobocoin
║
║ 💰 KORE → Kore
║
║ 💰 KRB → Karbo
║
║ 💰 KRONE → Kronecoin
║
║ 💰 KURT → Kurrent
║
║ 💰 KUSH → KushCoin
║
║ 💰 LA → LAToken
║
║ 💰 LANA → LanaCoin
║
║ 💰 LBC → LBRY Credits
║
║ 💰 LBTC → LiteBitcoin
║
║ 💰 LCP → Litecoin Plus
║
║ 💰 LDOGE → LiteDoge
║
║ 💰 LEA → LeaCoin
║
║ 💰 LEND → ETHLend
║
║ 💰 LEO → LEOcoin
║
║ 💰 LGD → Legends Room
║
║ 💰 LIFE → LIFE
║
║ 💰 LINDA → Linda
║
║ 💰 LINK → ChainLink
║
║ 💰 LINX → Linx
║
║ 💰 LKK → Lykke
║
║ 💰 LMC → LoMoCoin
║
║ 💰 LNK → Link Platform
║
║ 💰 LOC → LockChain
║
║ 💰 LRC → Loopring
║
║ 💰 LSK → Lisk
║
║ 💰 LTB → LiteBar
║
║ 💰 LTC → Litecoin
║
║ 💰 LTCR → Litecred
║
║ 💰 LTCU → LiteCoin Ultra
║
║ 💰 LUN → Lunyr
║
║ 💰 LUNA → Luna Coin
║
║ 💰 LUX → LUXCoin
║
║ 💰 LVPS → LevoPlus
║
║ 💰 MAC → Machinecoin
║
║ 💰 MAD → SatoshiMadness
║
║ 💰 MAG → Magnet
║
║ 💰 MAID → MaidSafeCoin
║
║ 💰 MANA → Decentraland
║
║ 💰 MAO → Mao Zedong
║
║ 💰 MAR → Marijuanacoin
║
║ 💰 MARS → Marscoin
║
║ 💰 MAX → MaxCoin
║
║ 💰 MAY → Theresa May Coin
║
║ 💰 MBI → Monster Byte
║
║ 💰 MBRS → Embers
║
║ 💰 MCAP → MCAP
║
║ 💰 MCO → Monaco
║
║ 💰 MCRN → MACRON
║
║ 💰 MDA → Moeda Loyalty Points
║
║ 💰 MEC → Megacoin
║
║ 💰 MED → MediBloc
║
║ 💰 MEME → Memetic / PepeCoin
║
║ 💰 MER → Mercury
║
║ 💰 MGM → Magnum
║
║ 💰 MGO → MobileGo
║
║ 💰 MILO → MiloCoin
║
║ 💰 MINT → Mintcoin
║
║ 💰 MIOTA → IOTA
║
║ 💰 MKR → Maker
║
║ 💰 MLN → Melon
║
║ 💰 MNC → Mincoin
║
║ 💰 MNE → Minereum
║
║ 💰 MNM → Mineum
║
║ 💰 MNX → MinexCoin
║
║ 💰 MOD → Modum
║
║ 💰 MOIN → Moin
║
║ 💰 MOJO → MojoCoin
║
║ 💰 MONA → MonaCoin
║
║ 💰 MONK → Monkey Project
║
║ 💰 MOON → Mooncoin
║
║ 💰 MOTO → Motocoin
║
║ 💰 MRT → Miners' Reward Token
║
║ 💰 MSCN → Master Swiscoin
║
║ 💰 MSP → Mothership
║
║ 💰 MST → MustangCoin
║
║ 💰 MTH → Monetha
║
║ 💰 MTL → Metal
║
║ 💰 MTLMC3 → Metal Music Coin
║
║ 💰 MTNC → Masternodecoin
║
║ 💰 MUE → MonetaryUnit
║
║ 💰 MUSIC → Musicoin
║
║ 💰 MXT → MarteXcoin
║
║ 💰 MYB → MyBit Token
║
║ 💰 MYST → Mysterium
║
║ 💰 MZC → MazaCoin
║
║ 💰 NANO → Nano
║
║ 💰 NANOX → Project-X
║
║ 💰 NAS → Nebulas
║
║ 💰 NAV → NAV Coin
║
║ 💰 NDC → NEVERDIE
║
║ 💰 NEBL → Neblio
║
║ 💰 NEO → NEO
║
║ 💰 NEOS → NeosCoin
║
║ 💰 NET → NetCoin
║
║ 💰 NET → Nimiq
║
║ 💰 NETKO → Netko
║
║ 💰 NEU → Neumark
║
║ 💰 NEVA → NevaCoin
║
║ 💰 NEWB → Newbium
║
║ 💰 NGC → NAGA
║
║ 💰 NIO → Autonio
║
║ 💰 NKA → IncaKoin
║
║ 💰 NLC2 → NoLimitCoin
║
║ 💰 NLG → Gulden
║
║ 💰 NMC → Namecoin
║
║ 💰 NMR → Numeraire
║
║ 💰 NOBL → NobleCoin
║
║ 💰 NOTE → DNotes
║
║ 💰 NRO → Neuro
║
║ 💰 NSR → NuShares
║
║ 💰 NTO → Fujinto
║
║ 💰 NTRN → Neutron
║
║ 💰 NTWK → Network Token
║
║ 💰 NUKO → Nekonium
║
║ 💰 NULS → Nuls
║
║ 💰 NVC → Novacoin
║
║ 💰 NVST → NVO
║
║ 💰 NXC → Nexium
║
║ 💰 NXS → Nexus
║
║ 💰 NXT → Nxt
║
║ 💰 NYAN → Nyancoin
║
║ 💰 NYC → NewYorkCoin
║
║ 💰 OAX → OAX
║
║ 💰 OBITS → OBITS
║
║ 💰 OCL → Oceanlab
║
║ 💰 OCT → OracleChain
║
║ 💰 ODN → Obsidian
║
║ 💰 OFF → Cthulhu Offerings
║
║ 💰 OK → → OKCash
║
║ 💰 OMG → OmiseGO
║
║ 💰 OMNI → Omni
║
║ 💰 ONG → onG.social
║
║ 💰 ONION → DeepOnion
║
║ 💰 ONX → Onix
║
║ 💰 OPAL → Opal
║
║ 💰 OPT → Opus
║
║ 💰 ORB → Orbitcoin
║
║ 💰 ORLY → Orlycoin
║
║ 💰 ORME → Ormeus Coin
║
║ 💰 OST → Simple Token
║
║ 💰 OTN → Open Trading Network
║
║ 💰 OTX → Octanox
║
║ 💰 OXY → Oxycoin
║
║ 💰 P7C → P7Coin
║
║ 💰 PAC → PACcoin
║
║ 💰 PAK → Pakcoin
║
║ 💰 PART → Particl
║
║ 💰 PASC → Pascal Coin
║
║ 💰 PASL → Pascal Lite
║
║ 💰 PAY → TenX
║
║ 💰 PAYX → Paypex
║
║ 💰 PBL → Publica
║
║ 💰 PBT → Primalbase Token
║
║ 💰 PCOIN → Pioneer Coin
║
║ 💰 PDC → Project Decorum
║
║ 💰 PEPECASH Pepe Cash
║
║ 💰 PEX → PosEx
║
║ 💰 PFR → Payfair
║
║ 💰 PGL → Prospectors Gold
║
║ 💰 PHO → Photon
║
║ 💰 PHR → Phore
║
║ 💰 PHS → Philosopher Stones
║
║ 💰 PIGGY → Piggycoin
║
║ 💰 PING → CryptoPing
║
║ 💰 PINK → PinkCoin
║
║ 💰 PIPL → PiplCoin
║
║ 💰 PIRL → Pirl
║
║ 💰 PIVX → PIVX
║
║ 💰 PIX → Lampix
║
║ 💰 PKB → ParkByte
║
║ 💰 PKT → Playkey
║
║ 💰 PLACO → PlayerCoin
║
║ 💰 PLAY → HEROcoin
║
║ 💰 PLBT → Polybius
║
║ 💰 PLNC → PLNcoin
║
║ 💰 PLR → Pillar
║
║ 💰 PLU → Pluton
║
║ 💰 PND → Pandacoin
║
║ 💰 POE → Po.et
║
║ 💰 POLL → ClearPoll
║
║ 💰 PONZI → PonziCoin
║
║ 💰 POP → PopularCoin
║
║ 💰 POS → PoSToken
║
║ 💰 POST → PostCoin
║
║ 💰 POSW → PoSW Coin
║
║ 💰 POT → PotCoin
║
║ 💰 POWR → Power Ledger
║
║ 💰 PPC → Peercoin
║
║ 💰 PPP → PayPie
║
║ 💰 PPT → Populous
║
║ 💰 PPY → Peerplays
║
║ 💰 PR → → Prototanium
║
║ 💰 PRC → PRCoin
║
║ 💰 PRG → Paragon
║
║ 💰 PRIX → Privatix
║
║ 💰 PRL → Oyster
║
║ 💰 PRO → ProChain
║
║ 💰 PRO → Propy
║
║ 💰 PROC → ProCurrency
║
║ 💰 PRS → Presearch
║
║ 💰 PRX → Printerium
║
║ 💰 PST → Primas
║
║ 💰 PTC → Pesetacoin
║
║ 💰 PTOY → Patientory
║
║ 💰 PURA → Pura
║
║ 💰 PURE → Pure
║
║ 💰 PUT → PutinCoin
║
║ 💰 PXC → Phoenixcoin
║
║ 💰 PXI → Prime-XI
║
║ 💰 PZM → PRIZM
║
║ 💰 Q2C → QubitCoin
║
║ 💰 QASH → QASH
║
║ 💰 QAU → Quantum
║
║ 💰 QBC → Quebecoin
║
║ 💰 QCN → QuazarCoin
║
║ 💰 QRK → Quark
║
║ 💰 QRL → Quantum Resistant Ledger
║
║ 💰 QSP → Quantstamp
║
║ 💰 QTL → Quatloo
║
║ 💰 QTUM → Qtum
║
║ 💰 QUN → QunQun
║
║ 💰 QVT → Qvolta
║
║ 💰 QWARK → Qwark
║
║ 💰 R → Revain
║
║ 💰 RADS → Radium
║
║ 💰 RAIN → Condensate
║
║ 💰 RBIES → Rubies
║
║ 💰 RBT → Rimbit
║
║ 💰 RBY → Rubycoin
║
║ 💰 RC → RussiaCoin
║
║ 💰 RCN → Ripio Credit Network
║
║ 💰 RDD → ReddCoin
║
║ 💰 RDN → Raiden Network Token
║
║ 💰 REAL → REAL
║
║ 💰 REC → Regalcoin
║
║ 💰 RED → RedCoin
║
║ 💰 REE → ReeCoin
║
║ 💰 REP → Augur
║
║ 💰 REQ → Request Network
║
║ 💰 REX → REX
║
║ 💰 RHOC → RChain
║
║ 💰 RIC → Riecoin
║
║ 💰 RISE → Rise
║
║ 💰 RIYA → Etheriya
║
║ 💰 RKC → Royal Kingdom Coin
║
║ 💰 RLC → iExec RLC
║
║ 💰 RLT → RouletteToken
║
║ 💰 RMC → Russian Miner Coin
║
║ 💰 RNS → Renos
║
║ 💰 ROC → Rasputin Online Coin
║
║ 💰 ROOFS → Roofs
║
║ 💰 RPC → RonPaulCoin
║
║ 💰 RPX → Red Pulse
║
║ 💰 RUP → Rupee
║
║ 💰 RUPX → Rupaya
║
║ 💰 RUSTBITS Rustbits
║
║ 💰 RVT → Rivetz
║
║ 💰 SAFEX → Safe Exchange Coin
║
║ 💰 SAGA → SagaCoin
║
║ 💰 SALT → SALT
║
║ 💰 SAN → Santiment Network Token
║
║ 💰 SBD → Steem Dollars
║
║ 💰 SC → → Siacoin
║
║ 💰 SCL → Social
║
║ 💰 SCORE → Scorecoin
║
║ 💰 SCS → Speedcash
║
║ 💰 SDC → ShadowCash
║
║ 💰 SDRN → Senderon
║
║ 💰 SEND → Social Send
║
║ 💰 SEQ → Sequence
║
║ 💰 SFC → Solarflarecoin
║
║ 💰 SGR → Sugar Exchange
║
║ 💰 SHIFT → Shift
║
║ 💰 SIB → SIBCoin
║
║ 💰 SIFT → Smart Investment Fund Token
║
║ 💰 SIGT → Signatum
║
║ 💰 SKC → Skeincoin
║
║ 💰 SKIN → SkinCoin
║
║ 💰 SKY → Skycoin
║
║ 💰 SLEVIN Slevin
║
║ 💰 SLFI → Selfiecoin
║
║ 💰 SLG → Sterlingcoin
║
║ 💰 SLR → SolarCoin
║
║ 💰 SLS → SaluS
║
║ 💰 SMART → SmartBillions
║
║ 💰 SMART → SmartCash
║
║ 💰 SMC → SmartCoin
║
║ 💰 SMLY → SmileyCoin
║
║ 💰 SNC → SunContract
║
║ 💰 SNGLS → SingularDTV
║
║ 💰 SNM → SONM
║
║ 💰 SNOV → Snovio
║
║ 💰 SNRG → Synergy
║
║ 💰 SNT → Status
║
║ 💰 SOAR → Soarcoin
║
║ 💰 SOCC → SocialCoin
║
║ 💰 SOIL → SOILcoin
║
║ 💰 SONG → SongCoin
║
║ 💰 SOON → SoonCoin
║
║ 💰 SPACE → SpaceCoin
║
║ 💰 SPANK → SpankChain
║
║ 💰 SPF → SportyFi
║
║ 💰 SPHR → Sphere
║
║ 💰 SPR → SpreadCoin
║
║ 💰 SPRTS → Sprouts
║
║ 💰 SPT → Spots
║
║ 💰 SRC → SecureCoin
║
║ 💰 SRN → SIRIN LABS Token
║
║ 💰 SSS → Sharechain
║
║ 💰 STA → Starta
║
║ 💰 STAK → STRAKS
║
║ 💰 STARS → StarCash Network
║
║ 💰 START → Startcoin
║
║ 💰 STEEM → Steem
║
║ 💰 STN → Steneum Coin
║
║ 💰 STORJ → Storj
║
║ 💰 STORM → Storm
║
║ 💰 STRAT → Stratis
║
║ 💰 STRC → StarCredits
║
║ 💰 STU → bitJob
║
║ 💰 STV → Sativacoin
║
║ 💰 STX → Stox
║
║ 💰 SUB → Substratum
║
║ 💰 SUMO → Sumokoin
║
║ 💰 SUPER → SuperCoin
║
║ 💰 SWIFT → Bitswift
║
║ 💰 SWING → Swing
║
║ 💰 SWT → Swarm City
║
║ 💰 SXC → Sexcoin
║
║ 💰 SYNX → Syndicate
║
║ 💰 SYS → Syscoin
║
║ 💰 TAAS → TaaS
║
║ 💰 TAG → TagCoin
║
║ 💰 TAJ → TajCoin
║
║ 💰 TALK → BTCtalkcoin
║
║ 💰 TAU → Lamden
║
║ 💰 TCC → The ChampCoin
║
║ 💰 TEK → TEKcoin
║
║ 💰 TES → TeslaCoin
║
║ 💰 TFL → TrueFlip
║
║ 💰 TGC → Tigercoin
║
║ 💰 TGT → Target Coin
║
║ 💰 THC → HempCoin
║
║ 💰 TIME → Chronobank
║
║ 💰 TIPS → FedoraCoin
║
║ 💰 TIT → Titcoin
║
║ 💰 TIX → Blocktix
║
║ 💰 TKN → TokenCard
║
║ 💰 TKR → CryptoInsight
║
║ 💰 TKS → Tokes
║
║ 💰 TNB → Time New Bank
║
║ 💰 TNT → Tierion
║
║ 💰 TOA → ToaCoin
║
║ 💰 TOKEN → SwapToken
║
║ 💰 TOR → Torcoin
║
║ 💰 TRC → Terracoin
║
║ 💰 TRCT → Tracto
║
║ 💰 TRDT → Trident Group
║
║ 💰 TRI → Triangles
║
║ 💰 TRIG → Triggers
║
║ 💰 TRK → Truckcoin
║
║ 💰 TROLL → Trollcoin
║
║ 💰 TRST → WeTrust
║
║ 💰 TRUMP → TrumpCoin
║
║ 💰 TRUST → TrustPlus
║
║ 💰 TRX → TRON
║
║ 💰 TSE → Tattoocoin (Standard Edition)
║
║ 💰 TSTR → Tristar Coin
║
║ 💰 TTC → TittieCoin
║
║ 💰 TX → TransferCoin
║
║ 💰 TZC → TrezarCoin
║
║ 💰 UBQ → Ubiq
║
║ 💰 UET → Useless Ethereum Token
║
║ 💰 UFO → UFO Coin
║
║ 💰 UFR → Upfiring
║
║ 💰 UIS → Unitus
║
║ 💰 UKG → Unikoin Gold
║
║ 💰 ULA → Ulatech
║
║ 💰 UNB → UnbreakableCoin
║
║ 💰 UNIC → UniCoin
║
║ 💰 UNIFY → Unify
║
║ 💰 UNIT → Universal Currency
║
║ 💰 UNITS → GameUnits
║
║ 💰 UNITY → SuperNET
║
║ 💰 UNO → Unobtanium
║
║ 💰 UNY → Unity Ingot
║
║ 💰 URC → Unrealcoin
║
║ 💰 URO → Uro
║
║ 💰 USDE → USDe
║
║ 💰 USDT → Tether
║
║ 💰 USNBT → NuBits
║
║ 💰 UTC → UltraCoin
║
║ 💰 UTK → UTRUST
║
║ 💰 V → → Version
║
║ 💰 VAL → Valorbit
║
║ 💰 VEC2 → VectorAI
║
║ 💰 VEE → BLOCKv
║
║ 💰 VEN → VeChain
║
║ 💰 VERI → Veritaseum
║
║ 💰 VIA → Viacoin
║
║ 💰 VIB → Viberate
║
║ 💰 VIBE → VIBE
║
║ 💰 VIDZ → PureVidz
║
║ 💰 VISIO → Visio
║
║ 💰 VIVO → VIVO
║
║ 💰 VLT → Veltor
║
║ 💰 VLTC → Vault Coin
║
║ 💰 VOISE → Voise
║
║ 💰 VOLT → Bitvolt
║
║ 💰 VOT → VoteCoin
║
║ 💰 VOX → Voxels
║
║ 💰 VPRC → VapersCoin
║
║ 💰 VRC → VeriCoin
║
║ 💰 VRM → VeriumReserve
║
║ 💰 VRS → Veros
║
║ 💰 VSL → vSlice
║
║ 💰 VSX → Vsync
║
║ 💰 VTA → Virtacoin
║
║ 💰 VTC → Vertcoin
║
║ 💰 VTR → vTorrent
║
║ 💰 VUC → Virta Unique Coin
║
║ 💰 WABI → WaBi
║
║ 💰 WAND → WandX
║
║ 💰 WAVES → Waves
║
║ 💰 WAX → WAX
║
║ 💰 WBB → Wild Beast Block
║
║ 💰 WCT → Waves Community Token
║
║ 💰 WDC → WorldCoin
║
║ 💰 WGO → WavesGo
║
║ 💰 WGR → Wagerr
║
║ 💰 WHL → WhaleCoin
║
║ 💰 WILD → Wild Crypto
║
║ 💰 WINGS → Wings
║
║ 💰 WISH → MyWish
║
║ 💰 WOMEN → WomenCoin
║
║ 💰 WORM → HealthyWormCoin
║
║ 💰 WRC → Worldcore
║
║ 💰 WTC → Walton
║
║ 💰 WTT → Giga Watt Token
║
║ 💰 XAS → Asch
║
║ 💰 XAUR → Xaurum
║
║ 💰 XBC → Bitcoin Plus
║
║ 💰 XBL → Billionaire Token
║
║ 💰 XBTC21 → Bitcoin 21
║
║ 💰 XBTS → Beatcoin
║
║ 💰 XBY → XTRABYTES
║
║ 💰 XCN → Cryptonite
║
║ 💰 XCO → X-Coin
║
║ 💰 XCP → Counterparty
║
║ 💰 XCPO → Copico
║
║ 💰 XCRE → Creatio
║
║ 💰 XCS → CybCSec
║
║ 💰 XCT → C-Bit
║
║ 💰 XCXT → CoinonatX
║
║ 💰 XDN → DigitalNote
║
║ 💰 XEL → Elastic
║
║ 💰 XEM → NEM
║
║ 💰 XFT → Footy Cash
║
║ 💰 XGOX → XGOX
║
║ 💰 XGR → GoldReserve
║
║ 💰 XHI → HiCoin
║
║ 💰 XIOS → Xios
║
║ 💰 XJO → Joulecoin
║
║ 💰 XLC → LeviarCoin
║
║ 💰 XLM → Stellar
║
║ 💰 XLR → Solaris
║
║ 💰 XMCC → Monoeci
║
║ 💰 XMG → Magi
║
║ 💰 XMY → Myriad
║
║ 💰 XNG → Enigma
║
║ 💰 XNN → Xenon
║
║ 💰 XP → → Experience Points
║
║ 💰 XPA → XPlay
║
║ 💰 XPD → PetroDollar
║
║ 💰 XPM → Primecoin
║
║ 💰 XPTX → PlatinumBAR
║
║ 💰 XPY → PayCoin
║
║ 💰 XRA → Ratecoin
║
║ 💰 XRB → RaiBlocks
║
║ 💰 XRC → Rawcoin
║
║ 💰 XRE → RevolverCoin
║
║ 💰 XRL → Rialto
║
║ 💰 XRP → Ripple
║
║ 💰 XSH → SHIELD
║
║ 💰 XSPEC → Spectrecoin
║
║ 💰 XST → Stealthcoin
║
║ 💰 XTO → Tao
║
║ 💰 XTZ → Tezos
║
║ 💰 XUC → Exchange Union
║
║ 💰 XVC → Vcash
║
║ 💰 XVG → Verge
║
║ 💰 XVP → Virtacoinplus
║
║ 💰 XWC → WhiteCoin
║
║ 💰 XZC → ZCoin
║
║ 💰 YOC → Yocoin
║
║ 💰 YOYOW → YOYOW
║
║ 💰 YTN → YENTEN
║
║ 💰 ZCG → Zlancer
║
║ 💰 ZCL → ZClassic
║
║ 💰 ZEC → Zcash
║
║ 💰 ZEIT → Zeitcoin
║
║ 💰 ZEN → ZenCash
║
║ 💰 ZENI → Zennies
║
║ 💰 ZEPH → Zephyr
║
║ 💰 ZER → Zero
║
║ 💰 ZET → Zetacoin
║
║ 💰 ZMC → ZetaMicron
║
║ 💰 ZNY → Bitzeny
║
║ 💰 ZOI → Zoin
║
║ 💰 ZRC → ZrCoin
║
║ 💰 ZRX → 0x
║
║ 💰 ZSC → Zeusshield
║
║ 💰 ZUR → Zurcoin
║
║ 💰 ZZC → ZoZoCoin
╚═══════════════════` }

// Codigo covid
exports.covid = () => { return `╔═══「 🎌 Países Usáveis 🏁 」 
║
║ 😷 Afghanistan
║
║ 😷 Albania
║
║ 😷 Algeria
║
║ 😷 Andorra
║
║ 😷 Angola
║
║ 😷 Anguilla
║
║ 😷 Antigua and Barbuda
║
║ 😷 Argentina
║
║ 😷 Armenia
║
║ 😷 Aruba
║
║ 😷 Australia
║
║ 😷 Austria
║
║ 😷 Azerbaijan
║
║ 😷 Bahamas
║
║ 😷 Bahrain
║
║ 😷 Bangladesh
║
║ 😷 Barbados
║
║ 😷 Belarus
║
║ 😷 Belgium
║
║ 😷 Belize
║
║ 😷 Benin
║
║ 😷 Bermuda
║
║ 😷 Bhutan
║
║ 😷 Bolivia
║
║ 😷 Bosnia and Herzegovina
║
║ 😷 Botswana
║
║ 😷 Brazil
║
║ 😷 British Virgin Islands
║
║ 😷 Brunei
║
║ 😷 Bulgaria
║
║ 😷 Burkina Faso
║
║ 😷 Burundi
║
║ 😷 CAR
║
║ 😷 Cabo Verde
║
║ 😷 Cambodia
║
║ 😷 Cameroon
║
║ 😷 Canada
║
║ 😷 Caribbean Netherlands
║
║ 😷 Cayman Islands
║
║ 😷 Chad
║
║ 😷 Channel Islands
║
║ 😷 Chile
║
║ 😷 China
║
║ 😷 Colombia
║
║ 😷 Comoros
║
║ 😷 Congo
║
║ 😷 Costa Rica
║
║ 😷 Croatia
║
║ 😷 Cuba
║
║ 😷 Curaçao
║
║ 😷 Cyprus
║
║ 😷 Czechia
║
║ 😷 DRC
║
║ 😷 Denmark
║
║ 😷 Diamond Princess
║
║ 😷 Djibouti
║
║ 😷 Dominica
║
║ 😷 Dominican Republic
║
║ 😷 Ecuador
║
║ 😷 Egypt
║
║ 😷 El Salvador
║
║ 😷 Equatorial Guinea
║
║ 😷 Eritrea
║
║ 😷 Estonia
║
║ 😷 Eswatini
║
║ 😷 Ethiopia
║
║ 😷 Faeroe Islands
║
║ 😷 Falkland Islands
║
║ 😷 Fiji
║
║ 😷 Finland
║
║ 😷 France
║
║ 😷 French Guiana
║
║ 😷 French Polynesia
║
║ 😷 Gabon
║
║ 😷 Gambia
║
║ 😷 Georgia
║
║ 😷 Germany
║
║ 😷 Ghana
║
║ 😷 Gibraltar
║
║ 😷 Greece
║
║ 😷 Greenland
║
║ 😷 Grenada
║
║ 😷 Guadeloupe
║
║ 😷 Guatemala
║
║ 😷 Guinea-Bissau
║
║ 😷 Guinea
║
║ 😷 Guyana
║
║ 😷 Haiti
║
║ 😷 Honduras
║
║ 😷 Hong Kong
║
║ 😷 Hungary
║
║ 😷 Iceland
║
║ 😷 India
║
║ 😷 Indonesia
║
║ 😷 Iran
║
║ 😷 Iraq
║
║ 😷 Ireland
║
║ 😷 Isle of Man
║
║ 😷 Israel
║
║ 😷 Italy
║
║ 😷 Ivory Coast
║
║ 😷 Jamaica
║
║ 😷 Japan
║
║ 😷 Jordan
║
║ 😷 Kazakhstan
║
║ 😷 Kenya
║
║ 😷 Kuwait
║
║ 😷 Kyrgyzstan
║
║ 😷 Laos
║
║ 😷 Latvia
║
║ 😷 Lebanon
║
║ 😷 Lesotho
║
║ 😷 Liberia
║
║ 😷 Libya
║
║ 😷 Liechtenstein
║
║ 😷 Lithuania
║
║ 😷 Luxembourg
║
║ 😷 MS Zaandam
║
║ 😷 Macao
║
║ 😷 Madagascar
║
║ 😷 Malawi
║
║ 😷 Malaysia
║
║ 😷 Maldives
║
║ 😷 Mali
║
║ 😷 Malta
║
║ 😷 Marshall Islands
║
║ 😷 Martinique
║
║ 😷 Mauritania
║
║ 😷 Mauritius
║
║ 😷 Mayotte
║
║ 😷 Mexico
║
║ 😷 Micronesia
║
║ 😷 Moldova
║
║ 😷 Monaco
║
║ 😷 Mongolia
║
║ 😷 Montenegro
║
║ 😷 Montserrat
║
║ 😷 Morocco
║
║ 😷 Mozambique
║
║ 😷 Myanmar
║
║ 😷 Namibia
║
║ 😷 Nepal
║
║ 😷 Netherlands
║
║ 😷 New Caledonia
║
║ 😷 New Zealand
║
║ 😷 Nicaragua
║
║ 😷 Niger
║
║ 😷 Nigeria
║
║ 😷 North Macedonia
║
║ 😷 Norway
║
║ 😷 Oman
║
║ 😷 Pakistan
║
║ 😷 Palestine
║
║ 😷 Panama
║
║ 😷 Papua New Guinea
║
║ 😷 Paraguay
║
║ 😷 Peru
║
║ 😷 Philippines
║
║ 😷 Poland
║
║ 😷 Portugal
║
║ 😷 Qatar
║
║ 😷 Romania
║
║ 😷 Russia
║
║ 😷 Rwanda
║
║ 😷 Réunion
║
║ 😷 S. Korea
║
║ 😷 Saint Kitts and Nevis
║
║ 😷 Saint Lucia
║
║ 😷 Saint Martin
║
║ 😷 Saint Pierre Miquelon
║
║ 😷 Samoa
║
║ 😷 San Marino
║
║ 😷 Sao Tome and Principe
║
║ 😷 Saudi Arabia
║
║ 😷 Senegal
║
║ 😷 Serbia
║
║ 😷 Seychelles
║
║ 😷 Sierra Leone
║
║ 😷 Singapore
║
║ 😷 Sint Maarten
║
║ 😷 Slovakia
║
║ 😷 Slovenia
║
║ 😷 Solomon Islands
║
║ 😷 Somalia
║
║ 😷 South Africa
║
║ 😷 South Sudan
║
║ 😷 Spain
║
║ 😷 Sri Lanka
║
║ 😷 St. Barth
║
║ 😷 St. Vincent Grenadines
║
║ 😷 Sudan
║
║ 😷 Suriname
║
║ 😷 Sweden
║
║ 😷 Switzerland
║
║ 😷 Syria
║
║ 😷 Taiwan
║
║ 😷 Tajikistan
║
║ 😷 Tanzania
║
║ 😷 Thailand
║
║ 😷 Timor-Leste
║
║ 😷 Togo
║
║ 😷 Trinidad and Tobago
║
║ 😷 Tunisia
║
║ 😷 Turkey
║
║ 😷 Turks and Caicos
║
║ 😷 UAE
║
║ 😷 UK
║
║ 😷 USA
║
║ 😷 Uganda
║
║ 😷 Ukraine
║
║ 😷 Uruguay
║
║ 😷 Uzbekistan
║
║ 😷 Vanuatu
║
║ 😷 Vatican City
║
║ 😷 Venezuela
║
║ 😷 Vietnam
║
║ 😷 Wallis and Futuna
║
║ 😷 Western Sahara
║
║ 😷 World
║
║ 😷 Yemen
║
║ 😷 Zambia
║
║ 😷 Zimbabwe
╚═══════════════════` }

// covid
exports.covidata = (covidnb) => { return `*✪ Casos no ${covidnb.data.country} >* ${covidnb.data.cases}

*✪ Casos diarios >* ${covidnb.data.todayCases}

*✪ Mortes >* ${covidnb.data.deaths}

*✪ Mortes diarias >* ${covidnb.data.todayDeaths}

*✪ Recuperados >* ${covidnb.data.recovered}

*✪ Ativos >* ${covidnb.data.active}

*✪ Casos criticos >* ${covidnb.data.critical}

*✪ Testes totais >* ${covidnb.data.totalTests}` }

exports.coviderr = () => { return `Para buscar o número de casos, use o nome do País em inglês e sem acentos, para uma lista dos países use ${prefix}paises.` }

exports.gostosa = (quem) => { return `*ＤＥＴＥＣＴＯＲ   ＤＥ  ＧＯＳＴＯＳＡＳ👩‍⚕️*

*pi pi pi pi*  
*pipipipi🚨🚨🚨pipipipi🚨🚨🚨pipipipi🚨🚨🚨pipi*

@${quem.replace(/@c.us/g, '')} *PARADA(O) AÍ🖐*

*VOCÊ ACABA DE RECEBER DUAS MULTAS*

*1 por não dar bom dia,boa tarde,boa noite e outra por ser muito*

*gostosa(o)*

*valor da multa:*
*FOTO DA TETINHA NO PV kkkkk*` }

exports.groupinfo = (groupname, totalMem, welgrp, atpngy, atlka, anttra, xpgp, fakegp, bklistgp, slcegp, autostk, ngrp, desc, gpOwner, admgp) => { return `*${groupname}*

👷 *Membros > ${totalMem}*

*💌️ Welcome/Bye > ${welgrp}*

*🌙 Anti-Porn > ${atpngy}*

*🌏 Anti-Links > ${atlka}*

*🛡️ Anti-Travas > ${anttra}*

*🎮 XP > ${xpgp}*

*👤 Anti-Fakes > ${fakegp}*

*🔏 Black-List > ${bklistgp}*

*🔕 Mutado > ${slcegp}*

*🎥 Auto-Stickers > ${autostk}*

*🔞 Contéudo adulto > ${ngrp}*

*📃️ Descrição ↓*
 ${desc}

*🌙 Dono >* ${gpOwner}

*☀️ Administradores ↓*
${admgp}` }

exports.idiomas = () => { return `╔═══「 🔊 Linguas 🗣️ 」 
║
║ 🚩 'af' → 'Africano'  
║
║ 🚩 'ar' → 'Arabico'  
║
║ 🚩 'au' → 'Inglês da Australia'  
║
║ 🚩 'br' → 'Português do Brasil'  
║
║ 🚩 'ca' → 'Catalã (Catalonia)'  
║
║ 🚩 'cn' → 'Chinês (Mandarin/China)'  
║
║ 🚩 'cs' → 'Tcheca'  
║
║ 🚩 'cy' → 'Galês'  
║
║ 🚩 'da' → 'Dinamarquês'  
║
║ 🚩 'de' → 'Germanico/Alemão'  
║
║ 🚩 'el' → 'Grega'  
║
║ 🚩 'en' → 'Inglês'  
║
║ 🚩 'eo' → 'Esperanto'  
║
║ 🚩 'es' → 'Espanhol'  
║
║ 🚩 'fi' → 'Finlandês'  
║
║ 🚩 'fr' → 'Francês'  
║
║ 🚩 'hi' → 'Hindi'  
║
║ 🚩 'hr' → 'Croácio'  
║
║ 🚩 'ht' → 'Haitiano'  
║
║ 🚩 'hu' → 'Húngaro'  
║
║ 🚩 'hy' → 'Armenico'  
║
║ 🚩 'id' → 'Indonesio'  
║
║ 🚩 'is' → 'islandês'  
║
║ 🚩 'it' → 'Italiano'  
║
║ 🚩 'ja' → 'Japonês'  
║
║ 🚩 'ko' → 'Coreano'  
║
║ 🚩 'la' → 'Latim'  
║
║ 🚩 'lv' → 'Letonês'  
║
║ 🚩 'mk' → 'Macedónio'  
║
║ 🚩 'nl' → 'Holandês'  
║
║ 🚩 'no' → 'Norueguês'  
║
║ 🚩 'pl' → 'Polonês'  
║
║ 🚩 'pt' → 'Português de Portugal'  
║
║ 🚩 'ro' → 'Romeno'  
║
║ 🚩 'ru' → 'Russo'  
║
║ 🚩 'sk' → 'Eslovaco'  
║
║ 🚩 'sp' → 'Espanhol da Espanha'  
║
║ 🚩 'sq' → 'Albanês'  
║
║ 🚩 'sr' → 'Servia'  
║
║ 🚩 'su' → 'Espanhol dos Estados Unidos'  
║
║ 🚩 'sv' → 'Sueco'  
║
║ 🚩 'sw' → 'Suaíli'  
║
║ 🚩 'ta' → 'Tamil'  
║
║ 🚩 'th' → 'Thailandês'  
║
║ 🚩 'tr' → 'Turco'  
║
║ 🚩 'tw' → 'Chinês (Mandarin/Taiwan)'  
║
║ 🚩 'uk' → 'Inglês do Reino Unido)'  
║
║ 🚩 'us' → 'Inglês dos Estados Unidos'  
║
║ 🚩 'vi' → 'Vietnamita'  
║
║ 🚩 'yu' → 'Chinês (Cantonesa)'  
║
║ 🚩 'zh' → 'Chinês
╚═══════════════════` }

exports.insta = (ig) => { return `✪ Username: ${ig.data.graphql.user.username}

✪ Biografia: ${ig.data.graphql.user.biography}

✪ Seguidores: ${ig.data.graphql.user.edge_followed_by.count}

✪ Seguindo: ${ig.data.graphql.user.edge_follow.count}

✪ Verificada: ${ig.data.graphql.user.is_verified}` }

exports.nhentai = (title, parodies, tags, artists, groups, languages, categories, link) => { return `*Titulo* : ${title}

*Parodia de* : ${parodies}

*Tags* : ${tags.join(', ')}

*Artistas* : ${artists.join(', ')}

*Grupos* : ${groups.join(', ')}

*Linguagens* : ${languages.join(', ')}

*Categoria* : ${categories}

*Link* : ${link}

Aguarde, estou enviando o hentai, pode demorar varios minutos dependendo da quantidade de paginas.` }

exports.play = (ytres) => { return `*Titulo >* ${ytres.all[0].title}

*Descrição >* ${ytres.all[0].description}

*Link >* https://youtu.be/${ytres.all[0].videoId}

*Duração >*  ${ytres.all[0].timestamp} minutos

*Feito a >* ${ytres.all[0].ago}

*Visualizações >* ${ytres.all[0].views}

*Autor >* ${ytres.all[0].author.name}

*Canal >* ${ytres.all[0].author.url}` }


exports.profile = (namae, myMsg, adm, muted, blocked, status, peoLevel, peoXp, ineedxp, patente) => { return `*Dados do seu perfil..* ✨️ 

 🔖️ *Qual sua Usertag? ${namae}*

⏱️ *Mensagens*? ${myMsg}

👑️ *Administrador? ${adm}*

🔇 *Mutado? ${blocked}*

🔐 *Bloqueado? ${blocked}*

💌️ *Frase do recado?*
${status}

️📈 *Level: ${peoLevel}*

🕹️ *XP: ${peoXp} / ${ineedxp}*

🌐 *Patente: ${patente}*` }

exports.store = (stsp, playst) => { return `*Nome >* ${stsp.name}

*Link >* ${stsp.url}

*Preço >* ${stsp.price}

*Descrição >* ${playst}

*Nota >* ${stsp.rating}/5

*Desenvolvedora >* ${stsp.developer.name}

*Outros>* ${stsp.developer.url}` }

exports.reMerchant = () => { return `🌎 - ID's - 🌎

Cuba = [MCU] ($ = CUP)

Ecuador = [MEC] ($ = USD)

El Salvador = [MSV] ($ = USD)

Uruguay = [MLU] ($ = UYU)

Perú = [MPE] ($ = PEN)

Mexico = [MLM] ($ = MXN)

Bolivia = [MBO] ($ = BOB)

Chile = [MLC] ($ = CLP)

Guatemala = [MGT] ($ = GTQ)

Colombia = [MCO] ($ = COP)

Argentina = [MLA] ($ = ARS)

Brasil = [MLB] ($ = BRL)

Costa Rica = [MCR] ($ = CRC)

Panamá = [MPA] ($ = PAB)

Nicaragua = [MNI] ($ = NIO)

Venezuela = [MLV] ($ = VES)

Dominicana = [MRD] ($ = DOP)

Honduras = [MHN] ($ = HNL)

Paraguay = [MPY] ($ = PYG)

Uso = ${prefix}Market [ID] | Produto.` }

exports.theStore = (getML, isNewP, temLoja) => { return `✔️ - Procurando isso? - ✔️

✨️ - *Produto: ${getML.data.results[0].title}*

⌚ - *É novo? ${isNewP}*

💸 - *Preço? *R${getML.data.results[0].price}

🏬 - *Possui loja? ${temLoja}*

📍 - *Onde? ${getML.data.results[0].address.city_name} - (${getML.data.results[0].address.state_name})*

👛 - *Vendas do Autor: ${getML.data.results[0].seller.seller_reputation.transactions.total}*

🔗 - *URL:* ${getML.data.results[0].permalink}

📃 - *Total de semelhantes: ${getML.data.paging.total}*` }


exports.novogrupo = () => { return `Oi! 🌟
Fui requisitado como BOT para esse grupo, e estarei a disposição de vocês! 🤖
Se quiserem ver minhas funcões usem ${prefix}menu!se eu ficar sem adm meu sistema vai me retirar🥲` }

exports.noreq = (totalMem) => { return `Um novo grupo, Eba! 😃
Uma pena que vocês não tem o requisito, que é ter pelo menos ${config.memberReq} membros. Você possui ${totalMem}, junte mais pessoas! 😉` }

exports.cheio = (lmtgru) => { return `Desculpe, estamos no máximo de grupos!
Atualmente estamos em ${lmtgru.length}/${config.gpLimit}` }

exports.entrace = () => { return `Foi mal meu amigo, mas você acaba de ser barrado pela gerente do estabelecimento 😎` }

exports.nofake = (event) => { return `Olá @${event.who.replace('@c.us', '')}, como parte do nosso sistema de segurança, números de fora do Brasil são banidos, se você não for alguém mal e quiser estar no grupo pacificamente, por favor contate os administradores 😉.

Hello @${event.who.replace('@c.us', '')}, as part of our security system, numbers outside Brazil are banned, if you are not someone bad and want to be in the group peacefully, please contact the administrators 😉.

Halo @${event.who.replace('@c.us', '')}, sebagai bagian dari sistem keamanan kami, nomor di luar Brasil dilarang, jika Anda bukan orang jahat dan ingin berada di grup dengan damai, silakan hubungi administrator 😉.

Hola @${event.who.replace('@c.us', '')}, como parte de nuestro sistema de seguridad, los números fuera de Brasil están prohibidos, si no eres alguien malo y quieres estar en el grupo pacíficamente, por favor contacte a los administradores 😉.` }

exports.bemVindo = (pushname, name) => { return `Olá ${pushname}! 🥰 

Seja bem vindo ao ${name} 😎 

Desejamos que se divirta e obviamente que siga nossas regras! ✅ 

Caso precise, chame um Administrador ou digite ${config.prefix}menu. 👨🏻‍💻` }

exports.tchau = (pushname) => { return `Adeus ${pushname}, você foi ou seria um excelente ~Gado Top de Linha~ amigo(a) e membro.` }

exports.soGrupo = (name) => { return `${name}, esse comando é usavel apenas em grupos!`}

exports.soAdm = (name) => { return `${name}, você não é adm kkk, ta querendo usar isso por que?`}

exports.soDono = (name, dono1, dono2) => { return `Esse comando apenas meus donos ${dono1} e ${dono2} podem usar, você ${name}, não tem direito`}

exports.baninjusto = (name) => { return `Estou banindo o ${name}, caso achem que foi invalido peço que usem o comando ${prefix}unban

O ${name} foi bani por: ` }

exports.nopanic = () => { return `Esse macaco foi banido por mandar trava, se isso não era trava desculpa, basta usar ${prefix}unban!` }

exports.recTrava = (user) => { return `O Usuario ${user}, enviou uma trava e foi bloqueado`}

exports.botAdm = (nomeGrupo, numeroDono) => { return `não sou adm no grupo ${nomeGrupo}, a puta do @${numeroDono} não me deu ainda.`}

exports.jaHabilitado = (pushname) => { return `${pushname}, essa função já está ligada!`}

exports.jaDesligado = (pushname) => { return `${pushname}, essa função já está desabilitada!`}

exports.ligado = (funcao) => { return `A função ${funcao}, foi habilitada com sucesso no grupo!`}

exports.desligado = (funcao) => { return `A função ${funcao}, foi desabilitada com sucesso no grupo!`}

exports.onOff = (pushname, funcao) => { return `${pushname} não entendi o quer que sejá feito,


nesse comando você deve usar dessa forma

${prefix}${funcao} on = para ligar
${prefix}${funcao} off = para desligar

caso tenha duvidas digite ${prefix}${funcao} --help` }

exports.nofigu = () => { return `Isso á para figurinhas, se tentar usar em fotos ou algo do tipo não funcionará.` }

exports.figurinha = () => { return `Isso é algo pra marcar em fotos, se quiser usar em videos ou gifs digite ${prefix}gif.` }

exports.semlink = () => { return `isso não é um link usavél para este comando, tente utiliza http://www.` }

exports.entendido = () => { return `Entendido! Só esperar um pouquinho, ok?` }


//menus principal
exports.menu = (pushname, time, theMsg, uzrXp, uneedxp, uzrlvl, mping, patente) => { return `
╔✪〘🇰.🇦.🇴.🇹.🇮. 🇨⚡🇧.🇴.🇹.〙✪
║ _🧏🏻-Olá -_ *"${pushname}"*!
║ _📅-Dia →_ *${time}*
║ _🔄-Suas Mensagens →_ *${theMsg}*
║ _🆙-Seu XP →_ *${uzrXp}* / *${uneedxp}*
║ _〽️-Seu Level →_ *${uzrlvl}*
║ _🐌-Minha velocidade →_ *${mping}* _segundos_
║ _🛡️-Patente →_ *${patente}*
╚══════════════════\n\n
╔══✪「 ❔ Grupos/Suporte 🤓 」
║
║ 🏆 - *1° → ${prefix}gps*
║ ᐳ _Conheça os grupos oficial do Kaotic._
║
║ 🆘 - *2° → ${prefix}Help (Mensagem)*
║ ᐳ _Informe os erros que encontrar._
║
║ 🧏🏻 - *3° → ${prefix}Menu2*
║ ᐳ _Menu Secundario._
║
║ 〽️ - *4° → ${prefix}comandos*
║ ᐳ _lista de todos os comandos._
╚═══════════════════

╔═══「 🔖 Menu📌 」
║
║ 🏖️ - *1° → ${prefix}Figurinhas*
║ ᐳ _Comandos pra criar figurinhas._
║
╚═══════════════════
`}

exports.menu2 = (pushname, time, theMsg1, uzrXp1, uneedxp1, uzrlvl1, mping1, patente) => { return `
╔✪〘🇰.🇦.🇴.🇹.🇮. 🇨⚡🇧.🇴.🇹.〙✪
║📅-Dia →_ *${time}*
╠════════❶.❷════════
║〘 INFORMAÇÕES 〙
║
╠🤖 Olá*"${pushname}"*! 
╠🤖 Level Atual →_ *${uzrlvl1}*
╠🤖 XP →_ *${uzrXp1}* / *${uneedxp1}*
╠🤖 Patente →_ *${patente}*
╠🤖 𝐒𝐓𝐀𝐓𝐔𝐒: ON
╠🤖 Minha velocidade →_ *${mping1}* _segundos_
║
╠══🐰〘 MENU 〙🐰══
`}

exports.comandos = () => { return `
╔✪〘🇰.🇦.🇴.🇹.🇮. 🇨⚡🇧.🇴.🇹.〙✪
║ Todos os comandos do Kaotic
╠════════════════════════════
║🤖 - *1° → ${prefix}menu*
║ᐳ _Menu Principal._
║
║🤖 - *2° → ${prefix}menu2*
║ᐳ _Menu Secundario._
║
║🤖 - *3° → ${prefix}welcome*
║ᐳ _Ative Boas Vindas._
║
╚═══════════════════
` }
//Sub menus
exports.stickers = () => { return `
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
║ 🔎 - *7° → ${prefix}GetSticker <Busca>*
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
║ 🖼️ - *11° → ${prefix}Ball*
║ ᐳ _8 Ball de respostas._
║
║ ✍🏻 - *12° → ${prefix}Roubar <Pack|Autor>*
║ ᐳ _Roube sticker para você!_
║
╚═══════════════════` 
}

exports.videoOuGif = (pushname) => { return `Esse comando funciona apenas se você marcar um video ou gif, ou enviar um video ou gif marcado` }
