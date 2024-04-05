import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  show = false;
  constructor(private sideBarService: SidebarService) {}

  ngOnInit(): void {
    this.sideBarService.show.asObservable().subscribe(value => {
      console.log(value);
      this.show = value;
    });
  }

  changeShow() {
    this.sideBarService.setShow(false);
  }
}
