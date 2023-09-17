import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confetti',
  templateUrl: './confetti.component.html',
  styleUrls: ['./confetti.component.css']
})
export class ConfettiComponent implements OnInit {
  confettiPieces: any[] = [];

  ngOnInit() {
    // Create multiple confetti pieces with random colors
    for (let i = 0; i < 50; i++) {
      const confettiPiece = {
        left: Math.random() * 100 + '%',
        animationDelay: Math.random() * 5 + 's',
        color: this.getRandomColor()
      };
      this.confettiPieces.push(confettiPiece);
    }
  }

  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}


