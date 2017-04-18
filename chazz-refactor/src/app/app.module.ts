import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { dropdownsInjectables } from './dropdowns/dropdowns.injectables';
import { AppComponent } from './app.component';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { RightNavComponent } from './right-nav/right-nav.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { AnimalDropdownComponent } from './animal-dropdown/animal-dropdown.component';
import { FirmnessDropdownComponent } from './firmness-dropdown/firmness-dropdown.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CheesesComponent } from './cheeses/cheeses.component';
import { PlayerComponent } from './player/player.component';
import { MasterComponent } from './master/master.component';
import { TastedComponent } from './tasted/tasted.component';
import { HomeComponent } from './home/home.component';
import { TastedMainComponent } from './tasted-main/tasted-main.component';


export const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path: 'tasted', component: TastedComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    TitlebarComponent,
    LeftNavComponent,
    RightNavComponent,
    DropdownsComponent,
    AnimalDropdownComponent,
    FirmnessDropdownComponent,
    CheesesComponent,
    PlayerComponent,
    MasterComponent,
    TastedComponent,
    HomeComponent,
    TastedMainComponent
  ],
  imports: [
    BsDropdownModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [dropdownsInjectables],
  bootstrap: [AppComponent]
})
export class AppModule { }
