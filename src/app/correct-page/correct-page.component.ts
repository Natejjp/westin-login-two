import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-correct-page',
  templateUrl: './correct-page.component.html',
  styleUrls: ['./correct-page.component.css']
})
export class CorrectPageComponent implements OnInit {

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  routeToLogin() {
    this.router.navigate(['/login']);
  }
}
