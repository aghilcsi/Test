import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { finalize } from "rxjs/operators";

/**
 * This service provide observable for loading indicator to show or hide!
 */
@Injectable({
  providedIn: "root",
})
export class LoadingIndicatorService {
  // any thing can subscribe to loadingIndicator change
  public loadingIndicator = new BehaviorSubject<boolean>(false);
  constructor() {  console.log('s');}

  setLoadingIndicator(flag: boolean) {
    this.loadingIndicator.next(flag);
  }
}

/**
 * This HttpInterceptor show loading indecator befor each request and hid it after request finish
 */
@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loadingIndicatorService: LoadingIndicatorService) {
  
    
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // emit onStarted event before request execution
    this.loadingIndicatorService.setLoadingIndicator(true);
    return next.handle(request).pipe(
      // emit onFinished event after request execution
      finalize(() => {
        this.loadingIndicatorService.setLoadingIndicator(false);
      })
    );
  }
}
