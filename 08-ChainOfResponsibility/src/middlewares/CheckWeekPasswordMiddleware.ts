import Middleware from "./Middleware";

export default class CheckWeekPasswordMiddleware extends Middleware{

    public check(email: string, password: string) {
        if(password.length < 6){
            console.log("Senha FRACA!")
            return false;
        }
        console.log("Senha SEGURA")
        return this.checkNext(email, password)
    }

}