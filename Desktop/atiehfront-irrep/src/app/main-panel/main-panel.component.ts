import { HttpClient } from "@angular/common/http";
import { Component, HostListener, OnInit, ViewChild } from "@angular/core";
import { ModalDismissReasons, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { LocationStrategy } from '@angular/common';
import {
  bounceInRightAnimation,
  bounceInRightOnEnterAnimation,
  bounceOutAnimation,
  fadeInAnimation,
  fadeInDownAnimation,
  flashAnimation,
  flipAnimation,
  pulseAnimation,
  zoomInAnimation,
} from "angular-animations";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { url } from "../../../services/api_services/urls";
import { Injectable, OnDestroy } from "@angular/core";

import * as introJS from "intro.js";
import { Router, RouterLink } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
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
        intro:
          "در این بخش میتوانید در آزمون asr شرکت نمایید",
      },
      {
        element: "#groupMainHelpElement2",
        intro:
          "در این بخش میتوانید در آزمون abcl شرکت نمایید",
      },
      {
        element: "#groupMainHelpElement3",
        intro: "با کلیک بر روی این قسمت میتوانید از سامانه خارج شوید",
      },
      {
        element: "#groupMainHelpElement4",
        intro: "با کلیک بر روی این قسمت میتوانید پروفایل کاربری را مشاهده کنید",
      },
      {
        element: "#groupMainHelpElement5",
        intro: "با کلیک بر روی این قسمت میتوانید راهنمای سامانه را مشاهده کنید",
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
        intro: "در این قسمت میتوانید در آزمون ASR  شرکت نمایید. پاسخ دهی به سوالات نیازمند صرف وقت زیادی نیست، لطفا اولین گزینه ای که به ذهن تان می رسد انتخاب نمایید.",
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
      {
        element: "#groupAddHelpElement4",
        intro: "با کلیک بر روی این قسمت میتوانید به لیست آزمون ها برگردید",
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
        intro: "در این قسمت میتوانید در آزمون ABCL شرکت نمایید. پاسخ دهی به سوالات نیازمند صرف وقت زیادی نیست، لطفا اولین گزینه ای که به ذهن تان می رسد انتخاب نمایید.",
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
      {
        element: "#groupAddHelpElement4",
        intro: "با کلیک بر روی این قسمت میتوانید به لیست آزمون ها برگردید",
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

@Component({
  selector: "app-main-panel",
  templateUrl: "./main-panel.component.html",
  styleUrls: ["./main-panel.component.scss"],
  animations: [
    flipAnimation(),
    zoomInAnimation(),
    bounceOutAnimation(),
    fadeInAnimation(),
    fadeInDownAnimation(),
    pulseAnimation(),
    flashAnimation(),
    // bounceInRightOnEnterAnimation(),
    bounceInRightAnimation(),
    // fadeInAnimation(),
  ],
})
export class MainPanelComponent implements OnInit, OnDestroy {
  @ViewChild("testLink", { static: false }) private content;
  // @HostListener("window:beforeunload", ["$event"])
  // beforeUnloadHandler(event) {
  //   // this.logOut();
  // }
  form3 = new FormGroup({
    FirstName: new FormControl("", Validators.required),
    LastName: new FormControl("", Validators.required),
    Birthday: new FormControl("", Validators.required),
    NID: new FormControl("", Validators.required),
    Mobile: new FormControl("", Validators.required),
    Gender: new FormControl("", Validators.required),
  });

  closeResult: string = "";
  showFirstImage = true;
  showGif = false;
  showFirstImage2 = true;
  showGif2 = false;
  showFirstImage3 = true;
  showGif3 = false;
  showAbclList = false;
  isClicked = false;
  showASRList = false;
  showLists = false;
  animationState = false;
  showSendToChilds = false;
  animationState2 = false;
  backgroundColorForAsr: string;
  backgroundColorForAbcl: string;
  colorForAsr: string;
  colorForAbcl: string;
  showSendToChildsForAsr: boolean = false;
  selectMode: string[] = ["مرد", "زن"];
  showSendToChildsForAbcl: boolean = false;
  testUrl: string;
  shareButtonDescription =
    "با عرض سلام و وقت بخیر لطفا با استفاده از این لینک در آزمون شرکت فرمایید:";
  shareButtonTitle = "ارسال لینک آزمون";
  showFirstDIv = true;
  showSelfInfoDiv = false;
  //
  //
  //
  showAsrDiv = false;
  showAbclDiv = false;
  showSendToChild = false;
  showColleaguesList = false;
  mycolleagues = [];
  selectedTest: string;
  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private modalService: NgbModal,
    private groupHelpService: GroupHelpService,
    private router: Router,
    private location: LocationStrategy,
    private spinner: NgxSpinnerService,
  ) {
    history.pushState(null, null, window.location.href);
    this.saveState();
    // check if back or forward button is pressed.
    this.location.onPopState((event) => {
        history.pushState(null, null, window.location.href);
        var pre = this.states.pop();
        Object.assign(this,pre);
    });
    // const body = document.getElementsByTagName("body")[0];
    // let panel = body.children[0].children[1].children[0].children[0];
    // setTimeout(() => {
    // panel.classList.add("fullWidth");
    // }, 20);
  }

  states = [];
  saveState()
  {
      this.states.push(Object.assign({}, this));
      console.log("state saved");
  }

  ngOnDestroy() {
    this.logOut();
  }
  ngOnInit(): void {
    if (!localStorage.getItem("showHelp")) {
      localStorage.setItem("showHelp", "true");
    }
    setTimeout(() => {
      if (localStorage.getItem("showHelp") === "true") {
        this.startMainHelpTour();
        localStorage.setItem("showHelp", "false");
      }
    }, 800);

    setTimeout(() => {
      this.showLists = true;
    }, 399);
    setTimeout(() => {
      this.animationState = false;
    }, 400);
  }
  showAbcl() {
    this.showSendToChilds = false;
    this.showLists = true;
    this.showAbclList = true;
    this.showASRList = false;
    this.showSendToChildsForAsr = false;
    this.showSendToChildsForAbcl = false;
    this.animationState = !this.animationState;

    this.backgroundColorForAsr = "unset";
    this.backgroundColorForAbcl = "white";
    this.colorForAbcl = "#1654a4";
    this.colorForAsr = "white";
  }
  showASR() {
    this.showSendToChildsForAsr = false;
    this.showSendToChildsForAbcl = false;
    this.showSendToChilds = false;
    this.showLists = true;
    this.showAbclList = false;
    this.showASRList = true;
    this.animationState = !this.animationState;
    this.backgroundColorForAsr = "white";
    this.backgroundColorForAbcl = "unset";
    this.colorForAbcl = "white";
    this.colorForAsr = "#1654a4";
  }
  // changeButtonColor(el) {
  //   el.style.backgroundColor = "red";
  // }
  showGifimage() {
    this.showFirstImage = false;
    this.showGif = true;
  }
  showFirstImages() {
    this.showFirstImage = true;
    this.showGif = false;
  }
  showGifimage2() {
    this.showFirstImage2 = false;
    this.showGif2 = true;
  }
  showFirstImages2() {
    this.showFirstImage2 = true;
    this.showGif2 = false;
  }
  showGifimage3() {
    this.showFirstImage3 = false;
    this.showGif3 = true;
  }
  showFirstImages3() {
    this.showFirstImage3 = true;
    this.showGif3 = false;
  }
  doAbclTest(owner) {
    this.spinner.show();
    this.http
      .post<any>(url.test.newabcl, {
        Guid: localStorage.getItem("Guid"),
        Owner: owner,
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
            window.location.href = res.data;
          } else this.toastr.error(res.message);
        },
        (err) => {
          this.spinner.hide();
          if(err.status == 0) {
            this.toastr.error("عدم اتصال به اینترنت");
            return;
          }
          if(err.status == 401){
            localStorage.removeItem("atieh_token");
            this.router.navigate(["/login"]);
          }else
            this.toastr.error(err.error.message);
        }
      );
  }
  doAsrTest(owner) {
    this.spinner.show();
    this.http
      .post<any>(url.test.newasr, {
        Guid: localStorage.getItem("Guid"),
        Owner: owner,
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
            window.location.href = res.data;
          } else this.toastr.error(res.message);
        },
        (err) => {
          this.spinner.hide();
          if(err.status == 0) {
            this.toastr.error("عدم اتصال به اینترنت");
            return;
          }
          if(err.status == 401){
            localStorage.removeItem("atieh_token");
            this.router.navigate(["/login"]);
          }else
            this.toastr.error(err.error.message);
        }
      );
  }
  getTestReport(testName) {
    this.spinner.show();

    if (testName === "abcl") {
      this.http
        .post<any>(url.test.reportabcl, {
          Guid: localStorage.getItem("Guid"),
          Owner: 1,
          TestName: testName,
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
              window.location.href = res.data;
            } else this.toastr.error(res.message);
          },
          (err) => {
            this.spinner.hide();
            if(err.status == 0) {
              this.toastr.error("عدم اتصال به اینترنت");
              return;
            }
            if(err.status == 401){
              localStorage.removeItem("atieh_token");
              this.router.navigate(["/login"]);
            }else
              this.toastr.error(err.error.message);
          }
        );
    }
    if (testName === "asr") {
      this.http
        .post<any>(url.test.reportasr, {
          Guid: localStorage.getItem("Guid"),
          Owner: 1,
          TestName: testName,
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
              window.location.href = res.data;
            } else this.toastr.error(res.message);
          },
          (err) => {
            this.spinner.hide();
            if(err.status == 0) {
              this.toastr.error("عدم اتصال به اینترنت");
              return;
            }
            if(err.status == 401){
              localStorage.removeItem("atieh_token");
              this.router.navigate(["/login"]);
            }else
              this.toastr.error(err.error.message);
          }
        );
    }
  }
  getUserColleagues(){
    this.spinner.show();
    this.http
      .post<any>(url.test.colleaguesList, {
        Guid: localStorage.getItem("Guid"),
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
            
            this.mycolleagues=res.data;
            console.log(this.mycolleagues);
            this.showColleaguesList=true;
            this.showAbclDiv = false;
          } else this.toastr.error(res.message);
        },
        (err) => {
          this.spinner.hide();
          if(err.status == 0) {
            this.toastr.error("عدم اتصال به اینترنت");
            return;
          }
          if(err.status == 401){
            localStorage.removeItem("atieh_token");
            this.router.navigate(["/login"]);
          }else
            this.toastr.error(err.error.message);
        }
      );
  }
  sendTestTochildForAsr() {
    this.showLists = false;
    this.showSendToChilds = true;
    this.showSendToChildsForAsr = true;
    setTimeout(() => {
      this.animationState2 = !this.animationState2;
    }, 100);
  }
  sendTestTochildForAbcl() {
    this.showLists = false;
    this.showSendToChilds = true;
    this.showSendToChildsForAbcl = true;
    // this.animationState2 = !this.animationState2;
    setTimeout(() => {
      this.animationState2 = !this.animationState2;
    }, 100);
  }
  doAbclTestForChild(owner) {
    this.spinner.show();
    this.testUrl = "";
    if (owner === 2) {
      this.http
        .post<any>(url.test.abclChild1, {
          Guid: localStorage.getItem("Guid"),
          Owner: owner,
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
              this.opentestLink();
              this.testUrl = res.data;
              // window.location.href = res.data;
            } else this.toastr.error(res.message);
          },
          (err) => {
            this.spinner.hide();
            if(err.status == 0) {
              this.toastr.error("عدم اتصال به اینترنت");
              return;
            }
            if(err.status == 401){
              localStorage.removeItem("atieh_token");
              this.router.navigate(["/login"]);
            }else
              this.toastr.error(err.error.message);
          }
        );
    }
    if (owner === 3) {
      this.http
        .post<any>(url.test.abclChild2, {
          Guid: localStorage.getItem("Guid"),
          Owner: owner,
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
              this.opentestLink();
              this.testUrl = res.data;
              // window.location.href = res.data;
            } else this.toastr.error(res.message);
          },
          (err) => {
            this.spinner.hide();
            if(err.status == 0) {
              this.toastr.error("عدم اتصال به اینترنت");
              return;
            }
            if(err.status == 401){
              localStorage.removeItem("atieh_token");
              this.router.navigate(["/login"]);
            }else
              this.toastr.error(err.error.message);
          }
        );
    }
  }
  doAsrTestForChild(owner) {
    this.spinner.show();
    this.testUrl = "";
    if (owner === 2) {
      this.http
        .post<any>(url.test.asrChild1, {
          Guid: localStorage.getItem("Guid"),
          Owner: owner,
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
              this.opentestLink();
              this.testUrl = res.data;
              // window.location.href = res.data;
            } else this.toastr.error(res.message);
          },
          (err) => {
            this.spinner.hide();
            if(err.status == 0) {
              this.toastr.error("عدم اتصال به اینترنت");
              return;
            }
            if(err.status == 401){
              localStorage.removeItem("atieh_token");
              this.router.navigate(["/login"]);
            }else
              this.toastr.error(err.error.message);
          }
        );
    }
    if (owner === 3) {
      this.http
        .post<any>(url.test.asrChild2, {
          Guid: localStorage.getItem("Guid"),
          Owner: owner,
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
              this.opentestLink();
              this.testUrl = res.data;
              // window.location.href = res.data;
            } else this.toastr.error(res.message);
          },
          (err) => {
            this.spinner.hide();
            if(err.status == 0) {
              this.toastr.error("عدم اتصال به اینترنت");
              return;
            }
            if(err.status == 401){
              localStorage.removeItem("atieh_token");
              this.router.navigate(["/login"]);
            }else
              this.toastr.error(err.error.message);
          }
        );
    }
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
  opentestLink() {
    this.modalService.open(this.content, { size: "lg" }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }
  copyTestUrl() {
    navigator.clipboard.writeText(this.testUrl);
  }
  backToOrigin() {
    this.showSendToChilds = false;
    this.showSendToChildsForAbcl = false;
    this.showSendToChildsForAsr = false;
    this.showAsrDiv = false;
    this.showSendToChild = false;
    this.showColleaguesList=false;
    this.showAbclDiv = false;
    this.showSelfInfoDiv = false;
    this.showFirstDIv = true;
    this.showLists = true;
  }
  navigateToEita() {
    let url = "https://eitaa.com/share/url?url=" + this.testUrl;
    window.location.href = url;
  }

  doTestNew(childNumber) {
    if (this.selectedTest === "asr") {
      this.doAsrTestForChild(childNumber);
    }
    if (this.selectedTest === "abcl") {
      this.doAbclTestForChild(childNumber);
    }
  }

  // show main help tour
  startMainHelpTour() {
    this.groupHelpService.mainHelp();
  }

  // show add group help tour
  startAddGroupHelpTour() {
    if (this.showAsrDiv) {
      this.groupHelpService.groupAddHelp();
    }
    if (this.showAbclDiv) {
      this.groupHelpService.groupAddHelp2();
    }
  }
  logOut() {
    localStorage.removeItem("Guid");
    localStorage.removeItem("atieh_token");
    this.router.navigate(["/login"]);
  }
  gotoAsr() {
    if (!localStorage.getItem("showHelp2")) {
      localStorage.setItem("showHelp2", "true");
    }
    setTimeout(() => {
      if (localStorage.getItem("showHelp2") === "true") {
        this.groupHelpService.groupAddHelp();
        localStorage.setItem("showHelp2", "false");
      }
    }, 200);
  }
  gotoAbcl() {
    if (!localStorage.getItem("showHelp3")) {
      localStorage.setItem("showHelp3", "true");
    }
    setTimeout(() => {
      if (localStorage.getItem("showHelp3") === "true") {
        this.groupHelpService.groupAddHelp2();
        localStorage.setItem("showHelp3", "false");
      }
    }, 200);
  }
  showProfile() {
    this.spinner.show();
    this.http
      .get<any>(url.test.userProfile,{
        headers: {
          Authorization:
            "Bearer" + " " + localStorage.getItem("atieh_token"),
        },
      })
      .subscribe(
        (res) => {
          this.spinner.hide();
          if (res.message === "ok") {
            this.showFirstDIv = false;
            this.showAsrDiv = false;
            this.showAbclDiv = false;
            this.showSendToChild = false;

            let bday = {
              year: parseInt(res.data.PersianBirthDate.split("/")[0]),
              month: parseInt(res.data.PersianBirthDate.split("/")[1]),
              day: parseInt(res.data.PersianBirthDate.split("/")[2]),
            };

            let gender;
            if (res.data.Gender === "M") {
              gender = "مرد";
            } else gender = "زن";
            this.form3.get("Birthday").setValue(bday);

            this.form3.get("FirstName").setValue(res.data.FirstName);
            this.form3.get("LastName").setValue(res.data.LastName);
            this.form3.get("NID").setValue(res.data.NID);
            this.form3.get("Mobile").setValue(res.data.Mobile);
            this.form3.get("Gender").setValue(gender);
            this.showSelfInfoDiv = true;
          } else this.toastr.error(res.message);
        },
        (err) => {
          this.spinner.hide();
          if(err.status == 0) {
            this.toastr.error("عدم اتصال به اینترنت");
            return;
          }
          if(err.status == 401){
            localStorage.removeItem("atieh_token");
            this.router.navigate(["/login"]);
          }else
            this.toastr.error(err.error.message);
        }
      );
  }

  showUserReportsListPage = false;
  userReportsListUrls = [];
  getUserReportsList(){
    this.spinner.show();
    this.http
    .post<any>(url.test.userReports, {}, {
      headers: {
        Authorization:
          "Bearer" + " " + localStorage.getItem("atieh_token"),
      },
    })
    .subscribe(
      (res) => {
        this.spinner.hide();
        if (res.message === "ok") {
          this.userReportsListUrls = res.data.urls;
          this.showAbclDiv=false;
          this.showUserReportsListPage=true;
        } 
        else this.toastr.error(res.message);
      },
      (err) => {
        this.spinner.hide();
        if(err.status == 0) {
          this.toastr.error("عدم اتصال به اینترنت");
          return;
        }
        if(err.status == 401){
          localStorage.removeItem("atieh_token");
          this.router.navigate(["/login"]);
        }else
          this.toastr.error(err.error.message);
      }
    );
  }
}
