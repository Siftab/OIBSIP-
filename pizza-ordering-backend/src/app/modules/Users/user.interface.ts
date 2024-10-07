
type TUser ={
    userName:string,
    userEmail:string,
    password: string,
    isEmailVerified:boolean,
    role?: 'user'|'admin'
}