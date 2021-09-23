import {
  Component,
  OnInit,
  OnDestroy,
  Injectable,
  ViewChild,
} from "@angular/core";
import {
  FormGroup,
  AbstractControl,
  FormBuilder,
  Validators,
} from "@angular/forms";
import {
  bounceAnimation,
  bounceOutAnimation,
  flipAnimation,
  zoomInAnimation,
} from "angular-animations";

import { Router } from "@angular/router";
// import { UsersService } from 'services/api-services/users/users.service';
// import { ToastrService } from 'ngx-toastr';
import { FormControl } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { url } from "../../../services/api_services/urls";
import { ToastrService } from "ngx-toastr";
import {
  NgbCalendar,
  NgbCalendarPersian,
  NgbDatepickerI18n,
  NgbDateStruct,
} from "@ng-bootstrap/ng-bootstrap";

import * as introJS from "intro.js";
import { NgxSpinnerService } from "ngx-spinner";
import { RecaptchaComponent, ReCaptchaV3Service } from "ng-recaptcha";
/**
 * Help Service for group pages
 */
@Injectable({
  providedIn: "root",
})
export class GroupHelpService implements OnDestroy {
  constructor() {}

  // main group page help
  mainHelp() {
    const intro: any = introJS.introJs();
    let steps: Array<object>;

    steps = [
      {
        element: "#groupMainHelpElement1",
        intro: "لطفا در این قسمت شماره تلفن خود را وارد نمایید",
      },
      {
        element: "#groupMainHelpElement2",
        intro:
          " پس از وارد کردن شماره تلفن روی این قسمت کلیک کنید اگر دفعه اولی میباشد که وارد سامانه میشوید نیاز هست تا اطلاعات خود و همسرتان را تکمیل کنید در غیر این صورت با وارد کردن کد دریافتی از طریق پیامک میتوانید وارد سامانه شوید",
      },
    ];

    intro.setOptions({
      steps,
      tooltipClass: "BYekan w3-center",
      highlightClass: "w3-pink",
      nextLabel: "بعدی",
      prevLabel: "قبلی",
      skipLabel: "بستن",
      doneLabel: "اتمام",
      showBullets: true,
      showButtons: true,
      exitOnOverlayClick: false,
      keyboardNavigation: true,
    });
    intro.start();
  }

  // add new group page help
  groupAddHelp() {
    const intro: any = introJS.introJs();
    let steps: Array<object>;

    steps = [
      {
        element: "#groupAddHelpElement1",
        intro: "در این قسمت میتوانید در آزمون asr شرکت نمایید",
      },
      {
        element: "#groupAddHelpElement2",
        intro:
          "علاوه بر انجام آزمون توسط خودتان در این قسمت میتوانید آزمون را برای فرزندانتان ارسال کنید",
      },
      {
        element: "#groupAddHelpElement3",
        intro:
          "پس از اتمام آزمون asr در این قسمت میتوانید نتیجه آزمون را مشاهده کنید",
      },
    ];

    intro.setOptions({
      steps,
      tooltipClass: "BYekan w3-center",
      highlightClass: "w3-pink",
      nextLabel: "بعدی",
      prevLabel: "قبلی",
      skipLabel: "بستن",
      doneLabel: "اتمام",
      showBullets: true,
      showButtons: true,
      exitOnOverlayClick: false,
      keyboardNavigation: true,
    });

    intro.start();
  }
  groupAddHelp2() {
    const intro: any = introJS.introJs();
    let steps: Array<object>;

    steps = [
      {
        element: "#groupAddHelpElement1",
        intro: "در این قسمت میتوانید در آزمون abcl شرکت نمایید",
      },
      {
        element: "#groupAddHelpElement2",
        intro:
          "علاوه بر انجام آزمون توسط خودتان در این قسمت میتوانید آزمون را برای فرزندانتان ارسال کنید",
      },
      {
        element: "#groupAddHelpElement3",
        intro:
          "پس از اتمام آزمون abcl در این قسمت میتوانید نتیجه آزمون را  مشاهده کنید",
      },
    ];

    intro.setOptions({
      steps,
      tooltipClass: "BYekan w3-center",
      highlightClass: "w3-pink",
      nextLabel: "بعدی",
      prevLabel: "قبلی",
      skipLabel: "بستن",
      doneLabel: "اتمام",
      showBullets: true,
      showButtons: true,
      exitOnOverlayClick: false,
      keyboardNavigation: true,
    });

    intro.start();
  }
  ngOnDestroy() {}
}
// import { TranslateService } from '@ngx-translate/core';
// import { untilComponentDestroyed } from '@w11k/ngx-componentdestroyed';
const WEEKDAYS_SHORT = ["د", "س", "چ", "پ", "ج", "ش", "ی"];
const MONTHS = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

