export default class Token{
    private _token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImVudmlhbmRvIHBhZ2FtZW50b3MifQ.cXGyY0vyfbGgTAU_I07BeGruiYUBws8PNqrEVi5Qsas";
    
    public get token() {
        return this._token;
    }
    public set token(value) {
        this._token = value;
    }
}