import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'work-space-layout',
  templateUrl: './work-space-layout.component.html',
  styleUrls: ['./work-space-layout.component.css']
})
export class WorkSpaceLayoutComponent {

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
  }
}
