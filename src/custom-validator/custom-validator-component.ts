import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-custom-validator',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './custom-validator.component.html',
  styleUrls: ['./custom-validator.component.css'],
})
export class CustomValidatorComponent {
  public loginForm!: FormGroup;
  constructor(public fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: new FormControl('initialValue', [Validators.required]),
      password: new FormControl('initialPassword', [Validators.required]),
    });
  }
// validator function is woking fine
// needs to add the directive
  submitForm(){
    
    this.loginForm.controls['username'].setValue("");
    this.loginForm.controls['password'].setValue("");
  }
}
