import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { WorkingHours } from '../types/working-hours';

@Component({
  selector: 'app-open-hours',
  templateUrl: './open-hours.component.html',
  styleUrls: ['./open-hours.component.css'],
})
export class OpenHoursComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() hoursData: WorkingHours[] = [];

  constructor() {
    console.log(this.hoursData);
  }
  ngOnInit(): void {
    console.log('OnInit');
  }
  ngAfterViewInit(): void {
    console.log('AfterViewinit');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('OnChanges');
  }
}
