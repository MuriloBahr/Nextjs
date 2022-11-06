export default function handler(req, res){
    if(req.method === 'GET'){
        handlerGet(req, res)
    }else{
        req.status(405).send()
    }
}

function handlerGet(req, res){
    res.status(200).json({
        id: 3,
        nome: 'Maria',
        idade: 33,
        params: JSON.stringify(req.query)
    })
}