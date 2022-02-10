import { Injectable } from '@angular/core';
import { Gifs } from '../Classes/gifs';
import { environment } from 'src/environments/environment';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ViewmorehttpService {

  gif!:Gifs;
  moreGifs:Gifs[] = [];

  constructor() {
    this.gif = new Gifs("");
   }

   async getMoreGifs(){
     
   }
}
