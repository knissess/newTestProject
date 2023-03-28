import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { ItemInformation } from 'src/models/item-information.model';
import { GetCurrentItemService } from '../../services/get-current-item.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  public item$: Observable<ItemInformation>;
  private id: number;
  constructor(
    private route: ActivatedRoute,
    private getCurrentItemService: GetCurrentItemService
  ) {}

  ngOnInit(): void {
    this.item$ = this.route.queryParams.pipe(
      switchMap((params) => {
        this.id = params['id'];
        return this.getCurrentItemService.getItems(this.id);
      }),
      tap((r) => {
        console.log('r', r);
      })
    );
  }
}
