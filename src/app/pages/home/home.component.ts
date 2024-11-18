import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { HeroSectionComponent } from "../../components/hero-section/hero-section.component";
import { TopBlogsComponent } from "../../components/top-blogs/top-blogs.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, HeroSectionComponent, TopBlogsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
