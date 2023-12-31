import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm : NgForm;
  defaultQuestion : String  = 'pet';
  answer : String;
  genders = ['male', 'female'];
  submitted = false;
  user = {
    username :'',
    email: '',
    secret: '',
    answer: '',
    gender:''
  }
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username : suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer:"",
    //   gender:"male",
    // });
    this.signupForm.form.patchValue({
      userData :{
        username: suggestedName,
      },
      secret : 'pet',
      gender: 'male',
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);

  // }

  onSubmit() {
    //console.log(this.signupForm);
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secret = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
  }
}
