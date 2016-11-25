import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { GeocodingService } from '../shared/geocoding.service';
import { Location } from '../shared/core/location.class';

@Component({
  selector: 'my-leafmap',
  templateUrl: './leafmap.component.html',
  styleUrls: ['./leafmap.component.scss']
})

export class LeafmapComponent implements OnInit {

    constructor(private mapService: ApiService, private geocoder: GeocodingService) {
    }

    ngOnInit() {
        let map = L.map('map', {
            zoomControl: false,
            center: L.latLng(40.731253, -73.996139),
            zoom: 12,
            minZoom: 4,
            maxZoom: 19,
            layers: [this.mapService.baseMaps.OpenStreetMap]
        });

        L.control.zoom({ position: 'topright' }).addTo(map);
        L.control.layers(this.mapService.baseMaps).addTo(map);
        L.control.scale().addTo(map);

        this.mapService.map = map;
        this.geocoder.getCurrentLocation()
            .subscribe(
                location => map.panTo([location.latitude, location.longitude]),
                err => console.error(err)
            );
    }

}
