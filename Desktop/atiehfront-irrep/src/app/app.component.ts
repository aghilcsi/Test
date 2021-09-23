import { AfterViewChecked, ChangeDetectorRef, Component } from "@angular/core";
import { LoadingIndicatorService } from "../../services/guard-interceptor-services/loading-interceptor.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements  AfterViewChecked{
  constructor(
    private loadingIndicatorService: LoadingIndicatorService,
    private cdRef: ChangeDetectorRef
  ) {}
  loadingIndicator: boolean;
  loadingFlag: boolean;
  ngOnInit() {
    // subscribe to loading indicator service
    this.loadingIndicatorService.loadingIndicator.subscribe(
      (flag) => (this.loadingFlag = flag)
    );
  }

  ngAfterViewChecked() {
    // show or hide loadingIndicator
    if (this.loadingFlag !== this.loadingIndicator) {
      this.loadingIndicator = this.loadingFlag;
      this.cdRef.detectChanges();
    }
  }
}
