import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Gifs } from '../Classes/gifs';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class GifsearchhttpService {

  gif!:Gifs;
  searchArray:Gifs[] = [];

  constructor() { 
    this.gif = new Gifs("");
  }

  async searchGifs(userQuery:string){

    try{
      const searchResponse = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${environment.Api_Url}&q=${userQuery}&limit=40&offset=0&rating=g&lang=en`)
    }catch(error){

    }
  }
}
