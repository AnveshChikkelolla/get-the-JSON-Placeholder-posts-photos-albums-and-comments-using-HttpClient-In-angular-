import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ipost } from './ipost';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GithubIntercepterService {
  constructor(private http: HttpClient){
  }
getLogin(){
 //const url = 'https://jsonplaceholder.typicode.com/users/?_start='+start+'&'+'_limit='+limit;
 const url=' https://api.github.com/users/AnveshChikkelolla';

 return this.http.get  (url);
}
add(userId,title,body){
  return   this.http.post('http://jsonplaceholder.typicode.com/posts', {
    title: title,
    body: body,
    userId: userId
  })
}
}