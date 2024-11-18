import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-article-content-block',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './article-content-block.component.html',
    styleUrl: './article-content-block.component.scss'
})
export class ArticleContentBlockComponent {
    @Input() cardType!: number;
    @Input() title!: string;
    @Input() contents!: string[];
    
    ngOnInit(): void{
        //console.log(this.contents);
    }
}
