export class Character {
  constructor(
    public id:number,
    public name: string,
    public image:string,
    public species:string,
    public status:string,
    public type:string,
    public gender:string,
    public origin:Array<any>,
    public location:Array<any>,
    public episode:Array<any>,
){}

}
