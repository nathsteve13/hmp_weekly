import { Component, OnInit } from '@angular/core';
import { FoodserviceService } from '../foodservice.service';
import * as L from 'leaflet';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
  standalone: false,
})
export class LocationPage implements OnInit {
  lat: number = 0;
  lon: number = 0;
  markerLokasi: any;
  map: any;
  timerSubscription: Subscription | undefined;
  isInit = false;
  markerTeman: any;
  lat2 = 0.0;
  lon2 = 0.0;

  constructor(private foodservice: FoodserviceService) {}

  ngOnInit() {
    this.getCoordinates();
  }

  getCoordinates() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.lat = position.coords.latitude;
          this.lon = position.coords.longitude;

          if (!this.isInit) {
            this.initializeMap();
            this.isInit = true;
            this.startTimer();
          } else {
            this.moving();
          }
        },
        (error) => {
          console.error('Error getting location', error);
        }
      );
    } else {
      console.error('Geolocation is not supported in this browser.');
    }
  }

  moving() {
    this.markerLokasi.setLatLng([this.lat, this.lon]);

    this.foodservice.updateMyPosition(this.lat, this.lon).subscribe({
      next: () => console.log('Lokasi saya dikirim ke server'),
      error: () => console.log('Gagal update posisi saya'),
    });

    this.foodservice.posisi_xy().subscribe((data) => {
      this.lat2 = data.y;
      this.lon2 = data.x;

      if (this.markerTeman) {
        this.markerTeman.setLatLng([this.lat2, this.lon2]);
      }
    });
  }

  initializeMap() {
    this.map = L.map('map').setView([this.lat, this.lon], 13);
    const googleStreets = L.tileLayer(
      'http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
      { maxZoom: 20, subdomains: ['mt0', 'mt1', 'mt2', 'mt3'] }
    );

    var markerIcon = L.icon({
      iconUrl:
        'https://toppng.com/uploads/preview/in-location-map-icon-navigation-symbol-ma-google-maps-marker-blue-11562916561qaf3tyejum.png',
      iconSize: [50, 50],
      iconAnchor: [25, 50],
    });
    this.markerLokasi = L.marker([this.lat, this.lon], { icon: markerIcon });
    this.markerLokasi.addTo(this.map);

    this.markerTeman = L.marker([this.lat2, this.lon2], { icon: markerIcon });
    this.markerTeman.addTo(this.map);

    googleStreets.addTo(this.map);
  }

  startTimer() {
    this.timerSubscription = interval(1000).subscribe(() => {
      this.getCoordinates();
    });
  }
}
