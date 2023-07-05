import SanduicheBuilder from "./builder/SanduicheBuilder";
import SanduicheType from "./components/SanduicheType";
import Director from "./directors/Director";
import Sanduiche from "./products/Sanduiche";

const builder : SanduicheBuilder = new SanduicheBuilder()
const director : Director = new Director(builder)

director.constructHotDog()
const hotdog : Sanduiche = builder.getSanduiche()
imprimirDetalhes(hotdog)

director.constructXSalada()
const Xsalada : Sanduiche = builder.getSanduiche()
imprimirDetalhes(Xsalada)

function imprimirDetalhes(sanduiche : Sanduiche){
    console.log("-------------------------------------")
    console.log("Saduiche: " + sanduiche.SanduicheType)
    console.log("Proteina: " + sanduiche.protein)
    console.log("Pão: " + sanduiche.bread)
    console.log("Salada: " + sanduiche.salad)
    
    for(let sauce of sanduiche.sauce){
        console.log("Molho: " + sauce.type)
    }

    console.log("-------------------------------------")
}