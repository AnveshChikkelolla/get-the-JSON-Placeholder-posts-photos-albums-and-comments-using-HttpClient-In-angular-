import { Component, OnInit } from '@angular/core';
import { IurlInterface } from './url-interface';
import { HttpurlserviceService } from './httpurlservice.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IserResponse } from '../interceptor-example/iser-response';
import { PaginationService } from '../pagination.service';
//import { ServicedashboardService } from '../servicedashboard.service';

@Component({
  selector: 'app-servicecomponent',
  templateUrl: './servicecomponent.component.html',
  styleUrls: ['./servicecomponent.component.css']
})
export class ServicecomponentComponent implements OnInit {
  start : number;
  limit : number;
  imageList: IurlInterface[];
  currenturl : string;
  pagination: any = {};
  pagedItems: any[];


  constructor(private _imageService:HttpurlserviceService,private pagerService: PaginationService) {
    this.start = 0;
    this.limit = 10;
    
  }
  updateLimit(val){
    //this.start=0;
    this.limit=val;
    this.setPage(1);
    //this.display();
  }
  currentImage(currenturl){
    this.currenturl=currenturl;
  }
  
  display(){
    
    
    this._imageService.getLogin().subscribe(
      (data:IserResponse ) => {
        console.log("User Login: " + data.login);
        console.log("Id: " + data.id);
                this._imageService.getImagesData(this.start, this.limit).subscribe((res :IurlInterface[]) =>{
                 this.imageList = res;
                 console.log(this.imageList.length);
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
   // this.setPage(1);
 }


 setPage(page: number) {
  if (page < 1 || page > this.pagination.totalPages) {
      return;
  }
  this.currenturl='';
  this.pagination = this.pagerService.getPager(this.imageList.length, page, this.limit);
  this.pagedItems = this.imageList.slice(this.pagination.startIndex, this.pagination.endIndex + 1);
  }




}
