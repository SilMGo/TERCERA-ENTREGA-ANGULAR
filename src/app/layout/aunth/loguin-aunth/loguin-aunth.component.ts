import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-loguin-aunth',
  templateUrl: './loguin-aunth.component.html',
  styleUrl: './loguin-aunth.component.scss'
})
export class LoguinAunthComponent {
  loginForm: FormGroup;

  revealPassword = false;
  
constructor (
  private fb: FormBuilder,
  private authService : AuthService){
    this.loginForm = this.fb.group({
      email: this.fb.control('',[Validators.required,Validators.email]),
      password: this.fb.control('', [Validators.required]),
    })
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    } else {
      this.authService.login(this.loginForm.value)
    }
  }



}