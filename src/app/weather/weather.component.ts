import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { faCloudSunRain, faDropletSlash, faMagnifyingGlass, faTemperatureHalf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  city!: string;
  weatherData: any;
  faCloudSunRain = faCloudSunRain;
  faTemperatureHalf = faTemperatureHalf;
  faDropletSlash = faDropletSlash;
  faMagnifyingGlass =  faMagnifyingGlass;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  getWeather() {
    this.weatherService.getWeather(this.city).subscribe((data) => {
      this.weatherData = data;
      console.log(data);
    });
  }
}
