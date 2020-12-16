import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(
    public httpClient: HttpClient
  ) { }

  searchBeer(search: string) {
    return this.httpClient.get(environment.baseUrl + `/beers?food=${search}`, {})

  }
}
