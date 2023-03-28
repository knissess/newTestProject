import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpResponse,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ItemModel } from '../models/item.model';
import { ItemDetail } from 'src/models/item-detail.model';
import { ItemInformation } from 'src/models/item-information.model';

@Injectable()
export class Interceptor implements HttpInterceptor {
  private itemsList: ItemModel[] = [
    {
      id: 1,
      name: 'Объект1',
      price: 50,
    },
    {
      id: 2,
      name: 'Объект2',
      price: 150,
    },
    {
      id: 3,
      name: 'Объект3',
      price: 250,
    },
  ];

  private itemsListDetails: ItemDetail[] = [
    {
      id: 1,
      description: 'sfafasgasgsa',
    },
    {
      id: 2,
      description: 'sfafasgasgsa',
    },
    {
      id: 3,
      description: 'sfafasgasgsa',
    },
  ];

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<any> {
    const { url, method } = request;

    if (url.endsWith('/items') && method === 'GET') {
      return of(new HttpResponse({ status: 200, body: this.itemsList }));
    }
    const param = request.params.get('id');
    if (url.endsWith('/item') && method === 'GET' && !!param) {
      const detail = this.itemsListDetails.find(
        (el) => el.id.toString() === param
      );
      const item = this.itemsList.find((el) => el.id.toString() === param);
      const itemInformation = {
        ...item,
        ...detail,
      };

      return of(new HttpResponse({ status: 200, body: itemInformation }));
    }
    return of(null);
  }
}
