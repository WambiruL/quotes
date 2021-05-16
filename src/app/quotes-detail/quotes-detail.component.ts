import { Quotes } from './../quotes';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})
export class QuotesDetailComponent implements OnInit {

  @Input() quotes:Quotes |any;
  @Output() notWanted= new EventEmitter<boolean>();
  quoteDelete(remove:boolean){
    this.notWanted.emit(remove)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
