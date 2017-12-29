import { Component, OnInit } from '@angular/core';
import { GithubIntercepterService } from './github-intercepter.service';
import { Iuser } from '../jsonplaceholder-users/iuser';
import { HttpErrorResponse } from '@angular/common/http';
import { Ipost } from './ipost';
import { IserResponse } from './iser-response';

@Component({
  selector: 'app-interceptor-example',
  templateUrl: './interceptor-example.component.html',
  styleUrls: ['./interceptor-example.component.css']
})
export class InterceptorExampleComponent implements OnInit {

  userId : number=11;
  title:String="title";
  body:string="body";
  show:boolean=true;
  postdata:Ipost[];

  constructor(private _imageService:GithubIntercepterService) {
    
    
  }
  
  
  display(){
   
      this._imageService.getLogin().subscribe(
        (data:IserResponse ) => {
         console.log("User Login: " + data.login);
          console.log("Id: " + data.id);
     
       this._imageService.add(this.userId,this.title,this.body).subscribe((res :Ipost[]) =>{
          this.postdata = res;
          console.log(res);
          this.show=false;
                });
       err => {
         console.log("Error occured ")
       }
    
      
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      });
 }
  
  ngOnInit() {
    //this.display();    
 }

}