import { Quotes } from './../quotes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quotes[]=[
    {id:1, title:"Life", quote:"Life is smooth", author:"Lorraine"},
    {id:1, title:"Life", quote:"Life is smooth", author:"Lorraine"},
    {id:1, title:"Life", quote:"Life is smooth", author:"Lorraine"},
    {id:1, title:"Life", quote:"Life is smooth", author:"Lorraine"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
