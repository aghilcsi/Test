import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { url } from "../api_services/urls";
import { ToastrService } from "ngx-toastr";

// import { LoginService } from '../api-services/auth/auth.service';

/**
 * This gurad is for check user authorization before any route loaded
 */
@Injectable({
  providedIn: "root",
})
export class AuthGuardService implements CanActivate {
  tstNumber = 0;
  canSee: boolean;
  responce: number;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private http: HttpClient //  private auth: LoginService
  ) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem("Guid")) {
      // TODO:
      this.canSee = true;
    }
    if (!localStorage.getItem("Guid")) {
      this.router.navigate(["/login"]);
      this.canSee = false;
    }
    return this.canSee;
  }
}
