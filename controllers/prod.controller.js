const {response, request} = require('express')

const viewUsers = (req = request, res = response) => {
    res.json({'msg':'exito'})
}

const crearproductoPos = (req, res = response) => {

    const{nombre, cantidad}=req.body

    res.status(201).json({
        msg: 'post API - crearproductoPost',
        nombre,
        cantidad
    })
}

const actualizproductoPut = (req, res=response)=>{
    const {id}=req.params
    res.status(201).json({
        msg:'put API - actualizproductoPut',
        id
    })
}

const verproductoactuget = (req, res=response)=>{
    const {id1}=req.params
    res.status(201).json({
        msg:'get API - verproductoactuget',
        id1
    })
}

const productoDelete = (req, res=response)=>{
    const {id}=req.params
    res.status(410).json({
        msg:'delete API - productoDelete',
        id
    })
}
const creardescripcionproductoPos = (req, res = response) => {

    const{descripcion}=req.body

    res.status(201).json({
        msg: 'post API - creardescripcionproductoPos',
        descripcion
    })
}



const actuaalizdescripcionPut = (req, res=response)=>{
    const {descripcion}=req.params
    res.status(201).json({
        msg:'put API - actuaalizdescripcionPut',
        descripcion
    })
}

const vercantidadget = (req, res=response)=>{
    const {id2}=req.params
    res.status(201).json({
        msg:'get API - vercantidadget',
        id2
    })
}

const creardatloginPost = (req, res = response) => {

    const{usuario, contraseña}=req.body

    res.status(201).json({
        msg: 'post API - creardatloginPost',
        usuario,
        contraseña
    })
}

const usuarios_tablaPos = (req, res = response) => {

    const{nombre}=req.body

    res.status(201).json({
        msg: 'post API - usuarios_tablaPos',
        nombre
    })
}

const tablaPatch = (req, res=response)=>{
    const {tabla}=req.params
    res.status(201).json({
        msg:'patch API - tablaPatch',
        tabla
    })
}

const ustabla = (req, res=response)=>{
    const {tabla}=req.params
    res.status(410).json({
        msg:'delete API - ustabla',
        tabla
    })
}


module.exports = {viewUsers, crearproductoPos, actualizproductoPut, verproductoactuget, productoDelete, creardescripcionproductoPos, 
    actuaalizdescripcionPut, vercantidadget, creardatloginPost, usuarios_tablaPos, tablaPatch, ustabla}