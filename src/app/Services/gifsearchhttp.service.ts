import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Gifs } from '../Classes/gifs';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class GifsearchhttpService {

    gif!:Gifs
    gifsAray:Gifs[]=[];

 

  constructor() {
    this.gif = new Gifs("");
  }

  async searchGifs(Query:any) {

    try {
      const searchResponse = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${environment.Api_Url}&q=${Query.userQuery}&limit=50&offset=0&rating=g&lang=en`)
      const searchResponseArray = searchResponse.data.data;
      searchResponseArray.forEach((element: any) => {
        this.gifsAray.push(new Gifs(element.images.original.url))
      });
    } catch (error) {
      alert("Nope..Nobody Here but us chickens")
    }
  }


 
}
