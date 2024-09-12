import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = "https://api.nasa.gov/planetary/apod";
const API_KEY = "YVeUfTZHFpIQkT5bMClwDd5JSDRfSyBl0I8HWKLP";

@Injectable({
  providedIn: 'root'
})
export class PicturesService {
  private http = inject(HttpClient);
  public pictures: any[] = [];
  constructor() { }
}

//Para buscar todas las fotos
getPictures(date: string): Observable < any > {
  return this.http
    .get<any>(`${BASE_URL}?apikey=${API_KEY}&date=${date}`)
    .pipe(delay(1000));
}