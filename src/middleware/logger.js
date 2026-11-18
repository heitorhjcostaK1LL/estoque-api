const logger = function (req, res, next) {
    console.log(`Uma requisição foi feita: body: ${req.body.nome}, params: ${req.params.id}`)   
    next()
}

module.exports = logger 

//middleware que cobre o valor do produto

