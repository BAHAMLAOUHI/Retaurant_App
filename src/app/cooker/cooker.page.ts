import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-cooker',
  templateUrl: './cooker.page.html',
  styleUrls: ['./cooker.page.scss'],
})
export class CookerPage implements OnInit {
  selectedSegment: string = 'waiting';
  orders = [
    {
      date: '2023-07-18', // Replace this with the actual date of the order
      id: 2, // Replace this with the actual order ID
      details: [
        {
          id: 1,
          name: 'Prima Pizza',
          note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci magni nisi repudiandae cupiditate nobis, perferendis impedit quae, facilis nulla magnam voluptates! Eos vero doloremque natus velit! Voluptates eaque illum impedit!',
          quantity: 4,
          price: 25.99,
          status: 'waiting',
          image:
            'https://foodhub.scene7.com/is/image/woolworthsltdprod/2004-easy-pepperoni-pizza:Mobile-1300x1150',
        },
        {
          id: 2,
          name: 'Caprese Salad',
          note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci magni nisi repudiandae cupiditate nobis, perferendis impedit quae, facilis nulla magnam voluptates! Eos vero doloremque natus velit! Voluptates eaque illum impedit!',
          quantity: 4,
          price: 25.99,
          status: 'waiting',
          image:
            'https://www.foodnetwork.com/content/dam/images/food/fullset/2003/9/22/0/tm1a35_caprese_salad.jpg',
        },
        {
          id: 3,
          name: 'Caprese Salad',
          note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci magni nisi repudiandae cupiditate nobis, perferendis impedit quae, facilis nulla magnam voluptates! Eos vero doloremque natus velit! Voluptates eaque illum impedit!',
          quantity: 4,
          price: 25.99,
          status: 'waiting',
          image:
            'https://foodhub.scene7.com/is/image/woolworthsltdprod/2004-easy-pepperoni-pizza:Mobile-1300x1150',
        },
      ],
    },
    {
      date: '2023-07-18', // Replace this with the actual date of the order
      id: 1, // Replace this with the actual order ID
      details: [
        {
          id: 1,
          name: 'Prima Pizza',
          note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci magni nisi repudiandae cupiditate nobis, perferendis impedit quae, facilis nulla magnam voluptates! Eos vero doloremque natus velit! Voluptates eaque illum impedit!',
          quantity: 4,
          price: 25.99,
          status: 'waiting',
          image:
            'https://foodhub.scene7.com/is/image/woolworthsltdprod/2004-easy-pepperoni-pizza:Mobile-1300x1150',
        },
        {
          id: 2,
          name: 'Caprese Salad',
          note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci magni nisi repudiandae cupiditate nobis, perferendis impedit quae, facilis nulla magnam voluptates! Eos vero doloremque natus velit! Voluptates eaque illum impedit!',
          quantity: 4,
          price: 25.99,
          status: 'waiting',
          image:
            'https://www.foodnetwork.com/content/dam/images/food/fullset/2003/9/22/0/tm1a35_caprese_salad.jpg',
        },
        {
          id: 3,
          name: 'Caprese Salad',
          note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci magni nisi repudiandae cupiditate nobis, perferendis impedit quae, facilis nulla magnam voluptates! Eos vero doloremque natus velit! Voluptates eaque illum impedit!',
          quantity: 4,
          price: 25.99,
          status: 'waiting',
          image:
            'https://foodhub.scene7.com/is/image/woolworthsltdprod/2004-easy-pepperoni-pizza:Mobile-1300x1150',
        },
      ],
    },
  ];

  constructor(private toastController: ToastController) {}

  ngOnInit() {}
  async changeStatus(orderId: number, detailId: number) {
    const order = this.orders.find((order) => order.id === orderId);
    if (order) {
      const detail = order.details.find((detail) => detail.id === detailId);
      if (detail) {
        if (detail.status === 'waiting') {
          detail.status = 'inProgress';
          const toast = await this.toastController.create({
            message: 'Order detail status updated to "in Progress"!',
            duration: 1500,
            color: 'warning',
            position: 'top',
          });
          await toast.present();
          console.log('Order detail status has been updated:', detail);
        } else if (detail.status === 'inProgress') {
          detail.status = 'ready';
          const toast = await this.toastController.create({
            message: 'Order status updated to "Ready" !',
            duration: 1500,
            position: 'top',
            color: 'warning',
          });

          await toast.present();
        } else {
          console.log('Order detail status is not "Waiting".');
        }
      } else {
        console.log('Order detail not found.');
      }
    } else {
      console.log('Order not found.');
    }
  }
  async cancelOrder(orderId: number, detailId: number) {
    const order = this.orders.find((order) => order.id === orderId);
    if (order) {
      const detail = order.details.find((detail) => detail.id === detailId);
      if (detail) {
        detail.status = 'canceled';

        const toast = await this.toastController.create({
          message: 'Order status updated to "Canceled" !',
          duration: 1500,
          color: 'warning',

          position: 'top',
        });

        await toast.present();
        console.log('Order status updated:', order);
      }
    } else {
      console.log('Order not found');
    }
  }
}
