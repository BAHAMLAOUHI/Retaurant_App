import { Component, OnInit } from '@angular/core';
import { AlertController, AlertInput } from '@ionic/angular';


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
          description:"Here's a small text description for the card content. Nothing more, nothing less.",
          // isHighlighted: false,
        },
        {
          name: 'Moroccan Skirt Steak',
          image:
            'https://firebasestorage.googleapis.com/v0/b/myecommerce-7b279.appspot.com/o/food.jpg?alt=media&token=abc7f9e0-f253-41b9-b6b6-6ecca7b550cf',
          state: 'waiting',
          room: 26,
          description:"Here's a small text description for the card content. Nothing more, nothing less.",
          // isHighlighted: false,
        },
        {
          name: 'Simple Sumptuous Sea Bream',
          image:
            'https://firebasestorage.googleapis.com/v0/b/myecommerce-7b279.appspot.com/o/food3.jpg?alt=media&token=f9bf5aab-c75f-40ea-aca7-7c46d875c22b',
          state: 'waiting',
          room: 26,
          description:"Here's a small text description for the card content. Nothing more, nothing less.",
          // isHighlighted: false,
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
          description:"Here's a small text description for the card content. Nothing more, nothing less.",
          // isHighlighted: false,

        },
        {
          name: 'Crispy Fish Goujons',
          image:
            'https://firebasestorage.googleapis.com/v0/b/myecommerce-7b279.appspot.com/o/paneer.jpg?alt=media&token=f1307cea-e1b5-4408-bd25-50c27f39ce30',
          state: 'waiting',
          room: 3,
          description:"bzeyd qares o mnghir melh ",
          // isHighlighted: false,

        },
        {
          name: 'Simple Sumptuous Sea Bream',
          image:
            'https://firebasestorage.googleapis.com/v0/b/myecommerce-7b279.appspot.com/o/food3.jpg?alt=media&token=f9bf5aab-c75f-40ea-aca7-7c46d875c22b',
          state: 'waiting',
          room: 3,
          description:"Here's a small text description for the card content. Nothing more, nothing less.",
          // isHighlighted: false,
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
          description:"Here's a small text description for the card content. Nothing more, nothing less.",
          // isHighlighted: false,
        },
        {
          name: 'Moroccan Skirt Steak',
          image:
            'https://firebasestorage.googleapis.com/v0/b/myecommerce-7b279.appspot.com/o/food.jpg?alt=media&token=abc7f9e0-f253-41b9-b6b6-6ecca7b550cf',
          state: 'waiting',
          room: 12,
          description:"Here's a small text description for the card content. Nothing more, nothing less.",
          // isHighlighted: false,
        },
        {
          name: 'Simple Sumptuous Sea Bream',
          image:
            'https://firebasestorage.googleapis.com/v0/b/myecommerce-7b279.appspot.com/o/food3.jpg?alt=media&token=f9bf5aab-c75f-40ea-aca7-7c46d875c22b',
          state: 'waiting',
          room: 12,
          description:"Here's a small text description for the card content. Nothing more, nothing less.",
          // isHighlighted: false,

        },
      ],
    },
  ];

  // toggleItemState(item: any) {
  //   if (item.state === 'waiting') {
  //     item.state = 'On the Way';
  //   } else if (item.state === 'On the Way') {
  //     item.state = 'Delivered';
  //   }
  // }

  // getWaitingCount(): number {
  //   return this.orders[0].pack.filter((item) => item.state === 'waiting' || item.state === 'On the Way').length;
  // }
  
  // getDeliveredCount(): number {
  //   return this.orders[0].pack.filter((item) => item.state === 'Delivered').length;
  // }
  

  // highlightCard(item: any) {
  //   item.isHighlighted = !item.isHighlighted;
  // }

  // RemoveItem(item: any): void {
  //   const index = this.orders.pack.indexOf(item);
  //   if (index !== -1) {
  //     this.items.splice(index, 1);
  //   }
  // }

  getOrderCounts(): { name: string; count: number }[] {
    const counts: { [name: string]: number } = {};
    const orderCounts: { name: string; count: number }[] = [];
  
    for (const item of this.orders[0].pack) {
      if (!counts[item.name]) {
        counts[item.name] = 1;
      } else {
        counts[item.name]++;
      }
    }
  
    for (const name in counts) {
      if (counts.hasOwnProperty(name)) {
        orderCounts.push({ name, count: counts[name] });
      }
    }
  
    return orderCounts;
  }
  


  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const NewOrder = this.orders[1]?.pack.map(item => item.name).join(',');
    const subHeader = NewOrder ? `New Order: ${NewOrder}` : 'there is no new orders';
  
    const alert = await this.alertController.create({
      header: 'Order Done',
      subHeader: subHeader,
      buttons: [
        {
          text: 'Accept',
          handler: () => {
            this.orders.splice(0, 1); 
          }
        },
        // {
        //   text: 'Cancel',
        //   handler: () => {
        //     this.orders.splice(0, 1); 
        //   }
        // }
        
      ],
    });
  
    await alert.present();
  }
  

  ngOnInit() {}
}
