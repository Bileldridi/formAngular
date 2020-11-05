import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  tabUsers: any[] = [];
  
  x: number;
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.tabUsers = this.usersService.getUser();

  }
  delete(i) {
    this.tabUsers.splice(i, 1);
  }
  
}
