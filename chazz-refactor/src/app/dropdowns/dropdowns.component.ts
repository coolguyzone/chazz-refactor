import { Component, OnInit } from '@angular/core';
import { APISearchService } from './dropdowns.service'
import {
  Output,
  EventEmitter,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.css']
})
export class DropdownsComponent implements OnInit {

  constructor(private APISearch: APISearchService,
              private el: ElementRef) {
  }

  // animalSearch() {
  //
  // }

  ngOnInit() {
  }

}
