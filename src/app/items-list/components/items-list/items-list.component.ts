import { Component } from '@angular/core';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export class ItemsListComponent {
  constructor(private http: RequestService) {}

  public getItemsList(): void {
    this.http.getItems().subscribe((r) => {
      console.log('r', r);
    });
  }
}
