import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ItemsListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ItemsListComponent }]),
  ],
})
export class ItemsListModule {}
