import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../shared/users.service';
import { users } from '../shared/users.model';
declare var M: any;
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [UserService]
})
export class SignInComponent implements OnInit {

  

  constructor(public userService: UserService , public router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form)
    
      this.userService.sign_in(form.value).subscribe((res) => {
        
        M.toast({ html: 'Signed in succesfully', classes: 'rounded' });
      });
    
      this.router.navigate(['employee']);
    

    }
  }

