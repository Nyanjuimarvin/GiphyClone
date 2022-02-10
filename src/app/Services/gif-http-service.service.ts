import { Injectable } from '@angular/core';
import { Gifs } from '../Classes/gifs';
import { environment } from 'src/environments/environment';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class GifHttpServiceService {

  gif:Gifs;//Service Gif Class
  gifArray:Gifs[]=[];//Array to Push Gif Urls
  // query:string = "doge";
  constructor() {
    this.gif = new Gifs("");
   }


   async trendingGif(){
     try{
       const response = await axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.Api_Url}&limit=60&offset=0&rating=g&lang=en`);
       const responseArray = response.data.data;//Save the response Array to a variable

       /*Loop through each object in the array and get the gif Urls */
       responseArray.forEach((element:any) => {

         if(element.images.original.url){//Handles cases where images are not found
         this.gifArray.push(new Gifs(element.images.original.url))//Push the gif Urls to the GifArray
         }
       });
       
       console.log(responseArray);
       console.log(this.gifArray);

     }catch(error){
       alert("Nope,no gifs for you");//If no response,alert this
     }
   }
}
