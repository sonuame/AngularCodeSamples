import { Component, OnInit, OnChanges, SimpleChanges, ViewChild, ViewChildren, AfterViewInit, QueryList } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {
  public data: String;
  tot_timers = 0;
  public elements: Array<any>;
  constructor() {
    this.elements = [
      {id: 1, checked: true},
      {id: 3, checked: true},
      {id: 6, checked: true},
      {id: 2, checked: true},
      {id: 5, checked: true},
    ];
  }
  @ViewChildren('appTimer') timers: QueryList<TimerComponent>;
  ngAfterViewInit() {
    this.tot_timers = this.timers.length;
    this.elements = this.elements.sort((a: any, b: any): number => {
      return a.id - b.id;
    });
    if (this.tot_timers > 0) {
      const t1: TimerComponent = this.tot_timers[0];
    }
  }

  recieve(e) {
    console.log(e);
  }

}
