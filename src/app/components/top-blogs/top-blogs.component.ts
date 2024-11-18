import { Component } from '@angular/core';
import { CardComponent } from "./card/card.component";
import { MainCardComponent } from "./main-card/main-card.component";

@Component({
  selector: 'app-top-blogs',
  standalone: true,
  imports: [CardComponent, MainCardComponent],
  templateUrl: './top-blogs.component.html',
  styleUrl: './top-blogs.component.scss'
})
export class TopBlogsComponent {

}
