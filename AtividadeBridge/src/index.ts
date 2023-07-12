import IConsole from "./consoles/IConsole";
import Play from "./plays/Play";
import XBox from "./consoles/XBox"
import PlayStation from "./consoles/PlayStation"
import AdvancedPlay from "./plays/AdvancedPlay";

function startGame(consoleType: IConsole){
    console.log("Aguarde......")
    const play = new Play(consoleType)
    play.playing();
    play.result();
}

function ultraHardMode(consoleType: IConsole){
    console.log("Aguarde......")
    const play1 = new AdvancedPlay(consoleType)
    play1.playing();
    play1.challenge();
    play1.result();
}
console.log("----------------------------------")
startGame(new XBox());
console.log("")
startGame(new PlayStation())
console.log("----------------------------------")
ultraHardMode(new XBox())
console.log("")
startGame(new PlayStation())