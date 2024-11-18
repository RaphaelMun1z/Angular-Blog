import { Component, Input, OnInit } from '@angular/core';
import { ArticleHeaderComponent } from "../../components/article/article-header/article-header.component";
import { ArticleImageComponent } from "../../components/article/article-image/article-image.component";
import { ArticleContentBlockComponent } from "../../components/article/article-content-block/article-content-block.component";
import { ActivatedRoute } from '@angular/router';
import { data } from '../../data/data';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-content',
	standalone: true,
	imports: [CommonModule, ArticleHeaderComponent, ArticleImageComponent, ArticleContentBlockComponent],
	templateUrl: './content.component.html',
	styleUrl: './content.component.scss'
})
export class ContentComponent {
	private id: String | null = "0";
	
	title!: string;
	subtitle!: string;
	date!: string;
	isPopular!: boolean;
	imageSrc!: string;
	content: contentBlock[] = [];
	
	constructor(private route: ActivatedRoute){
		
	}
	
	ngOnInit(): void{
		this.route.paramMap.subscribe(
			value => this.id = value.get("id")
		)
		
		this.setValuesToComponent(this.id);
	}
	
	setValuesToComponent(id: String | null){
		const result = data.filter(article => article.id == id)[0];
		
		this.title = result.title;
		this.subtitle = result.subtitle;
		this.date = result.date;
		this.isPopular = result.isPopular;
		this.imageSrc = result.imageSrc;
		this.content = result.content;
	}
}

interface contentBlock {
	id: String;
	type: Number;
	title: String;
	texts: String[];
}