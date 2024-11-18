import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss'
})
export class HeaderComponent {
	isScrolled: boolean = false;
	
	@HostListener('window:scroll', [])
	onWindowScroll(): void {
		this.isScrolled = window.scrollY > 100;
	}
}
