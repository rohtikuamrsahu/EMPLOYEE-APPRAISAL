import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import { UserService } from '../shared/users.service';
declare var M: any;
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [UserService]
})
export class SignUpComponent implements OnInit {

  constructor(public userService: UserService) { }


  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form)
    if (form.value._id == "") {
      this.userService.sign_up(form.value).subscribe((res) => {
        
        M.toast({ html: 'Signed in succesfully', classes: 'rounded' });
      });
    }
    

    }
  }

