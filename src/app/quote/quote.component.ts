import { Quotes } from './../quotes';
import { Component, OnInit } from '@angular/core';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quotes[]=[
    new Quotes(1, "Life","Life is smooth","Lorraine", new Date(2021,3,30)),
    new Quotes(1, "Life","Life is smooth","Lorraine",new Date(2021,3,30)),
    new Quotes(1, "Life","Life is smooth","Lorraine",new Date(2021,3,30)),
    new Quotes(1, "Life","Life is smooth","Lorraine",new Date(2021,3,30)),
  ]

  toggleDetails(index){
    this.quotes[index].showInfo=!this.quotes[index].showInfo;
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
