import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  protected readonly url = 'http://api.giphy.com/v1/gifs/search?api_key=CdRKiCMbTnt9CkZTZ0lGukSczk6iT4Z6';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'text/html'
    })
  };

  constructor(private http: HttpClient) { }

  getAll(q: string, offset: number, limit: number) {
    return this.http.get(
        this.url  + `&q=${q}` + `&offset=${offset}`  + `&limit=${limit}`);
  }
}
