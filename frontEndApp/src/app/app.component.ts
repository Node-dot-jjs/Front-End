import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  zoom: number = 10;
  latitude: number = 51.678418;
  longitude: number = 7.809007;
  markers: marker[] = [
    {
      name: 'Yale',
      id: 1,
      latitude: 41.3163,
      longitude: 72.9223
    },
    {
      name: 'Mcmaster',
      id: 2,
      latitude: 43.2609,
      longitude: 79.9192
    },
    {
      name: 'Queens',
      id: 3,
      latitude: 44.2253,
      longitude: 76.4951
    }
  ];
  onLocationChoice(event){
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
  }
  ngOnInit() {
  }
}
interface marker{
  name: string;
  id: number;
  latitude: number;
  longitude: number;
}
