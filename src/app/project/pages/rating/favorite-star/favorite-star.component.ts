import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'favorite-star',
  templateUrl: './favorite-star.component.html',
  styleUrls: ['./favorite-star.component.css']
})
export class FavoriteStarComponent {
  @Input() isSelected:boolean | undefined;
  @Output() change = new EventEmitter(); 

  constructor() { }

  onFavStarClick(){
    this.isSelected=!this.isSelected;
    this.change.emit(this.isSelected);
   console.log(this.isSelected);
  }
}
