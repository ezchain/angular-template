import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
   show:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  show$ = this.show.asObservable();
  constructor() { }

  setShow(value: boolean) {
    console.log(value);
    this.show.next(value);
  }

}
