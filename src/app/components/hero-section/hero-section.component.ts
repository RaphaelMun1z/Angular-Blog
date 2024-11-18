import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'app-hero-section',
	standalone: true,
	imports: [CommonModule, RouterModule],
	templateUrl: './hero-section.component.html',
	styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
	notStarted: boolean = true;
	@Input() postId: number = 1;
	
	playVideo() {
		const video = document.getElementById('video') as HTMLVideoElement;
		const popup = document.getElementById('pop-up') as HTMLVideoElement;
		if (video) {
			video.play();
			this.notStarted = false;
		}
	}
}
