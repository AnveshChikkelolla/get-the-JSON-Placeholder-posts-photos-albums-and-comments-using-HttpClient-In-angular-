import { Injectable } from '@angular/core';
import { Iuser } from './iuser';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class HttpJsonUserService {

  constructor(private http: HttpClient){
  }

 getLogin(){

  const url=' https://api.github.com/users/AnveshChikkelolla';

  return this.http.get  (url);
  

 }

  getUsersData(start, limit){
 const url = 'https://jsonplaceholder.typicode.com/users/';
 //const url=' https://api.github.com/users/AnveshChikkelolla';

 return this.http.get  (url);
}

}
