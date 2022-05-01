import { CafeListComponent } from './cafe-list/cafe-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CafeListComponent],
  declarations: [CafeListComponent]
})
export class CafeModule { }
