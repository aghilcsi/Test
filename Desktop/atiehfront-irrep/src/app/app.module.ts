import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import "zone.js";
import { AppRoutingModule } from "./app.routing";
// import { ComponentsModule } from "./components/components.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AppComponent } from "./app.component";
import { NgbModule, NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";
import { MatFormFieldModule } from "@angular/material/form-field";
import { LoginComponent } from "./login/login.component";
import { MatIconModule } from "@angular/material/icon";
import { MaterialModule } from "./material-module";
import { NgScrollbarModule } from "ngx-scrollbar";
import { ToastrModule } from "ngx-toastr";
import { LoadingInterceptor } from "../../services/guard-interceptor-services/loading-interceptor.service";
import { CommonModule } from "@angular/common";
import { MatTooltipModule } from "@angular/material/tooltip";
import { NgxSpinnerModule } from "ngx-spinner";
import {
  MatExpansionModule,
  MatExpansionPanel,
} from "@angular/material/expansion";
import { BrowserModule } from "@angular/platform-browser";
import { TimelineModule } from "primeng/timeline";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { MainPanelComponent } from "./main-panel/main-panel.component";
import { ShareButtonsModule } from "ngx-sharebuttons/buttons";

import { ShareIconsModule } from "ngx-sharebuttons/icons";
import { RecaptchaV3Module, RECAPTCHA_V3_SITE_KEY } from "ng-recaptcha";


@NgModule({
  imports: [
    BrowserModule,
    NgxSpinnerModule,
    TimelineModule,
    MaterialModule,
    NgScrollbarModule,
    ToastrModule.forRoot({
      timeOut: 8000,
      progressBar: true,
      progressAnimation: "increasing",
      extendedTimeOut: 3000,
      positionClass: "toastPosition",
      titleClass: "toastTitle",
      messageClass: "toastMessage",
    }), // ToastrModule added
    BrowserAnimationsModule,
    MatFormFieldModule,
    CommonModule,
    RouterModule,
    MatIconModule,
    MatTooltipModule,
    FormsModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    // RecaptchaV3Module,
    HttpClientModule,
    NgbPaginationModule,
    // ComponentsModule,
    MatIconModule,
    ShareButtonsModule.withConfig({
      debug: true,
    }),
    ShareIconsModule,

    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
    }),

    // AngularEditorModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    LoginComponent,

    MainPanelComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
    // {
    // provide: RECAPTCHA_V3_SITE_KEY,
    // useValue: "6LccEcsbAAAAAFab2DpiulZOf_oZOkCOn4rqAZIt",
    // },
    // ShowHomePageService,
  ],
  entryComponents: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
