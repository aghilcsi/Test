import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// import { DirectivesModule } from 'shared/directive/directive.module';
import { LoginComponent } from "./login.component";
import { LoginRoutingModule } from "./login-routing.module";
import { ForgetPasswordComponent } from "./forget-password/forget-password.component";
import { MaterialModule } from "app/material-module";

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // TranslateModule,
    LoginRoutingModule,
    // DirectivesModule
  ],
  declarations: 
  [
    // LoginComponent,
     ForgetPasswordComponent],
})
export class LoginModule {}