@Injectable()
export class NgbDatepickerI18nPersian extends NgbDatepickerI18n {
  getWeekdayShortName(weekday: number) {
    return WEEKDAYS_SHORT[weekday - 1];
  }
  getMonthShortName(month: number) {
    return MONTHS[month - 1];
  }
  getMonthFullName(month: number) {
    return MONTHS[month - 1];
  }
  getDayAriaLabel(date: NgbDateStruct): string {
    return `${date.year}-${this.getMonthFullName(date.month)}-${date.day}`;
  }
}

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  animations: [flipAnimation(), zoomInAnimation(), bounceOutAnimation()],
  providers: [
    { provide: NgbCalendar, useClass: NgbCalendarPersian },
    { provide: NgbDatepickerI18n, useClass: NgbDatepickerI18nPersian },
  ],
})
export class LoginComponent implements OnInit, OnDestroy {
  @ViewChild("reCaptchacRef", { static: false })
  reCaptchacRef: RecaptchaComponent;
  // @ViewChild(CaptchaComponent, { static: true }) captchaComponent: CaptchaComponent;
  animationState = false;
  // form for creating new params
  form = new FormGroup({
    emailLogin: new FormControl("", [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
  });
  form5 = new FormGroup({
    code: new FormControl("", Validators.required),
  });
  form2 = new FormGroup({
    password: new FormControl("", Validators.required),
    emailLogin: new FormControl("", Validators.required),
    shHesab: new FormControl("", Validators.required),
  });
  form3 = new FormGroup({
    FirstName: new FormControl("", Validators.required),
    LastName: new FormControl("", Validators.required),
    Birthday: new FormControl("", Validators.required),
    NID: new FormControl("", Validators.required),
    Mobile: new FormControl("", Validators.required),
    Gender: new FormControl("", Validators.required),
  });
  form4 = new FormGroup({
    FirstName: new FormControl("", Validators.required),
    LastName: new FormControl("", Validators.required),
    Birthday: new FormControl("", Validators.required),
    NID: new FormControl("", Validators.required),
    Mobile: new FormControl("", Validators.required),
    Gender: new FormControl("", Validators.required),
    gRecaptchaResponse: new FormControl(""),
  });
  handleError = {};
  ShowInvalidFormError = false;
  showPassword = false;
  // email = new FormControl("", [Validators.required, Validators.email]);
  loginForm: FormGroup;
  email: AbstractControl;
  username: AbstractControl;
  password: AbstractControl;
  rememberMe: AbstractControl;
  showSignUpInfoDiv: boolean = false;
  showFirstloginDiv = true;
  showSelfInfoDiv: boolean = false;
  showFamilyInfoDiv: boolean = false;
  ckeckedInfosList: any;
  selectMode: string[] = ["مرد", "زن"];
  showMessage = true;
  showverfiyCodeDiv: boolean = false;
  constructor(
    private router: Router,
    private fb: FormBuilder, // public translate: TranslateService,
    private http: HttpClient, // private userService: UsersService, // private toasterService: ToastrService
    private toastr: ToastrService,
    private groupHelpService: GroupHelpService,
    private calendar: NgbCalendar,
    private spinner: NgxSpinnerService,
    // private recaptchaV3Service: ReCaptchaV3Service,
  ) {}

  ngOnDestroy() {}

  ngOnInit() {
    if (!localStorage.getItem("showHelp0")) {
      localStorage.setItem("showHelp0", "true");
    }
    setTimeout(() => {
      if (localStorage.getItem("showHelp0") === "true") {
        this.startMainHelpTour();
        localStorage.setItem("showHelp0", "false");
      }
    }, 800);
  }

  //send sms
  onSubmitForm() {
    this.spinner.show();
    this.http
      .post<any>(url.login.sendSms, {
        codeMelli: this.form.get("emailLogin").value,
      })
      .subscribe(
        (res) => {
          this.spinner.hide();
          if(res.message == 'ok'){
            this.showFirstloginDiv = false;
            this.showverfiyCodeDiv = true;
          }else{
            this.toastr.error(res.message)
          }
        },
        (err) => {  
          this.spinner.hide();  
          if(err.status == 0) {
            this.toastr.error("عدم اتصال به اینترنت");
            return;
          }      
          if(err.error.errors !== undefined){
            err.error.errors.codeMelli.map((msg)=>{
              this.toastr.error(msg);
            })
          }else{

            this.toastr.error(err.error.message);
          }
        }
      );
  }

  //Revoked
  onSubmitForm2() {
    this.spinner.show();
    this.http
      .post<any>(url.login.check, {
        daftarKol: this.form2.get("emailLogin").value,
        shMelli: this.form2.get("password").value,
        shHesab: this.form2.get("shHesab").value,
      })
      .subscribe(
        (res) => {
          this.spinner.hide();

          if (res.message === "ok" && res.data) {
            this.ckeckedInfosList = res.data;
            this.showFirstloginDiv = false;
            this.showSignUpInfoDiv = false;
            this.form3.get("FirstName").setValue(res.data.FirstName);
            this.form3.get("LastName").setValue(res.data.LastName);
            this.form3.get("NID").setValue(res.data.ShMelli);
            this.form3
              .get("Mobile")
              .setValue(this.form.get("emailLogin").value);
            this.showSelfInfoDiv = true;
            this.showMessage = false;
            // localStorage.setItem("GUID", res.data.Guid);
            // localStorage.setItem("pagePermissions", res.permissions);
            // localStorage.setItem("userID", res.EdariID);
            // localStorage.setItem("userName", res.Name);
            // this.router.navigate(["/MainPanel"]);
            // this.toastr.success("باموفقیت وارد شدید", " ورود");
          } else this.toastr.error("اخطا در ارتباط با سرور");
        },
        (err) => {
          this.spinner.hide();

          if(err.status == 0) {
            this.toastr.error("عدم اتصال به اینترنت");
            return;
          }

          const e = err.error.errors;
          if(e !== undefined){
            if(e.daftarKol !== undefined){
              e.daftarKol.map((msg)=>(
                this.toastr.error(msg)
              ))
            }
            if(e.shMelli !== undefined){
              e.shMelli.map((msg)=>(
                this.toastr.error(msg)
              ))
            }
            if(e.shHesab !== undefined){
              e.shHesab.map((msg)=>(
                this.toastr.error(msg)
              ))
            }
          }else{
            this.toastr.error("اطلاعات وارد شده نامعتبر میباشد");
          }
        }
      );
  }

  onSubmitForm3() {
    if (this.form3.get("Birthday").value.month < 10) {
      this.form3.get("Birthday").value.month =
        "0" + this.form3.get("Birthday").value.month;
    }
    if (this.form3.get("Birthday").value.day < 10) {
      this.form3.get("Birthday").value.day =
        "0" + this.form3.get("Birthday").value.day;
    }
    let birthday =
      this.form3.get("Birthday").value.year +
      "/" +
      this.form3.get("Birthday").value.month +
      "/" +
      this.form3.get("Birthday").value.day;

    // console.log(birthday.slice(0, 8));

    let gender;
    if (this.form3.get("Gender").value === "زن") {
      gender = "0";
    } else gender = "1";

    this.spinner.show();
    this.http
      .post<any>(url.login.submitSelfInfo, {
        firstName: this.form3.get("FirstName").value,
        lastName: this.form3.get("LastName").value,
        birthday: birthday,
        NID: this.form3.get("NID").value,
        mobile: this.form3.get("Mobile").value,
        gender: gender,
      },{
        headers: {
          Authorization:
            "Bearer" + " " + localStorage.getItem("atieh_token"),
        },
      })
      .subscribe(
        (res) => {
          this.spinner.hide();

          if (res.message === "ok") {
            this.ckeckedInfosList = res.data;
            this.showFirstloginDiv = false;
            this.showSignUpInfoDiv = false;
            this.showSelfInfoDiv = false;
            this.showFamilyInfoDiv = true;
          } else this.toastr.error("اطلاعات وارد شده نامعتبر میباشد");
        },
        (err) => {
          this.spinner.hide();

          if(err.status == 0) {
            this.toastr.error("عدم اتصال به اینترنت");
            return;
          }
          const e = err.error.errors;
          if(e !== undefined){
            if(e.firstName !== undefined){
              e.firstName.map((msg)=>(
                this.toastr.error(msg)
              ))
            }
            if(e.lastName !== undefined){
              e.lastName.map((msg)=>(
                this.toastr.error(msg)
              ))
            }
            if(e.birthday !== undefined){
              e.birthday.map((msg)=>(
                this.toastr.error(msg)
              ))
            }
            if(e.shMelli !== undefined){
              e.shMelli.map((msg)=>(
                this.toastr.error(msg)
              ))
            }
            if(e.mobile !== undefined){
              e.mobile.map((msg)=>(
                this.toastr.error(msg)
              ))
            }
            if(e.gender !== undefined){
              e.gender.map((msg)=>(
                this.toastr.error(msg)
              ))
            }
          }else{
            if(err.status == 401){
              localStorage.removeItem("atieh_token");
              this.router.navigate(["/login"]);
            }else
              this.toastr.error(err.message);
          }
        }
      );
  }
  
  onSubmitForm4() {
    if (this.form4.get("Birthday").value.month < 10) {
      this.form4.get("Birthday").value.month =
        "0" + this.form3.get("Birthday").value.month;
    }
    if (this.form4.get("Birthday").value.day < 10) {
      this.form4.get("Birthday").value.day =
        "0" + this.form4.get("Birthday").value.day;
    }
    let birthday =
      this.form4.get("Birthday").value.year +
      "/" +
      this.form4.get("Birthday").value.month +
      "/" +
      this.form4.get("Birthday").value.day;

    // console.log(birthday.slice(0, 8));

    let gender;
    if (this.form4.get("Gender").value === "زن") {
      gender = "0";
    } else gender = "1";

    this.spinner.show();
    this.http
      .post<any>(url.login.submitFamilyInfo, {
        firstName: this.form4.get("FirstName").value,
        lastName: this.form4.get("LastName").value,
        birthday: birthday,
        // Birthday: "12/12/12",
        NID: this.form4.get("NID").value,
        mobile: this.form4.get("Mobile").value,
        gender: gender,
      },{
        headers: {
          Authorization:
            "Bearer" + " " + localStorage.getItem("atieh_token"),
        },
      })
      .subscribe(
        (res) => {
          this.spinner.hide();

          if (res.message === "ok") {
            // localStorage.setItem("Guid", res.data.guid);

            this.router.navigate(["/MainPanel"]);
          } else this.toastr.error(res.message);
        },
        (err) => {
          this.spinner.hide();

          if(err.status == 0) {
            this.toastr.error("عدم اتصال به اینترنت");
            return;
          }
          const e = err.error.errors;
          if(e !== undefined){
            if(e.firstName !== undefined){
              e.firstName.map((msg)=>(
                this.toastr.error(msg)
              ))
            }
            if(e.lastName !== undefined){
              e.lastName.map((msg)=>(
                this.toastr.error(msg)
              ))
            }
            if(e.birthday !== undefined){
              e.birthday.map((msg)=>(
                this.toastr.error(msg)
              ))
            }
            if(e.shMelli !== undefined){
              e.shMelli.map((msg)=>(
                this.toastr.error(msg)
              ))
            }
            if(e.mobile !== undefined){
              e.mobile.map((msg)=>(
                this.toastr.error(msg)
              ))
            }
            if(e.gender !== undefined){
              e.gender.map((msg)=>(
                this.toastr.error(msg)
              ))
            }
          }else{
            if(err.status == 401){
              localStorage.removeItem("atieh_token");
              this.router.navigate(["/login"]);
            }else
              this.toastr.error(err.message);
          }
        }
      );
  }

  onSubmitForm5() {
    this.spinner.show();
    this.http
      .post<any>(url.login.login, {
        mobile: this.form.get("emailLogin").value,
        code: this.form5.get("code").value,
      })
      .subscribe(
        (res) => {
          this.spinner.hide();
          
          if (res.access_token !== undefined && res.access_token != "") {
            localStorage.setItem("atieh_token", res.access_token);
            localStorage.setItem("Guid", res.AccessToken);
            this.router.navigate(["/MainPanel"]);
          } else this.toastr.error(res.message);
        },
        (err) => {
          this.spinner.hide();

          if(err.status == 0) {
            this.toastr.error("عدم اتصال به اینترنت");
            return;
          }
          const e = err.error.errors;
          if(e !== undefined){
            if(e.mobile !== undefined){
              e.mobile.map((msg)=>(
                this.toastr.error(msg)
              ))
            }
            if(e.code !== undefined){
              e.code.map((msg)=>(
                this.toastr.error(msg)
              ))
            }
          }else{
            this.toastr.error("کد وارد شده اشتباه است");
          }
        }
      );
  }
  
  animate() {
    this.animationState = !this.animationState;
    // this.router.navigate(["/MainPanel"]);
    // console.log("ss");
  }
  // show main help tour
  startMainHelpTour() {
    this.groupHelpService.mainHelp();
  }
  notMarried() {
    this.router.navigate(["/MainPanel"]);
  }
  // public executeImportantAction(): void {
  //   this.recaptchaV3Service
  //     .execute("importantAction")
  //     .subscribe((token) => console.log(token));
  // }
  // resolved(captchaResponse: string) {
  //   console.log(`Resolved captcha with response: ${captchaResponse}`);
  // }
  
}

