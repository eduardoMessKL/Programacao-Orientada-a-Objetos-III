import * as readline from "readline";
import Server from "./server/Server";
import CheckUserMiddleware from "./middlewares/CheckUserMiddleware";
import CheckPermissionMiddleware from "./middlewares/CheckPermissionMiddleware";

declare var process;
const server = new Server()

//Apenas para pegar os valores escritos no terminal.
function setPromptQuestions(){ 
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    rl.question("Digite seu email: ", email =>{
        rl.question("Digite sua senha: ", password =>{
            server.login(email, password)
            rl.close()
        })
    })

    rl.on("close", () => setPromptQuestions())
}

//Inicia a Cadeia de Responsabilidade usando a função .linkWith.
const middleware = new CheckUserMiddleware()
middleware.linkWith(new CheckPermissionMiddleware()) 

server.setMiddleware(middleware) 

setPromptQuestions()