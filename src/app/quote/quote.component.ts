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
    new Quotes(1, "Life","Life is smooth","Lorraine"),
    new Quotes(1, "Life","Life is smooth","Lorraine"),
    new Quotes(1, "Life","Life is smooth","Lorraine"),
    new Quotes(1, "Life","Life is smooth","Lorraine"),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
