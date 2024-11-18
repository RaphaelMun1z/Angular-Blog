import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-header.component.html',
  styleUrl: './article-header.component.scss'
})
export class ArticleHeaderComponent {
  @Input() date!: String;
  @Input() title!: String;
  @Input() subtitle!: String;
  @Input() isPopular! : boolean;
}
