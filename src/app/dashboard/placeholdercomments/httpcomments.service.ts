import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Icomment } from './icomment';

@Injectable()
export class HttpcommentsService {



  constructor(private http: HttpClient){
  }


  getLogin(){
    
      const url=' https://api.github.com/users/AnveshChikkelolla';
    
      return this.http.get  (url);
   }
  getcomments(){
      const url = 'https://jsonplaceholder.typicode.com/comments/';
      return this.http.get<Icomment[]>(url);
  }
}

  


