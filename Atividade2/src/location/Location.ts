import IItem from "./itens/interface/IItem"

export default abstract class Location{
    startItem(): void{
        const itens = this.createItem() 
        itens.start()
    }
    protected abstract createItem(): IItem
}