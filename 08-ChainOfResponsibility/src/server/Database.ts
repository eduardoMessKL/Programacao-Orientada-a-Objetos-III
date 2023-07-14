import PermissionType from "./PermissionType"

interface DatabaseItem{
    email: string
    password: string
    permission: PermissionType
}

const Database: DatabaseItem[] = [
    //Permissão ADMIN.
    {email:"eduardo@gmail.com", 
    password: "abcd",
    permission: PermissionType.ADMIN},

    //Permissão USER.
    {email:"joaovitor@icloud.com",
    password: "1234",
    permission: PermissionType.USER},
]

//Exportar para uso.
export default Database;