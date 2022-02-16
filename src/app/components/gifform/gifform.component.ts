import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Query } from 'src/app/Classes/query';


@Component({
  selector: 'app-gifform',
  templateUrl: './gifform.component.html',
  styleUrls: ['./gifform.component.css']
})
export class GifformComponent implements OnInit {


  @Output() query = new EventEmitter<Query>();
  searchQuery = new Query("");

  queryResult() {
      this.query.emit(this.searchQuery);
     this.searchQuery = new Query("");
  }


  constructor() { }

  ngOnInit(): void {

  }

}
