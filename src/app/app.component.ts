import { RootDataItem } from './datastore/root-data-item.model';
import { RootData } from './datastore/root-data.model';

import { Component, AfterViewInit } from '@angular/core';
declare var anime: any;

@Component({
  selector: 'gm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  year: string;
  rootList: RootDataItem[] = [];

  constructor(public rootData: RootData) {
    this.rootList = rootData.rootList;
    this.year = new Date().getFullYear().toString();
  }

  ngAfterViewInit(): void {
    this.animate();
  }

  private animate() {
    let doSomething = anime({
      targets: '#siteName',
      opacity: 0,
      translateX: -500,
      direction: 'reverse',
      easing: 'easeInQuad',
      elasticity: 900,
      delay: 1000
    });

    doSomething = anime({
      targets: '.nav-link',
      opacity: 0,
      translateY: -50,
      direction: 'reverse',
      delay: function (el, i, l) {
        return 2000 + ((3 - i) * 100);
      },
      duration: 1500
    });

    doSomething = anime({
      targets: '.fixed-bottom',
      opacity: 0,
      translateY: 50,
      direction: 'reverse',
      duration: 2000
    });
  }
}
