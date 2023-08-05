import { Component, OnInit } from '@angular/core';
import { Device } from '@capacitor/device';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  id: any;
  battery: any;
  info: any;

  ngOnInit() {
    // Call the functions to log the information
    this.logDeviceInfo();
    this.logBatteryInfo();
    this.logDeviceId();
  }

  logDeviceInfo = async () => {
    const info = await Device.getInfo();
    console.log(info);
    this.info = info;
  };

  logBatteryInfo = async () => {
    const info = await Device.getBatteryInfo();
    console.log(info);
    this.battery = info;
  };

  logDeviceId = async () => {
    try {
      const uuid = await Device.getId();
      console.log('Device ID: ' + uuid);
      this.id = uuid;
      console.log(this.id);
    } catch (error) {
      console.error('Error retrieving device ID:', error);
    }
  };
}
