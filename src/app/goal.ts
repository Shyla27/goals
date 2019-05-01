export class Goal {
  static push(goal: any): any {
    throw new Error("Method not implemented.");
  }
  static splice(index: any, arg1: number): any {
    throw new Error("Method not implemented.");
  }
    public showDescription:boolean;
    constructor(public id:number, public name:string,public description:string ,public completeDate ){
        this.showDescription=false

    }
}