import Database from "../server/Database";
import PermissionType from "../server/PermissionType";
import Middleware from "./Middleware";

export default class CheckPermissionMiddleware extends Middleware{
    public check(email: string, password: string) {
        const user = Database.filter(item => item.email === email) //Verificar email.

        if(user[0].permission === PermissionType.ADMIN){ //Verificar se o user tem a permissão para ADMIN ou USER.
            console.log("Seja bem vindo ADMINISTRADOR!")
        }else{
            console.log("Seja bem vindo USUARIO!")
        }

        return this.checkNext(email, password)
    }
}