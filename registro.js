const fs = require('fs-extra')

const vip = (userId, name, idade, _dir) => {
    const obj = {
        id: userId,
        name: name,
        idade: idade
    }
    _dir.push(obj)
    fs.writeFileSync('./vip.json', JSON.stringify(_dir))
}
const reg = (userId, name, idade, _dir) => {
    const obj = {
        id: userId,
        nam: name,
        idade: idade
    }
    _dir.push(obj)
    fs.writeFileSync('./registros.json', JSON.stringify(_dir))
}

const grupoVip = (groupId, name, _dir) => {
    const obj = {
        id: groupId,
        name: name
    }
    _dir.push(obj)
    fs.writeFileSync('./gruposVip.json', JSON.stringify(_dir))
}

const eReg = (userId, _dir) => {

        let found = false
        Object.keys(_dir).forEach((i) => {
            if (_dir[i].id === userId) {
                found = true
            }
        })
        return found
    
}

module.exports = {
    eReg,
    grupoVip,
    reg,
    vip
}