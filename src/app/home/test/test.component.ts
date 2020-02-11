import { Component, OnInit,  } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  heroes = [];
  input1: string;
  color = 'green';
  input2: string;
  addClicked = false;
  constructor() {}
  ngOnInit() {
  }
  addHero() {
    if (this.input1 || this.input2) {
      this.addClicked = true;
      this.heroes.push(this.input1);
      this.heroes.push(this.input2);
    }
  }
  delete(i) {
    this.heroes.splice(i, 1);
  }
  getStyle() {
    if (this.addClicked) {
    return {'border-color': 'green' };
    } else {
      return {'border-color': '' };
    }
  }
  reset() {
  this.addClicked = false;
  this.input1 = '';
  this.input2 = '';
  }
  clear() {
    this.heroes = [];
  }
}

