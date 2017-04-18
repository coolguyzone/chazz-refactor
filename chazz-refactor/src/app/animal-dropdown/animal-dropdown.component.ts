import { Component, OnInit } from '@angular/core';
import { APISearchService } from '../dropdowns/dropdowns.service';
import {
  Output,
  EventEmitter,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-animal-dropdown',
  templateUrl: './animal-dropdown.component.html',
  styleUrls: ['./animal-dropdown.component.css']
})
export class AnimalDropdownComponent implements OnInit {

  constructor(private APISearch: APISearchService,
              private el: ElementRef) {
  }

  ngOnInit() {
  }

}
