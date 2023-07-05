import IBuilder from "../builder/IBuilder";
import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauce";

export default class Director{
    constructor (private builder : IBuilder){}

        constructHotDog(){
            this.builder.setSanduicheType(SanduicheType.HOTDOG)
            this.builder.setBread(Bread.PAODECACHORROQUENTE)
            this.builder.setSalad(Salad.ALFACE)
            this.builder.setProtein(Protein.VINA)
            this.builder.addSauces(new Sauce("Maionese"))
            this.builder.addSauces(new Sauce("Barbecue"))
            this.builder.addSauces(new Sauce("Mostarda"))
        }

        constructXSalada(){
            this.builder.setSanduicheType(SanduicheType.MISTOQUENTE)
            this.builder.setBread(Bread.FATIADO)
            this.builder.setSalad(Salad.TOMATE)
            this.builder.setProtein(Protein.PORCO)
            this.builder.addSauces(new Sauce("Maionese"))
        }

}