import { Component, OnInit } from '@angular/core';
import { AlertController, AlertInput } from '@ionic/angular';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.page.html',
  styleUrls: ['./waiter.page.scss'],
})
export class WaiterPage implements OnInit {
  selectedSegment: string = 'secondary';

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
          description:
            "Here's a small text description for the card content. Nothing more, nothing less.",
          // isHighlighted: false,
          Price: '50$',
        },
        {
          name: 'Moroccan Skirt Steak',
          image:
            'https://firebasestorage.googleapis.com/v0/b/myecommerce-7b279.appspot.com/o/food.jpg?alt=media&token=abc7f9e0-f253-41b9-b6b6-6ecca7b550cf',
          state: 'waiting',
          room: 26,
          description:
            "Here's a small text description for the card content. Nothing more, nothing less.",
          // isHighlighted: false,
          Price: '20$',
        },
        {
          name: 'Simple Sumptuous Sea Bream',
          image:
            'https://firebasestorage.googleapis.com/v0/b/myecommerce-7b279.appspot.com/o/food3.jpg?alt=media&token=f9bf5aab-c75f-40ea-aca7-7c46d875c22b',
          state: 'waiting',
          room: 26,
          description:
            "Here's a small text description for the card content. Nothing more, nothing less.",
          // isHighlighted: false,
          Price: '30$',
        },
      ],
      state: 'Waiting',
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
          description:
            "Here's a small text description for the card content. Nothing more, nothing less.",
          // isHighlighted: false,
          Price: '40$',
        },
        {
          name: 'Crispy Fish Goujons',
          image:
            'https://firebasestorage.googleapis.com/v0/b/myecommerce-7b279.appspot.com/o/paneer.jpg?alt=media&token=f1307cea-e1b5-4408-bd25-50c27f39ce30',
          state: 'waiting',
          room: 3,
          description: 'bzeyd qares o mnghir melh ',
          // isHighlighted: false,
          Price: '40$',
        },
        {
          name: 'Simple Sumptuous Sea Bream',
          image:
            'https://firebasestorage.googleapis.com/v0/b/myecommerce-7b279.appspot.com/o/food3.jpg?alt=media&token=f9bf5aab-c75f-40ea-aca7-7c46d875c22b',
          state: 'waiting',
          room: 3,
          description:
            "Here's a small text description for the card content. Nothing more, nothing less.",
          // isHighlighted: false,
          Price: '80$',
        },
      ],
      state: 'Waiting',
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
          description:
            "Here's a small text description for the card content. Nothing more, nothing less.",
          // isHighlighted: false,
          Price: '50$',
        },
        {
          name: 'Moroccan Skirt Steak',
          image:
            'https://firebasestorage.googleapis.com/v0/b/myecommerce-7b279.appspot.com/o/food.jpg?alt=media&token=abc7f9e0-f253-41b9-b6b6-6ecca7b550cf',
          state: 'waiting',
          room: 12,
          description:
            "Here's a small text description for the card content. Nothing more, nothing less.",
          // isHighlighted: false,
          Price: '30$',
        },
        {
          name: 'Simple Sumptuous Sea Bream',
          image:
            'https://firebasestorage.googleapis.com/v0/b/myecommerce-7b279.appspot.com/o/food3.jpg?alt=media&token=f9bf5aab-c75f-40ea-aca7-7c46d875c22b',
          state: 'waiting',
          room: 12,
          description:
            "Here's a small text description for the card content. Nothing more, nothing less.",
          // isHighlighted: false,
          Price: '20$',
        },
      ],
      state: 'Waiting',
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

  /// to manage the state of the order and for the confirmation of the delivery!!

  buttonLabel: string = 'In Delivery';
  buttonColor: string = 'secondary';
  showContent: boolean = false;

  handleButtonClick() {
    if (this.buttonLabel === 'In Delivery') {
      this.buttonColor = 'success';
      this.buttonLabel = 'Delivered';
      this.orders[0].state = 'In Delivery';
      console.log(this.orders[0].state);
    } else if (this.buttonLabel === 'Delivered') {
      this.orders[0].state = 'Delivered';

      console.log(this.orders[0].state);
      this.presentAlert();
    }
  }

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    // const NewOrder = this.orders[1]?.pack.map((item) => item.name).join(',');
    // const subHeader = NewOrder
    //   ? `New Order: ${NewOrder}`
    //   : 'there is no new orders';

    const alert = await this.alertController.create({
      header: `Order Done`,
      subHeader: ` Room ${this.orders[0]?.pack[0].room}`,
      message: `Total Price : ${this.getTotalPrice()}`,
      buttons: [
        {
          text: 'Next Order',
          handler: () => {
            this.buttonLabel = 'In Delivery';
            this.buttonColor = 'secondary';
            this.orders.splice(0, 1);
            this.showContent = !this.showContent;
            setTimeout(() => {
              if (this.orders.length > 0) {
                this.showPopupMessage();
              }
            }, 2000);
          },
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

  handleRefresh(event: any) {
    this.showNoItemsMessage = true;
    setTimeout(() => {
      this.RefreshOrders();
      event.target.complete();
      this.showNoItemsMessage = false;
    }, 1500);
  }
  showNoItemsMessage = false;

  RefreshOrders() {
    if (this.orders.length > 0) {
      this.showPopupMessage();
    }
  }

  ngOnInit() {
    setTimeout(() => {
      if (this.orders.length > 0) {
        this.showPopupMessage();
      }
    }, 2000);
  }

  async showPopupMessage() {
    const NewOrder = this.orders[0]?.pack.map((item) => item.name).join(',');
    const Room = this.orders[0]?.pack[0].room;
    const subHeader = NewOrder
      ? `New Order:  ${NewOrder}`
      : 'there is no new orders';
    const alert = await this.alertController.create({
      header: `Room : ${Room}`,
      message: subHeader,

      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.showContent = true;
            console.log(this.orders[0].state);
            this.orders[0].state = 'On the way';
            console.log(this.orders[0].state);
          },
        },
      ],
    });

    await alert.present();
  }

  getTotalPrice(): string {
    let totalPrice = 0;
    for (const item of this.orders[0].pack) {
      totalPrice += parseFloat(item.Price.replace('$', ''));
    }
    return totalPrice.toFixed(2) + '$';
  }
}
