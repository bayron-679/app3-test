const {response, request} = require('express')

const viewUsers = (req = request, res = response) => {
    res.json({'msg':'exito'})
}


const usuariosPos = (req, res = response) => {

    const{nombre, edad}=req.body

    res.status(201).json({
        msg: 'post API - usuariosPost',
        nombre,
        edad
    })
}



const actualizusuarioPut = (req, res=response)=>{
    const {id}=req.params
    res.status(201).json({
        msg:'put API - actualizusuarioPut',
        id
    })
}



const verusuariosget = (req, res=response)=>{
    const {id1}=req.params
    res.status(201).json({
        msg:'get API - verusuariosget',
        id1
    })
}



const usuariosDelete = (req, res=response)=>{
    const {id}=req.params
    res.status(410).json({
        msg:'delete API - usuariosDelete',
        id
    })
}



module.exports = {viewUsers, usuariosPos,usuariosDelete,actualizusuarioPut,verusuariosget}