import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-main-card',
	standalone: true,
	imports: [],
	templateUrl: './main-card.component.html',
	styleUrl: './main-card.component.scss'
})
export class MainCardComponent {
	@Input() imageUrl!: string;
	@Input() title!: string;
	
	onCardClick(event: MouseEvent): void {
		console.log('Clique no card');
	}
	
	onButtonClick(event: MouseEvent): void {
		event.stopPropagation();
		console.log('Clique no botão');
	}
}
