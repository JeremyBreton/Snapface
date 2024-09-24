import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit(): void {
    this.mySnap = new FaceSnap(
      'Kobe Bryant',
      'Kobe the Legend !',
      'https://icibillet.com/uploads/une-rue-de-los-angeles-s-appellera-kobe-bryant_image_1.jpg',
      new Date(),
      24
    );
    this.myOtherSnap = new FaceSnap(
      'Michael Jordan',
      'MJ the GOAT !',
      'https://agorasports.fr/wp-content/uploads/2020/12/Michael-Jordan.jpg',
      new Date(),
      23
    );
    this.myLastSnap = new FaceSnap(
      'Stephen Curry',
      'Cheeeeeeef Steeeeeeeeeeeeeph !',
      'https://imgresizer.eurosport.com/unsafe/2560x1440/filters:format(jpeg)/origin-imgresizer.eurosport.com/2023/11/25/3831444-77861808-2560-1440.jpg',
      new Date(),
      30
    );

    this.myOtherSnap.setLocation('Los Angeles');
  }
}

