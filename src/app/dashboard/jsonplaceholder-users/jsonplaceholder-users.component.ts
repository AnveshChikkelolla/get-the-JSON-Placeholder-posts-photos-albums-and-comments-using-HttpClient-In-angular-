import { Component, OnInit } from '@angular/core';
import { Iuser } from './iuser';
import { HttpJsonUserService } from './http-json-user.service';
import { GithubIntercepterService } from '../interceptor-example/github-intercepter.service';
import { IserResponse } from '../interceptor-example/iser-response';
import { HttpErrorResponse } from '@angular/common/http';
import { PaginationService } from '../pagination.service';

@Component({
  selector: 'app-jsonplaceholder-users',
  templateUrl: './jsonplaceholder-users.component.html',
  styleUrls: ['./jsonplaceholder-users.component.css']
})
export class JsonplaceholderUsersComponent implements OnInit {
  start : number;
  limit : number;
  UserList: Iuser[];
  //currenturl : string;
  pagination: any = {};
  pagedItems: any[];
  showEndPage:boolean=false;

  constructor(private _UserService:HttpJsonUserService,private pagerService: PaginationService) {
    this.start = 0;
    this.limit = 5;
    
  }
  updateLimit(val){
    //this.start=0;
     this.limit=val;
     console.log("update limit "+val);
     this.setPage(1);
   // this.display();
  }
  
  display(){
    
    
    this._UserService.getLogin().subscribe(
      (data:IserResponse ) => {
        console.log("User Login: " + data.login);
        console.log("Id: " + data.id);
           this._UserService.getUsersData(this.start, this.limit).subscribe((res :Iuser[]) =>{
           this.UserList = res;
           console.log(res);

           this.UserList = res;
           console.log(this.UserList.length);
          this.setPage(1);

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
    this.display();    
 }

 setPage(page: number) {
   console.log("pagenumber",page);
  if (page < 1 || page > this.pagination.totalPages) {
    
      return;
  }
//  this.currenturl='';
  this.pagination = this.pagerService.getPager(this.UserList.length, page, this.limit);
 console.log(this.pagination);
  this.pagedItems = this.UserList.slice(this.pagination.startIndex, this.pagination.endIndex + 1);
  console.log(this.pagedItems);
}


}

