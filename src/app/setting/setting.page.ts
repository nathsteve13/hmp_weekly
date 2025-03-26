import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
  standalone: false
})
export class SettingPage implements OnInit {
  imageUrl="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
  password = '';
  hasMinLength = false;
  hasNumber = false;
  hasSpecialChar = false;

  constructor() {}

  ngOnInit() {}

  updateImageUrl(event: any) {
    this.imageUrl = event.target.value;
  }

  checkPassword() {
    this.hasMinLength = this.password.length > 6;
    this.hasNumber = /\d/.test(this.password);
    this.hasSpecialChar = /[!@#$%^&*()]/.test(this.password);
  }

}
