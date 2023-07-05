import Bread from "../components/Bread";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauce";
import Sanduiche from "../products/Sanduiche";
import Protein from "../components/Protein";
import Salad from "../components/Salad";

import IBuilder from "./IBuilder";

export default class SanduicheBuilder implements IBuilder{
    private _sanduiche = new Sanduiche()

    reset(): void {
        this._sanduiche = new Sanduiche
    }

    getSanduiche(): Sanduiche {
        const result : Sanduiche = this._sanduiche
        this.reset()
        return result
    }

    setSanduicheType(value : SanduicheType) {
        this._sanduiche.SanduicheType = value;
    }

    setBread(bread : Bread) {
        this._sanduiche.bread = bread
    }

    setProtein(protein : Protein) {
        this._sanduiche.protein = protein
    }

    setSalad(salad : Salad){
        this._sanduiche.salad = salad
    }

    addSauces(sauce : Sauce ){
        this._sanduiche.addSauce(sauce)
    }
}