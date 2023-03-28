import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { Observable } from 'rxjs';
import { ItemModel } from 'src/models/item.model';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export class ItemsListComponent implements OnInit {
  public items$: Observable<ItemModel[]>;

  constructor(private http: RequestService) {}

  ngOnInit(): void {
    this.getItemsList();
  }

  public getItemsList(): void {
    this.items$ = this.http.getItems();
  }
}
