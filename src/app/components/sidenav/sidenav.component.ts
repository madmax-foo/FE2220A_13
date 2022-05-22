import { Component, OnInit } from '@angular/core';
import { MatDrawerContainer } from '@angular/material/sidenav';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector:'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  showFiller = true;

  constructor() { }

  ngOnInit(): void {
  }
logOut(){

}
}
