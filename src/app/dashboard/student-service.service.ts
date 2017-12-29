import { Injectable } from '@angular/core';
import { Istudents } from './dashboard-component/interface1';

@Injectable()
export class StudentServiceService {

  constructor() { }






getstudents():Istudents[]{
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








}
