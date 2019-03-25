import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  userImage: {};
  file: File = null;

  constructor(private user: UserService) {}

  ngOnInit() {
    this.userImage = { "background-image": "url("+this.user.image+")" };
  }

  onFileChange(event){
    this.file = event.target.files[0];
  }
}
