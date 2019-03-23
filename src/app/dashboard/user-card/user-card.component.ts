import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  image;

  constructor(private user: UserService) {}

  ngOnInit() {
    this.image = { "background-image": "url("+this.user.image+")" };
  }
}
