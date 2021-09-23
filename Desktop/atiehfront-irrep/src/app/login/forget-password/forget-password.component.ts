import { Component, OnInit, OnDestroy } from '@angular/core';
import {
   FormGroup,
   AbstractControl,
   FormBuilder,
   Validators
} from '@angular/forms';
// import { TranslateService } from '@ngx-translate/core';
// import { UsersService } from 'services/api-services/users/users.service';
// import { ToastrService } from 'ngx-toastr';
// import { untilComponentDestroyed } from '@w11k/ngx-componentdestroyed';
// import { minlengthOrEmpty } from 'services/validators/nullable.validator';
// import { passwordsMatchValidator } from 'services/validators/password-confirm.validator';
import { Router } from '@angular/router';
// import { ConfigsService } from 'services/api-services/configs/configs.service';

@Component({
   selector: 'app-forget-password',
   templateUrl: './forget-password.component.html',
   styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit, OnDestroy {
   handleError = {};
   showResetPassword = false;
   showPassword = false;
   showCallUs = false;

   callUs: string;

   // forgetPassword form varibale
   forgetPasswordForm: FormGroup;
   usernameOrEmail: AbstractControl;

   // resetPassword form varibale
   resetPasswordForm: FormGroup;
   code: AbstractControl;
   password: AbstractControl;
   confirmPassword: AbstractControl;

   constructor(
      private router: Router,
      private fb: FormBuilder,
      // public translate: TranslateService,
      // private userService: UsersService,
      // private toasterService: ToastrService,
      // private configsService: ConfigsService
   ) {}

   ngOnDestroy() {}

   ngOnInit() {
      // get CallUs text
      // this.configsService.getAboutCallConfig().subscribe(res => {
      //    if (!res.ResponseException) {
      //       this.callUs = res.Result.callUs;
      //    }
      // });

      // validation errors
      // this.translate
         // .stream('handleFormError')
         // .pipe(untilComponentDestroyed(this))
         // .subscribe(trans => {
            this.handleError = {
               usernameOrEmail: () => {
                  return this.usernameOrEmail.hasError('required')
                     ? 'trans.thisFiledIsRequired'
                     : '';
               },
               code: () => {
                  return this.code.hasError('required')
                     ?' trans.thisFiledIsRequired'
                     : '';
               },
               password: () => {
                  return this.password.hasError('required')
                     ? 'trans.passwordRequired'
                     : this.password.errors.minLength
                     ? 'trans.min8'
                     : '';
               },
               confirmPassword: () => {
                  return 'trans.confirmPassword';
               }
            };
         // });

      // create forgetPassword FormGroup
      this.forgetPasswordForm = this.fb.group({
         usernameOrEmail: ['', [Validators.required]]
      });

      // forgetPassword Form Controlls
      this.usernameOrEmail = this.forgetPasswordForm.controls[
         'usernameOrEmail'
      ];

      // create resetPassword FormGroup
      this.resetPasswordForm = this.fb.group(
         {
            code: [null, [Validators.required]],
            password: ['', [Validators.required, 
               // minlengthOrEmpty(8)]
            ]
               
            // confirmPassword: ['']
            ]},
         // { validators: passwordsMatchValidator }
      );

      // resetPassword Form Controlls
      this.code = this.resetPasswordForm.controls['code'];
      this.password = this.resetPasswordForm.controls['password'];
      this.confirmPassword = this.resetPasswordForm.controls['confirmPassword'];
   }

   // on forgetPassword form submit
   onSubmitForgetPassword(formValues) {
      // if (!this.forgetPasswordForm.invalid) {
      //    this.userService
      //       .passwordResetCode(formValues)
      //       .pipe(untilComponentDestroyed(this))
      //       .subscribe(res => {
      //          if (!res.ResponseException) {
      //             this.showResetPassword = true;
      //             this.translate
      //                .get('Code send to your email successfully')
      //                .pipe(untilComponentDestroyed(this))
      //                .subscribe(trans => {
      //                   this.toasterService.success(trans);
      //                });
      //          }
      //       });
      // }
   }

   // on resetPassword form submit
   // onSubmitResetPassword(formValues) {
      // if (!this.resetPasswordForm.invalid) {
      //    this.userService
      //       .passwordReset(formValues)
      //       .pipe(untilComponentDestroyed(this))
      //       .subscribe(res => {
      //          if (!res.ResponseException) {
      //             this.showResetPassword = false;
      //             this.router.navigate(['/login']);
      //             this.translate
      //                .get('Pasword reset successfully')
      //                .pipe(untilComponentDestroyed(this))
      //                .subscribe(trans => {
      //                   this.toasterService.success(trans);
      //                });
      //          }
      //       });
      // }
   // }
}
