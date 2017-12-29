 import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template:`<router-outlet>loading Welcome</router-outlet>`,
  styleUrls: ['./app.component.css']
//  directives: [Childomponent]
})
export class AppComponent {
  title = 'app';
  value:number=20;
  myCount: number = 10;
 // myCount: number = 10;
  countChange(event) {
    this.myCount = event;
  }
  percentage(event) {
    alert(" At parent   percentage is "+ event+"%");
  }

 /*
 onNotify(message:string):void {
  alert(message);
} */
}
