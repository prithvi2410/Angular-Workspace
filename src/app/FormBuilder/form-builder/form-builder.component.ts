import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css'],
})
export class FormBuilderComponent implements OnInit {
  RegistrationForm = this.Fb.group({
    Name: ['', [Validators.required, Validators.minLength(5),Validators.pattern('[A-Za-z]*')/*,this.validateUserName*/]],
    Email: ['', [Validators.required, Validators.minLength(10),Validators.email]],
    Password: ['', [Validators.required, Validators.minLength(8),Validators.pattern(new RegExp(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/))]],
    Department: ['', [Validators.required]],
    PhoneNumber: ['', [Validators.required, Validators.minLength(10)]],
    DateOfBirth: ['', [Validators.required]],
    isChecked: ['', [Validators.required]]
  });

  get Name() {
    return this.RegistrationForm.get('Name');
  }
  get Email() {
    return this.RegistrationForm.get('Email');
  }
  get Password() {
    return this.RegistrationForm.get('Password');
  }
  get Department() {
    return this.RegistrationForm.get('Department');
  }
  get PhoneNumber() {
    return this.RegistrationForm.get('PhoneNumber');
  }
  get DateOfBirth() {
    return this.RegistrationForm.get('DateOfBirth');
  }
  get IsChecked() {
    return this.RegistrationForm.get('IsChecked');
  }

  constructor(private Fb: FormBuilder) {}

  ngOnInit(): void {}

  //validation

  validateUserName(control: AbstractControl) : { key: string; message: any } | null 
  {
    console.log("custom validation " + control.value);
    const _userName = control.value;
    const _regPattern = /[A-z]/g;
    if (_userName.match(_regPattern)) 
    {
      console.log('passed')
      return null;
    }
      
    else
    {console.log('falied')
      return {
        key: 'userNameNotValid',
        message: 'username cannot contain symbols or numbers',
      };}
  }
  onSubmit(){

  }
}
