import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'favorite-star',
  templateUrl: './favorite-star.component.html',
  styleUrls: ['./favorite-star.component.css']
})
export class FavoriteStarComponent {
  @Input() isSelected:boolean | undefined;
 

  constructor() { }

  onFavStarClick(){
    this.isSelected=!this.isSelected;
  }
}
