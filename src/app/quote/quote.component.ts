import { Quotes } from './../quotes';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quotes[]=[
    new Quotes(1, "Life","Life is smooth","Lorraine", new Date(2021,3,30), 0, 0),
    new Quotes(1, "Life","Life is smooth","Lorraine",new Date(2021,3,30),0,0),
    new Quotes(1, "Life","Life is smooth","Lorraine",new Date(2021,3,30),0,0),
    new Quotes(1, "Life","Life is smooth","Lorraine",new Date(2021,3,30),0,0),
  ]

  get quote(){
    return this.quotes.sort((a,b)=>{
      return <any> new Date(b.datePosted)-<any> new Date(a.datePosted);
    })
  }
  toggleDetails(index){
    this.quotes[index].showInfo=!this.quotes[index].showInfo;
  }

addNewQuote(quote){
    let quoteLength=this.quotes.length;
    quote.id=quoteLength+1;
    quote.datePosted=new Date(quote.datePosted)
    this.quotes.push(quote)
  }
  deleteQuote(notWanted, index){
    if(notWanted){
      let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].title}?`)

      if(toDelete){
        this.quotes.splice(index, 1)
      }
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
