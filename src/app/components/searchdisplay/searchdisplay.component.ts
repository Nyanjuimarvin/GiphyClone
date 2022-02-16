import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Gifs } from 'src/app/Classes/gifs';
import { Query } from 'src/app/Classes/query';
import { GifsearchhttpService } from 'src/app/Services/gifsearchhttp.service';
import axios from 'axios';

@Component({
  selector: 'app-searchdisplay',
  templateUrl: './searchdisplay.component.html',
  styleUrls: ['./searchdisplay.component.css']
})

export class SearchdisplayComponent implements OnInit {


  newQuery!:Query;
  gifs!:Gifs;
  searchArray:Gifs[] = [];



  searchTerm(query:any){
    this.searchArray.splice( 0, this.searchArray.length );
    this.newQuery = query;
    this.searchService.searchGifs(this.newQuery)
    this.searchArray = this.searchService.gifsAray
  }



 
  constructor(private searchService: GifsearchhttpService) {
   }

   

  ngOnInit(): void {
 
  
  }

}
