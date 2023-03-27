import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./items-list/items-list.module').then((m) => m.ItemsListModule),
  },
  {
    path: 'add-item',
    loadChildren: () =>
      import('./add-item/add-item.module').then((m) => m.AddItemModule),
  },
  {
    path: 'item',
    loadChildren: () =>
      import('./item/item.module').then((m) => m.ItemModule),
  },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
