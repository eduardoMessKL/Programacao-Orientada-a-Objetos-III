import Location from "./Location";
import Movie from "./itens/Movie";
import IItem from "./itens/interface/IItem";

export class MovieLocation extends Location{
    protected createItem() : IItem{
        return new Movie();
    }
}