import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
	selector: 'app-hero-section',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './hero-section.component.html',
	styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
	notStarted: boolean = true;
	
	playVideo() {
		const video = document.getElementById('video') as HTMLVideoElement;
		const popup = document.getElementById('pop-up') as HTMLVideoElement;
		if (video) {
			video.play();
			this.notStarted = false;
		}
	}
}
