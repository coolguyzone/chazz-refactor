import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.css']
})
export class TitlebarComponent implements OnInit {

  @ViewChild('puppetContainer', { read: ViewContainerRef }) puppetContainer: ViewContainerRef;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _componentFactoryResolver: ComponentFactoryResolver,
    private viewContainer: ViewContainerRef
  ) { }

  ngOnInit() {
    this.route.data
    .subscribe(data => {
      if (!!data && !!data.puppets && data.puppets.length > 0) {
        data.puppets.map(puppet => {
          const componentFactory = this._componentFactoryResolver.resolveComponentFactory(puppet);
          this.puppetContainer.createComponent(componentFactory);
        });
      }
    });
  }

}
