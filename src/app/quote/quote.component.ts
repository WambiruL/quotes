import { Quotes } from './../quotes';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quotes[]=[
    new Quotes(1, "Lorraine","Contemporary Life","You can doubt one plus one, but you cannot doubt 2 because it is the answer","Major 1", new Date(2021,5,16), 0, 0),
    new Quotes(1, "Lorraine","Spirituality","God is your greatest leverage","Elvin Vanuel", new Date(2021,5,16), 0, 0),
    new Quotes(1, "Lorraine","Music","Music gives a soul to the universe, wings to the mind, flight to the imagination, and life to everything.","Plato", new Date(2021,5,16), 0, 0),
    new Quotes(1, "Lorraine","Food","If you are afraid of butter, use cream","Julia Child", new Date(2021,5,16), 0, 0),
    new Quotes(1, "Lorraine","Fashion","Fashion is the armor to survive the reality of everyday life.","Bill Cunningham", new Date(2021,5,16), 0, 0),
    new Quotes(1, "Lorraine","Technology","It has become appallingly obvious that our technology has exceeded our humanity.","Albert Einstein", new Date(2021,5,16), 0, 0),

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
      let toDelete=confirm(`Are you sure you want to delete quote?`)

      if(toDelete){
        this.quotes.splice(index, 1)
      }
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
