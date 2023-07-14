import Database from "../server/Database";
import Middleware from "./Middleware";

export default class CheckUserMiddleware extends Middleware{
    public check(email: string, password: string) {

        //Verificar se o email corresponde ao formato padrão.
        if(email.indexOf("@") === -1){
            console.log("Formato de Email Invalido!")
            return false
        }

        //Percorrer o array filtrando cada item = a email.
        const verificarEmail = (Database.filter(item => item.email === email)) //Arrow Functions.
        if(!verificarEmail.length){ //Verificar se existe um email na DataBase com base nos itens e tamanho do array.
            console.log("Email não cadastrado!")
            return false
        }

        //Mesma verificação para senha.
        const verificarPassword = (Database.filter(item => item.password === password)) 
        if(!verificarPassword.length){ 
            console.log("Senha Incorreta!")
            return false
        }

        return this.checkNext(email, password)
    }

}