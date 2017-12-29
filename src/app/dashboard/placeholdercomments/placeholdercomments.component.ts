import { Component, OnInit } from '@angular/core';
import { HttpcommentsService } from './httpcomments.service';
import { Icomment } from './icomment';
import { PaginationService } from '../pagination.service';
import { IserResponse } from '../interceptor-example/iser-response';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-placeholdercomments',
  templateUrl: './placeholdercomments.component.html',
  styleUrls: ['./placeholdercomments.component.css']
})
export class PlaceholdercommentsComponent implements OnInit {

  start : number;
  limit : number;
  commentList: Icomment[];
  pagination: any = {};
  pagedItems: any[];

  constructor(private _commentService: HttpcommentsService, private pagerService:PaginationService) {
    this.start = 0;
    this.limit = 10;
  }
  updateLimit(val){
    this.limit=val;
    this.setPage(1);
  }


ngOnInit() {
  this.display();    
 }



 display(){
  
  
  this._commentService.getLogin().subscribe(
    (data:IserResponse ) => {
      console.log("User Login: " + data.login);
      console.log("Id: " + data.id);
              this._commentService.getcomments().subscribe((res :Icomment[]) =>{
                this.commentList = res;
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





 setPage(page: number) {
  if (page < 1 || page > this.pagination.totalPages) {
      return;
  }
  this.pagination = this.pagerService.getPager(this.commentList.length, page, this.limit);
  this.pagedItems = this.commentList.slice(this.pagination.startIndex, this.pagination.endIndex + 1);
  }
}
