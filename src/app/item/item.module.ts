import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './components/item/item.component';
import { RouterModule } from '@angular/router';
import { GetCurrentItemService } from './services/get-current-item.service';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ItemComponent }]),
    MatButtonModule,
  ],
  providers: [GetCurrentItemService],
})
export class ItemModule {}
