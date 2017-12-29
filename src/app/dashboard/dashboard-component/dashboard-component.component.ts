import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FilterByNamePipe } from '../filter-by-name.pipe';
import { Istudents } from './interface1';
import { StudentServiceService } from '../student-service.service';
import { AuthenticationService } from '../authentication.service';
//import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css'],
 // pipes: [  FilterByNamePipe ]
 //providers:[StudentServiceService,AuthenticationService]
})
export class DashboardComponentComponent implements OnInit {
    term:string="";
   //nothingmathces:boolean=true;
   percentageValue:string;
  // v:number=200;
  @Output()
  change: EventEmitter<string> = new EventEmitter<string>();
  
  percentage(value:string):any{
   this.percentageValue=value;
  alert(this.percentageValue);
   //this.change.emit(this.percentageValue);
}  
  
   addcolor(value1:Number){
    var showclass=(value1>75)?true:false;
                
      
      if(showclass){
      return 'btn btn-success btn-lg';
      
      }
     return 'btn btn-primary btn-lg';
         

 //return class;
 };
  

  /*getstudents():Istudents[]{
  return  [ 
   {  
     "id": 1,
      "name" : "anvesh", 
      "branch" : "CSE",
      "percentage":74 
    }, 
   { 
    "id":2,
      "name" : "saikumar",
      "branch" : "IT",
      "percentage":80
        }, 
    { 
      "id":3,
      "name" : "venkatesh", 
      "branch" : "CSE",
      "percentage":80

  
    }, 
    { 
      "id":4,
      "name" : "vinay", 
      "branch" : "CSE",
      "percentage":85
    }, 
    { 
      "id":5,
      "name" : "ashish", 
      "branch" : "CSE",
      "percentage":73
    }, 
    { 
      "id":6,
      "name": "sravan", 
      "branch" : "CSE",
      "percentage":74
    },
    { 
      "id":7,
      "name" : "akhil", 
      "branch" : "CSE",
      "percentage":81
    }, 
    { 
      "id": 8,
      "name" : "nihal", 
      "branch" : "CSE",
      "percentage":71
    },
     
    { 
      "id": 9,
      "name" : "soujanya", 
      "branch" : "CSE",
      "percentage":72
    },
     
    { 
      "id":10,
      "name" : "sandeep", 
      "branch" : "CSE",
      "percentage":83
    },
    { 
      "id":11,
      "name" : "chaithanya", 
      "branch" : "CSE" ,
      "percentage":74
    }, 
    { 
      "id":12,
      "name" : "ganesh", 
      "branch" : "CSE",
      "percentage":73
    },
     
    { 
      "id":13,
      "name" : "likhitha", 
      "branch" : "CSE",
      "percentage":69
    },
         
    { 
      "id":14,
      "name" : "anurag", 
      "branch" : "CSE" ,
      "percentage":80
    } 
  ] 



    }
    */

    students:Istudents[];
    constructor(public StudentService :StudentServiceService) {}
    ngOnInit() {
    this.students=this.StudentService.getstudents();
     console.log(this.students);
       
    }

 
}
