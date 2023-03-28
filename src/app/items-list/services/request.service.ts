import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemModel } from 'src/models/item.model';

@Injectable()
export class RequestService {
  constructor(private http: HttpClient) {}

  public getItems(): Observable<ItemModel[]> {
    return this.http.get<ItemModel[]>('/items');
  }
}
