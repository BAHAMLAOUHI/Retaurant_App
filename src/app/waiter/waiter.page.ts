import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.page.html',
  styleUrls: ['./waiter.page.scss'],
})
export class WaiterPage implements OnInit {
  selectedSegment: string = 'primary';

  orders = [
    {
      id: '1',
      pack: [
        {
          name: 'Crispy Fish Goujons',
          image:
            'https://firebasestorage.googleapis.com/v0/b/myecommerce-7b279.appspot.com/o/paneer.jpg?alt=media&token=f1307cea-e1b5-4408-bd25-50c27f39ce30',
          state: 'waiting',
          room: 26,
        },
        {
          name: 'Moroccan Skirt Steak',
          image:
            'https://firebasestorage.googleapis.com/v0/b/myecommerce-7b279.appspot.com/o/food.jpg?alt=media&token=abc7f9e0-f253-41b9-b6b6-6ecca7b550cf',
          state: 'waiting',
          room: 26,
        },
        {
          name: 'Simple Sumptuous Sea Bream',
          image:
            'https://firebasestorage.googleapis.com/v0/b/myecommerce-7b279.appspot.com/o/food3.jpg?alt=media&token=f9bf5aab-c75f-40ea-aca7-7c46d875c22b',
          state: 'waiting',
          room: 26,
        },
      ],
    },
    {
      id: '2',
      pack: [
        {
          name: 'Crispy Fish Goujons',
          image:
            'https://firebasestorage.googleapis.com/v0/b/myecommerce-7b279.appspot.com/o/paneer.jpg?alt=media&token=f1307cea-e1b5-4408-bd25-50c27f39ce30',
          state: 'waiting',
          room: 3,
        },
        {
          name: 'Simple Sumptuous Sea Bream',
          image:
            'https://firebasestorage.googleapis.com/v0/b/myecommerce-7b279.appspot.com/o/food3.jpg?alt=media&token=f9bf5aab-c75f-40ea-aca7-7c46d875c22b',
          state: 'waiting',
          room: 3,
        },
      ],
    },
    {
      id: '3',
      pack: [
        {
          name: 'Crispy Fish Goujons',
          image:
            'https://firebasestorage.googleapis.com/v0/b/myecommerce-7b279.appspot.com/o/paneer.jpg?alt=media&token=f1307cea-e1b5-4408-bd25-50c27f39ce30',
          state: 'waiting',
          room: 12,
        },
        {
          name: 'Moroccan Skirt Steak',
          image:
            'https://firebasestorage.googleapis.com/v0/b/myecommerce-7b279.appspot.com/o/food.jpg?alt=media&token=abc7f9e0-f253-41b9-b6b6-6ecca7b550cf',
          state: 'waiting',
          room: 12,
        },
        {
          name: 'Simple Sumptuous Sea Bream',
          image:
            'https://firebasestorage.googleapis.com/v0/b/myecommerce-7b279.appspot.com/o/food3.jpg?alt=media&token=f9bf5aab-c75f-40ea-aca7-7c46d875c22b',
          state: 'waiting',
          room: 12,
        },
      ],
    },
  ];

  toggleItemState(item: any) {
    if (item.state === 'waiting') {
      item.state = 'On the Way';
    } else if (item.state === 'On the Way') {
      item.state = 'Delivered';
    }
  }
  getWaitingCount(): number {
    return this.orders[0].pack.filter((item) => item.state === 'waiting' || item.state === 'On the Way').length;
  }
  
  getDeliveredCount(): number {
    return this.orders[0].pack.filter((item) => item.state === 'Delivered').length;
  }
  

  // RemoveItem(item: any): void {
  //   const index = this.orders.pack.indexOf(item);
  //   if (index !== -1) {
  //     this.items.splice(index, 1);
  //   }
  // }

  constructor() {}

  ngOnInit() {}
}
