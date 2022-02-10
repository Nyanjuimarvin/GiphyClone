import { Injectable } from '@angular/core';
import { Gifs } from '../Classes/gifs';
import { environment } from 'src/environments/environment';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class GifHttpServiceService {

  gif:Gifs;
  gifArray:Gifs[]=[];
  // query:string = "doge";
  constructor() {
    this.gif = new Gifs("");
   }


   async trendingGif(){
     try{
       const response = await axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.Api_Url}&limit=60&offset=0&rating=g&lang=en`);
       const responseArray = response.data.data;
       responseArray.forEach((element:any) => {
         
         if(element.images.original.url){
         this.gifArray.push(new Gifs(element.images.original.url))
         }
       });
       
       console.log(responseArray);
       console.log(this.gifArray);

     }catch(error){
       alert("Nope,no gifs for you");
     }
   }
}
