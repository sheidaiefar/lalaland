import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'work-space-header',
  templateUrl: './work-space-header.component.html',
  styleUrls: ['./work-space-header.component.css']
})
export class HeaderComponent {
  @Output('menuToggle') menuToggle = new EventEmitter();

  constructor() { }

  onMenuBtnclick(){
    this.menuToggle.emit();
  }
}
