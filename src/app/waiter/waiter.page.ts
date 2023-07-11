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
    { name: 'Item4', image: 'https://ionicframework.com/docs/img/demos/thumbnail.svg', state: "Accept", room:2}
  ];

  toggleItemState(item: any) {
    if (item.state=="Accept"){
      item.state = "On the Way";
    } else if(item.state=="On the Way"){
      item.state="Delivered" ;
    } 
    
  }

  RemoveItem(items:any,item:any){
    items.pop(item)
  }
    
  constructor() {}

  ngOnInit() {
  }

}
