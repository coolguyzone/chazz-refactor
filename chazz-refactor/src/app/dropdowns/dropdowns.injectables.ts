import {
  APISearchService,
  ANIMAL_URL,
  FIRMNESS_URL,
  LOGIN_URL
} from './dropdowns.service';

export const dropdownsInjectables: Array<any> = [
  {provide: APISearchService, useClass: APISearchService},
  {provide: ANIMAL_URL, useValue: ANIMAL_URL},
  {provide: FIRMNESS_URL, useValue: FIRMNESS_URL},
  {provide: LOGIN_URL, useValue: LOGIN_URL}
];
