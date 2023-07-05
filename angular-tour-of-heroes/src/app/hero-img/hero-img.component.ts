import { ActivatedRoute } from '@angular/router';
import { Component, Inject } from '@angular/core';

import { HeroDetailComponent } from 'src/app/hero-detail/hero-detail.component';
import { HeroesComponent } from 'src/app/heroes/heroes.component';
import { InMemoryDataService } from '../in-memory-data.service';

@Component({
  selector: 'app-hero-img',
  templateUrl: './hero-img.component.html',
  styleUrls: ['./hero-img.component.css']
})
export class HeroImgComponent {

  id: string | null;

  constructor(@Inject(ActivatedRoute) private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id') ?? null;
    console.log(this.id);
  }
  

}
