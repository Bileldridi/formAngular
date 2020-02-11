import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
@Output() list: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }
  login = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    textarea: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required,
                   Validators.pattern(/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#=$%^&*])[\w!@#=$%^&*]{8,}$/)]),
  });
  hide = true;
  users = [];
  onSubmit() {
   this.users.push(this.login.value);
   this.list.emit(this.login.value);
  }

  ngOnInit() {
  }

}
