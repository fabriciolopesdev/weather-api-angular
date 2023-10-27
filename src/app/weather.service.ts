import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = '0d404025b4da69a0c4add6a9f96f2a42';


  constructor(private http:HttpClient) { }

  getWeather(city: string) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q={city}&appid={this.apiKey}`);
  }
}




