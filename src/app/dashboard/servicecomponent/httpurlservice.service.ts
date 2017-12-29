import { Injectable } from '@angular/core';
//import { HttpClient } from 'selenium-webdriver/http';
import { IurlInterface } from './url-interface';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class HttpurlserviceService {
constructor(private http: HttpClient){
    }



    getLogin(){
        
          const url=' https://api.github.com/users/AnveshChikkelolla';
        
          return this.http.get  (url);
          
        
         }


    getImagesData(start, limit){
 //  const url = 'https://jsonplaceholder.typicode.com/photos/?_start='+start+'&'+'_limit='+limit;
 const url = 'https://jsonplaceholder.typicode.com/photos/';  
 return this.http.get <IurlInterface[]> (url);
}





}
