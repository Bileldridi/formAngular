import { Component, OnInit, Input} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {
  @Input() users = [];
  hide = true;
  x: number;
  constructor() { }

  ngOnInit() {
  }
  /*delete(i) {
    this.users.splice(i, 1);
  }
  store(i) {
    console.log(this.users[i].email);
    this.loginEdit.controls['emailEdit'].setValue(this.users[i].email);
    this.loginEdit.controls['passwordEdit'].setValue(this.users[i].password);
    this.loginEdit.controls['textareaEdit'].setValue(this.users[i].textarea);
    this.x = i;
  }
  edit() {
    console.log(this.loginEdit.value.emailEdit);

    const obj = {
      email: this.loginEdit.value.emailEdit,
      password: this.loginEdit.value.passwordEdit,
      textarea: this.loginEdit.value.textareaEdit
    };
    this.users[this.x] = obj;*/

}
