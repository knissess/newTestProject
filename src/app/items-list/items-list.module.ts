import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { RouterModule } from '@angular/router';
import { RequestService } from './services/request.service';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ItemsListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ItemsListComponent }]),
    MatButtonModule,
  ],
  providers: [RequestService],
})
export class ItemsListModule {}
