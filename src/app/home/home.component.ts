import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
dataFromChild: string;
users = [];
  constructor() { }

  ngOnInit() {
  }
handleList(eventData: string) {
this.dataFromChild = eventData;
this.users.push(this.dataFromChild);
console.log(this.users);
}

}
