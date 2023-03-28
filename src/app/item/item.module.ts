import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './components/item/item.component';
import { RouterModule } from '@angular/router';
import { GetCurrentItemService } from './services/get-current-item.service';

@NgModule({
  declarations: [ItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ItemComponent }]),
  ],
  providers: [GetCurrentItemService],
})
export class ItemModule {}
