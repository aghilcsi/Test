import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { AuthGuardService } from "../../services/guard-interceptor-services/auth-guard.service";
import { MainPanelComponent } from "./main-panel/main-panel.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },

  {
    path: "",
    canActivate: [AuthGuardService],
    component: MainPanelComponent,
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, {})],
  exports: [],
})
export class AppRoutingModule {}
