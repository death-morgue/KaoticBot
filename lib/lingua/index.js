function meuIdioma(){

    try{
        return exports.pt = require('./pt')
    }catch(erro){
        console.log(`A pasta "config/lingua" não possui arquivos nescessáriosou eles estão corrompidos!\nReinstale ou baixe os arquivos em falta!\n\n${error}`)
        return process.exit(1);
    }
}

function meuMenu(){

    try{
        return exports.pt = require('./menu')
    }catch(erro){
        console.log(`A pasta "config/lingua" não possui arquivos nescessáriosou eles estão corrompidos!\nReinstale ou baixe os arquivos em falta!\n\n${error}`)
        return process.exit(1);
    }
}

module.exports = { meuIdioma, meuMenu };
