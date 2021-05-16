import { Quotes } from './../quotes';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {

  newQuote= new Quotes(0,"","","","",new Date(),0,0);
  @Output() add= new EventEmitter<Quotes>()

  addQuote(){
    this.add.emit(this.newQuote);
    this.newQuote=new Quotes(0,"","","","",new Date(),0,0);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
