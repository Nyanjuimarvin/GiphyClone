import { Component, OnInit } from '@angular/core';
import { Gifs } from 'src/app/Classes/gifs';
import { GifHttpServiceService } from 'src/app/Services/gif-http-service.service';

@Component({
  selector: 'app-gifdisplay',
  templateUrl: './gifdisplay.component.html',
  styleUrls: ['./gifdisplay.component.css']
})
export class GifdisplayComponent implements OnInit {

  gif!: Gifs;//Gif Class
  gifDisplay:Gifs[]=[];//Gif Class Array



  constructor(private gifService: GifHttpServiceService) { }

  ngOnInit(): void {
    /*Assign the variables in this class to the variables GifHttpservice class*/
    this.gifService.trendingGif();
    this.gif = this.gifService.gif;
    this.gifDisplay = this.gifService.gifArray;
  }
}
