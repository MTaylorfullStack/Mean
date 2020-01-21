import { Component, OnInit, Input } from '@angular/core';
// tslint:disable: variable-name prefer-const one-line whitespace no-trailing-whitespace
@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  @Input() goldCount: number;
  constructor() { }

  ngOnInit() {
  }
  gold(place: string): void
  {
    if(place === 'farm')
    {
      // console.log(`Clicked ${place} button`);
      this.goldCount+=random(2,5);
    }
    else if(place === 'cave')
    {
      // console.log(`Clicked ${place} button`);
      this.goldCount+=random(5,10);
    }
    else if(place === 'casino')
    {
      // console.log(`Clicked ${place} button`);
      this.goldCount+=random(-100,100);
    }
    else
    {
      // console.log(`Clicked ${place} button`);
      this.goldCount+=random(7,15);
    }
    console.log(this.goldCount);
  }
}
function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
