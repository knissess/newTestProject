import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddItemService } from './services/add-item.service';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AddItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AddItemComponent }]),
    ReactiveFormsModule,
    MatButtonModule,
  ],
  providers: [AddItemService],
})
export class AddItemModule {}
