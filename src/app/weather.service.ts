import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = '543ce78571007527daf72960b7b3ab00';


  constructor(private http:HttpClient) { }

  getWeather(city: string) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`);
  }
}




