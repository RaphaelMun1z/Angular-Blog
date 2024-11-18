import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() imageUrl!: string;
  @Input() title!: string;
  @Input() description!: string;
  
  onCardClick(event: MouseEvent): void {
    console.log('Clique no card');
  }
  
  onButtonClick(event: MouseEvent): void {
    event.stopPropagation();
    console.log('Clique no botão');
  }
}
