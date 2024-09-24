export class FaceSnap {

    // Cette propriété peut ne pas avoir de "localisaiton" grâce au ?
    location?: string;

    constructor(public title: string,
                public description: string,
                public imageUrl: string,
                public createdAt: Date,
                public snaps: number) {}
  
    addSnap(): void {
      this.snaps++;
    }
  
    removeSnap(): void {
      this.snaps--;
    }
  
    setLocation(location: string): void {
      this.location = location;
    }
  }
  