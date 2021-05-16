export class Quotes {
  showInfo:boolean;
 constructor( public id:number, public title: string, public quote: string, public author: string, public datePosted:Date, public upvotes:number, public downvotes:number){
   this.showInfo=false;
 }
}
