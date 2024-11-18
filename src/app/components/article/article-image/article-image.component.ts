import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-article-image',
	standalone: true,
	imports: [],
	templateUrl: './article-image.component.html',
	styleUrl: './article-image.component.scss'
})
export class ArticleImageComponent {
	@Input() imgSrc!: string;
}
