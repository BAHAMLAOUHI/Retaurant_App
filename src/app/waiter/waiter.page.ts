import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.page.html',
  styleUrls: ['./waiter.page.scss'],
})
export class WaiterPage implements OnInit {
  items = [
    { name: 'Item1', image: 'https://ionicframework.com/docs/img/demos/thumbnail.svg', state: "Accept", room:26 ,},
    { name: 'Item2', image: 'https://ionicframework.com/docs/img/demos/thumbnail.svg', state: "Accept", room:12},
    { name: 'Item3', image: 'https://ionicframework.com/docs/img/demos/thumbnail.svg', state: "Accept", room:13},
    { name: 'Item4', image: 'https://ionicframework.com/docs/img/demos/thumbnail.svg', state: "Accept", room:2},
    { name: 'Item5', image: 'https://ionicframework.com/docs/img/demos/thumbnail.svg', state: "Accept", room:3},
    { name: 'Item6', image: 'https://ionicframework.com/docs/img/demos/thumbnail.svg', state: "Accept", room:9},
    { name: 'Item7', image: 'https://ionicframework.com/docs/img/demos/thumbnail.svg', state: "Accept", room:13},
    { name: 'Item8', image: 'https://ionicframework.com/docs/img/demos/thumbnail.svg', state: "Accept", room:2},
    { name: 'Item9', image: 'https://ionicframework.com/docs/img/demos/thumbnail.svg', state: "Accept", room:13},
    { name: 'Item10', image: 'https://ionicframework.com/docs/img/demos/thumbnail.svg', state: "Accept", room:2}
  ];

  toggleItemState(item: any) {
    if (item.state=="Accept"){
      item.state = "On the Way";
    } else if(item.state=="On the Way"){
      item.state="Delivered" ;
    } 
    
  }

  RemoveItem(item: any): void {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
    

  
  constructor() {}

  ngOnInit() {
  }

}
