import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { CanDeactivate } from '@angular/router';
import { RemoteDesktopRdpComponent } from 'app/remote-connection/remote-desktop-rdp/remote-desktop-rdp.component';

/**
 * This service is for deactiving rdp component
 */
@Injectable({
  providedIn: 'root'
})
export class rdpCanDeactiveService
  implements CanDeactivate<RemoteDesktopRdpComponent> {

  canDeactivate(component: RemoteDesktopRdpComponent): boolean {
    if (!component.canDeactivate()) {
      return false;
    }
    return true;
  }
}
