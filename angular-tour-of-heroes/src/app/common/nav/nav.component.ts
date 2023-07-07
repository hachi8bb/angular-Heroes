import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']

})

export class NavComponent {
  showLinks = false;

  constructor(private router: Router) {}

  toggleLinks() {
    this.showLinks = !this.showLinks;
  }

  navigateTo(link: string) {
    this.router.navigateByUrl(link);
  }

}
