import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from '../app-routing.module';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports: [
    LayoutComponent,
    FooterComponent
  ]
})
export class CoreModule { }
