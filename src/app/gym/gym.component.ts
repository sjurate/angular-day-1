import { Component, OnInit } from '@angular/core';
import { WorkingHours } from '../types/working-hours';

@Component({
  selector: 'app-gym',
  templateUrl: './gym.component.html',
  styleUrls: ['./gym.component.css'],
})
export class GymComponent implements OnInit {
  workingHoursForWeek: WorkingHours[] = [];

  constructor() {}

  ngOnInit() {
    this.workingHoursForWeek = [
      { day: 'Monday', opens: 7, closes: 23 },
      { day: 'Tuesday', opens: 7, closes: 23 },
      { day: 'Wednesday', opens: 7, closes: 23 },
      { day: 'Thursday', opens: 7, closes: 23 },
      { day: 'Friday', opens: 7, closes: 22 },
      { day: 'Saturday', opens: 9, closes: 21 },
      { day: 'Sunday', opens: 10, closes: 20 },
    ];
  }
}
