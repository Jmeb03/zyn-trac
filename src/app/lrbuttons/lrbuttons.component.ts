import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lrbuttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lrbuttons.component.html',
  styleUrls: ['./lrbuttons.component.css']
})
export class LrbuttonsComponent {
  lastPressedButton: string = '';

  ngOnInit(): void {
    const storedButton = localStorage.getItem('lastPressedButton');
    if (storedButton) {
      this.lastPressedButton = storedButton;
    }
  }

  buttonClick(buttonName: string): void {
    this.lastPressedButton = buttonName;
    localStorage.setItem('lastPressedButton', buttonName);
  }
}
