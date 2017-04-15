import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { dropdownsInjectables } from './dropdowns/dropdowns.injectables';

import { AppComponent } from './app.component';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { RightNavComponent } from './right-nav/right-nav.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { AnimalDropdownComponent } from './animal-dropdown/animal-dropdown.component';
import { FirmnessDropdownComponent } from './firmness-dropdown/firmness-dropdown.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    TitlebarComponent,
    LeftNavComponent,
    RightNavComponent,
    DropdownsComponent,
    AnimalDropdownComponent,
    FirmnessDropdownComponent
  ],
  imports: [
    BsDropdownModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [dropdownsInjectables],
  bootstrap: [AppComponent]
})
export class AppModule { }
