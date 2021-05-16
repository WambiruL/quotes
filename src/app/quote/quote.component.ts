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
  constructor() { }

  ngOnInit(): void {
  }

}
