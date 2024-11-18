import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSectionComponent } from "./components/hero-section/hero-section.component";
import { TopBlogsComponent } from "./components/top-blogs/top-blogs.component";
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroSectionComponent, TopBlogsComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'blog';
}
