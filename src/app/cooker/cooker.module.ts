import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CookerPageRoutingModule } from './cooker-routing.module';

import { CookerPage } from './cooker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CookerPageRoutingModule
  ],
  declarations: [CookerPage]
})
export class CookerPageModule {}
