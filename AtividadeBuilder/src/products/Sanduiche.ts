import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauce";

export default class Sanduiche{
    private _sanduicheType : SanduicheType
    private _bread : Bread
    private _salad : Salad
    private _protein : Protein
    private _sauce : Sauce[] = []

/**
* Getter SanduicheType
* @return {SanduicheType}
*/
public get SanduicheType(): SanduicheType {
    return this._sanduicheType;
    }
    
    /**
    * Getter bread
    * @return {Bread}
    */
    public get bread(): Bread {
    return this._bread;
    }
    
    /**
    * Getter protein
    * @return {Protein}
    */
    public get protein(): Protein {
    return this._protein;
    }
    
    /**
    * Getter salad
    * @return {string}
    */
    public get salad(): string {
    return this._salad;
    }
    
    /**
    * Getter sauce
    * @return {Sauce[] }
    */
    public get sauce(): Sauce[] {
    return this._sauce;
    }
    
    /**
    * Setter SanduicheType
    * @param {SanduicheType} value
    */
    public set SanduicheType(value: SanduicheType) {
    this._sanduicheType = value;
    }
    
    /**
    * Setter bread
    * @param {Bread} value
    */
    public set bread(value: Bread) {
    this._bread = value;
    }
    
    /**
    * Setter protein
    * @param {Protein} value
    */
    public set protein(value: Protein) {
    this._protein = value;
    }
    
    /**
    * Setter salad
    * @param {Salad} value
    */
    public set salad(value: Salad) {
    this._salad = value;
    }
    
    /**
    * Setter sauce
    * @param {Sauce[] } value
    */
    public set sauce(value: Sauce[] ) {
    this._sauce = value;
    }
    
    public addSauce(sauce: Sauce){
    this._sauce.push(sauce);
    }
}