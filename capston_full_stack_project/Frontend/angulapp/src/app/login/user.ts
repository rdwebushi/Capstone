export class User {
  constructor(
    public _id:string,
    public name:string,
    public email:string,
    public password:string,
    public mobile_no:number,
    public address:string,
    public user_type:string
  ){}
}
