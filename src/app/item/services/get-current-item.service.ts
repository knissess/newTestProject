import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemInformation } from 'src/models/item-information.model';

@Injectable()
export class GetCurrentItemService {
  constructor(private http: HttpClient) {}

  public getItems(id: number): Observable<ItemInformation> {
    let params = new HttpParams();
    params = params.append('id', id);
    return this.http.get<ItemInformation>('/item', { params });
  }
}
