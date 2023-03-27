import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddItemComponent } from './components/add-item/add-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AddItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AddItemComponent }]),
  ],
})
export class AddItemModule {}
