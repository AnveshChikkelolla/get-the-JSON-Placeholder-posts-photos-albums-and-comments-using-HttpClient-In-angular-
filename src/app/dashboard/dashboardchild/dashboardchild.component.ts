import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentServiceService } from '../student-service.service';
import { Istudents } from '../dashboard-component/interface1';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-dashboardchild',
  templateUrl: './dashboardchild.component.html',
  styleUrls: ['./dashboardchild.component.css'],
//  providers: [ StudentServiceService , AuthenticationService ]
})
export class DashboardchildComponent implements OnInit {
 studentId:number=9;

 constructor(private StudentService:StudentServiceService,private route: ActivatedRoute) {}
   students:Istudents[];
   ngOnInit() {
    var id=+this.route.snapshot.params['id'];
    
   this.studentId=id;
    this.students=this.StudentService.getstudents();
     console.log(this.students);
       
    }

}