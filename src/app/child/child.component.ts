import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
 // count: number = 0;
   title:string="child app";
public   "showelement"=true ;
@Input()
count: number = 0;
@Output()
change: EventEmitter<number> = new EventEmitter<number>();

increment() {
  this.count++;
  this.change.emit(this.count);
}

decrement() {
  this.count--;
  this.change.emit(this.count);
}

  constructor() { }

  ngOnInit() {
  }

}
