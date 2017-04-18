import {
  Injectable,
  Inject
} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { FetchResult } from './fetch-result.model';
import 'rxjs/add/operator/map'


export const FIRMNESS_URL = 'http://cheeswhiz.herokuapp.com/api/cheese/firmness/';
export const ANIMAL_URL = 'http://cheeswhiz.herokuapp.com/api/cheese/animal/';
export const LOGIN_URL = 'http://cheeswhiz.herokuapp.com/api/user/login';

@Injectable()
export class APISearchService {
  constructor(private http: Http,
    @Inject(ANIMAL_URL) private animalUrl: string,
    @Inject(FIRMNESS_URL) private firmnessUrl: string,
    @Inject(LOGIN_URL) private loginUrl: string) {

    }


    animalSearch(animal: string, event: any): void {
        console.log('yo!');
        event.preventDefault();
        const param: string = `${animal}`;
        const fetchUrl = `http://cheeswhiz.herokuapp.com/api/cheese/animal/${param}`;
        console.log('fetchUrl', fetchUrl);
      this.http.request(fetchUrl)
      .subscribe((res: Response) => {
        console.log(res.json())
    });
  }
}
