import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  private value: Number = 0;
  @Output() callback: EventEmitter<any> = new EventEmitter();

  @Input() data: Number;
  @Input()
  set startWith(val: Number) {
    this.value = val;
  }
  get startWith() { return this.value; }

  constructor() { }

  ngOnInit() {
  }

  clickBtn(): void{
    this.callback.emit({data: 'This is a callback event'});
  }

}
