import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: FaceSnap;

  // Si vous lisez l'erreur retournée, c'est parce que vous avez créé des propriétés sans les initialiser
  // Pour "promettre" à TypeScript qu'on va les initialiser, on peut ajouter un bang  !  à chaque propriété
  snapButtonText!: string;
  userHasSnapped!: boolean;

  ngOnInit(): void {
      // this.title = 'Kobe Bryant';
      // this.description = 'Kobe the Legend !';
      // this.createdAt = new Date();
      // this.snap = 0;
      // this.imageUrl= 'https://icibillet.com/uploads/une-rue-de-los-angeles-s-appellera-kobe-bryant_image_1.jpg';
      this.snapButtonText= 'Oh Snap !';
      this.userHasSnapped= false;
  }

  onSnap(): void {
    if (this.userHasSnapped) {
      this.unSnap();
    } else {
      this.snap();
      }
    }

    unSnap() {
      this.faceSnap.removeSnap();
      this.snapButtonText = 'Oh Snap !';
      this.userHasSnapped = false;
  }

    snap() {
      this.faceSnap.addSnap();
      this.snapButtonText = 'Oops, unSnap !';
      this.userHasSnapped = true;
    }
}
