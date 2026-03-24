import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info',
  imports: [CommonModule],
  templateUrl: './info.html',
  styleUrl: './info.css',
})
export class Info {
  faqs = [
    { question: 'Are these models game-ready?', answer: 'Absolutely. Optimized topology, baked textures, and ready to be imported into your engine of choice.' },
    { question: 'Why does my Kerfur keep staring at the wall?', answer: 'That is a known pathfinding glitch. Or ghosts. Probably ghosts. Just restart it.' },
    { question: 'Can I order a real-life Kerfur?', answer: 'Currently, our 3D printer is busy printing coffee cups. Check back in 2027.' },
    { question: 'Did you sleep while rendering this?', answer: 'Sleep is a myth invented by people who don’t have to wait 14 hours for a noise-free image.' }
  ];
}
