import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ManiDataService {
  constructor(private http:HttpClient) { }
  searchByText(data:string){ // Return search by text 
    let unTransformedData=this.http.get('https://www.omdbapi.com/?s='+data+'&apikey=b01dfa6f');
    return unTransformedData;
    // let TransformedData=this.setMoviesForClient(unTransformedData)
    // return TransformedData;
  }

  setMoviesForClient(serverData:any) {
    let transformedMovieList: any[]= [];
    if(serverData.Response=='True'){
    let movieList = serverData.Search;
    movieList.forEach((movie:any) => {
      let transformedMovie = {
        title: movie.Title,
        poster: movie.Poster,
        imdbId: movie.imdbID
      }
      transformedMovieList.push(transformedMovie);
    });
    }
    
    let transformedObject = {
      results: transformedMovieList,
      response: serverData.Response,
      totalResults: serverData.totalResults
    }
    return transformedObject;
  }

  searchByIndex(data:string){ // return search by index
    let unTransformedData=this.http.get('https://www.omdbapi.com/?i='+data+'&apikey=b01dfa6f');
    return unTransformedData;
  }
  setMovieDetailForClient(serverData:any){
    let transformedMovie={
      title: serverData.Title,
      poster: serverData.Poster,
      imdbId: serverData.imdbID,
      imdbRating: serverData.imdbRating,
      genre: serverData.Genre,
      plot: serverData.Plot
    }
    return transformedMovie;
  }
  transformArray(array:any){
    var newArray= [];
    for(let i=0;i<array.length;i++){
      if(array[i] instanceof Array){
        newArray.push(this.transformArray(array[i]));
      }
      else if(array[i].constructor === Object){
        newArray.push(this.transformObject(array[i]));
      }    
    }
    console.log(newArray)
    return array;
  }
  transformObject(obj:any){
    let newObj:any ={};
    for(let originalKey in obj){
      if(obj.hasOwnProperty(originalKey)){
        let newKey = (originalKey.charAt(0).toLowerCase() + originalKey.slice(1) || originalKey).toString();
        let val = obj[originalKey];
        if(val!=null){
          if(val instanceof Array) val=this.transformArray(val)
          else if(val.constructor === Object) val=this.transformObject(val)
        }
        newObj[newKey]=val;

      }
    }
   
    return obj;

  }
}
