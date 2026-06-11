// Este codigo no deberia de funcionar pues asume archivos o variables o algo que no existe en esta instancia.

const jwt = require('jsonwebtoken')

const authorize = (roles) =>
    function(req, res, next) {
        const token =
        req.body.token || req.query.token || req.headers['x-access-token'];
    if (!token) { return res.status(403).send("Se necesita un token para autentificar")}
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        if (roles.length > 0){
            Users.findOne({email: decoded.email})
            .then((user) => {
                let allowed = false
                for (const r of user.roles){
                    if (roles.includes(r))
                        allowed = true
                }
                if (allowed){ return next() } else{
                    return res.status(401).send('Usuario no tiene permisos (Esto no deberia de funcionar hasta donde entiendo, pues esta estructura trabaja segun una estructura de usuarios previa con roles, la cual no existe en este entorno')
            }})
        } else{ return next()}
    } catch(err) {
        return res.status(401).send("Token invalido"); 
    }};