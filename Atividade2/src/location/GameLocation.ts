import Location from "./Location";
import Game from "./itens/Game";
import IItem from "./itens/interface/IItem";

export class GameLocation extends Location{
    protected createItem() : IItem{
        return new Game();
    }
}