import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddItemModel } from 'src/models/add-item.model';
@Injectable()
export class AddItemService {
  constructor(private http: HttpClient) {}

  public addItem(body: AddItemModel): Observable<string> {
    return this.http.post<string>('/add', body);
  }
}
