const produtoDobrado =  (req, res, next) => {
    let preco = (req.body.preco * 2)
    req.body.preco = preco
    next()
}

module.exports = produtoDobrado