export default function handler(req, res){
    const cod = req.query.codiogo
    res.status(200).json({
        id: cod,
        nome: `Maria ${cod}`,
        idade: 33
    })
}