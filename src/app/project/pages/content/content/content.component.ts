import { Component } from '@angular/core';

@Component({
  selector: 'page-content',
  templateUrl: './content.component.html',
  styles: [':host {display: block;}'],
})
export class ContentComponent {

  constructor() { }
}
