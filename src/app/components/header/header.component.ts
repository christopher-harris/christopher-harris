import {Component, OnInit} from '@angular/core';
import {Router, Routes} from "@angular/router";

@Component({
  selector: 'ch-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  routes: Routes = this.router.config;

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.router);
  }

}
