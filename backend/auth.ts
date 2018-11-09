import {Request, Response} from 'express'
import { User, Users } from './users';

import * as jwt from 'jsonwebtoken'
import { apiConfig } from './api-config';

export const  handleAuthentication = (req: Request, resp: Response) => {
    const user: User = req.body
    if(isvalid(user)){
        const dbUser = Users[user.email]
        const token = jwt.sign({sub: dbUser.email, iss: 'meat-api'}, apiConfig.secrect)
        resp.json({name: dbUser.name, email: dbUser.email, accessToken: token})

    }else{
        resp.status(403).json({message: 'Dados inválidos'})
    }


}

function isvalid(user: User): boolean {
    if(!user){
        return false
    }
    const dbUser = Users[user.email]
    return dbUser !== undefined && dbUser.matches(user)
    

}