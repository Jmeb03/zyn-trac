import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CounterService} from './lrbuttons.service';

@Component({
  selector: 'app-lrbuttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lrbuttons.component.html',
  styleUrls: ['./lrbuttons.component.css']
})
export class LrbuttonsComponent implements OnInit{
  lastPressedButton: string = '';
  buttonCounter: number = 0;


  ngOnInit(): void {
    const storedButton = localStorage.getItem('lastPressedButton');
    const storedCounter = localStorage.getItem('buttonCounter');
    if (storedButton) {
      this.lastPressedButton = storedButton;
    }
    if (storedCounter) {
      this.buttonCounter = parseInt(storedCounter, 10);
    }
  }

  buttonClick(buttonName: string): void {
    if (buttonName !== this.lastPressedButton) {
      this.lastPressedButton = buttonName;
      localStorage.setItem('lastPressedButton', buttonName);

      this.buttonCounter++;
      localStorage.setItem('buttonCounter', this.buttonCounter.toString());
    }
  }

  resetCounter(): void {
    this.buttonCounter = 0;
  }
}
