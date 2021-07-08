import { Injectable } from '@angular/core';
import {Link} from "../model/Link";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  private links: Link[] = [
    {
      id: '1',
      name: 'Category 1',
      clicked: 0
    },
    {
      id: '2',
      name: 'Category 2',
      clicked: 0
    },
    {
      id: '3',
      name: 'Category 3',
      clicked: 0
    }
  ];

  constructor() { }

  public getAllLinksByCategory(id: string | undefined): Observable<Link[]> {
    return of(this.links);
  }
}
