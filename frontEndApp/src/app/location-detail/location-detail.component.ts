import { Component, OnInit, Input } from '@angular/core';
import { ClientLocation } from '../location';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from '../api-service.service';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.scss']
})
export class LocationDetailComponent implements OnInit {

  @Input() clientLocation: ClientLocation;

  constructor(private route: ActivatedRoute, private apiService: ApiService, private location: ClientLocation) { }

  ngOnInit(): void {
    this.getLocation();
  }

  getLocation(): void{

    const name = +this.route.snapshot.paramMap.get('name');
    this.apiService.getLocation(name)
        .subscribe(clientLocation => this.clientLocation = clientLocation);

  }

}
